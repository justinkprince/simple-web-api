const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.end('Here is a text response');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
