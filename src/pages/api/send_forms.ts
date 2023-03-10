import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "@/utils/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    if (req.body) {
      const { db } = await connect();
      const body = {
        name: req.body.name,
        gender: req.body.gender,
      };
      db.collection("site_forms").insertOne(body);
    } else {
      res.status(500).json({ error: "no data on request body" });
    }
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "internal error" });
  }
}
