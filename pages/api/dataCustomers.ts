// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fsPromises from "fs/promises";
import { NextApiResponse } from "next";
import path from "path";

export default async function handler(
  req: { method: string },
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const customersPath = path.join(process.cwd(), "public/customers.json");
    const customers = await fsPromises.readFile(customersPath, "utf-8");
    const json = JSON.parse(customers);
    return res.status(200).json(json);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
