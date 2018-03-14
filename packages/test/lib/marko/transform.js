// 'use strict'; // eslint-disable-line

// const compiler = require('marko/compiler');
// // const marko = require('marko');

// module.exports = {
//   process(src, filename, config, options) {
//     // console.log('WAS RUNNNNNN SRC', src);
//     console.log('WAS RUNNNNNN FLN', filename);
//     // console.log('WAS RUNNNNNN CNF', config);
//     // console.log('WAS RUNNNNNN OPT', options);

//     const compilerOpts = {
//       writeToDisk: false,
//       writeVersionComment: false,
//       preserveWhitespace: true,
//       autoKeyEnabled: false,
//     };

//     // return compiler.compileFile(filename, compilerOpts, (err) => {
//     //   if (err) throw err;
//     // });

//     const result = compiler.compileFile(filename, compilerOpts);

//     // const result = compiler.createInlineCompiler(filename, {});

//     // const result = marko.load(filename);

//     console.log('!!!!!!!!!!! result', result);

//     return result;
//   },
// };

// // const path = require('path');

// // module.exports = {
// //   process(src, filename, config, options) {
// //     return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
// //   },
// // };

// // // // // // // // // // // // // // // // // // // // // // // // // // //

'use strict'; // eslint-disable-line

const compiler = require('marko/compiler');

module.exports = {
  process(src, filename) {
    return compiler.compileFile(filename, {
      writeToDisk: false,
      writeVersionComment: false,
      preserveWhitespace: true,
      autoKeyEnabled: false,
    });
  },
};
