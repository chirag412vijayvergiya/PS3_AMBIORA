import image from "/src/assets/image.png";
import html from "/src/assets/html_css.png";
import node from "/src/assets/node.jpg";
import ui from "/src/assets/ui-ux.jpg";
import py from "/src/assets/py.jpeg";
import react from "/src/assets/react.png";
export const courses = [
  {
    id: 1,
    title: "Complete JavaScript Course 2023",
    instructor: "John Smith",
    thumbnail: image,
    shortDescription:
      "Master JavaScript with the most comprehensive course available.",
    description:
      "This complete JavaScript course takes you from beginner to advanced. You'll learn modern JavaScript from the beginning, then move on to advanced topics like OOP, asynchronous JavaScript, and working with APIs. By the end, you'll be able to build real-world applications and solve coding challenges with confidence.",
    rating: 4.8,
    reviewCount: 4752,
    price: 89.99,
    duration: "30 hours",
    level: "All Levels",
    lastUpdated: "June 2023",
    content: [
      {
        section: "Getting Started",
        lectures: [
          { title: "Introduction to JavaScript", duration: "15:30" },
          {
            title: "Setting Up Your Development Environment",
            duration: "20:45",
          },
          {
            title: "JavaScript Basics: Variables and Data Types",
            duration: "35:20",
          },
        ],
      },
      {
        section: "JavaScript Fundamentals",
        lectures: [
          { title: "Functions and Scope", duration: "45:10" },
          { title: "Arrays and Objects", duration: "50:30" },
          { title: "Control Flow: Conditionals and Loops", duration: "40:15" },
          { title: "Error Handling with Try/Catch", duration: "25:40" },
        ],
      },
      {
        section: "Advanced JavaScript",
        lectures: [
          {
            title: "Object-Oriented Programming in JavaScript",
            duration: "55:20",
          },
          { title: "Asynchronous JavaScript: Promises", duration: "48:15" },
          { title: "Working with APIs and Fetch", duration: "52:30" },
          { title: "ES6+ Features and Modern JavaScript", duration: "60:00" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "React - The Complete Guide",
    instructor: "Sarah Johnson",
    thumbnail: react,
    shortDescription:
      "Learn React from scratch and build powerful web applications.",
    description:
      "Dive into React, the most popular JavaScript library for building user interfaces. This course covers everything from React basics to advanced concepts like Redux, React Router, and Next.js. You'll build multiple projects including a full-stack application with authentication and database integration.",
    rating: 4.9,
    reviewCount: 8521,
    price: 94.99,
    duration: "40 hours",
    level: "Intermediate",
    lastUpdated: "August 2023",
    content: [
      {
        section: "React Basics",
        lectures: [
          { title: "Introduction to React", duration: "20:15" },
          { title: "Creating Your First React App", duration: "30:45" },
          { title: "Components and Props", duration: "45:10" },
        ],
      },
      {
        section: "State Management",
        lectures: [
          { title: "useState and useEffect Hooks", duration: "55:30" },
          { title: "Context API for State Management", duration: "40:20" },
          { title: "Introduction to Redux", duration: "60:15" },
        ],
      },
      {
        section: "Advanced React",
        lectures: [
          { title: "Performance Optimization", duration: "50:10" },
          { title: "React Router for Navigation", duration: "35:45" },
          { title: "Building a Full-Stack Application", duration: "90:00" },
          { title: "Deployment and Best Practices", duration: "40:30" },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Python for Data Science and Machine Learning",
    instructor: "Michael Chen",
    thumbnail: py,
    shortDescription:
      "Learn Python and master data science and machine learning techniques.",
    description:
      "This comprehensive course teaches you Python programming from the ground up, with a focus on data science and machine learning applications. You'll learn libraries like NumPy, Pandas, Matplotlib, and Scikit-Learn while building real-world projects like predictive models and data visualizations.",
    rating: 4.7,
    reviewCount: 6234,
    price: 99.99,
    duration: "45 hours",
    level: "Intermediate to Advanced",
    lastUpdated: "July 2023",
    content: [
      {
        section: "Python Fundamentals",
        lectures: [
          { title: "Introduction to Python", duration: "25:30" },
          { title: "Data Structures in Python", duration: "40:15" },
          { title: "Functions and Modules", duration: "35:45" },
        ],
      },
      {
        section: "Data Analysis with Python",
        lectures: [
          { title: "NumPy for Numerical Computing", duration: "50:20" },
          { title: "Pandas for Data Analysis", duration: "65:10" },
          {
            title: "Data Visualization with Matplotlib and Seaborn",
            duration: "55:30",
          },
        ],
      },
      {
        section: "Machine Learning",
        lectures: [
          { title: "Introduction to Machine Learning", duration: "40:15" },
          { title: "Supervised Learning Algorithms", duration: "70:30" },
          { title: "Unsupervised Learning", duration: "60:45" },
          { title: "Building a Recommendation System", duration: "80:00" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Web Design: HTML, CSS, and JavaScript Masterclass",
    instructor: "Emily Rodriguez",
    thumbnail: html,
    shortDescription:
      "Become a full-stack web developer with this comprehensive course.",
    description:
      "Learn everything you need to become a professional web developer. This course covers HTML5, CSS3, and JavaScript in depth, teaching you how to build responsive, accessible, and beautiful websites from scratch. You'll complete multiple projects including a portfolio website and e-commerce store.",
    rating: 4.6,
    reviewCount: 3845,
    price: 84.99,
    duration: "35 hours",
    level: "Beginner to Intermediate",
    lastUpdated: "September 2023",
    content: [
      {
        section: "HTML Fundamentals",
        lectures: [
          { title: "Introduction to HTML", duration: "30:15" },
          { title: "HTML Structure and Elements", duration: "45:30" },
          { title: "Forms and Input Elements", duration: "40:20" },
        ],
      },
      {
        section: "CSS Styling",
        lectures: [
          { title: "CSS Basics and Selectors", duration: "50:10" },
          { title: "Layout with Flexbox and Grid", duration: "65:45" },
          { title: "Responsive Design and Media Queries", duration: "55:20" },
          { title: "CSS Animations and Transitions", duration: "40:30" },
        ],
      },
      {
        section: "JavaScript for Web Development",
        lectures: [
          { title: "DOM Manipulation", duration: "60:15" },
          { title: "Event Handling", duration: "45:30" },
          { title: "Building Interactive Components", duration: "70:00" },
          { title: "Final Project: E-commerce Website", duration: "90:45" },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    instructor: "Alex Turner",
    thumbnail: ui,
    shortDescription:
      "Master the principles of UI/UX design and create stunning user experiences.",
    description:
      "Learn the fundamentals of UI/UX design and create beautiful, user-friendly interfaces. This course covers design theory, user research, wireframing, prototyping, and usability testing. You'll use industry-standard tools like Figma and Adobe XD to create a professional design portfolio.",
    rating: 4.8,
    reviewCount: 2156,
    price: 79.99,
    duration: "25 hours",
    level: "All Levels",
    lastUpdated: "October 2023",
    content: [
      {
        section: "Design Fundamentals",
        lectures: [
          { title: "Introduction to UI/UX Design", duration: "25:10" },
          { title: "Design Principles and Theory", duration: "40:30" },
          { title: "Color Theory and Typography", duration: "35:45" },
        ],
      },
      {
        section: "User Experience Design",
        lectures: [
          { title: "User Research Methods", duration: "50:15" },
          { title: "Information Architecture", duration: "45:30" },
          { title: "Wireframing and Prototyping", duration: "60:20" },
        ],
      },
      {
        section: "Design Tools and Implementation",
        lectures: [
          { title: "Designing with Figma", duration: "70:10" },
          { title: "Creating Interactive Prototypes", duration: "55:45" },
          { title: "Usability Testing", duration: "40:30" },
          { title: "Final Project: App Design", duration: "80:00" },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Node.js: The Complete Guide",
    instructor: "David Wilson",
    thumbnail: node,
    shortDescription: "Master Node.js and build scalable backend applications.",
    description:
      "Learn Node.js from the ground up and become a backend developer. This course covers Node.js fundamentals, Express.js, RESTful APIs, authentication, database integration with MongoDB, and deployment. You'll build multiple real-world projects including a social network application.",
    rating: 4.7,
    reviewCount: 3254,
    price: 89.99,
    duration: "32 hours",
    level: "Intermediate",
    lastUpdated: "November 2023",
    content: [
      {
        section: "Node.js Basics",
        lectures: [
          { title: "Introduction to Node.js", duration: "30:20" },
          { title: "Modules and npm", duration: "35:45" },
          { title: "Asynchronous Programming in Node.js", duration: "50:10" },
        ],
      },
      {
        section: "Building Web Applications with Express",
        lectures: [
          { title: "Introduction to Express.js", duration: "40:30" },
          { title: "Routing and Middleware", duration: "55:15" },
          { title: "Template Engines", duration: "45:20" },
          { title: "Building RESTful APIs", duration: "60:45" },
        ],
      },
      {
        section: "Database Integration and Deployment",
        lectures: [
          { title: "MongoDB and Mongoose", duration: "65:30" },
          { title: "Authentication and Authorization", duration: "70:15" },
          { title: "Testing Node.js Applications", duration: "50:45" },
          {
            title: "Deployment and Performance Optimization",
            duration: "55:20",
          },
        ],
      },
    ],
  },
];
