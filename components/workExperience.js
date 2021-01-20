module.exports = workExperience = () => {
  return {
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
              "https://scontent.fmdl1-2.fna.fbcdn.net/v/t1.0-9/103448906_107874197636680_1905209692539182222_o.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=kY3Jm6cNpE4AX__Xr8J&_nc_ht=scontent.fmdl1-2.fna&oh=ffabfccf8a886e889feb5c00579e54f4&oe=602BEBDB",
            subtitle:
              "Tech stack - Nextjs, MongoDB, Expressjs, Reactjs, Nodejs",
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
};
