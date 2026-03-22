const handler = require('./api/generate.js').default || require('./api/generate.js');
async function test() {
  const req = {
    method: 'POST',
    body: {
      name: 'Test', jobTitle: 'Test', phone: 'Test', email: 'Test', city: 'Test', nationality: 'Test', lastJob: 'Test', exp: 'Test', edu: 'Test', eduLevel: 'Test', skills: 'Test', targetJob: 'Test', sector: 'Test', highlight: 'Test'
    }
  };
  const res = {
    setHeader: () => {},
    status: () => res,
    json: (data) => console.log('res.json:', data),
    end: () => console.log('res.end')
  };
  try {
    await handler(req, res);
  } catch(e) {
    console.error('THROWN IN TEST:', e);
  }
}
test();
