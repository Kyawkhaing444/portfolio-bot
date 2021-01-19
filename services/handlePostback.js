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
  } else if (payload === "work") {
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Software Engineering Intern at BridgeBurma",
              image_url: "https://bb-core-graphics.s3.us-east-2.amazonaws.com/landingGraphic.png",
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
  }
  // Send the message to acknowledge the postback
  callSendAPI(sender_psid, response);
};
