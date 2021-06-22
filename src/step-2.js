const http = require("http");
const port = 3000;

// Some mock data that could have just as well been pulled from a database or
// somewhere else altogether.
const users = require('./data/users');

/** ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇ */
const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');

  // Let's see what properties exist on the request object.
  // https://nodejs.org/api/http.html#http_class_http_clientrequest
  const data = Object.keys(req);
  res.end(JSON.stringify(data));

  // const data = {
  //   url: req.url,
  //   method: req.method,
  //   // headers: req.headers,
  // };
  // res.end(JSON.stringify(data));

  // if (req.url === '/users/') {
  //   res.end(JSON.stringify(users));
  // } else {
  //   res.statusCode = 404;
  //   res.statusMessage = "Not found";
  //   res.end(JSON.stringify({
  //     error: "The requested resource could not be found."
  //   }));
  // }
});
/** ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆ */

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

/**
 * Notes
 * - Describe request object.
 * - Show useful request object properties.
 * - Use URL as conditional expression.
 * - Set status code and message.
 */
