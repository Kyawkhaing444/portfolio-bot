const fetch = require("node-fetch");

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
      return fetch("https://graph.facebook.com/v9.0/me/messages?" + qs, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipient: {
            id: sender_psid,
          },
          message: {
            text: `Hello! Welcome to Kyaw Khaing's world! You can ask whatever you want about Kyaw Khaing`,
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
          },
        }),
      });
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
      return fetch("https://graph.facebook.com/v9.0/me/messages?" + qs, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipient: {
            id: sender_psid,
          },
          message: {
            text: `Hello! Welcome to Kyaw Khaing's world! You can ask whatever you want about Kyaw Khaing`,
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
          },
        }),
      });
    });
  }
};
