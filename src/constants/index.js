import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ga,
  indeed,
  amd,
  dxc,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Technical Analyst",
    icon: mobile,
  },
  {
    title: "Network Support Specialist",
    icon: backend,
  },
  {
    title: "Integration Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Analyst (Integrations Delivery)",
    company_name: "Indeed",
    icon: indeed,
    iconBg: "#383E56",
    date: "October 2023 - Current",
    points: [
      "Troubleshooting, supporting, validating, and deploying all integrations, running queries to generate reports.",
      "Supporting four different products, setting up new integrations(via XML or API) for new partners from start to end, and also supporting existing integrations.Utilizing internal testing tools, communicating with ATS partners and internal teams for a seamless integration or addressing any arising issues, via Salesforce and Jira tickets.",
      "Worked on an internal testing tool called 'Source-Matching-Tool' that performs queries by the company domain name and generates a .CSV file when the user runs the Python code. (Collaborated with 3 other team members)",
    ],
  },
  {
    title: "System Administrator",
    company_name: "AMD(Austin Campus)",
    icon: amd,
    iconBg: "#E6DEDD",
    date: "October 2022 - October 2023",
    points: [
      "Provided support for end-users, including software and hardware troubleshoot, installation, and maintenance.",
      "Maintained and administer network systems and servers, including Print Servers, virtualization environments, and Remote Desktop Services.",
      "Monitored network performance and troubleshoot issues using the 'Wireshark' analyzer to capture packages, and then report them to Network Engineers.",
      "Managed and maintained inventory of IT equipment and supplies.",
      "Communicated with end-users and other IT team members effectively using company ticketing software to record, track and document problem solving process.",
    ],
  },
  {
    title: "Tier 1 Technical Support(Apprenticeship)",
    company_name: "DXC Technology",
    icon: dxc,
    iconBg: "#383E56",
    date: "May 2022 - September 2022",
    points: [
      "Coordinated resolution efforts with additional departments while monitoring and appraising clients",
      "Improved department processes and technologies through the investigation and identification of the root cause of technical problems",
      "I have troubleshot network service issues via phone, trouble ticket, email and client portals by providing expertise on intricate issues, including wide area (WAN), local area network (LAN), fiber and Voice technologies",
      "Supported efforts to enhance the client experience through process reviews, analysis and recommendations to leadership",
      "Performed additional duties related to the position as assigned",
    ],
  },
  {
    title: "Software Engineering Immersive",
    company_name: "General Assembly(SWA Bootcamp)",
    icon: ga,
    iconBg: "#E6DEDD",
    date: "October 2021 - March 2022",
    points: [
      "Successfully completed 500+ hours of expert-led applied computer science fundamentals using the industry's most in demand technologies. Learned Front-end and Back-end languages including HTML, CSS, JavaScript, React.JS, NodeJS, Express, Python and Django and SQL database, Java and API technologies(Testing, integration, etc.)",
      "Developed over 15 projects, including a game called “CARD OF WAR” using HTML, CSS, JavaScript",
      "LavenWoods Alchemy (Developed within a group of 4 people) - Node.Js, Express, MangoDB and Mongoose. It’s also a full CRUD project with a RESTful layout.",
      "SportForLife-React.JS, bootstrap, API technology, Express, Heroku for deployment.",
      "RightAway - Python, Django and SQL database. (Full stack web application).",
      "Keeper App - HTML, CSS, JavaScript, React.Js and MORE..",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/koray7",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/koray7",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/koray7",
  },
];

export { services, technologies, experiences, testimonials, projects };
