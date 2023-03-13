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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cloudtel,
  tekion,
  linux,
  kubernetes,
  nginx,
  apache,
  githubactions,
  jenkins,
  bootstrap,
  mysql,
  postgresql,
  sqlite,
  firebase,
  flask,
  fastapi,
  django,
  postman,
  python,
  c,
  cpp,
  bash,
  aws,
  gcp,
  heroku,


} from "../assets";

export const about = "I'm a passionate individual learning and working with new technologies. I love solving real-world problems and learning along the way. I have currently explored the field of Devops, Cloud Computing, Frontend and Backend tools and technologies"

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
    title: "DevOps",
    icon: web,
  },
  {
    title: "Frontend",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "Cloud Computing",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "nginx",
    icon: nginx,
  },
  {
    name: "apache",
    icon: apache,
  },
  {
    name: "githubactions",
    icon: githubactions,
  },
  // {
  //   name: "jenkins",
  //   icon: jenkins,
  // },
  // {
  //   name: "mysql", q
  //   icon: mysql,
  // },
  // {
  //   name: "postgresql",
  //   icon: postgresql,
  // },
  // {
  //   name: "sqlite",
  //   icon: sqlite,
  // },
  // {
  //   name: "firebase",
  //   icon: firebase,
  // },
  {
    name: "flask",
    icon: flask,
  },
  // {
  //   name: "fastapi",
  //   icon: fastapi,
  // },
  // {
  //   name: "django",
  //   icon: django,
  // },
  // {
  //   name: "postman",
  //   icon: postman,
  // },
  // {
  //   name: "python",
  //   icon: python,
  // },
  // {
  //   name: "c",
  //   icon: c,
  // },
  // {
  //   name: "cpp",
  //   icon: cpp,
  // },
  // {
  //   name: "bash",
  //   icon: bash,
  // },
  // {
  //   name: "aws",
  //   icon: aws,
  // },
  // {
  //   name: "gcp",
  //   icon: gcp,
  // },
  // {
  //   name: "heroku",
  //   icon: heroku,
  // },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Tekion",
    icon: tekion,
    iconBg: "#00bfa4",
    date: "Dec 2022 - Jan 2023",
    points: [
      "Built a strong foundation on the fundamentals of HTML, CSS & JavaScript",
      "Improved on efficient methods of developing a web application",
      "Insights on industry Standards for web development"
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "CloudTel Solutions",
    icon: cloudtel,
    iconBg: "#FFF",
    date: "July 2022 - August 2022",
    points: [
      "Worked with AWS Services such as Amazon EC2, S3, VPC, IAM, ECR ...",
      "Interacted with AWS Services using the AWS CLI and the Python SDK (Boto3)",
      "Created shell Scripts to bootstrap a server and then create an AMI",
      "Adopted exclusively to Linux OS (Ubuntu) for day-to-day tasks",
      "Deployed application on containers to production",
      "Configured webservers to serve static files and installed SSL certificates for the domain"
    ],
  }
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };