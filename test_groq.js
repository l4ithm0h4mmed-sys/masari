async function test() {
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer undefined`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-70b-versatile',
        messages: [{ role: 'user', content: 'hello' }],
        temperature: 0.7,
        max_tokens: 1500
      })
    });
    
    console.log('Status:', response.status);
    const data = await response.json();
    console.log('Data:', data);
    const content = data.choices?.[0]?.message?.content;
    console.log('Content:', content);
  } catch(e) {
    console.log('Exception:', e.name, e.message);
  }
}
test();
