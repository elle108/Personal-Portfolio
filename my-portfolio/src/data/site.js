// All of the site's content lives here so it's easy to update
// without digging through components.

export const profile = {
  name: "Elle Miller",
  firstName: "Elle",
  headline: "Quality Assurance Specialist & Human-Centered Computing grad student",
  tagline:
    "I build and test software with the people using it in mind, making sure it's reliable, thoughtful, and a little bit delightful.",
  location: "West Michigan",
  links: {
    linkedin: "https://www.linkedin.com/in/elle-millerr",
    github: "https://github.com/elle108",
  },
  // Drop an updated PDF at public/resume.pdf and set this to "/resume.pdf"
  // to show a "Download resume" button.
  resumeUrl: null,
};

// Short "right now" snapshot shown under the hero
export const currently = [
  { label: "Working", value: "QA Specialist at BizStream", icon: "briefcase" },
  { label: "Studying", value: "M.S. Human-Centered Computing, GVSU", icon: "graduation" },
  { label: "Leading", value: "President, Society of Women Engineers", icon: "users" },
];

export const about = {
  paragraphs: [
    "Hi, I'm Elle! I'm a Computer Science student at Grand Valley State University pursuing a combined Master's in Human-Centered Computing, and I work full time as a Quality Assurance Specialist at BizStream.",
    "Through internships and research roles in software development, cloud computing, and quality assurance, I've worked on production applications, collaborated on Agile teams, and found real satisfaction in making software better and more dependable.",
    "My computer science background gives me a strong technical foundation. Human-Centered Computing pushes me to think past how we build technology and toward how we build technology that works well for the people using it.",
  ],
  interests: [
    { title: "Software quality", body: "Finding the bugs before users do, and building processes that keep them from coming back." },
    { title: "Human-centered design", body: "Understanding how people actually interact with the software we build." },
    { title: "AI in technology", body: "Exploring how AI can make tools smarter, from test generation to 3D reconstruction." },
  ],
};

export const education = [
  {
    school: "Grand Valley State University",
    degree: "M.S. Human-Centered Computing",
    detail: "Combined bachelor's/master's program",
    date: "Expected May 2028",
  },
  {
    school: "Grand Valley State University",
    degree: "B.S. Computer Science, Minor in Mathematics",
    detail: "Frederik Meijer Honors College · GPA 3.87 · Dean's List 2023–2026",
    date: "Expected May 2027",
  },
];

export const experience = [
  {
    role: "Quality Assurance Specialist",
    company: "BizStream",
    location: "",
    date: "2026 – Present",
    current: true,
    summary: "Full-time QA role testing and improving the quality of client web applications.",
    bullets: [],
    tags: ["QA", "Web"],
  },
  {
    role: "IT Quality Assurance Intern",
    company: "National Heritage Academies",
    location: "Grand Rapids, MI",
    date: "May 2026 – Aug 2026",
    bullets: [
      "Developed and executed 100+ test cases validating education, reporting, and platform migration features.",
      "Identified and documented 50+ defects through functional and exploratory testing, including a 14-year-old student search bug.",
      "Built an AI-assisted test plan generation tool and introduced Storybook and Chromatic for component-level and visual regression testing.",
    ],
    tags: ["Test Planning", "Storybook", "Chromatic", "AI Tooling"],
  },
  {
    role: "Software Developer",
    company: "Blue Nucleus",
    location: "Grand Rapids, MI",
    date: "Jan 2026 – Jul 2026",
    bullets: [
      "Contributed to a research project exploring single-image 3D reconstruction with large reconstruction models (LRM).",
      "Ran training experiments with a pre-trained LRM for single-image 3D reconstruction.",
      "Implemented data cleaning for image datasets, including background removal and extraction of image and camera metadata.",
    ],
    tags: ["Machine Learning", "Python", "Research"],
  },
  {
    role: "Digital Platforms Intern",
    company: "Twisthink",
    location: "Grand Rapids, MI",
    date: "May 2025 – Aug 2025",
    bullets: [
      "Developed cloud-based features using Python, C#, AWS, and Azure for client and internal projects.",
      "Wrote clean, maintainable, production-ready code used by consultants across multiple client projects.",
      "Collaborated in an Agile, cross-disciplinary team through code reviews, sprint planning, and retrospectives, and contributed to company culture through CultureLab.",
    ],
    tags: ["C#", "Python", "Azure", "AWS"],
  },
  {
    role: "2020 Information Desk",
    company: "Grand Valley State University",
    location: "Allendale, MI",
    date: "Nov 2024 – Present",
    bullets: [
      "Manage the university's main phone line and shared inboxes, helping students, staff, and visitors find the right campus resources.",
    ],
    tags: ["Communication"],
  },
];

