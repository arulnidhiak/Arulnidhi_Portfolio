import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandHtml5 } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Arulnidhi",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/arulnidhiak/Arulnidhi_Portfolio",
  },
  {
    id: 2,
    name: "Handwritten Characters Classification",
    description:
      "Designed and implemented a deep progressive learning model to handle noisy data and improve classification accuracy. Applied advanced image preprocessing techniques for pixel level reconstruction to denoise handwritten character. Technical Skills: Python with Pandas, matplotlib, Numpy.",
    image: projectImage2,
    githubLink: "https://github.com/arulnidhiak/handwriting-recognition",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/arulnidhiak/to-do-list",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/arulnidhiak?tab=repositories",
  },
  {
    id: 5,
    name: "Music Recommendation system",
    description:
      "An approach that helps the user to automatically play songs based on the emotions of the user. It recognizes the facial emotions of the user and plays the songs according to their emotion. Primarily used Python with Entity Framework, experience with HTML/CSS.",
    image: projectImage5,
    githubLink: "https://github.com/arulnidhiak/music-recommendation-system_ML",
  },
  {
    id: 6,
    name: "Twitter Sentiment Analysis",
    description:
      "Designed and implemented a sentiment analysis pipeline using Python to preprocess, analyze, and visualize tweet data. Developed a Twitter Sentiment Analysis system to analyze and categorize the sentiment of tweets in real-time, providing valuable insights into public opinion.",
    image: projectImage6,
    githubLink: "https://github.com/arulnidhiak/MIT",
  },
];

export const BIO = [
  "Arulnidhi studied B.TECH computer science and Engineering specialization with Internet Of Things at SRM Institute of Science & Technology chennai graduated in 2024.",
  "With a stellar CGPA of 9.46,excels in various domains, including Artificial Intelligence, Machine Learning, Object-Oriented Programming, DBMS, and IoT Architecture and Protocols.",
  "experience in developing innovative projects, such as Twitter Sentiment Analysis, emotional detection systems, and IoT-based smart plant monitoring. Internship at MIT Square in Cyprus provided hands-on experience in machine learning and natural language processing. Also an accomplished photographer and an active participant in various college organizations.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "6 months",
  },
  {
    icon: <TbBrandHtml5 className="text-4xl text-white bg-orange-600 lg:text-5xl" />,
    name: "HTML5",
    experience: "2+ years",
  },
  {
    icon: <SiJavascript className="text-4xl text-yellow-300 lg:text-5xl" />,
    name: "JavaScript",
    experience: "1.5+ years",
  },
  {
    icon: <DiPython className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Python",
    experience: "2+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Data Analyst",
    company: "The Sparks Foundation",
    duration: "May 2023 - June 2023",
    description:
      "During this internship, I gained hands-on experience in machine learning and data science. I worked on various projects that involved data preprocessing, model building, and evaluation. I developed a strong understanding of key concepts such as regression, classification, clustering, and feature selection. Additionally, I enhanced my skills in using Python and libraries like Pandas, NumPy, Scikit-learn, and Matplotlib for data analysis and visualization. This experience has significantly strengthened my ability to apply machine learning techniques to real-world problems.",
  },
  {
    title: "Research Intern ",
    company: "MIT Square,Cyprus,Europe",
    duration: "July 2022 - October 2022",
    description:
      "Developed a sophisticated sentiment analysis tool using Python, machine learning, and NLP techniques. This tool efficiently categorized and analyzed vast amounts of tweet data, providing actionable insights into public sentiment. Enhanced the model’s accuracy by incorporating advanced NLP methods such as tokenization, lemmatization, and vectorization, which improved text preprocessing and sentiment classification.Utilized Python libraries like Matplotlib and Seaborn to perform comprehensive data analysis and create visualizations that conveyed key findings. These visual insights supported strategic decision-making.",
  },
  {
    title: "Photographer",
    company: "Camogenics",
    duration: "August 2020 - June 2024",
    description:
      "As the primary photographer for Camogenics, I captured the essence of college life through photography at various campus events, including cultural festivals, sports competitions, academic lectures, and social gatherings.Conducted numerous workshops for students passionate about photography, covering topics such as composition, lighting, and post-processing. These workshops helped budding photographers enhance their skills and explore different photography styles.Played a key role in organizing and executing photography-related events within the club, ensuring a creative and educational experience for participants. Mentored new members and guided them in capturing high-quality images.",
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech Computer Science & Engineering (Internet of Things)",
    institution: "SRM Institute of Science & Technology",
    duration: "September 2020 - June 2024",
    description:
      "Specialized in Internet Of Things and Computer Science Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with high CGPA 9.46.",
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    institution: "C.P.Vidya Mandir Matriculation Hr.Sec.School",
    duration: "June 2019 - March 2020",
    description:
      "Completed my higher secondary education at C.P. Vidya Mandir Matriculation Hr. Sec. School, where I developed a strong foundation in science, mathematics. My academic experience here was marked by active participation in various school activities and a consistent focus on academic excellence..69.33%",
  },
  {
    degree: "Secondary School Certificate (10th)",
    institution: "C.P.Vidya Mandir Matriculation Hr.Sec.School",
    duration: "June 2017 - March 2018",
    description:
      "Completed my secondary School education at C.P. Vidya Mandir Matriculation Hr. Sec. School, where I developed a strong foundation in science, mathematics. My academic experience here was marked by active participation in various school activities and a consistent focus on academic excellence..87.6%",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
