const http = require("http");
const port = 3000;

// Some mock data that could have just as well been pulled from a database or
// somewhere else altogether.
const users = require('./data/users');

/** ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇ */
const server = http.createServer((req, res) => {
  // res.setHeader('Content-type', 'application/json');

  const data = { users };

  res.end(JSON.stringify(data));
});
/** ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆ */

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

/**
 * Notes
 * - Send JSON data.
 * - Use set header for content-type.
 */
