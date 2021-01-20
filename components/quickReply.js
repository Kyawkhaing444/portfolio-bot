const fetch = require('node-fetch');

module.exports = quickReply = () => {
  return fetch("https://graph.facebook.com/v9.0/me/messages?" + qs, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
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
    }),
  });
};
