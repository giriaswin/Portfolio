import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import os from "os";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Use OS temp directory for serverless environments (read-only filesystems)
  const dataPath = path.join(os.tmpdir(), 'portfolio_views.json');

  // API routes FIRST
  app.get("/api/views", (req, res) => {
    try {
      if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify({ views: 0 }));
      const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
      res.json(data);
    } catch (error) {
      console.error("GET /api/views error:", error);
      res.status(500).json({ error: "Failed to read views" });
    }
  });

  app.post("/api/views", (req, res) => {
    try {
      if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify({ views: 0 }));
      const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
      data.views += 1;
      fs.writeFileSync(dataPath, JSON.stringify(data));
      res.json(data);
    } catch (error) {
      console.error("POST /api/views error:", error);
      res.status(500).json({ error: "Failed to update views" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
