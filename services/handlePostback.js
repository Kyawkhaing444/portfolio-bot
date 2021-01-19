const callSendAPI = require('./callSendAPI');

module.exports = function handlePostback(sender_psid, received_postback) { // Handles messaging_postbacks events
  let response;

  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === "Get Started") {
    response = [
      { text: "Hello! Welcome to Kyaw Khaing's world!" },
      { text: "You can ask whatever you want about Kyaw Khaing" },
    ];
  }
  // Send the message to acknowledge the postback
  callSendAPI(sender_psid, response);
};
