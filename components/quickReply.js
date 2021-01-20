module.exports = quickReply = () => {
  return {
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
  };
};
