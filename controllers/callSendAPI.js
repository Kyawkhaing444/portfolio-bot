const fetch = require("node-fetch");
const quickReply = require("../components/quickReply");

module.exports = function callSendAPI(sender_psid, response) {
  // Sends response messages via the Send API
  // Construct the message body
  let request_body = {
    recipient: {
      id: sender_psid,
    },
    message: response,
  };

  const qs =
    "access_token=" + encodeURIComponent(process.env.PAGE_ACCESS_TOKEN);
  return fetch("https://graph.facebook.com/v9.0/me/messages?" + qs, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request_body),
  }).then(() => {
    return callSendAPI(sender_psid, quickReply);
  });
};
