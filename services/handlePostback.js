const callSendAPI = require('./callSendAPI');

module.exports = function handlePostback(sender_psid, received_postback) { // Handles messaging_postbacks events
  let response;

  // Get the payload for the postback
  let payload = received_postback.payload;
};
