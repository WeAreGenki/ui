/**
 * Minimal server for local, manual web page testing.
 */

/* eslint-disable strict, no-console *//* tslint:disable no-console */

'use strict';

const portfinder = require('portfinder');
const http = require('http');
const path = require('path');
const nodeStatic = require('node-static');
const chalk = require('chalk');

exports.run = (argv) => {
  const webroot = path.resolve(argv[2]);
  const isSpaMode = argv[3] || true;

  if (!webroot) throw new Error('Path to serve is required');

  portfinder.basePort = Number(process.env.PORT) || 1234;

  const fileServer = new nodeStatic.Server(webroot, { cache: false });

  const server = http.createServer((req, res) => {
    req
      .on('end', () => {
        const cb = (err) => {
          if (err && err.status === 404) {
            res.writeHead(err.status, err.headers);
            res.end('Not Found');
            console.error(chalk.bold.red(`ERROR ${res.statusCode}`), `- ${req.url} -`, chalk.bold.yellow(err.message));
          } else {
            console.log(chalk.green(`OK ${res.statusCode}`), `- ${req.url}`);
          }
        };

        if (isSpaMode && req.url.indexOf('.') === -1) {
          fileServer.serveFile('/index.html', 200, {}, req, res);
        } else {
          fileServer.serve(req, res, cb);
        }
      })
      .resume();
  });

  portfinder
    .getPortPromise()
    .then((port) => {
      server.listen(port, () => {
        console.log(`
┌───────────────────────────────────────────────┐
│ Local server running on`, chalk.bold.blue(`http://localhost:${port}`), `│
└───────────────────────────────────────────────┘\n`);
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
