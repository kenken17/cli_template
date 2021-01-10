#!/usr/bin/node

import prog from 'caporal'
import Configstore from 'configstore'
import cli from '../package.json'
import initialisation from './commands/initialisation'
import configurations from './commands/configurations'

const config = new Configstore(cli.name)
const TITLE = 'cli template'

const actionCurry = (fn) => {
  return (args, options, logger) => {
    fn(args, options, logger, config)
  }
}

prog
  .version(cli.version)
  .help(TITLE)

  .command('init', 'Initialise configurations')
  .option('-y, --yes', 'Set all default settings')
  .action(actionCurry(initialisation))

  .command('config', 'List all the configurations')
  .actino(actionCurry(configurations))

prog.parse(process.argv)
