import chalk from 'chalk';

export default class Logging {
  public static log(args: any) {
    const info = `[${new Date().toLocaleString()}] [LOG]`;
    const message = typeof args === 'string' ? chalk.greenBright(args) : args;

    console.log(chalk.green(info, message));
  }

  public static info(args: any) {
    const info = `[${new Date().toLocaleString()}] [INFO]`;
    const message = typeof args === 'string' ? chalk.blueBright(args) : args;

    console.log(chalk.blue(info, message));
  }

  public static warn(args: any) {
    const warn = `[${new Date().toLocaleString()}] [WARN]`;
    const message = typeof args === 'string' ? chalk.yellowBright(args) : args;

    console.log(chalk.yellow(warn, message));
  }

  public static error(args: any) {
    const error = `[${new Date().toLocaleString()}] [ERROR]`;
    const message = typeof args === 'string' ? chalk.redBright(args) : args;

    console.log(chalk.red(error, message));
  }
}
