const yargs = require('yargs');

// Setup version number
yargs
  .alias('v', 'version')
  .describe('v', 'show version information');

// help text
yargs
  .alias('h', 'help')
  .help('help')
  .showHelpOnFail(false, 'Specify --help for available options');

yargs
  .command(
    'file',
    'file to check for linting',
    {
      name: {
        describe: 'file name like *.component.ts',
        alias: 'n',
        demandOption: true,
      },
    },
  )
  .alias('f', 'file');

module.exports = yargs;
