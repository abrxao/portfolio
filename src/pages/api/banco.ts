import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "@/utils/database";

type Data = {
  name: string;
  gender: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> {
  if (req.body) {
    const { db } = await connect();
    const body = {
      name: req.body.name,
      gender: req.body.gender
    };
    await db.collection("site_forms").insertOne(body);
  }
}
