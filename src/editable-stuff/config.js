// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Habip",
  middleName: "Hakan",
  lastName: "Isler",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/hippalus",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/hashirshoaeb",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/hashirshoaeb/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/habiphakanisler/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/hashirshoaeb/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/habiphakan.isler_Photo.JPG"),
  imageSize: 375,
  message:
      "My name is Habip Hakan Isler. I’m a graduate of 2018 from Firat University"
      + " with a degree in Software Engineering. I'm most passionate about giving back to the community, and my goal is to"
      + " pursue this passion within the field of software engineering. In my free time I like working on open source projects.",
  resume: require("../editable-stuff/HabipHakanIsler_CV_v12020.docx"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "hippalus",
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/habiphakan.isler_Photo.JPG"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/habiphakan.isler_Photo.JPG"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    {name: "Java",value: 90},
    {name: "Object Oriented Programming", value: 75},
    {name: "Design Patterns and Design Principles (SOLID, Clean Code, Refactoring)", value: 75},
    {name: "Data Structures and Algorithms", value: 75},
    {name: "Test Driven Development, Pair Programming, Code Review", value: 75},
    {name: "Spring Framework (Boot, Data, Security, Cloud, MVC)", value: 75},
    {name: "JPA, Hibernate, JUnit, Mockito", value: 75},
    {name: "Apache Tech (Zookeeper, Storm, Kafka, Ignite, HBase, Tika, Hadoop)", value: 75},
    {name: "Redis, Docker, Micro Services, Git, Maven", value: 75},
    {name: "Operating Systems: Linux based (Ubuntu, Debian)", value: 75},
    {name: "Software Architecture Design", value: 75},
    {name: "DBMS: Oracle DB, PostgreSQL, Cassandra, Elasticsearch", value: 75},
    {name: "Software configuration", value: 75},
  ],
  softSkills: [
    {name: "Goal-Oriented", value: 80},
    {name: "Collaboration", value: 90},
    {name: "Positivity", value: 75},
    {name: "Adaptability", value: 85},
    {name: "Problem Solving", value: 75},
    {name: "Empathy", value: 90},
    {name: "Organization", value: 70},
    {name: "Creativity", value: 90},
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message: "",
  email: "habiphakanisler@gmail.com",
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {navBar, mainBody, about, repos, skills, leadership, getInTouch};
