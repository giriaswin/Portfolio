# Giri Aswin - Personal Portfolio

A premium, multi-page portfolio website built with React, Vite, Tailwind CSS, and a lightweight Express backend for real-time viewer tracking.

## 🚀 Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   This will start both the Vite frontend and the Express backend concurrently on port 3000.

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm run start
   ```

## 📁 Folder Structure

```
/src
  /components      # Reusable UI components (Navbar, Footer, Modal, etc.)
  /pages           # Individual page components (Home, About, Projects, etc.)
  /data            # Static data files (projectsData.ts, servicesData.ts, etc.)
  /utils           # Utility functions (cn.ts for Tailwind class merging)
  App.tsx          # Main application routing
  main.tsx         # React entry point
  index.css        # Global styles and Tailwind configuration

/server
  server.ts        # Express backend for serving the app and handling API routes
  data.json        # Lightweight JSON database for viewer count (auto-generated)
```

## 📝 Editing Guide

This portfolio is designed to be easily editable without touching the core UI logic.

### Updating Content
All content is separated from the UI components. To update your projects, skills, or experience, simply edit the corresponding files in the `/src/data/` directory:
- `projectsData.ts`: Update your portfolio projects.
- `servicesData.ts`: Update the services you offer.
- `experienceData.ts`: Update your work history.
- `educationData.ts`: Update your academic background.
- `skillsData.ts`: Update your technical skills.
- `predictionsData.ts`: Update your ML prediction projects.

### Updating Design Tokens
Colors and fonts are defined as CSS variables in `/src/index.css`. To change the theme, modify the variables under the `@theme` block.

### Updating the Resume
To update the downloadable resume, replace the `/public/resume.pdf` file with your latest resume. (Note: You will need to create the `public` folder and add your PDF there if it doesn't exist).

## 🛠️ Architecture Notes
- **Routing**: Uses `react-router-dom` for client-side routing with `framer-motion` for page transitions.
- **Styling**: Uses Tailwind CSS v4 with custom theme variables.
- **Backend**: A lightweight Express server handles the `/api/views` endpoint to track real-time page views, storing data in `server/data.json`.
