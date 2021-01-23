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
          entry: [
            {
              messaging: [
                {
                  message: "Test-Message",
                  sender: {
                    id: process.env.PSID,
                  },
                },
              ],
            },
          ],
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          done();
        });
    });

    it("Check the Get Started Button", function (done) {
      chai
        .request(server)
        .post("/webhook")
        .send({
          object: "page",
          entry: [
            {
              messaging: [
                {
                  postback: "Get Started",
                  sender: {
                    id: process.env.PSID,
                  },
                },
              ],
            },
          ],
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          done();
        });
    });

    it("Check the work quick reply button", function (done) {
      chai
        .request(server)
        .post("/webhook")
        .send({
          object: "page",
          entry: [
            {
              messaging: [
                {
                  message: "Work",
                  sender: {
                    id: process.env.PSID,
                  },
                },
              ],
            },
          ],
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          done();
        });
    });

    it("Check the projects quick reply button", function (done) {
      chai
        .request(server)
        .post("/webhook")
        .send({
          object: "page",
          entry: [
            {
              messaging: [
                {
                  message: "Projects",
                  sender: {
                    id: process.env.PSID,
                  },
                },
              ],
            },
          ],
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          done();
        });
    });
    it("Check the skills quick reply button", function (done) {
      chai
        .request(server)
        .post("/webhook")
        .send({
          object: "page",
          entry: [
            {
              messaging: [
                {
                  message: "Skills",
                  sender: {
                    id: process.env.PSID,
                  },
                },
              ],
            },
          ],
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          done();
        });
    });

    it("Check the education quick reply button", function (done) {
      chai
        .request(server)
        .post("/webhook")
        .send({
          object: "page",
          entry: [
            {
              messaging: [
                {
                  message: "Education",
                  sender: {
                    id: process.env.PSID,
                  },
                },
              ],
            },
          ],
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          done();
        });
    });

    it("Check the persistent menu work button", function (done) {
      chai
        .request(server)
        .post("/webhook")
        .send({
          object: "page",
          entry: [
            {
              messaging: [
                {
                  message: "work",
                  sender: {
                    id: process.env.PSID,
                  },
                },
              ],
            },
          ],
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          done();
        });
    });

    it("Check the persistent menu projects button", function (done) {
      chai
        .request(server)
        .post("/webhook")
        .send({
          object: "page",
          entry: [
            {
              messaging: [
                {
                  message: "projects",
                  sender: {
                    id: process.env.PSID,
                  },
                },
              ],
            },
          ],
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          done();
        });
    });

    it("Check the persistent menu skills button", function (done) {
      chai
        .request(server)
        .post("/webhook")
        .send({
          object: "page",
          entry: [
            {
              messaging: [
                {
                  message: "skills",
                  sender: {
                    id: process.env.PSID,
                  },
                },
              ],
            },
          ],
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          done();
        });
    });

    it("Check the persistent menu education button", function (done) {
      chai
        .request(server)
        .post("/webhook")
        .send({
          object: "page",
          entry: [
            {
              messaging: [
                {
                  message: "education",
                  sender: {
                    id: process.env.PSID,
                  },
                },
              ],
            },
          ],
        })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          done();
        });
    });
  });
});
