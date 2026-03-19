export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, jobTitle, phone, email, city, nationality, lastJob, exp, edu, eduLevel, skills, targetJob, sector, highlight } = req.body;

  const prompt = `أنت خبير كتابة سير ذاتية احترافية للسوق السعودي. 

اكتب سيرة ذاتية احترافية كاملة باللغة العربية للشخص التالي:
- الاسم: ${name}
- المسمى الوظيفي الحالي: ${jobTitle}
- المدينة: ${city}
- الجنسية: ${nationality}
- آخر وظيفة: ${lastJob}
- سنوات الخبرة: ${exp}
- مستوى التعليم: ${eduLevel} في ${edu}
- المهارات: ${skills}
- الوظيفة المستهدفة: ${targetJob}
- القطاع: ${sector}
- إنجازات خاصة: ${highlight || 'غير محدد'}

أرجع JSON فقط بهذا الشكل بدون أي نص إضافي:
{
  "summary": "ملخص مهني قوي من 3-4 جمل",
  "experience": [
    {
      "title": "المسمى الوظيفي",
      "company": "اسم الشركة أو المجال",
      "duration": "المدة",
      "description": "وصف الإنجازات والمهام الرئيسية في 2-3 جمل"
    }
  ],
  "education": {
    "degree": "الدرجة العلمية والتخصص",
    "institution": "المؤسسة التعليمية",
    "year": "سنة التخرج التقريبية"
  },
  "skills": ["مهارة 1", "مهارة 2", "مهارة 3", "مهارة 4", "مهارة 5"],
  "languages": ["العربية - اللغة الأم", "الإنجليزية - جيد"],
  "objective": "هدف وظيفي واضح ومحدد"
}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-70b-versatile',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 1500
      })
    });

    const data = await response.json();
    const content = data.choices[0].message.content;

    const clean = content.replace(/```json|```/g, '').trim();
    const cv = JSON.parse(clean);

    return res.status(200).json({ success: true, cv });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ success: false, error: 'فشل في توليد السيرة الذاتية' });
  }
}
