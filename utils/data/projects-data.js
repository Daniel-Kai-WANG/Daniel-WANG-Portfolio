import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "My Rounds - Legacy System Modernization",
    description:
      "Modernized a 6-year-old legacy system, migrated mobile pages with high feature parity, relaunched the Admin portal, and implemented new features for client delivery.",
    keyPoints: [
      "Updated backend dependencies, successfully rebuilt and launched the backend system, and verified functionality by registering new accounts via Postman.",
      "Rebuilt the mobile environment using the latest Expo framework, migrated 61 mobile pages, and achieved 95% feature parity with the legacy system.",
      "Upgraded Admin portal dependencies, relaunched the system, and implemented new features based on client requirements, ensuring successful delivery of all requested functionalities.",
    ],
    tools: [
      "React",
      "Expo",
      "Express.js",
      "Apollo GraphQL",
      "TypeScript",
      "Postman",
      "SCSS",
      "GitLab"
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "UGive - New Expo Project",
    description: "Led New Expo Project Development, delivered all Phase 1 features on schedule, also contributed to backend development while successfully integrating Firebase push notifications.",
    keyPoints: [
      "Led mobile development with Expo, implementing rendering, interactions, and animations across both iOS and Android platforms to deliver a smooth and engaging user experience.",
      "Integrated backend APIs to render data dynamically, working closely with backend developer to ensure smooth front-end and back-end communication.",
      "Later extended responsibilities to backend development by creating models, implementing business logic, and building APIs to support mobile features.",
      "Registered the project on Firebase and implemented Firebase Cloud Messaging (FCM) push notifications, completing setup, configuration, and in-app handling."
    ],
    tools: [
      "Expo",
      "TypeScript",
      "Tailwind CSS",
      "Laravel",
      "Firebase",
      "Postman",
      "GitLab",
      "Xcode",
      "Android Studio"
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 3,
    name: "Payroll System",
    description:
      "Fetching data from Boond Manager, displaying and generating payslips for expatriates’ consultants, responsible for setting up backend modular services and data processing.",
    keyPoints: [
      "Built a modular and scalable payroll management service using NestJS and TypeScript, configuring HTTP requests and basic authentication to ensure secure communication.",
      "Developed frontend pages using Vite, React, and TypeScript to display payroll data in a tabular format, including employee names, active contracts, projects, deliveries, and a button to generate payrolls. Implemented data search and filtering functionalities.",
      "Used MUI templates and custom designs to build tables, Zustand for state management, and React Query for API requests, optimizing user input and enhancing performance with useMemo.",
      "Utilized docx, jszip, pdf-lib, and file-saver to generate and download payroll PDFs, ensuring efficient and accurate document processing.",
      "Conducted unit tests with Jest, simulated backend API calls, and verified user interactions. Deployed the project to Tencent Cloud using Docker and Nginx and integrated it into Boond Manager's sandbox environment.",
    ],
    tools: [
      "NestJS",
      "TypeScript",
      "Axios",
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 4,
    name: "AI Phone Service Website Dashboard and Message Pages (Collaborative Development)",
    description:
      "Dashboard page for displaying user data statistics, enhancing real-time feedback on customer interactions. Message page for displaying AI call records and details.",
    keyPoints: [
      "Developed a dashboard using the Echarts third party library to present multifaceted user data statistics, enhancing real-time feedback on customer interactions within specific time frames.",
      "Implemented a calendar feature using the Day.js third party library combined with React logic to support timestamp selection by year, month, and day, display corresponding data received from the backend.",
      "Fetch data directly by integrating APIs in the Firebase database, whilst utilizing React and TypeScript to design messaging module for presenting AI call logs along with a modal for viewing call details. Facilitate customer service tracking and management.",
      "Adopt Mock.js to simulate the data structure of development data in the development process to improve development efficiency.",
      "Git is used for version control, the development team collaborated on development and tracked code changes through branch management, ensured code quality and project stability through the code review process."
    ],
    tools: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Axios",
      "Firebase",
      "Git"
    ],
    role: "Front End Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 5,
    name: "Law Firm Website Development",
    description:
      "Displaying the company's PC and mobile websites, including the homepage, legal cases, legal knowledge, team introduction, and legal consultation services.",
    keyPoints: [
      "Developed core modules using Vue3, TypeScript, and SCSS, linking modules with router-link, and implementing responsive design for mobile web development.",
      "Simulated backend data using Mock.js and executed API requests through Axios and useQuery, ensuring smooth frontend-backend interactions.",
      "Enhanced user experience by implementing fully responsive mobile interfaces using useMedia hooks and comprehensive responsive styles.",
      "Created Dockerfile and Nginx configuration files, deployed the project to Tencent Cloud, and configured HTTPS by purchasing SSL certificates to achieve automated deployment and secure access."
    ],
    tools: [
      "Vite",
      "Vue3",
      "TypeScript",
      "SCSS",
      "Axios"
    ],
    role: "Frontend Developer",
    code: "",
    demo: "",
    image: realEstate,
  },
  {
    id: 6,
    name: "E-commerce Website Development",
    description:
      "Includes both frontend and backend development. The backend is used to manage users, products, and orders, while the frontend is for product display, categorization, and ordering.",
    keyPoints: [
      "Configured NextAuth's authentication options, Google provider, and MongoDB adapter, as well as callback functions to implement admin authentication based on user email.",
      "Developed core modules in React, including products, product categories, orders, and settings. Defined corresponding module API routes to handle CRUD (Create, Read, Update, Delete) operations.",
      "Rendered corresponding pages using dynamic routing and server-side data fetching based on different product or category IDs.",
      "Integrated the Stripe payment platform, handling order creation and payment sessions through API endpoints, and updating payment status in real-time via Webhooks."
    ],
    tools: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Styled Components",
      "MongoDB",
      "Axios",
      "Stripe"
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: ayla,
  },
  {
    id: 7,
    name: "Vulnerable Persons Project (VPP) Online Database",
    description:
      "Developed a visualizable and searchable online database to retrieve data related to vulnerable persons in Queensland.",
    keyPoints: [
      "Retrieved data from MongoDB and rendered it in page tables.",
      "Created filters to allow data to be filtered by criteria such as state, gender, cause of death, and personal characteristics.",
      "Maintained technical communication with the UQ student team to ensure project development efficiency."
    ],
    tools: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB"
    ],
    role: "Backend Developer",
    code: "",
    demo: "",
    image: "",
  }
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
