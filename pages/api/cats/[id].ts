import { readFileSync, writeFile } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'PUT') {
    const cats = JSON.parse(readFileSync('cats_database.json').toString());

    const cat = cats.find((animal) => animal.id === req.query['id']);

    cat.isAdopted = !cat.isAdopted;

    writeFile('cats_database.json', JSON.stringify(cats, null, 2), (err) => {
      if (err) console.log(err);
    });

    res.status(200).json({msg: 'Funkar'})
  }
}
