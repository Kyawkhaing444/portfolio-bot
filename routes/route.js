const express = require('express');
const controller = require("../controllers/controller");

let router = express.Router();

//init all web routes
let routes = (app) => {
    router.get("/webhook", controller.getWebhook);
    router.post("/webhook", controller.postWebhook);
    return app.use("/", router);
};

module.exports = routes;