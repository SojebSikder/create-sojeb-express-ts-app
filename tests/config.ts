import { test } from "uvu";
import assert from "uvu/assert";

import { config } from "../config/app";

test("port number", () => {
  assert.is(Number(config.port), 3000);
});

test.run();
