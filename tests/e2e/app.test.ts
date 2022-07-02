import request  from "supertest";
import server from "../../app";

describe("GET /exmaple", function () {
  it("responds with html", function (done) {
    request(server)
      .get("/example")
      .set("Accept", "application/html")
      .expect("Content-Type", /html/)
      .expect(200, done);
  });
});
