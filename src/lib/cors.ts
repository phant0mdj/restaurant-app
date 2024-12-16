import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Замените '*' на ваш домен для безопасности
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Ваша логика обработки запросов
    res.status(200).json({ message: 'CORS headers set' });
}
