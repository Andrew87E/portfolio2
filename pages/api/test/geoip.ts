import type { NextApiRequest, NextApiResponse } from 'next'

type Data = any;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // we want to pull data about the ip address of the request req.body.ip
    const ip = req.query.ip;
    console.log(ip);
    const url = `https://api.findip.net/${ip}/?token=${process.env.FINDIP_API_KEY}`;
    const fetchRes = await fetch(url);

    if (fetchRes.ok) {
        const data = await fetchRes.json();
        console.log('Data fetched successfully', data);
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Max-Age', '86400');
        res.setHeader('Vary', 'Origin');
        res.status(200).json(data);
    } else {
        console.error('Error fetching data');
        res.status(500).json({ error: 'Error fetching data' });
    }
}
