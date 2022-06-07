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
    Command.set("ask", function () {
      Command.ask(function (rl) {
        rl.question("What is your name ", function (name) {
          Command.success(`Hello ${name}`);
          rl.question("what is your age ", function (age) {
            Command.success(`${name} You are ${age} years old`);
            rl.close();
          });
        });
      });
    })
      .describe("Test command")
      .usage("test");

    /**
     * list
     */
    Command.set("list", function () {
      const cmd = Command.customCmdArray;
      const desc = Command.description;
      const usage = Command.usageInfo;
      Command.comment("Available commands");

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
