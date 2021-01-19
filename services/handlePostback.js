const callSendAPI = require("./callSendAPI");
const fetch = require("node-fetch");

module.exports = function handlePostback(sender_psid, received_postback) {
  // Handles messaging_postbacks events
  let response;

  // Get the payload for the postback
  let payload = received_postback.payload;

  // Set the response based on the postback payload
  if (payload === "Get Started") {
    let PersistentResponse = {
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

    let QuickReplyResponse = {
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
    const qs =
      "access_token=" + encodeURIComponent(process.env.PAGE_ACCESS_TOKEN);
    return fetch(
      "https://graph.facebook.com/v9.0/me/custom_user_settings?" + qs,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(PersistentResponse),
      }
    ).then(() => {
      return callSendAPI(sender_psid, QuickReplyResponse);
    });
  } else if (payload === "work") {
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Software Engineering Intern at BridgeBurma",
              image_url:
                "https://bb-core-graphics.s3.us-east-2.amazonaws.com/landingGraphic.png",
              subtitle: "MERN stack - MongoDB, Expressjs, Reactjs, Nodejs",
              default_action: {
                type: "web_url",
                url: "http://www.bridgeburma.com/",
                webview_height_ratio: "tall",
              },
              buttons: [
                {
                  type: "web_url",
                  url: "http://www.bridgeburma.com/",
                  title: "Read more",
                },
              ],
            },
            {
              title: "CEO and Tech Lead at Ka Wi",
              image_url:
                "https://kawi-articlebook.vercel.app/images/home_page.svg",
              subtitle: "Tech stack - Nextjs, MongoDB, Expressjs, Reactjs, Nodejs",
              default_action: {
                type: "web_url",
                url: "https://kawi-articlebook.vercel.app/",
                webview_height_ratio: "tall",
              },
              buttons: [
                {
                  type: "web_url",
                  url: "https://kawi-articlebook.vercel.app/",
                  title: "Read more",
                },
              ],
            },
            {
              title: "Mobile Developer at CoronaHelp MM",
              image_url:
                "https://scontent.fmdl1-1.fna.fbcdn.net/v/t1.0-9/91285382_102818568040601_2699477930123198464_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=aEs7UDWaDS8AX-Wd_pP&_nc_ht=scontent.fmdl1-1.fna&oh=36db81f9342a23df388403d2e0ec5dfd&oe=602CDC22",
              subtitle: "Tech stack - Flutter",
              default_action: {
                type: "web_url",
                url: "https://coronahelpmm.org/",
                webview_height_ratio: "tall",
              },
              buttons: [
                {
                  type: "web_url",
                  url: "https://coronahelpmm.org/",
                  title: "Read more",
                },
              ],
            },
            {
              title: "President at UCSMSU",
              image_url:
                "https://scontent.fmdl1-1.fna.fbcdn.net/v/t1.0-9/13886400_317523311919392_4460607480172276412_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=qCMvKMPTmbIAX_f8yBE&_nc_ht=scontent.fmdl1-1.fna&oh=90ef15fdcbc1401dc4806c481b85d542&oe=602BD719",
              subtitle: "Leadership and Management",
              default_action: {
                type: "web_url",
                url: "https://web.facebook.com/UCSMSU/",
                webview_height_ratio: "tall",
              },
              buttons: [
                {
                  type: "web_url",
                  url: "https://web.facebook.com/UCSMSU/",
                  title: "Read more",
                },
              ],
            },
          ],
        },
      },
    };
    callSendAPI(sender_psid, response);
  }else if(payload === "projects"){
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Software Engineering Intern at BridgeBurma",
              image_url:
                "https://bb-core-graphics.s3.us-east-2.amazonaws.com/landingGraphic.png",
              subtitle: "MERN stack - MongoDB, Expressjs, Reactjs, Nodejs",
              default_action: {
                type: "web_url",
                url: "http://www.bridgeburma.com/",
                webview_height_ratio: "tall",
              },
              buttons: [
                {
                  type: "web_url",
                  url: "http://www.bridgeburma.com/",
                  title: "Read more",
                },
              ],
            },
          ],
        },
      },
    };
    callSendAPI(sender_psid, response);
  }else if(payload === "skills"){
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Software Engineering Intern at BridgeBurma",
              image_url:
                "https://bb-core-graphics.s3.us-east-2.amazonaws.com/landingGraphic.png",
              subtitle: "MERN stack - MongoDB, Expressjs, Reactjs, Nodejs",
              default_action: {
                type: "web_url",
                url: "http://www.bridgeburma.com/",
                webview_height_ratio: "tall",
              },
              buttons: [
                {
                  type: "web_url",
                  url: "http://www.bridgeburma.com/",
                  title: "Read more",
                },
              ],
            },
          ],
        },
      },
    };
    callSendAPI(sender_psid, response);
  }else if(payload === "education"){
    response = {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: [
            {
              title: "Software Engineering Intern at BridgeBurma",
              image_url:
                "https://bb-core-graphics.s3.us-east-2.amazonaws.com/landingGraphic.png",
              subtitle: "MERN stack - MongoDB, Expressjs, Reactjs, Nodejs",
              default_action: {
                type: "web_url",
                url: "http://www.bridgeburma.com/",
                webview_height_ratio: "tall",
              },
              buttons: [
                {
                  type: "web_url",
                  url: "http://www.bridgeburma.com/",
                  title: "Read more",
                },
              ],
            },
          ],
        },
      },
    };
    callSendAPI(sender_psid, response);
  }
};
