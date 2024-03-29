import { Command } from "bihongojs";
import { Inspiring } from "bihongojs";

/**
 * Custom Command
 */

// run this command with: yarn cmd inspire
Command.set("inspire", function () {
  Command.comment(Inspiring.quote());
}).describe("Display an inspiration quote");
