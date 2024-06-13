const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  if (path === '/submit' && method === 'GET') {
    const { fname, lname, email, phone } = parsedUrl.query;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Data received successfully!\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Not Found\n');
  }
});

server.listen(3000, () => {
  console.log(`Server listening on port 3000`);
});
