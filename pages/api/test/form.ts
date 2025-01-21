import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient, ServerApiVersion } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
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

    const { email, fName, lName, question, initialData } = req.body;
    const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    const client = new MongoClient(process.env.MONGO_URI!, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    try {
        await client.connect();
        const db = client.db('test');
        const collection = db.collection('feTest');

        // Check if the email or IP address already exists
        const existingEntry = await collection.findOne({
            $or: [{ email }, { ipAddress }],
        });

        // if existing entry is older than 2 days its ok to insert
        if (existingEntry && new Date().getTime() - existingEntry._id.getTimestamp().getTime() > 2 * 24 * 60 * 60 * 1000) {
            return res.status(420).json({
                message: 'Conflict: Email or IP address already exists.',
            });
        }

        // Insert new record if no conflict
        const response = await collection.insertOne({
            email,
            fName,
            lName,
            question,
            ipAddress,
            initialData,
        });

        console.log('Inserted new record:', response.insertedId);

        res.status(200).json({
            success: true,
            message: 'Test API endpoint works!',
        });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        await client.close();
    }
};