const { default: axios } = require("axios");
const fetch = require("node-fetch");

module.exports = async function callSendAPI(sender_psid, response) {
  const qs =
    "access_token=" + encodeURIComponent(process.env.PAGE_ACCESS_TOKEN);
  const URL = "https://graph.facebook.com/v9.0/me/messages?" + qs;
  const persistentURL =
    "https://graph.facebook.com/v9.0/me/custom_user_settings?" + qs;

  if (response.persistent_menu !== undefined) {
    const responseQuickReply = await axios.post(
      URL,
      JSON.stringify({
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
      })
    );
    const { data } = responseQuickReply;
    if (data.error) {
      throw new Error(
        `Send API Request Failed ## Code (${data.error.code}) ##`
      );
    }
    const responsePersistent = await axios.post(
      persistentURL,
      JSON.stringify(response)
    );
    const { dataper } = responsePersistent;
    if (dataper.error) {
      throw new Error(
        `Send API Request Failed ## Code (${dataper.error.code}) ##`
      );
    }
    return;
  } else {
    let request_body = {
      recipient: {
        id: sender_psid,
      },
      message: response,
    };

    try {
      const responseNormalText = await axios.post(
        URL,
        JSON.stringify("11")
      );
      console.log("data", responseNormalText);
      const { data } = responseNormalText;
      console.log("data", data.error);
    } catch (e) {
      throw new Error(`Send API Request Failed ## Code (${e}) ##`);
    }
    if (data.error) {
      throw new Error(
        `Send API Request Failed ## Code (${data.error.code}) ##`
      );
    }

    const responseQuickReply = await axios.post(
      URL,
      JSON.stringify({
        recipient: {
          id: sender_psid,
        },
        message: {
          text: `What else do you want to ask?`,
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
      })
    );

    const { dataQuick } = responseQuickReply;

    if (dataQuick.error) {
      throw new Error(
        `Send API Request Failed ## Code (${dataQuick.error.code}) ##`
      );
    }
    return;
  }
};
