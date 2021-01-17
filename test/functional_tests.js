var chaiHttp = require("chai-http");
var chai = require("chai");
var assert = chai.assert;
var server = require("../index");

chai.use(chaiHttp);

describe("Functional Tests", function () {
  describe("Routing Tests", function () {
    it("Check your webhook verification ", function (done) {
      chai
        .request(server)
        .get(
          "/webhook?hub.verify_token=kkk-trying-the-best&hub.challenge=CHALLENGE_ACCEPTED&hub.mode=subscribe"
        )
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, "CHALLENGE_ACCEPTED");
          done();
        });
    });

    it("Check the post request to /webhook ", function (done) {
      chai
        .request(server)
        .post("/webhook")
        .send({
          object: "page",
          entry: [{ messaging: [{ message: "TEST_MESSAGE" }] }],
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, "EVENT_RECEIVED");
          done();
        });
    });
  });
});
