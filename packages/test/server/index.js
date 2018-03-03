/**
 * Minimal server for local, manual web page testing.
 */

'use strict'; // eslint-disable-line

const portfinder = require('portfinder');
const http = require('http');
const nodeStatic = require('node-static');

const webroot = __dirname;
portfinder.basePort = Number(process.env.PORT) || 1234;

const fileServer = new nodeStatic.Server(webroot, { cache: false });

const server = http.createServer((req, res) => {
  req.on('end', () => {
    fileServer.serve(req, res, (err) => {
      if (err) {
        console.error(`Error serving ${req.url} - ${err.message}`);
        res.writeHead(err.status, err.headers);
        res.end();
      }
    });
  }).resume();
});

portfinder
  .getPortPromise()
  .then((port) => {
    server.listen(port, () => {
      console.log(`\nTesting server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    throw err;
  });

process.on('SIGINT', () => {
  console.log('\nServer terminated');
  try {
    server.close(() => {
      process.exit(0);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
