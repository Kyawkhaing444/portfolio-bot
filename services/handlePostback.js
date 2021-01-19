const callSendAPI = require("./callSendAPI");

module.exports = function handlePostback(sender_psid, received_postback) {
  // Handles messaging_postbacks events
  let response;

  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === "Get Started") {
    response = {
      text: `Hello! Welcome to Kyaw Khaing's world! You can ask whatever you want about Kyaw Khaing`,
    };
    let PersistentResponse = {
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

    let QuickReplyResponse = {
      text: "",
      quick_replies: [
        {
          content_type: "text",
          title: "Work",
          payload: "work",
        },
        {
          content_type: "text",
          title: "Projects",
          payload: "projects",
        },
        {
          content_type: "text",
          title: "Skills",
          payload: "skills",
        },
        {
          content_type: "text",
          title: "Education",
          payload: "Education",
        },
      ],
    };
    callSendAPI(sender_psid, PersistentResponse).then(() => {
      return callSendAPI(sender_psid, response).then(() => {
        return callSendAPI(sender_psid, QuickReplyResponse);
      });
    });
  } else if (payload === "work") {
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Software Engineering Intern at BridgeBurma",
              image_url:
                "https://bb-core-graphics.s3.us-east-2.amazonaws.com/landingGraphic.png",
              subtitle: "MERN stack - MongoDB, Expressjs, Reactjs, Nodejs",
              default_action: {
                type: "web_url",
                url: "http://www.bridgeburma.com/",
                webview_height_ratio: "tall",
              },
              buttons: [
                {
                  type: "web_url",
                  url: "http://www.bridgeburma.com/",
                  title: "Read more",
                },
              ],
            },
          ],
        },
      },
    };
    callSendAPI(sender_psid, response);
  }
};
