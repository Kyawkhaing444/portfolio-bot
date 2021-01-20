module.exports = skills = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "FULL-STACK WEB DEVELOPMENT",
            subtitle:
              "JAVASCRIPT, PYTHON, PHP, HTML, CSS, Reactjs, Express, Nodejs, FLASK, MongoDB, PostgreSQL, BOOTSTRAP, MYSQL, GIT, QA and testing with chai",
          },
          {
            title: "MOBILE DEVELOPMENT",
            subtitle: "DART, FLUTTER, FIREBASE",
          },
          {
            title: "MACHINE LEARNING",
            subtitle: "TensorFlow, KERAS",
          },
        ],
      },
    },
  };
};
