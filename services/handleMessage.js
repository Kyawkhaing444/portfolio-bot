const callSendAPI = require("./callSendAPI");

module.exports = function handleMessage(sender_psid, received_message) {
  // Handles messages events
  let response;

  // Check if the message contains text
  if (received_message.text) {
    // Create the payload for a basic text message
    // if (received_message.text === "Get Started") {
    response = {
      text: `Hello ${sender_psid}! Welcome to Kyaw Khaing's world! You can ask whatever you want about Kyaw Khaing`,
    };
    // }
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

  // Sends the response message
  callSendAPI(sender_psid, response);
};
