export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = req.body || {};
  const { cvData, jobDescription, lang } = body;
  const isEn = lang === 'en';

  if (!jobDescription || !cvData) {
    return res.status(400).json({ success: false, error: isEn ? 'Missing data' : 'بيانات ناقصة' });
  }

  const prompt = isEn
    ? `You are an expert CV optimizer for the Saudi job market.

I have an existing CV and a job description. Rewrite the CV to be perfectly tailored for this specific job.

EXISTING CV DATA:
${JSON.stringify(cvData)}

TARGET JOB DESCRIPTION:
${jobDescription}

Instructions:
- Rewrite the professional summary to directly address the job requirements
- Reorder and reword experience bullet points to highlight relevant achievements
- Add any relevant skills from the job description that the candidate likely has
- Keep the same JSON structure
- Make it feel natural, not keyword-stuffed
- Focus on measurable achievements

Return ONLY valid JSON (no markdown, no extra text) in this exact format:
{
  "summary": "Rewritten summary tailored to the job",
  "experience": [{"title": "...", "company": "...", "duration": "...", "description": "..."}],
  "education": {"degree": "...", "institution": "...", "year": "..."},
  "skills": ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6"],
  "languages": ["Arabic - Native", "English - Fluent"],
  "objective": "Tailored career objective for this specific role"
}`
    : `أنت خبير تحسين سير ذاتية للسوق السعودي.

عندي سيرة ذاتية حالية ووصف وظيفي. أعد كتابة السيرة لتكون مطابقة تماماً لهذه الوظيفة.

بيانات السيرة الحالية:
${JSON.stringify(cvData)}

الوصف الوظيفي المستهدف:
${jobDescription}

التعليمات:
- أعد كتابة الملخص المهني ليتوافق مع متطلبات الوظيفة
- رتب وأعد صياغة نقاط الخبرة لإبراز الإنجازات ذات الصلة
- أضف مهارات من الوصف الوظيفي يمتلكها المرشح
- حافظ على نفس هيكل JSON
- اجعلها طبيعية وليست محشوة بالكلمات المفتاحية
- ركز على الإنجازات القابلة للقياس

أرجع JSON فقط بدون أي نص إضافي:
{
  "summary": "ملخص معاد كتابته ومخصص للوظيفة",
  "experience": [{"title": "...", "company": "...", "duration": "...", "description": "..."}],
  "education": {"degree": "...", "institution": "...", "year": "..."},
  "skills": ["مهارة1", "مهارة2", "مهارة3", "مهارة4", "مهارة5", "مهارة6"],
  "languages": ["العربية - اللغة الأم", "الإنجليزية - جيد"],
  "objective": "هدف وظيفي مخصص لهذه الوظيفة"
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
        temperature: 0.6,
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
    return res.status(500).json({ success: false, error: isEn ? 'Failed to optimize CV' : 'فشل في تحسين السيرة الذاتية' });
  }
}
