import readline from "readline";
import { AppCommand } from "../../AppCommand";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Command Class
 */
export class Command {
  public static customCmd;
  public static customCmdArray = [];
  public static description = [];
  public static usageInfo = [];
  public static _instance = null;

  /**
   * Command Promt Color
   */
  private static red = "\x1b[31m";
  private static green = "\x1b[32m";
  private static yellow = "\x1b[33m";
  private static blue = "\x1b[34m";
  private static white = "\x1b[37m";

  /**
   * Set Custom Commands
   */
  public static set(command, callback) {
    this.customCmd = command;

    this.customCmdArray[this.customCmd] = this.customCmd;

    if (this.customCmdArray[this.customCmd] == process.argv[2]) {
      callback();
    }

    return this;
  }

  /**
   * Describe Commands
   */
  public static describe(des) {
    this.description[this.customCmd] = des;
    return this;
  }
  /**
   * Describe Commands usage
   */
  public static usage(des) {
    this.usageInfo[this.customCmd] = des;
    return this;
  }

  /**
   * Execute predefined command
   */
  public static execute() {
    /**
     * Predefined Command
     */
    AppCommand.execute();
  }

  /**
   * Output Functions
   */
  public static comment(text) {
    console.log(`${this.yellow}${text}\n${this.white}`);
  }

  public static success(text) {
    console.log(`${this.green}${text}\n${this.white}`);
  }

  public static danger(text) {
    console.log(`${this.red}${text}\n${this.white}`);
  }

  public static line(text) {
    console.log(`${this.white}${text}\n${this.white}`);
  }

  public static info(text) {
    console.log(` ${this.blue} ${text}\n${this.white}`);
  }
  /**
   * Get value from command prompt
   */
  public static ask(text, callback) {
    rl.question(`${text}`, callback);
    rl.on("close", function () {
      process.exit(0);
    });
    return this;
  }
}
