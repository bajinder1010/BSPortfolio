import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cImg from "../public/skills/C.svg";
import cppImg from "../public/skills/Cpp.svg";
import pythonImg from "../public/skills/Python.svg"
import nodeImg from "../public/skills/NodeJS.svg"
import reactImg from "../public/skills/React-icon.svg"
import jsImg from "../public/skills/JavaScript.svg"
import netImg from "../public/skills/NET_Core_Logo.svg"
import expressImg from "../public/skills/ExpressJS.webp"
import csharpImg from "../public/skills/Logo_C_sharp.svg"
import javaImg from "../public/skills/Java-Logo.svg"
import flaskImg from "../public/skills/Flask.svg"
import kafkaImg from "../public/skills/Apache_kafka.svg"
import typeScriptImg from "../public/skills/TypeScript.svg"
import htmlImg from "../public/skills/Html.svg"
import cssImg from "../public/skills/Css.svg"
import greenSockImg from "../public/skills/GreenSock.webp"
import sqlImg from "../public/skills/Sql.svg"
import mongoImg from "../public/skills/MongoDB.svg"
import postGresImg from "../public/skills/PostgreSQL.svg"
import gitImg from "../public/skills/Git.svg"
import dockerImg from "../public/skills/Docker_logo.svg"
import k8Img from "../public/skills/Kubernetes.svg"
import azureImg from "../public/skills/Microsoft_Azure.svg"
import awsImg from "../public/skills/Amazon_Web_Services_Logo.svg"
import firebaseImg from "../public/skills/Firebase_Logo.svg"
import nextImg from "../public/skills/Nextjs-logo.svg"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Hbani.com",
    description:
      "I developed this blog application primarily to showcase my daughter's artwork. It features an admin section where I've implemented the Quill WYSIWYG editor for creating and editing blog posts.",
    tags: ["React","Redux","Firestore", "Nodejs", "Firebase"],
    imageUrl: '/hbani.mp4',
    url:'https://www.hbani.com',
  },
  {
    title: "Christmas Baubles",
    description:
      "Developed during the Christmas season of 2022, this project employs JavaScript animations exclusively, rendering visuals entirely through canvas drawings and utilizing some trigonometric formulas.",
    tags: ["Javascript", "Html5","Canvas"],
    imageUrl: '/xmas.mp4',
    url:'https://bajinder1010.github.io/bajanim/',
  },
  {
    title: "Easter Eggs",
    description:
      "Developed this during Easter as a team building exercise, to find the easter eggs as part of a retrospective meeting. It involved sketching egg shapes using Moss's egg technique within the realm of Euclidean geometry.",
    tags: ["Javascript", "Html5","Canvas"],
    imageUrl: '/easterEggs.mp4',
    url:'https://bajinder1010.github.io/bajeeastereggs/',
  },
  {
    title: "Diwali Diyas",
    description:
      "I wanted to create diya (earthen lamp) animations during the Diwali festival for the home screen of one of my projects. Although there are numerous GIFs available, I'm particularly interested in animating them using JavaScript.",
    tags: ["Javascript", "Html5","Canvas"],
    imageUrl: '/diwaliDiyas.mp4',
    url:'https://bajinder1010.github.io/Diwali/',
  },
  {
    title: "Raspberry Pi Radio",
    description:
      "Instead of buying a radio, I repurposed my Raspberry Pi with a TEA5767 module to build one myself.You can see all the details on my blog page by clicking on the heading link. The page will take a little to load as its hosted on free plan :)",
    tags: ["Python", "Raspberry Pi","IoT"],
    imageUrl: '/radio_crop.mp4',
    url:'https://www.hbani.com/blog/juDDfa7mXUfdXOQ3l312',
  },
  {
    title: "Maze Solver",
    description:
      "This web app generates and solves mazes using BFS. Users can draw walls and move the start (green) and end (red) points. While BFS finds the shortest path, it can be slow. I plan to implement A* in the future for improved efficiency.",
    tags: ["Javascript", "Html5","Canvas"],
    imageUrl: '/maze.mp4',
    url:'https://bajinder1010.github.io/BFS_Maze/',
  },
] as const;

export const skillsGroupData = [
  {
    heading: "Backend",
    skillsDetails: [
      {
        name:"C",
        url:cImg
      },
      {
        name:"C++",
        url:cppImg
      }, 
      {
        name:"C#",
        url:csharpImg
      }, 
      {
        name:"Java",
        url:javaImg
      }, 
      {
        name:"Nodejs",
        url:nodeImg
      },
     
      {
        name:".NetCore",
        url:netImg
      }, 
      {
        name:"Kafka",
        url:kafkaImg
      }, 
      {
        name:"Python",
        url:pythonImg
      },
      {
        name:"Flask",
        url:flaskImg
      }, 
      {
        name:"ExpressJs",
        url:expressImg
      },
    ],
    },
  {
    heading: "Frontend",
    skillsDetails: [
      {
        name:"Html",
        url:htmlImg
      },
      {
        name:"Css",
        url:cssImg
      },
      {
        name:"ReactJs",
        url:reactImg
      }, 
      {
        name:"JavaScript",
        url:jsImg
      },
      {
        name:"TypeScript",
        url:typeScriptImg
      },
      {
        name:"Nextjs",
        url:nextImg
      },
      {
        name:"GreenSock",
        url:greenSockImg
      },
    ],
  },
  {
    heading: "Databases",
    skillsDetails: [
      {
        name:"SQL",
        url:sqlImg
      },
      {
        name:"MongoDB",
        url:mongoImg
      },
      {
        name:"PostgreSQL",
        url:postGresImg
      },
      
    ],
  },
  {
    heading: "Devops",
    skillsDetails: [
      {
        name:"Git",
        url:gitImg
      },
      {
        name:"Docker",
        url:dockerImg
      },
      {
        name:"Kubernetes",
        url:k8Img
      },
      {
        name:"Azure",
        url:azureImg
      },
      {
        name:"AWS",
        url:awsImg
      },
      {
        name:"Firebase",
        url:firebaseImg
      },
      
    ],
  },
] as const;