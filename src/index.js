import CLI, { log } from './cli';

const cli = CLI({ args: process.argv });
cli.run((cards) => log(cards));
