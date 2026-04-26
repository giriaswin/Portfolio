export const projectsData = [
  {
    id: "vexel",
    title: "Vexel",
    punchline: "Voice & Text-Driven Website Builder",
    summary: "A visual development platform that instantly translates natural language and voice prompts into responsive, functional web layouts.",
    problem: "Creating websites usually requires technical knowledge, which makes it difficult for non-developers to build or customize their own pages.",
    solution: "Developed a web-based builder that allows users to generate layouts using text prompts or voice input. The system converts user input into structured components and renders them in real time. It also supports drag-and-drop editing, so users can adjust layouts visually without writing code.",
    outcome: "The platform makes website creation highly accessible, drastically reducing the technical barrier to entry and accelerating the prototyping phase.",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS", "Node.js", "Express", "Firebase"],
    featured: true,
    image: "/Vexel.webp"
  },
  {
    id: "insightflow",
    title: "InsightFlow AI",
    punchline: "Connecting business data with meeting conversations",
    summary: "An analytics engine that bridges the gap between raw datasets and meeting transcripts, generating context-aware, actionable insights.",
    problem: "Business data and meeting discussions are usually handled separately. Teams analyze spreadsheets in one place and review meeting notes in another, which makes it difficult to connect decisions with actual performance.",
    solution: "Designed a system that processes both structured data and meeting inputs together. It reads datasets, identifies patterns, and analyzes meeting audio to extract key points and action items. The engine then combines both inputs to produce a single, cohesive report.",
    outcome: "The system provides a clearer picture by connecting data with decisions, reducing the gap between analysis and execution.",
    tech: ["React", "Next.js", "Tailwind CSS", "Python", "FastAPI / Node.js", "Pandas", "NumPy", "Plotly", "Speech APIs", "LLM APIs", "PostgreSQL"],
    featured: true,
    image: "/Insightflow.webp"
  },
  {
    id: "medora",
    title: "Medora",
    punchline: "Context-aware medical document retrieval",
    summary: "A secure retrieval-augmented engine designed to extract precise, contextually relevant answers from verified medical literature.",
    problem: "Standard search systems often return results that are too broad or not directly useful, especially when dealing with medical information that requires absolute accuracy.",
    solution: "Built a retrieval engine that sources information from a collection of verified medical documents to generate responses. Instead of relying solely on keyword matching, it uses vector-based similarity to find content that is contextually related to the user's query.",
    outcome: "The engine improves the relevance of search results and provides highly focused answers, helping users navigate dense medical information safely.",
    tech: ["Python", "LangChain", "FAISS / ChromaDB", "Flask", "LLM APIs"],
    featured: false,
    image: "/Medora.webp"
  },
  {
    id: "tripmate",
    title: "TripMate",
    punchline: "Automated itinerary and travel cost estimator",
    summary: "An integrated trip planning application that instantly maps out optimized routes, itineraries, and budget estimations.",
    problem: "Planning a trip involves multiple steps such as choosing destinations, estimating costs, and organizing routes. These steps are often handled across multiple apps, making the process complex.",
    solution: "Developed an application that unifies these steps into a single intuitive workflow. Based on user input, it suggests destinations, estimates budgets, and outlines travel routes—providing a complete starting framework for any journey.",
    outcome: "The application drastically reduces the effort required to plan a trip, bringing scattered travel decisions into one seamless interface.",
    tech: ["JavaScript", "Python", "Flask / Node.js", "APIs"],
    featured: false,
    image: "/Tripmate.webp"
  },
  {
    id: "dataforge",
    title: "DataForge",
    punchline: "Interactive data exploration engine",
    summary: "A dynamic visualization framework that turns static, raw datasets into real-time, interactive performance dashboards.",
    problem: "Static charts and reports limit how users interact with data. When users cannot filter or explore data dynamically, it becomes harder to uncover deeper insights.",
    solution: "Developed an interactive dashboard framework allowing users to upload datasets and explore them visually. Users can apply filters, adjust views, and drill into specific segments without requiring technical data skills.",
    outcome: "The dashboard democratizes data exploration, enabling non-technical users to draw their own conclusions through an intuitive interface.",
    tech: ["Python", "Plotly", "Matplotlib", "Streamlit"],
    featured: false,
    image: "/Dataforge.webp"
  },
  {
    id: "insight-ed",
    title: "InSightED",
    punchline: "Automated data summary utility",
    summary: "An exploratory analysis utility that accelerates data understanding by instantly generating statistical visual summaries.",
    problem: "Before meaningful analysis begins, raw data needs to be explored. This involves repetitive steps like checking distributions, identifying missing values, and spotting correlations.",
    solution: "Built a utility that ingests a dataset and automatically generates comprehensive summaries and visualizations. It calculates key statistics and highlights structural patterns to reduce time spent on repetitive manual analysis.",
    outcome: "The tool speeds up the crucial initial phase of data analysis, providing an instant, clear overview of new datasets.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    featured: false,
    image: "/InsightED.webp"
  },
  {
    id: "aerion",
    title: "Aerion",
    punchline: "Multi-cloud resource and cost monitor",
    summary: "A cloud management dashboard designed to track infrastructure usage, identify idle assets, and optimize cross-platform expenditure.",
    problem: "When applications run across different cloud providers, it becomes difficult to track usage and control costs. Teams often end up overspending on underutilized resources.",
    solution: "Developed a monitoring system that aggregates usage data from multiple cloud platforms into a clean, readable dashboard. It tracks resource consumption and highlights idle assets where costs can be immediately cut.",
    outcome: "The dashboard transforms scattered cloud metrics into a unified view, making cross-platform spending behavior transparent and actionable.",
    tech: ["Python", "Flask", "AWS", "GCP", "Azure"],
    featured: false,
    image: "/Aerion.webp"
  },
  {
    id: "gimmie",
    title: "Gimmie",
    punchline: "Centralized gym management platform",
    summary: "A role-based web application built to streamline member check-ins, subscription renewals, and overall facility operations.",
    problem: "Many small gyms manage memberships, attendance, and payments manually or across disconnected tools, limiting visibility for owners and frustrating members.",
    solution: "Built a full-stack platform with secure, role-based dashboards for admins, coaches, and members. The system centralizes registration, attendance logging, and fee tracking, ensuring everyone has the exact tools they need.",
    outcome: "The platform modernizes daily gym operations, reducing administrative errors and providing owners with clear visibility into their business.",
    tech: ["HTML", "CSS", "JavaScript", "Python (Flask)", "MySQL"],
    featured: false,
    image: "/Gimmie.webp"
  }
];
