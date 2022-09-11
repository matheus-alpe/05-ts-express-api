import chalk from 'chalk';

export default class Logging {
  public static log(args: any) {
    this.log(args);
  }

  public static info(args: any) {
    const info = `[${this.getLocaleDate()}] [INFO]`;
    const message = typeof args === 'string' ? chalk.blueBright(args) : args;

    console.log(chalk.blue(info, message));
  }

  public static warn(args: any) {
    const warn = `[${this.getLocaleDate()}] [WARN]`;
    const message = typeof args === 'string' ? chalk.yellowBright(args) : args;

    console.log(chalk.yellow(warn, message));
  }

  public static error(args: any) {
    const error = `[${this.getLocaleDate()}] [ERROR]`;
    const message = typeof args === 'string' ? chalk.redBright(args) : args;

    console.log(chalk.red(error, message));
  }

  private static getLocaleDate() {
    return new Date().toLocaleString();
  }
}
