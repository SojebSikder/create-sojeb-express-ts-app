import { Command } from "./core";

/**
 * App console command
 *
 * Reserved for app
 */
export class AppCommand {
  /**
   * execute command
   */
  public static execute() {
    /**
     * Predefined Command
     */
    Command.set("test", function () {
      Command.ask("What is your name? ", function (value) {
        Command.success(`Hello ${value}`);
        Command.ask("What is your name? ", function (value2) {
          Command.success(`Hello ${value2}`);
          // exit the console
          process.exit();
        });
      });
    })
      .describe("Test command")
      .usage("test");

    Command.set("--version", function () {
      Command.comment(`Spress Version 0.0.1`);
    }).describe("Displays Spress version");

    Command.set("-v", function () {
      Command.comment(`Spress 0.0.1`);
    }).describe("Displays Spress version");

    /**
     * list
     */
    Command.set("list", function () {
      const cmd = Command.customCmdArray;

      let i = 0;
      for (const key in cmd) {
        i++;
        if (key in Command.description && key in Command.usage) {
          console.log(
            `${i}) ${key} ---------- ${Command.description[key]} ------ ${Command.usage[key]}\n`
          );
        } else if (key in Command.description) {
          console.log(`${i}) ${key} ---------- ${Command.description[key]}\n`);
        } else if (key in Command.usage) {
          console.log(`${i}) ${key} ------ ${Command.usage[key]} \n`);
        } else {
          console.log(`${i}) ${key}\n`);
        }
      }
    })
      .describe("Displays command list")
      .usage("list");

    /**
     * Display Help
     */
    if (process.argv[2]) {
      if (process.argv[2] == "help") {
        if (process.argv[3]) {
          Command.comment("Description:");
          console.log(`${Command.description[process.argv[3]]}\n`);
          Command.comment("Usage:");
          if (process.argv[3] in Command.usage) {
            console.log(`${Command.usage[process.argv[3]]}\n`);
          } else {
            console.log(`${process.argv[3]}\n`);
          }
        } else {
          Command.comment("Description:");
          console.log(`Diplays help for a command\n`);
          Command.comment("Usage:");
          console.log(`help [tropic]\n`);
        }
      }
    }
  }
}
