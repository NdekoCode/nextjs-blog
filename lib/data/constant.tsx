import { ICategory, Post } from '../types';

export const CATEGORIES: ICategory[] = [
  {
    name: "Next.js",
    slug: "next.js",
  },
  {
    name: "React Native",
    slug: "react-native",
  },
  {
    name: "CSS",
    slug: "css",
  },
  {
    name: "Nest.js",
    slug: "nest.js",
  },
  {
    name: "Tailwindcss",
    slug: "tailwindcss",
  },
  {
    name: "Javascript",
    slug: "javascript",
  },
  {
    name: "React",
    slug: "react",
  },
].map((d, i) => ({ ...d, id: i + 1 }));

export const POSTS: Post[] = [
  {
    id: 1,
    title: "React State Management: Choosing the Right Solution",
    image: "/react-state-management.jpg",
    caption:
      "Explore different state management solutions in React and choose the one that fits your needs.",
    date: "2023-01-15",
    minutesToRead: 10,
    author: {
      name: "John ReactDev",
      email: "john@reactdev.com",
      image: "/john.jpg",
      createdAt: "2023-01-15",
    },
    nbViews: 25,
    nbComments: 8,
    slug: "react-state-management-choosing-right-solution",
    content:
      "State management is a critical part of any React application. This article explores different approaches, including the built-in Context API for simple state sharing, Redux for more complex and structured applications, and other libraries like Zustand and Recoil for alternative solutions. We'll discuss when to use each option, weighing trade-offs like learning curve, scalability, and ease of debugging. By the end, you'll be equipped to choose the right state management solution for your specific project.",
  },
  {
    id: 2,
    title: "Server-Side Rendering with Next.js: A Practical Guide",
    image: "/nextjs-ssr.jpg",
    caption:
      "Learn how to implement server-side rendering in Next.js for improved performance and SEO.",
    date: "2023-02-02",
    minutesToRead: 12,
    author: {
      name: "Alice NextJSDev",
      email: "alice@nextjsdev.com",
      image: "/alice.jpg",
      createdAt: "2023-02-02",
    },
    nbViews: 18,
    nbComments: 5,
    slug: "server-side-rendering-nextjs-practical-guide",
    content:
      "Server-side rendering (SSR) in Next.js provides a way to render pages on the server before sending them to the browser. This guide covers how SSR improves SEO by providing search engines with fully rendered HTML, reducing page load time for users. You'll learn to implement SSR with `getServerSideProps`, handle dynamic data fetching, and optimize performance using caching and data hydration. Practical examples will help you understand the best practices for applying SSR in real-world scenarios.",
  },
  {
    id: 3,
    title: "Building Cross-Platform Mobile Apps with React Native",
    image: "/react-native-cross-platform.jpg",
    caption:
      "Step-by-step guide to building cross-platform mobile applications using React Native.",
    date: "2023-02-18",
    minutesToRead: 15,
    author: {
      name: "Bob MobileDev",
      email: "bob@mobiledev.com",
      image: "/bob.jpg",
      createdAt: "2023-02-18",
    },
    nbViews: 32,
    nbComments: 10,
    slug: "building-cross-platform-mobile-apps-react-native",
    content:
      "React Native allows developers to create cross-platform mobile apps with a single codebase. This guide walks through the setup of a React Native project, explaining key concepts like components, state, and navigation. We'll also explore integrating native modules for platform-specific functionality and optimizing app performance. By the end, you'll have a solid foundation for building mobile apps that work seamlessly on both iOS and Android.",
  },
  {
    id: 4,
    title: "Advanced CSS Techniques for Modern Web Design",
    image: "/advanced-css-techniques.jpg",
    caption:
      "Explore advanced CSS techniques to enhance the visual appeal and interactivity of your web designs.",
    date: "2023-03-05",
    minutesToRead: 8,
    author: {
      name: "Eva CSSDesigner",
      email: "eva@cssdesigner.com",
      image: "/eva.jpg",
      createdAt: "2023-03-05",
    },
    nbViews: 22,
    nbComments: 7,
    slug: "advanced-css-techniques-modern-web-design",
    content:
      "Modern web design requires advanced CSS techniques to create visually appealing and interactive layouts. This article covers features like CSS Grid and Flexbox for layout design, transitions and animations for interactivity, and custom properties (CSS variables) for maintainable styling. You'll also learn to use media queries for responsive design and explore pseudo-elements for creative effects. These techniques will help elevate your web design skills to the next level.",
  },
  {
    id: 5,
    title: "Mastering JavaScript Promises and Asynchronous Programming",
    image: "/javascript-promises-async.jpg",
    caption:
      "In-depth tutorial on mastering JavaScript promises and asynchronous programming concepts.",
    date: "2023-03-20",
    minutesToRead: 14,
    author: {
      name: "Peter JSNinja",
      email: "peter@jsninja.com",
      image: "/peter.jpg",
      createdAt: "2023-03-20",
    },
    nbViews: 28,
    nbComments: 6,
    slug: "mastering-javascript-promises-asynchronous-programming",
    content:
      "Asynchronous programming is essential for modern JavaScript development. This article dives into promises, explaining how they work and how to chain them for sequential operations. We'll also cover async/await syntax for cleaner asynchronous code, error handling strategies, and real-world examples like fetching data from APIs. Understanding these concepts will make your code more efficient and easier to maintain.",
  },
  {
    id: 6,
    title: "Building Reusable React Components: Best Practices",
    image: "/reusable-react-components.jpg",
    caption:
      "Best practices and tips for building reusable and maintainable React components in your projects.",
    date: "2023-04-10",
    minutesToRead: 11,
    author: {
      name: "Grace Reacter",
      email: "grace@reacter.com",
      image: "/grace.jpg",
      createdAt: "2023-04-10",
    },
    nbViews: 35,
    nbComments: 9,
    slug: "building-reusable-react-components-best-practices",
    content:
      "Reusable components are key to efficient React development. This article explains how to create components that are easy to reuse and maintain. We'll discuss props for customization, composition for flexibility, and techniques for managing state and side effects. You'll also learn to follow best practices like clear naming conventions and separating concerns, ensuring your components are robust and adaptable to future requirements.",
  },
  {
    id: 7,
    title: "Dynamic Routes in Next.js: A Comprehensive Guide",
    image: "/nextjs-dynamic-routes.jpg",
    caption:
      "Comprehensive guide on implementing dynamic routes in Next.js for flexible page rendering.",
    date: "2023-04-25",
    minutesToRead: 13,
    author: {
      name: "David NextJSPro",
      email: "david@nextjspro.com",
      image: "/david.jpg",
      createdAt: "2023-04-25",
    },
    nbViews: 19,
    nbComments: 4,
    slug: "dynamic-routes-nextjs-comprehensive-guide",
    content:
      "Dynamic routing is a powerful feature in Next.js, allowing you to create flexible and scalable page structures. This guide covers the basics of dynamic route setup, including file-based routing, dynamic parameters, and optional catch-all routes. We'll also explore advanced topics like server-side rendering for dynamic pages and strategies for handling complex navigation scenarios.",
  },
  {
    id: 8,
    title: "State Management in React Native Apps: Redux vs. Context API",
    image: "/react-state-management.jpg",
    caption:
      "Comparison of state management solutions, Redux and Context API, in React Native applications.",
    date: "2023-05-12",
    minutesToRead: 18,
    author: {
      name: "Mia RNDeveloper",
      email: "mia@rndeveloper.com",
      image: "/mia.jpg",
      createdAt: "2023-05-12",
    },
    nbViews: 40,
    nbComments: 11,
    slug: "state-management-react-native-redux-context-api",
    content:
      "Managing state in React Native apps is crucial for building scalable applications. This article compares Redux, a powerful state management library, with the simpler Context API. We'll discuss their strengths, weaknesses, and use cases, helping you decide which solution fits your app's requirements. Practical examples and tips for integration are included to make the concepts actionable.",
  },
  {
    id: 9,
    title: "Responsive Design Patterns with CSS Grid and Flexbox",
    image: "/advanced-css-techniques.jpg",
    caption:
      "Explore responsive design patterns using CSS Grid and Flexbox for modern web layouts.",
    date: "2023-06-01",
    minutesToRead: 9,
    author: {
      name: "Ryan CSSMaster",
      email: "ryan@cssmaster.com",
      image: "/ryan.jpg",
      createdAt: "2023-06-01",
    },
    nbViews: 27,
    nbComments: 8,
    slug: "responsive-design-patterns-css-grid-flexbox",
    content:
      "Responsive design ensures your web applications adapt seamlessly to various screen sizes. This article focuses on using CSS Grid and Flexbox to create fluid layouts, manage alignment, and handle complex grid structures. We'll explore real-world examples, including navigation menus and grid-based galleries, to illustrate how these tools can enhance the responsiveness and user experience of your projects.",
  },
  {
    id: 10,
    title: "ES6+ Features Every JavaScript Developer Should Know",
    image: "/es6-javascript.jpg",
    caption:
      "Overview of essential ES6+ features and how they can improve your JavaScript development.",
    date: "2023-06-18",
    minutesToRead: 16,
    author: {
      name: "Sara JSExplorer",
      email: "sara@jsdeveloper.com",
      image: "/sara.jpg",
      createdAt: "2023-06-18",
    },
    nbViews: 33,
    nbComments: 10,
    slug: "es6-features-javascript-developers-should-know",
    content:
      "ES6+ introduced several powerful features that revolutionized JavaScript development. This article covers key additions like arrow functions, destructuring, template literals, classes, modules, and promises. We'll explore how these features simplify code, improve readability, and enhance functionality. Examples and practical applications are provided to help you master these essential tools.",
  },

  {
    id: 11,
    title: "React Hooks: A Deep Dive into Modern React State Management",
    image: "/reusable-react-components.jpg",
    caption:
      "In-depth exploration of React Hooks and their role in modern React state management.",
    date: "2023-07-05",
    minutesToRead: 12,
    author: {
      name: "Tom ReactHooksFan",
      email: "tom@reacthooksfan.com",
      image: "/tom.jpg",
      createdAt: "2023-07-05",
    },
    nbViews: 24,
    nbComments: 6,
    slug: "react-hooks-deep-dive-modern-react-state-management",
    content:
      "React Hooks have transformed the way developers manage state and side effects in React applications. This article dives into hooks like `useState`, `useEffect`, and `useContext`, explaining their use cases and implementation. You'll also learn about custom hooks and how they promote code reuse and modularity. Practical examples demonstrate how hooks simplify React development.",
  },
  {
    id: 12,
    title: "SEO Optimization in Next.js: Best Practices for Higher Rankings",
    image: "/nextjs-seo-optimization.jpg",
    caption:
      "Best practices for optimizing your Next.js applications for search engines and higher rankings.",
    date: "2023-07-20",
    minutesToRead: 14,
    author: {
      name: "Lily NextJSSEO",
      email: "lily@nextjsseo.com",
      image: "/lily.jpg",
      createdAt: "2023-07-20",
    },
    nbViews: 31,
    nbComments: 9,
    slug: "seo-optimization-nextjs-best-practices-higher-rankings",
    content:
      "SEO optimization is critical for increasing the visibility of your Next.js applications. This article discusses best practices like improving page speed, optimizing metadata with `next/head`, and generating dynamic sitemaps. We'll also cover advanced techniques such as server-side rendering (SSR) and static site generation (SSG) for better search engine indexing.",
  },
  {
    id: 13,
    title: "Navigation in React Native: Choosing the Right Navigation Library",
    image: "/react-native-navigation.jpg",
    caption:
      "Guide to choosing the right navigation library for seamless navigation in React Native apps.",
    date: "2023-08-08",
    minutesToRead: 10,
    author: {
      name: "Mike RNNavigator",
      email: "mike@rnnavigator.com",
      image: "/mike.jpg",
      createdAt: "2023-08-08",
    },
    nbViews: 23,
    nbComments: 7,
    slug: "navigation-react-native-choosing-right-library",
    content:
      "Navigation is a core aspect of React Native apps, and choosing the right library can impact user experience. This article compares popular navigation solutions like React Navigation and React Native Navigation, highlighting their pros, cons, and best use cases. You'll also learn about stack, tab, and drawer navigators and how to implement them effectively.",
  },
  {
    id: 14,
    title: "SASS and SCSS: Enhancing CSS with Preprocessors",
    image: "/sass-scss-css.jpg",
    caption:
      "Introduction to SASS and SCSS and how they enhance CSS with variables, mixins, and more.",
    date: "2023-08-25",
    minutesToRead: 15,
    author: {
      name: "Diana CSSPreprocessor",
      email: "diana@csspreprocessor.com",
      image: "/diana.jpg",
      createdAt: "2023-08-25",
    },
    nbViews: 29,
    nbComments: 8,
    slug: "sass-scss-enhancing-css-preprocessors",
    content:
      "SASS and SCSS preprocessors extend CSS with powerful features like variables, nested rules, mixins, and inheritance. This article introduces these features, explaining how they simplify complex stylesheets and improve maintainability. You'll also learn how to compile SASS/SCSS into standard CSS and integrate it into your workflow.",
  },
  {
    id: 15,
    title: "Modern JavaScript Tooling: Babel, Webpack, and Beyond",
    image: "/javascript-promises-async.jpg",
    caption:
      "Exploring modern JavaScript tooling with Babel, Webpack, and other essential tools.",
    date: "2023-09-12",
    minutesToRead: 13,
    author: {
      name: "Chris JSToolingExpert",
      email: "chris@jstoolingexpert.com",
      image: "/chris.jpg",
      createdAt: "2023-09-12",
    },
    nbViews: 36,
    nbComments: 11,
    slug: "modern-javascript-tooling-babel-webpack-beyond",
    content:
      "Modern JavaScript development relies heavily on tools like Babel for transpiling code and Webpack for bundling. This article explains how these tools work, their benefits, and how to configure them for optimal performance. Additional tools like ESLint and Prettier are also discussed to ensure code quality and consistency.",
  },
  {
    id: 16,
    title: "Testing React Components: A Comprehensive Guide",
    image: "/testing-react-components.jpg",
    caption:
      "Comprehensive guide to testing React components effectively for robust and reliable code.",
    date: "2023-09-28",
    minutesToRead: 17,
    author: {
      name: "Mark ReactTestingPro",
      email: "mark@reacttestingpro.com",
      image: "/mark.jpg",
      createdAt: "2023-09-28",
    },
    nbViews: 38,
    nbComments: 12,
    slug: "testing-react-components-comprehensive-guide",
    content:
      "Testing ensures the reliability and robustness of React components. This article covers unit testing with Jest, integration testing with React Testing Library, and tips for writing effective test cases. Examples demonstrate how to simulate user interactions, mock API calls, and test edge cases.",
  },
  {
    id: 17,
    title: "Authentication in Next.js: Implementing Secure User Authentication",
    image: "/nextjs-dynamic-routes.jpg",
    caption:
      "Implementing secure user authentication in Next.js applications for enhanced security.",
    date: "2023-10-15",
    minutesToRead: 14,
    author: {
      name: "Olivia NextAuth",
      email: "olivia@nextauth.com",
      image: "/olivia.jpg",
      createdAt: "2023-10-15",
    },
    nbViews: 34,
    nbComments: 10,
    slug: "authentication-nextjs-implementing-secure-user-authentication",
    content:
      "User authentication is vital for securing Next.js applications. This article explores strategies for implementing authentication using libraries like NextAuth.js and JWT. We'll cover topics like protecting routes, handling sessions, and integrating third-party providers for a seamless user experience.",
  },
  {
    id: 18,
    title: "Optimizing React Native Apps for Performance: Best Practices",
    image: "/react-state-management.jpg",
    caption:
      "Best practices for optimizing React Native apps to deliver a high-performance user experience.",
    date: "2023-10-30",
    minutesToRead: 11,
    author: {
      name: "Tim RNPerformance",
      email: "tim@rnperformance.com",
      image: "/tim.jpg",
      createdAt: "2023-10-30",
    },
    nbViews: 26,
    nbComments: 7,
    slug: "optimizing-react-native-apps-performance-best-practices",
    content:
      "Optimizing performance in React Native apps ensures a smooth user experience. This article covers techniques like reducing app bundle size, optimizing animations, and using native modules for heavy computations. We'll also discuss profiling tools to identify and resolve performance bottlenecks.",
  },
  {
    id: 19,
    title: "CSS-in-JS: Styling React Applications with Styled Components",
    image: "/css-in-js-styled-components.jpg",
    caption:
      "Introduction to CSS-in-JS and styling React applications with Styled Components for modular styling.",
    date: "2023-11-15",
    minutesToRead: 12,
    author: {
      name: "Victoria CSSInJS",
      email: "victoria@cssinjs.com",
      image: "/victoria.jpg",
      createdAt: "2023-11-15",
    },
    nbViews: 30,
    nbComments: 9,
    slug: "css-in-js-styling-react-applications-styled-components",
    content:
      "CSS-in-JS is a modern approach to styling React applications, combining the power of JavaScript with CSS for modular and dynamic styling. This article introduces Styled Components, explaining how to create styled components, manage themes, and use props for dynamic styles. We'll also explore the benefits of CSS-in-JS, such as scoped styles, improved maintainability, and elimination of CSS class name conflicts. Examples will guide you in integrating Styled Components into your projects.",
  },
  {
    id: 20,
    title: "Functional Programming in JavaScript: Principles and Practices",
    image: "/es6-javascript.jpg",
    caption:
      "Understanding the principles and practices of functional programming in JavaScript.",
    date: "2023-11-30",
    minutesToRead: 16,
    author: {
      name: "Alex FunctionalJS",
      email: "alex@functionaljs.com",
      image: "/alex.jpg",
      createdAt: "2023-11-30",
    },
    nbViews: 37,
    nbComments: 11,
    slug: "functional-programming-javascript-principles-practices",
    content:
      "Functional programming (FP) is a paradigm that treats computation as the evaluation of mathematical functions, avoiding changing state and mutable data. This article dives into FP principles in JavaScript, such as pure functions, immutability, and higher-order functions. You'll learn how to use techniques like function composition, currying, and recursion to write clean and maintainable code. Practical examples illustrate how FP can solve common programming challenges, making your JavaScript code more robust and scalable.",
  },
];