// `category` powers the filter chips on the Projects section
export const projects = [
  {
    title: "What Makes a Halloween Candy Desirable?",
    org: "GVSU",
    description:
      "A data story remixing FiveThirtyEight's Halloween Candy Power Ranking with three interactive visualizations built in Google Sheets, D3, and Altair.",
    tech: ["D3", "Altair", "Google Sheets", "Data Visualization"],
    category: "Data & ML",
    // `path` opens a page on this site instead of an outside link
    path: "/projects/halloween-candy",
  },
  {
    title: "AI-Assisted Test Plan Generator",
    org: "National Heritage Academies",
    description:
      "An internal tool that drafts structured test plans with AI, speeding up how the QA team turns requirements into test coverage.",
    tech: ["AI", "Test Planning", "QA Workflow"],
    category: "QA",
    featured: true,
  },
  {
    title: "Single-Image 3D Reconstruction",
    org: "Blue Nucleus",
    description:
      "Research into reconstructing 3D models from a single image with large reconstruction models, including dataset cleaning and training experiments.",
    tech: ["Python", "Machine Learning", "Computer Vision"],
    category: "Data & ML",
    featured: true,
  },
  {
    title: "TBOT: Time & Project Tracking",
    org: "Twisthink",
    description:
      "A time and project tracking tool for consultants. I built backend APIs for time entries and project data in C# on Azure and tested endpoints with Postman.",
    tech: ["C#", "Azure", "REST APIs", "Postman"],
    category: "Software",
  },
  {
    title: "Math-eroids",
    org: "GVSU",
    description:
      "An educational Asteroids-style game for practicing math. I project-managed a team of four and built core gameplay mechanics and backend game logic.",
    tech: ["Lua", "LÖVE2D"],
    category: "Software",
    link: "https://github.com/elle108/gvsu-cis350-team1",
  },
  {
    title: "FTP Client",
    org: "GVSU",
    description:
      "A from-scratch FTP client following RFC 959, supporting file transfers, directory navigation, and concurrent connections.",
    tech: ["Python", "Sockets", "Multithreading"],
    category: "Software",
    link: "https://github.com/elle108/CIS-457-Simple-FTP-Client",
  },
  {
    title: "Income & Inflation in Michigan",
    org: "GVSU",
    description:
      "Cleaned and joined multi-year datasets to analyze income and inflation trends across Michigan counties, with ggplot2 visualizations and a written report.",
    tech: ["R", "dplyr", "ggplot2"],
    category: "Data & ML",
    link: "https://github.com/elle108/STA418-FinalProject",
  },
  {
    title: "This Portfolio",
    org: "Personal",
    description:
      "The site you're on! A React and Tailwind site with a contact form that emails me directly and a Firebase-backed admin inbox.",
    tech: ["React", "Tailwind CSS", "Firebase", "Vercel"],
    category: "Software",
    link: "https://github.com/elle108/Personal-Portfolio",
  },
];

export const skills = [
  { group: "Software Testing", items: ["Functional Testing", "Exploratory Testing", "Regression Testing", "Test Case & Plan Development", "Defect Reporting", "Storybook", "Chromatic"] },
  { group: "Languages", items: ["Python", "C#", "Java", "R", "SQL", "Lua"] },
  { group: "Cloud & Backend", items: ["AWS", "Azure", "REST APIs", ".NET"] },
  { group: "Tools", items: ["Git", "GitHub", "Azure DevOps", "Postman", "Linux", "Bash"] },
  { group: "Data & ML", items: ["Data Cleaning", "Data Visualization", "dplyr", "ggplot2", "Model Training", "Image Dataset Prep"] },
];

export const certifications = ["AWS Generative AI Essentials", "Microsoft Foundational C#"];

export const leadership = [
  {
    role: "President & Social Media Coordinator",
    org: "Society of Women Engineers, GVSU",
    date: "Sep 2023 – Present",
    body: "Leading GVSU's SWE chapter to build community and support for women in engineering and computing.",
  },
  {
    role: "Undergraduate Student Mentor",
    org: "3C: Connect @ College of Computing",
    date: "Aug 2025 – May 2026",
    body: "Mentored incoming computing students as they found their footing at GVSU.",
  },
];

// ---------- Personal page ----------
// Photos are loaded automatically from:
//   src/assets/personal/pup/   -> dog photos
//   src/assets/personal/life/  -> everything else
// Add a caption for any photo by its filename below (optional).

export const personal = {
  intro:
    "When I'm not hunting down bugs or in class, you'll probably find me on a snowboard, at my craft table, or deep in a cozy game. Here's a little peek at life outside of tech.",
  pup: {
    name: "My pup",
    blurb: "Chief morale officer, professional napper, and my favorite coworker on remote days.",
    facts: [
      // e.g. { label: "Breed", value: "Goldendoodle" },
    ],
  },
  captions: {
    // "snowboarding.jpg": "First run of the season!",
  },
  hobbies: [
    { name: "Snowboarding", icon: "snowflake", body: "Chasing fresh runs every winter." },
    { name: "Jewelry making", icon: "gem", body: "Beading bracelets and necklaces for friends (and me)." },
    { name: "LEGO", icon: "blocks", body: "There's always a set in progress on my desk." },
    { name: "Cozy games", icon: "gamepad", body: "Animal Crossing, Pokémon, and Stardew Valley forever." },
    { name: "Sanrio", icon: "heart", body: "Cinnamoroll is the reason this whole site is pastel." },
  ],
};
