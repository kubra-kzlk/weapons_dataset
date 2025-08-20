import { Weapon } from '../../types';
import type {  NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) { 
    const response = await fetch('https://raw.githubusercontent.com/kubra-kzlk/weapons_dataset/main/dataset.json');
    const weapons = await response.json();

    res.status(200).json(weapons);
}