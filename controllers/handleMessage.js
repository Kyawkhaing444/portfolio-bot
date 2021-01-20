const education = require("../components/education");
const projects = require("../components/projects");
const skills = require("../components/skills");
const workExperience = require("../components/workExperience");
const callSendAPI = require("./callSendAPI");

module.exports = function handleMessage(sender_psid, received_message) {
  let response;
  // Check if the message contains text
  if (received_message.text) {
    if(received_message.text === "Work"){
       response = workExperience();
    }else if(received_message.text === "Projects"){
      response = projects();
    }else if(received_message.text === "Education"){
      response = education();
    }else if(received_message.text === "Skills"){
      response = skills();
    }else{
      response = {
        "text": "Please use the persistent menu and quick reply"
      }
    }
    callSendAPI(sender_psid, response);
  } else if (received_message.attachments) {
    // Gets the URL of the message attachment
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Is this the right picture?",
              subtitle: "Tap a button to answer.",
              image_url: attachment_url,
              buttons: [
                {
                  type: "postback",
                  title: "Yes!",
                  payload: "yes",
                },
                {
                  type: "postback",
                  title: "No!",
                  payload: "no",
                },
              ],
            },
          ],
        },
      },
    };
  }
};
