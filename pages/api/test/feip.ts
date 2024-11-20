import type { NextApiResponse } from 'next'
import { NextRequest } from 'next/server';

type Data = {
    name: string,
    ipAdd: string | null
}

export default function handler(
    req: NextRequest,
    res: NextApiResponse<Data>
) {
    const ipAdd = req.ip;
    console.log(ipAdd);

    if (!ipAdd) {
        console.error('No IP address found in request');
        res.status(500).json({ name: 'John Doe', ipAdd: null });
    } else {
        console.info(`IP address found: ${ipAdd}`);
        res.status(200).json({ name: 'John Doe', ipAdd });
    }
}
