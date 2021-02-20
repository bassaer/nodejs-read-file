const http = require('http');
const fs = require('fs');

fs.readFile("data/res.json", 'utf-8', (err, data) => {
    if (err) {
    console.error(err)
    return
  }
  http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'no-cache, max-age=0');
    res.end(data);
  }).listen(3000, () => console.log('start http://localhost:3000'));
});

