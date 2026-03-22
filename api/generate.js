export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = req.body || {};
  const { name, jobTitle, phone, email, city, nationality, lastJob, exp, edu, eduLevel, skills, targetJob, sector, highlight, lang } = body;
  const isEn = lang === 'en';

  const prompt = isEn
    ? `You are an expert professional CV writer for the Saudi job market.

Write a complete professional CV in English for:
- Name: ${name || 'Not specified'}
- Current Job Title: ${jobTitle || 'Not specified'}
- City: ${city || 'Not specified'}
- Nationality: ${nationality || 'Not specified'}
- Last Job: ${lastJob || 'Not specified'}
- Years of Experience: ${exp || 'Not specified'}
- Education Level: ${eduLevel || 'Not specified'} in ${edu || 'Not specified'}
- Skills: ${skills || 'Not specified'}
- Target Job: ${targetJob || 'Not specified'}
- Industry: ${sector || 'Not specified'}
- Key Achievement: ${highlight || 'Not specified'}

Return ONLY valid JSON (no markdown, no extra text) in this exact format:
{
  "summary": "Strong professional summary of 3-4 sentences",
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "duration": "Duration",
      "description": "Key achievements and responsibilities in 2-3 sentences"
    }
  ],
  "education": {
    "degree": "Degree and Major",
    "institution": "University/Institution",
    "year": "Graduation year"
  },
  "skills": ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
  "languages": ["Arabic - Native", "English - Fluent"],
  "objective": "Clear career objective"
}`
    : `أنت خبير كتابة سير ذاتية احترافية للسوق السعودي.

اكتب سيرة ذاتية احترافية كاملة باللغة العربية للشخص التالي:
- الاسم: ${name || 'غير محدد'}
- المسمى الوظيفي: ${jobTitle || 'غير محدد'}
- المدينة: ${city || 'غير محدد'}
- الجنسية: ${nationality || 'غير محدد'}
- آخر وظيفة: ${lastJob || 'غير محدد'}
- سنوات الخبرة: ${exp || 'غير محدد'}
- مستوى التعليم: ${eduLevel || 'غير محدد'} في ${edu || 'غير محدد'}
- المهارات: ${skills || 'غير محدد'}
- الوظيفة المستهدفة: ${targetJob || 'غير محدد'}
- القطاع: ${sector || 'غير محدد'}
- إنجازات: ${highlight || 'غير محدد'}

أرجع JSON فقط بدون أي نص إضافي بهذا الشكل:
{
  "summary": "ملخص مهني من 3-4 جمل",
  "experience": [
    {
      "title": "المسمى الوظيفي",
      "company": "اسم الشركة",
      "duration": "المدة",
      "description": "وصف الإنجازات في 2-3 جمل"
    }
  ],
  "education": {
    "degree": "الدرجة العلمية والتخصص",
    "institution": "المؤسسة التعليمية",
    "year": "سنة التخرج"
  },
  "skills": ["مهارة 1", "مهارة 2", "مهارة 3", "مهارة 4", "مهارة 5"],
  "languages": ["العربية - اللغة الأم", "الإنجليزية - جيد"],
  "objective": "هدف وظيفي واضح"
}`;

  try {
    const fetchEngine = typeof fetch !== 'undefined' ? fetch : require('node-fetch');
    const response = await fetchEngine('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY || ''}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Groq Error:', response.status, errText);
      throw new Error(`Groq API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;
    if (!content) throw new Error('No content from Groq');

    const clean = content.replace(/```json|```/g, '').trim();
    const cv = JSON.parse(clean);
    return res.status(200).json({ success: true, cv });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ success: false, error: isEn ? 'Failed to generate CV' : 'فشل في توليد السيرة الذاتية' });
  }
}
