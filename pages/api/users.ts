import { NextApiRequest, NextApiResponse } from "next";
import users from '../../MOCK_DATA.json';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  console.log(users);
  res.status(200).json({users})
  } 