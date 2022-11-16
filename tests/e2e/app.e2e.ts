import { Bihongo } from "bihongojs";
import request from "supertest";
import { boot } from "../../app/app";
import { routes } from "../../routes/web";

const app = Bihongo.app({
  boot: boot,
  routes: routes,
});

describe("GET /exmaple", function () {
  it("responds with html", function (done) {
    request(app)
      .get("/example")
      .set("Accept", "application/html")
      .expect("Content-Type", /html/)
      .expect(200, done);
  });
});
