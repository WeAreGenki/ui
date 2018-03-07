/**
 * Minimal server for local, manual web page testing.
 */

/* eslint-disable strict, no-console *//* tslint:disable no-console */

'use strict';

const portfinder = require('portfinder');
const http = require('http');
const path = require('path');
const nodeStatic = require('node-static');

exports.run = (argv) => {
  const webroot = path.resolve(argv[2]);
  portfinder.basePort = Number(process.env.PORT) || 1234;

  const fileServer = new nodeStatic.Server(webroot, { cache: false });

  const server = http.createServer((req, res) => {
    req
      .on('end', () => {
        fileServer.serve(req, res, (err) => {
          if (err) {
            console.error(`Error serving ${req.url} - ${err.message}`);
            res.writeHead(err.status, err.headers);
            res.end();
          }
        });
      })
      .resume();
  });

  portfinder
    .getPortPromise()
    .then((port) => {
      server.listen(port, () => {
        console.debug(`\nTesting server running on http://localhost:${port}`);
      });
    })
    .catch((err) => {
      throw err;
    });

  process.on('SIGINT', () => {
    console.debug('\nServer terminated');
    try {
      server.close(() => {
        process.exit(0);
      });
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  });
};
