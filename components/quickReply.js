const fetch = require("node-fetch");

module.exports = quickReply = (InputText) => {
  return {
    text: InputText,
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
};
