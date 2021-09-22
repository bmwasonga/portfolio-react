/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Ben Wasonga',
  title: "Hey there, I'm Ben",
  subTitle: emoji(
    'A passionate Frontend Developer 🚀 with experience building applications for the web and mobile phones with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/18Q1z6g832fjmNZ5p0VeNJ9tssRrJGFdN/view?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/bmwasonga',
  linkedin: 'https://www.linkedin.com/in/benwasonga/',
  gmail: 'bmwasonga@gmail.com',
  stackoverflow: 'https://stackoverflow.com/users/14143665/wasonga',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do?',
  subTitle: 'I BUILD STUFF WITH THE FOLLOWING: ',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
    ),
    emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
    emoji(
      '⚡  Integration of payment services such as M-Pesa, paypal and Stripe'
    ),
    emoji(
      '⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean'
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },

    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },

    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'mongo-db',
      fontAwesomeClassname: 'fab fa-envira',
    },

    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'CodeAcademy',
      logo: require('./assets/images/code.png').default,
      subHeader: 'Front-End Engineer Careep path',
      duration: 'August 2020 - December 2020',
      desc: 'Learning to build a frontend app with React.',
      descBullets: [
        'Learning Javascript',
        'Learning HTML',
        'Learning CSS',
        'Learning React',
        'Learning Typescript',
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Frontend Developer',
      company: 'Ficlin',
      companylogo: require('./assets/images/facebookLogo.png').default,
      date: 'May 2021 – August 2021',
      desc: 'Startup Idea',
      descBullets: [
        'Building and implementing Ideas on the Nextjs application',
        'Implementing wireframes into responsive web-pages',
        'testing functionality of the web-app',
        'Appropriately styling tthe web-app',
      ],
    },
    {
      role: 'Front-End Developer and contributor',
      company: 'RDK',
      companylogo: require('./assets/images/reactdevske.svg').default,
      date: 'May 2021 – present',
      desc: 'Contributor,volunteer and Mentor at React Developers Kenya.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: ' Projects',
  subtitle: 'I have and I am still building the following',
  projects: [
    {
      image: require('./assets/images/movie-app.png').default,
      projectName: 'Movie World',
      projectDesc:
        'A project that utilises the movieDB api  to update on movies',
      footerLink: [
        {
          name: 'Visit Website',
          url: 'https://mystifying-movieapp-20.netlify.app/',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require('./assets/images/socks.png').default,
      projectName: 'Socks World',
      projectDesc:
        'An E-commerce site built with react and MongoDB. It utilises Stripe as a payment method',
      footerLink: [
        {
          name: 'Visit Website',
          url: 'https://socks-globe.herokuapp.com/',
        },
      ],
    },
    {
      image: require('./assets/images/disney.png').default,
      projectName: 'Disney plus clone',
      projectDesc: 'This is a working clone of disney plus',
      footerLink: [
        {
          name: 'view  the code',
          url: 'https://github.com/bmwasonga/disney-plus/',
        },
      ],
    },
    {
      image: require('./assets/images/netflix.png').default,
      projectName: 'Netflix clone',
      projectDesc: 'This is a working clone of disney plus',
      footerLink: [
        {
          name: 'view  the code',
          url: 'https://github.com/bmwasonga/netflix-clone/',
        },
      ],
    },
    {
      image: require('./assets/images/to-do.png').default,
      projectName: 'to-do-list',
      projectDesc: 'This is a simple to do list application',
      footerLink: [
        {
          name: 'Visit the website',
          url: 'https://wasongatodo.netlify.app/',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url: 'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url: 'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url: 'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url: '',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: '/',
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'I learn new things everyday. I will try and share the blogs as they come',

  blogs: [
    {
      url: 'https://wasonga.hashnode.dev/',
      title: 'My hashnode blog',
      description:
        'click me to see some of the awesome things that I have written on HashNode.',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: '',
      event_url: '',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [''],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+254701598106',
  email_address: 'bmwasonga@gmail.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'ItsWasonga',
  display: true, // Set true to display this section, defaults to false
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
  twitterDetails,
};
