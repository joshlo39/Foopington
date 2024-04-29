import type { NextApiRequest, NextApiResponse } from 'next'
import {NextResponse} from 'next/server'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    console.log("Request: ", req.method, req.body);

    if (req.method === 'POST') {
        const { answer } = req.body;
        console.log("Answer: ", answer);

        if (answer.toLowerCase() === 'linus') {
            // Redirect correctly using the NextApiResponse object
            res.redirect(307, '/journal/');
        } else {
            // Respond with a JSON object for incorrect answers
            res.status(200).json({ message: 'Incorrect answer. Please try again.' });
        }
    } else {
        // Handle incorrect HTTP methods
        res.setHeader('Allow', ['POST']);
        res.status(405).end('Method Not Allowed');
    }
}



