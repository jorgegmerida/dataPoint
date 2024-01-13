// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fsPromises from "fs/promises";
import path from "path";

export default async function handler(
  req: { method: string },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): void; new (): any };
    };
  }
) {
  if (req.method === "GET") {
    const dataPerMonthsPath = path.join(
      process.cwd(),
      "public/dataPerMonths.json"
    );
    const dataPerMonths = await fsPromises.readFile(dataPerMonthsPath, "utf-8");
    const json = JSON.parse(dataPerMonths);
    return res.status(200).json(json);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
