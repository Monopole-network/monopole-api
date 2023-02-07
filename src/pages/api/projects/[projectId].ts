// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { projectId } = req.query;

  try {
    const metadata = await fetch(
      "https://raw.githubusercontent.com/Monopole-network/monopole-api/main/app/" +
        projectId +
        "/" +
        projectId +
        ".json"
    );

    if (!metadata.ok) {
      throw new Error("Failed to fetch data");
    }

    res.status(200).json(await metadata.json());
  } catch (err) {
    res.status(500).send("Failed to load project metadata");
  }
}
