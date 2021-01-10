import chalk from 'chalk'

const configurations = async (args, options, logger, config) => {
  logger.info(chalk.yellow('Current Configarations:'))

  logger.info('Prop1', chalk.green(config.get('prop1')))
}

export default configurations
