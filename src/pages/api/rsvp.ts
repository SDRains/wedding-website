import type { NextApiRequest, NextApiResponse } from "next";

// Minimal RSVP endpoint. Responses are only logged for now — hook this up to
// a real store (database, Google Sheet, email service, etc.) before launch.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, attending } = req.body ?? {};
  if (typeof name !== "string" || !name.trim() || typeof email !== "string" || !email.includes("@")) {
    return res.status(400).json({ error: "Name and a valid email are required." });
  }
  if (attending !== "yes" && attending !== "no") {
    return res.status(400).json({ error: "Please let us know if you're attending." });
  }

  console.log("[rsvp]", JSON.stringify(req.body));
  return res.status(200).json({ ok: true });
}
