module.exports = quickReply = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "UNIVERSITY OF COMPUTER STUDIES, MANDALAY",
            image_url:
              "https://www.ucsm.edu.mm/wp-content/uploads/2020/11/cropped-IMG_4089-scaled-1-1536x1517.jpg",
            subtitle: "B.C.Sc (COMPUTER SCIENCE) | 2016 – PRESENT",
            default_action: {
              type: "web_url",
              url: "http://www.ucsm.edu.mm/",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "web_url",
                url: "http://www.ucsm.edu.mm/",
                title: "Read more",
              },
            ],
          },
        ],
      },
    },
};
};
