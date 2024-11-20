import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string,
    ipAdd: string | null
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // we want to capture the ip address of the request
    const ipAdd = req.socket.remoteAddress || null;
    console.log(ipAdd);

    if (!ipAdd) {
        console.error('No IP address found in request');
        res.status(500).json({ name: 'John Doe', ipAdd: null });
    } else {
        console.info(`IP address found: ${ipAdd}`);
        res.status(200).json({ name: 'John Doe', ipAdd });
    }
}
