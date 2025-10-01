import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text(`Hello from Vercel!`);
});

app.get("/db", (c) => {
  const dbUrl = process.env.DB_URL || "DB_URL not set";
  return c.text(`Database URL: ${dbUrl}`);
});

export default app;
