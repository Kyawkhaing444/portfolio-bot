const callSendAPI = require("./callSendAPI");
const fetch = require("node-fetch");
const workExperience = require("../components/workExperience");
const education = require("../components/education");
const projects = require("../components/projects");
const skills = require("../components/skills");
let persistentMenu = require("../components/persistentMenu");

module.exports = function handlePostback(sender_psid, received_postback) {
  // Handles messaging_postbacks events
  let response;

  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === "Get Started") {
    let persistentMenuResponse = persistentMenu();
    return callSendAPI(sender_psid, persistentMenuResponse);
  } else if (payload === "work") {
    response = workExperience();
    callSendAPI(sender_psid, response);
  } else if (payload === "projects") {
    response = projects();
    callSendAPI(sender_psid, response);
  } else if (payload === "skills") {
    response = skills();
    callSendAPI(sender_psid, response);
  } else if (payload === "education") {
    response = education();
    callSendAPI(sender_psid, response);
  }
};
