import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { SiNextdotjs } from "react-icons/si";

import carhubImg from "@/public/carhub.png";
import realtorImg from "@/public/realtor.png";
import ecommerceImg from "@/public/ecommerce.png"; 
import dhaweeyeImg from "@/public/dhaweeye.png";
import netImg from "@/public/NET.png";
import moodImg from "@/public/muud.png";
import sawImg from "@/public/saw.png";


// Navigation links
export const LINKS = [
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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/sumayo-s-40306b216/",
  github: "https://github.com/Sumasugaalpub",
  resume: "/resume.pdf",
  source_code: "https://github.com/Sumasugaalpub",
  email: "bcs62368@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Data Quality Analyst Intern",
    description:
      "Verified data accuracy and consistency through checks and cross-referencing, cleaned and organized the data, and generated clear, high-quality reports with valuable insights.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "Remote Software Developer",
    description:
      "Built web apps with Next.js, Sanity, Stripe, and headless CMS. Collaborated with teams to deliver custom solutions and ensure seamless integration.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Freelance UI/UX Designer & Web Developer",
    description:
      "UI/UX and Graphic Designer for Blue Like, Caawiye, Bulsho Travel Agency, and YouthLink Organization. Developed web apps and contributed to hotspot marketing.",
    icon: React.createElement(FaReact),
    date: "2021 - 2025",
  },
  {
    title: "Volunteer Project Manager",
    description:
      "Led the AICS FSL and WASH project, overseeing staff, budgets, and reporting. Trained teams, contributed to proposals, and coordinated efforts with stakeholders.",
    icon: React.createElement(SiNextdotjs),
    date: "2023 - 2024",
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Proxima WebApp",
    description:
      "a web app for seamless event management, featuring event creation, ticketing, and real-time updates.",
    tags: ["Reactjs", "Stripe", "nextjs14",  "Clerk"],
    imageUrl:moodImg ,
    projectUrl: "https://proxima-event.vercel",
  },
  {
    title: "Realtor",
    description:
      "Buy and rent homes for everyone. I was the front-end developer. It has features like filtering, sorting, and pagination.",
    tags: ["React", "Chakra UI", "Next.js", "Framer Motion", "React Icons"],
    imageUrl: realtorImg,
    projectUrl: "https://real-estate-app-react.vercel.app/",
  },
  {
    title: "ECommerce Store",
    description:
      "A NextJS-based eCommerce store that allows users to order different products. It supports real-time payments using Stripe.",
    tags: ["React", "Next.js", "Sanity", "React Router", "Stripe"],
    imageUrl: ecommerceImg,
    projectUrl: "https://ecommerce-app-next.vercel.app/",
  },
  {
    title: "Fableon App",
    description:
      "A web app built using Next.js, inspired by Disney's app. I was the front-end developer. It features dynamic content, interactive UI, and smooth navigation.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Headless UI"],
    imageUrl: carhubImg,
    projectUrl: "https://github.com/Sumasugaalpub/disney-clone-web",
  },
 
  {
    title: "Modern Netflix Clone using React JS",
    description:
      "A React JS-based app that mimics Netflix, offering seamless video streaming with dynamic content and a smooth user interface.",
    tags: ["React", "Stripe", "nodejs", "Clerk"],
    imageUrl: netImg,
    projectUrl: "https://github.com/Sumasugaalpub/CLONE2023",
  },
  {
    title: "Youthlink",
    description:
      "YouthLink Somalia is a non-profit NGO working in South and Central Somalia to support vulnerable communities through programs in Livelihoods, Health, WASH, and Education.",
    tags: ["WordPress", "Elementor"],
    imageUrl: sawImg,
    projectUrl: "https://youthlin/",
  },
  {
    title: "Dhaweeye Companion App",
    description:
      "A React Native-based app that streamlines transportation services and navigation using Google Maps.",
    tags: ["React Native", "Stripe", "Google Maps", "Zustand", "Clerk"],
    imageUrl: dhaweeyeImg,
    projectUrl: "https://github.com/Sumasugaalpub/Dhaweeye-Companion-App",
  },

] as const;

// Data for skills
export const SKILLS_DATA = [
  "HTML",
"CSS",
"JavaScript",
"TypeScript",
"React.js",
"Next.js",
"Node.js",
"Laravel (PHP)",
"Django",
"MySQL",
"PostgreSQL",
"MongoDB",
"Firebase",
"Prisma",
"AWS",
"Google Cloud",
"Tailwind CSS",
"Shadcn UI",
"Three.js",
"Framer Motion",
"Redux",
"REST API / GraphQL Development",
"Git & Version Control",
"Figma",
"Adobe Photoshop",
"Adobe Illustrator",
"SQL",
"Excel",
"Google Sheets",
"Power BI",
"Tableau"
] as const;

// Owner name
export const OWNER_NAME = "Sumaya sugaal";
