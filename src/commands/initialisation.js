// import shell from 'shelljs'
import inquirer from 'inquirer'
import configurations from './configurations'

const initialisation = async (args, options, logger, config) => {
  const initConfig = {}

  if (options.yes) {
    initConfig.prop1 = ''
  } else {
    const answer = await inquirer.prompt([
      {
        name: 'prop1',
        message: 'Please specify prop1',
        default: config.get('prop1'),
      },
    ])

    config.set('prop1', answer.prop1)
  }

  await configurations(args, options, logger, config)
}

export default initialisation
