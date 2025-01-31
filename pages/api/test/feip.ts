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
    const forwarded = req.headers["x-forwarded-for"];
    console.log(forwarded);
    let ipAdd = null;

    if (typeof forwarded === 'string') {
        console.log("forwarded", forwarded);
        ipAdd = forwarded ? forwarded.split(/, /)[0] : req.socket.remoteAddress;
    } else if (Array.isArray(forwarded)) {
        console.log("forwarded", forwarded);
        ipAdd = forwarded[0];
    } else {
        console.log("req.socket.remoteAddress", req.socket.remoteAddress);
        ipAdd = req.socket.remoteAddress;
    }

    console.log(ipAdd);
    console.log(req.socket);

    if (!ipAdd) {
        console.error('No IP address found in request');
        res.status(500).json({ name: 'John Doe', ipAdd: null });
    } else {
        console.info(`IP address found: ${ipAdd}`);
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Max-Age', '86400');
        res.setHeader('Vary', 'Origin');
        res.status(200).json({ name: 'John Doe', ipAdd });
    }
}
