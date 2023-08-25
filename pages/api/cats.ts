import { NextApiRequest, NextApiResponse } from 'next';
import users from '../../MOCK_DATA.json';
// import cats from '../../cats_database.json';
import fs, { readFileSync } from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const cats = JSON.parse(readFileSync('cats_database.json').toString());
  if (req.method === 'GET') {
    console.log(cats);

    res.status(200).json({ cats });
  }
  if (req.method === 'PUT') {
  }
}
