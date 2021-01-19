const callSendAPI = require("./callSendAPI");

module.exports = function handleMessage(sender_psid, received_message) {

  // Check if the message contains text
  if (received_message.text) {
    let IntroTextresponse = {
      text: `Hello! Welcome to Kyaw Khaing's world! You can ask whatever you want about Kyaw Khaing`,
    };

    let PersistentResponse = {
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

    let QuickReplyResponse = {
      text: "",
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

    callSendAPI(sender_psid, IntroTextresponse).then(() => {
      return callSendAPI(sender_psid, PersistentResponse).then(() => {
        return callSendAPI(sender_psid, QuickReplyResponse);
      });
    });
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
};
