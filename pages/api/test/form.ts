import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ServerApiVersion } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    if (!req.body) {
        return res.status(400).json({ message: 'Bad Request' });
    }

    const { email, fName, lName, question } = req.body;
    const client = new MongoClient(process.env.MONGO_URI!, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    await client.connect();

    const db = client.db('test');

    const response = await db.collection('feTest').insertOne({
        email,
        fName,
        lName,
        question,
    });
    res.status(200).json(response);
};
