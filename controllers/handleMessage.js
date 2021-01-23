const education = require("../components/education");
const projects = require("../components/projects");
const skills = require("../components/skills");
const workExperience = require("../components/workExperience");
const callSendAPI = require("./callSendAPI");

module.exports = function handleMessage(sender_psid, received_message) {
  let response;
  // Check if the message contains text
  if (received_message === "Work") {
    response = workExperience();
  } else if (received_message === "Projects") {
    response = projects();
  } else if (received_message === "Education") {
    response = education();
  } else if (received_message === "Skills") {
    response = skills();
  } else {
    response = {
      text: "Please use the persistent menu and quick reply",
    };
  }
  console.log(response);
  callSendAPI(sender_psid, response);
};
