import fetch from "node-fetch";

export default async function handler(req, res) {
  const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
  const FILE_KEY = process.env.FIGMA_FILE_KEY;

  if (req.method === "GET") {
    try {
      const r = await fetch(`https://api.figma.com/v1/files/${FILE_KEY}`, {
        headers: { "X-Figma-Token": FIGMA_TOKEN }
      });
      const data = await r.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else if (req.method === "POST") {
    const { nodeId, newText } = req.body;
    res.status(200).json({ ok: true, nodeId, newText });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
