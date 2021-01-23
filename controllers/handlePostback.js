const callSendAPI = require("./callSendAPI");
const fetch = require("node-fetch");
const workExperience = require("../components/workExperience");
const education = require("../components/education");
const projects = require("../components/projects");
const skills = require("../components/skills");

module.exports = function handlePostback(sender_psid, received_postback) {
  // Handles messaging_postbacks events
  let response;

  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === "Get Started") {
    let persistentMenuResponse = {
      psid: sender_psid,
      persistent_menu: [
        {
          locale: "default",
          composer_input_disabled: false,
          call_to_actions: [
            {
              type: "postback",
              title: "Work Experience",
              payload: "work",
            },
            {
              type: "postback",
              title: "Projects",
              payload: "projects",
            },
            {
              type: "postback",
              title: "Technical Skills",
              payload: "skills",
            },
            {
              type: "postback",
              title: "Education",
              payload: "education",
            },
            {
              type: "web_url",
              title: "Download Resume",
              url: "http://bit.ly/kkkresume",
              webview_height_ratio: "full",
            },
          ],
        },
      ],
    };
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
