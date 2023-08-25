import { NextApiRequest, NextApiResponse } from "next";
import users from '../../MOCK_DATA.json';
import cats from '../../cats_database.json';
import fs from 'fs';

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET'){
    res.status(200).json({cats})
  }
  if (req.method === 'POST') {

  }
  } 

  
