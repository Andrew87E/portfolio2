import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, fName, lName, question } = req.body;
    const credentials = process.env.MONGODB_CERT!;
    const client = new MongoClient(process.env.MONGO_URI!, {
        tlsCertificateKeyFile: credentials,
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
