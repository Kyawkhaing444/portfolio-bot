module.exports = persistentMenu = () => {
  return {
    psid: sender_psid,
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
};
