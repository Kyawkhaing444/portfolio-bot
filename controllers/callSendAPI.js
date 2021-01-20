const fetch = require("node-fetch");
const quickReply = require("../components/quickReply");

module.exports = function callSendAPI(sender_psid, response) {
  const qs =
    "access_token=" + encodeURIComponent(process.env.PAGE_ACCESS_TOKEN);

  if (response.persistent_menu) {
    return fetch(
      "https://graph.facebook.com/v9.0/me/custom_user_settings?" + qs,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(response),
      }
    ).then(() => {
      return quickReply(sender_psid);
    });
  } else {
    let request_body = {
      recipient: {
        id: sender_psid,
      },
      message: response,
    };

    return fetch("https://graph.facebook.com/v9.0/me/messages?" + qs, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request_body),
    }).then(() => {
      return quickReply(sender_psid);
    });
  }
};
