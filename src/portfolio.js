/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import {Icons} from 'fontisto';

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Adhiraj Bhagawati",
  title: "Hello! I'm Adhiraj!",
  subTitle: emoji(
    "An aspiring game designer & entrepreneur"
  ),
  resumeLink:
    "https://drive.google.com/file/d/10rWwIvfDSF8pgLvpkJv6YPN2loWhxCN8/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ReanSchwarzer1",
  linkedin: "https://www.linkedin.com/in/adhirajb/",
  gmail: "adhirajquantum1@gmail.com",
  facebook: "https://www.facebook.com/adhiraj.bhagawati",
  medium: "https://adhirajquantum1.medium.com/",
  instagram: "https://www.instagram.com/_reanschwarzer_/",
  itch: "https://reanschwarzer.itch.io/",
  steam: "https://steamcommunity.com/id/reansama/",
  artstation: "https://www.artstation.com/rean_sama",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "GAME DESIGNER & LEVEL DESIGNER THAT LOVES JRPGs A LITTLE TOO MUCH :)",
  skills: [
    emoji(
      "🎮 Designing interactive worlds in games"
    ),
    emoji("🕹🖥 Bridging the gap between traditional and interactive media using AR/VR/XR"),
    emoji("📲 Exploring the differences between traditional Game UX and XR"),
    emoji(
      "⚡ Dabbling in Data Science to bring new life into XR research"),
    emoji("📈 Striving to become a world-class entrepreneur and bring some change to the world")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "unreal engine 4",
      fontAwesomeClassname: "fi fi-unreal-engine"
    },
    {
      skillName: "itch.io",
      fontAwesomeClassname: "fab fa-itch-io" 
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fi fi-github"   
    },
    {
      skillName: "playstation",
      fontAwesomeClassname: "fi fi-playstation" 
    },
    {
      skillName: "xbox",
      fontAwesomeClassname: "fi fi-xbox" 
    },
    {
      skillName: "steam",
      fontAwesomeClassname: "fi fi-steam" 
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python" 
    },
    {
      skillName: "visual studio",
      fontAwesomeClassname: "fi fi-visual-studio"
    },
    {
      skillName: "adobe illustrator",
      fontAwesomeClassname: "fi fi-adobe"
    },  
    {
      skillName: "behance",
      fontAwesomeClassname: "fi fi-behance" 
    },
    {
      skillName: "trello",
      fontAwesomeClassname: "fi fi-trello" 
    },
    {
      skillName: "stack overflow",
      fontAwesomeClassname: "fi fi-stack-overflow" 
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rochester Institute of Technology, Rochester, NY, U.S.A",
      logo: require("./assets/images/rit.png"),
      subHeader: "Master of Science (MS) in Game Design and Development",
      duration: "August 2022 - August 2024",
    },
    {
      schoolName: "University of California - Davis, U.S.A",
      logo: require("./assets/images/ucdavis.png"),
      subHeader: "Exchange Semester in Computer Science & Industrial Design",
      duration: "Sept 2021 - Dec 2021",
    },
    {
      schoolName: "Asia University, Taiwan",
      logo: require("./assets/images/asia.png"),
      subHeader: "Winter School in Artificial Intelligence",
      duration: "Jan 2021 - Feb 2021",
    },
    {
      schoolName: "Xamk South-Eastern Finland University of Applied Sciences, Finland",
      logo: require("./assets/images/xamk.png"),
      subHeader: "Open Studies in Introduction to Video Games Creation",
      duration: "May 2020 - Dec 2020",
    },
    {
      schoolName: "SRM Institute of Science & Technology, India",
      logo: require("./assets/images/srmlogo.png"),
      subHeader: "Bachelor of Technology in Computer Science with a Minor in Design & Innovation",
      duration: "Jun 2018 - May 2022",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Game Design & Development", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AR / VR / XR",
      progressPercentage: "60%"
    },
    {
      Stack: "UX / UI",
      progressPercentage: "40%"
    }
    ,
    {
      Stack: "Data Science & Reinforcement Learning",
      progressPercentage: "30%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AR & Unity Developer",
      company: "Alter Learning, Davis, CA",
      companylogo: require("./assets/images/alter.png"),
      date: "July 2021 – Jan 2022",
      descBullets: [
        "Worked on an Augmented Reality and Virtual Reality application that supports professional learning.",
        "Worked on other game design projects that educate students."],
    },
    {
      role: "Game Development Intern",
      company: "Street Lamp Games",
      companylogo: require("./assets/images/street.png"),
      date: "Sept 2019 – Nov 2019",
      descBullets: [
        "Developed and maintained design level documentation, including mechanics, guidelines, and mission outlines for a hyper-casual game project titled 'See-Saw Roads'",
        "Worked on the level design, movement controllers, and base game mechanics."],
    },
    {
      role: "Board Member & Student Researcher",
      company: "Next Tech Lab - SRMIST",
      companylogo: require("./assets/images/nextech.png"),
      date: "Sept 2018 – May 2022",
      descBullets: [
        "Led a team of student researchers in the field of AR/VR, Game Design and Human-Computer Interaction, as part of one of the first student-run research labs in India.",
        "Researched Game Design, Human-Computer Interaction and Machine Learning within Pausch Lab."],
    },
    {
      role: "R & D Intern",
      company: "Society for Space Education Research and Development (SSERD)",
      companylogo: require("./assets/images/sserd.png"),
      date: "Oct 2020– Dec 2020",
      descBullets: [
        "Researched and worked under the mentorship of Prof. Sundar M N (DST-INSPIRE Fellow) & Pavan Kumar (PhD Student at IMT School for Advanced Studies Lucca, Italy) on - Analysis, computation, modelling & research on ghost mass values of three systems, Cygnus X-1, LMC X-3, and GROJ1655-40 with Unity 3D."],
    },
    {
      role: "Machine Learning Intern/Trainee",
      company: "National Instruments",
      companylogo: require("./assets/images/logo2.png"),
      date: "May 2020– Jul 2020",
      descBullets: [
        "Research study on applications of AI, ML, DL and their implementations on NI IIOT hardware devices.",
        "Industrial training on IIOT regarding its uses, applications and research."],
    },
    {
      role: "Student Ambassador",
      company: "Unity Technologies",
      companylogo: require("./assets/images/unity.png"),
      date: "Aug 2018– Jun 2021",
      descBullets: [
        "Responsible for spreading the Unity brand around campus to students interested in Game Development and Design.",
        "I received training, access to industry events like GDC, and a global community of other ambassadors to further our mission to democratize game development and XR."],
    },
    {
      role: "Microsoft Student Partner",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoft.png"),
      date: "Jan 2020– May 2022",
      descBullets: [
        "Set up a strong foundation of systematic operation within SRM ACM SIGCHI Student Chapter and established corporate partnerships with Unity & Microsoft.",
        "Conducted over 20+ workshops, webinars, and tech talks with the student communities focused around game development, AI/ML etc."],
    },
    {
      role: "Student Delegate",
      company: "Harvard Project for Asian and International Relations - HPAIR'21",
      companylogo: require("./assets/images/hpair.png"),
      date: "Aug 2021",
      descBullets: [
        "HPAIR conferences features world-class speakers and guests to foster mentorship, networking, and guidance opportunities for delegates.",
        "Selected as one of the 300 delegates selected from 60+countries."],
    },
    {
      role: "Global Intern",
      company: "AIESEC In Egypt & UNESCO",
      companylogo: require("./assets/images/aiesec.png"),
      date: "Nov 2019- Jan 2020",
      descBullets: [
        "Worked with OBS Software Solutions & other Egyptian Tech Startups for the betterment of the economy of the IT Industry of Egypt and contribute cross-cultural beliefs, ideas, and work culture to the company.",],
    },
    {
      role: "Vice Chairperson",
      company: "SRMIST ACM SIGCHI Student Chapter",
      companylogo: require("./assets/images/srmacmsigchi.png"),
      date: "Jul 2020- Jul 2021",
      descBullets: [
        "Conducted workshops, talks, study groups, meetings for fostering the Game Dev and Extended Reality community under ACM SIGCHI.",
        "Was responsible for overseeing the activities and progress of the various committee and chapter programs."],
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Portfolio",
  subtitle: "SOME OF MY PROJECTS TILL NOW :)",
  projects: [
    {
      image: require("./assets/images/Matrex.png"),
      projectName: "MaTrEx - Maintenance and Training with Extended Reality",
      projectDesc: "Virtual Reality Research Project",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reanadhiraj.vercel.app/projects/matrex.html"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/antivirl.png"),
      projectName: "Anti-viRL",
      projectDesc: "Augmented Reality & Reinforced Learning Hackathon Project",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reanadhiraj.vercel.app/projects/antivirl.html"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ue4frpg.png"),
      projectName: "First-Person RPG Demo",
      projectDesc: "Game Design / RPG Design / Level Design in Unreal Engine 4",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reanschwarzer.itch.io/ue4-first-person-rpg-cel-shaded"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/10.png"),
      projectName: "SurviVE",
      projectDesc: "Atmospheric Horror Game built in Unreal Engine 4",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reanadhiraj.vercel.app/projects/survive.html"
        }
      ]
    },
    {
      image: require("./assets/images/4.png"),
      projectName: "AR-Map",
      projectDesc: "Augmented Reality real-time map application with depth, elevation and 3D objects",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reanadhiraj.vercel.app/projects/armap.html"
        }
      ]
    },
    {
      image: require("./assets/images/textbased.png"),
      projectName: "Text-based Adventure Game (Xamk module)",
      projectDesc: "Game built for the XAMK game dev module in Unity 3D",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/ReanSchwarzer1/Text-based-adventure-game-Xamk-Module-2"
        }
      ]
    },
    {
      image: require("./assets/images/stellarbrk.png"),
      projectName: "Stellar Break",
      projectDesc: "Game built a for game jam using Unity 3D",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://prabby-patty.itch.io/stellar-break"
        }
      ]
    },
    {
      image: require("./assets/images/des157a.png"),
      projectName: "UC Davis DES 157A (Interactive Media Portfolio)",
      projectDesc: "Final portfolio/project for DES 157A course",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reanschwarzer1.github.io/des157a/"
        }
      ]
    },
    {
      image: require("./assets/images/nn1.png"),
      projectName: "Self-Driving Car",
      projectDesc: "Self-Driving Car using Neural Networks in Unity 3D & UE4",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reanadhiraj.vercel.app/projects/selfdriving.html"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle:
    "SOME COOL ACHIEVEMENTS :)",

  achievementsCards: [
    {
      title: "India HCI 2019 Late-Breaking Work Research",
      subtitle:
        "Poster selected for presentation at India's largest human-computer interaction conference. Researched on the advantages and limitations of skill training in Virtual Reality.",
      image: require("./assets/images/Indiahci.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 🤙"),
  subtitle: "+91 6000587986 | +1 (585) 290-2850",
  email_address: "adhirajquantum1@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
