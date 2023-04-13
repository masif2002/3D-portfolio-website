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
  votify,
  buyNsell,
  admindashboard,
  hackerrank,
  awsccp,
  gcpdg,
  pythoncert,
  awsball,
  az900,
  microsoft

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
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "kubernetes",
  //   icon: kubernetes,
  // },
  // {
  //   name: "bootstrap",
  //   icon: bootstrap,
  // },
  {
    name: "nginx",
    icon: nginx,
  },
  // {
  //   name: "apache",
  //   icon: apache,
  // },
  // {
  //   name: "githubactions",
  //   icon: githubactions,
  // },
  // {
    //   name: "jenkins",
    //   icon: jenkins,
    // },
  // {
  //   name: "mysql",
  //   icon: mysql,
  // },
  // {
    //   name: "sqlite",
  //   icon: sqlite,
  // },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "flask",
    icon: flask,
  },
  // {
  //   name: "fastapi",
  //   icon: fastapi,
  // },
  {
    name: "django",
    icon: django,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  // {
    //   name: "postman",
    //   icon: postman,
    // },
  // {
  //   name: "c",
  //   icon: c,
  // },
  // {
  //   name: "cpp",
  //   icon: cpp,
  // },
  {
    name: "bash",
    icon: bash,
  },
  {
    name: "aws",
    icon: awsball,
  },
  {
    name: "gcp",
    icon: gcp,
  },
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

const certifications = [
  {
    name:
      "AWS Certified Cloud Practitioner",
    image: awsccp,
    icon: aws,
    url: 'https://www.credly.com/badges/57074209-7830-4367-9921-62928eb57aeb/public_url'
  },
  {
    name:
      "Google Cloud Digital Leader",
    image: gcpdg,
    icon: gcp,
    url: 'https://www.credential.net/b6adac8a-184c-4743-88ca-c5537628fcec?key=005f755bbbbabc1448a3463fd43634cc20af978e8e53952d2f17cf1ba9237d47&record_view=true'
  },
  {
    name:
    "Microsoft Azure Fundamentals",
    image: az900,
    icon: microsoft,
    url: 'https://www.credly.com/badges/ad668692-9764-4853-903d-f046266c1c15/public_url'
  },
  // {
  //   name:
  //     "Python Basics",
  //   image: pythoncert,
  //   icon: hackerrank,
  //   url: 'https://www.hackerrank.com/certificates/635cc0313ed6'
  // },
];

const projects = [
  {
    name: "Buy N Sell",
    description:
      "An e-commerce website that allows users to buy and sell used products. This application was hosted on AWS with the help of containers ",
    tags: [
      {
        name: "devops",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: buyNsell,
    source_code_link: "https://github.com/masif2002/buyNsell-django-app",
  },
  {
    name: "Admin Dashboard",
    description:
      "A dashboard application for an organization that allows to view the list of employees and their details",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: admindashboard,
    source_code_link: "https://github.com/masif2002/admin-dashboard",
  },
  {
    name: "Votify",
    description:
      "A simple social media application that allows users to vote for photos posted by other users on the platform",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "heroku",
        color: "pink-text-gradient",
      },
    ],
    image: votify,
    source_code_link: "https://github.com/masif2002/fastapi",  
  },
];

export { services, technologies, experiences, certifications, projects };