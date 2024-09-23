import { FaGoogle, FaLinkedin, FaGithubSquare } from "react-icons/fa";
const images = 'https://images.unsplash.com/photo-1657053460900-3a12f32b592f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww'
import countdownTimer from './assets/countdownTimer.png';
import foodChef from './assets/foodechef.png';
import movieMate from './assets/moviemate.png';
import ecommerce from './assets/ecommerce.png';
import healthservice from './assets/healthservices.png';

// social links home and footer
export const links = [
    { url: 'https://github.com/saravan-patidar', icon: <FaGithubSquare /> },
    { url: 'https://www.linkedin.com/in/saravan-patidar-766307233', icon: <FaLinkedin /> },
    { url: 'mailto:shravanpatidar.48@gmail.com', icon: <FaGoogle /> },

]

// education section data
export const educationData = [

    {
        id: 1,
        cname: 'Rajiv Gandhi Prodyogiki Vishwavidyalaya',
        porfession: 'Bachelor of Technology (IT)',
        year: '2019-2023',
        board: 'Bhopal Madhya Pradesh',
    },
    {
        id: 2,
        cname: 'Bright Arsenal Higher secondary school',
        porfession: 'Higher Secondary school',
        year: '2018-2019',
        board: 'Dewas Madhya Pradesh',
    },
    {
        id: 3,
        cname: 'Bright Arsenal Higher secondary school',
        porfession: 'Secondary school',
        year: '2016-2017',
        board: 'Dewas Madhya Pradesh',
    },

]

// navbar section  url and icons
export const navItems = [{ id: 1, text: 'Home' }, { id: 2, text: 'Skills' }, { id: 3, text: 'Project' }, { id: 4, text: 'Contact Me' }]

// project section data
export const projects = [
    {
        image: foodChef,
        title: 'FoodChef ',
        liveUrl: 'https://main--foodeatenchef.netlify.app/',
        githubUrl: 'https://github.com/saravan-patidar/FoodChef',
        desc: 'Welcome to FoodChef, a React-based food ordering app inspired by platforms like Swiggy. This project showcases my React skills, featuring live API integration, Tailwind CSS styling, React Hooks, and Redux Toolkit for efficient state management. Enjoy optimized performance with lazy loading and custom hooks for maintainability. Built using Parcel for efficient code bundling.',
    },
    {
        image: movieMate,
        title: 'MovieMate ',
        liveUrl: 'https://shravan-moviemate.netlify.app/browse',
        githubUrl: 'https://github.com/saravan-patidar/MovieMate',
        desc: 'MovieMATE is an advanced video streaming platform utilizing React.js, JavaScript, and Tailwind CSS for a responsive UI. It features user authentication via Firebase, personalized recommendations with AI, and data management using Redux Toolkit and TMDb API for an engaging viewing experience. ',
    },
    {
        image: healthservice,
        title: 'Health Services ',
        liveUrl: 'https://saravan-patidar.github.io/health-services/',
        githubUrl: 'https://github.com/saravan-patidar/health-services',
        desc: 'This is a simple React web application for managing a list of healthcare services. Users can add new services, update existing ones, and delete services. The app uses localStorage to persist data across page reloads. ',
    },
    {
        image: ecommerce,
        title: 'E-Commerce Cloth ',
        liveUrl: 'https://saravan-patidar.github.io/E-Commerce/index.html',
        githubUrl: 'https://github.com/saravan-patidar/E-Commerce',
        desc: 'This project is a basic e-commerce website built using HTML and CSS. It showcases a user-friendly interface where users can browse products, add items to a shopping cart, and remove them as needed.',
    },
    {
        image: countdownTimer,
        title: 'CountDown Timer ',
        liveUrl: 'https://saravan-patidar.github.io/TechnoHacks_Edutech/countdown-timer/',
        githubUrl: 'https://github.com/saravan-patidar/TechnoHacks_Edutech/tree/main/countdown-timer',
        desc: 'Countdown Timer and Stopwatch is a web application built using HTML, CSS, and JavaScript. It features a user-friendly interface for tracking time, with real-time updates and intuitive controls for setting timers and measuring intervals. ',
    },
]
