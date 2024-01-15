// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fsPromises from "fs/promises";
import { NextApiResponse } from "next";
import path from "path";

export default async function handler(
  req: { method: string },
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const pulsoPath = path.join(process.cwd(), "public/pulso.json");
    const pulso = await fsPromises.readFile(pulsoPath, "utf-8");
    const json = JSON.parse(pulso);
    return res.status(200).json(json);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
