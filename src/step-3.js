const http = require("http");
const port = 3000;

// Some mock data that could have just as well been pulled from a database or
// somewhere else altogether.
const users = require('./data/users');

/** ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇ */
const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');

  const {
    href,
    origin,
    host,
    hostname,
    port,
    pathname,
    search,
    searchParams,
  } = new URL(req.url, `http://${req.headers.host}/`);

  res.end(JSON.stringify({
    href,
    origin,
    host,
    hostname,
    port,
    pathname,
    search,
  }));

  // if (pathname === '/users/') {
  //   res.end(JSON.stringify(users));
  // } else if (pathname === '/ping/') {
  //   res.end(JSON.stringify({ ping: 'pong' }));
  // } else {
  //   res.statusCode = 404;
  //   res.statusMessage = "Not found";
  //   res.end(JSON.stringify({
  //     error: "The requested resource could not be found."
  //   }));
  // }

  // if (pathname === '/users/') {
  //   const minAge = (searchParams.has('minAge')) ? +searchParams.get('minAge') : -Infinity;
  //   const filteredUsers = users.filter(({ age }) => age > minAge);

  //   res.end(JSON.stringify(filteredUsers));
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
 * - Show URL object and URL parsing.
 * - Using pathname for routing.
 * - Using QSParams.
 */
