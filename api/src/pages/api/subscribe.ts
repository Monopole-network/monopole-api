import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import NextCors from 'nextjs-cors';

const sendinblueApiKey = process.env.SENDINBLUE_API_KEY;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Run the cors middleware
  // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === 'POST') {
    const { email, listId } = req.body;
    console.log('email', email.EMAIL, listId);

    try {
      const response = await axios.post(
        'https://api.sendinblue.com/v3/contacts',
        {
          email: email.EMAIL,
          listIds: [listId],
        },
        {
          headers: {
            'api-key': sendinblueApiKey,
            'Content-Type': 'application/json',
          },
        }
      );

      res
        .status(response.status)
        .json({ message: 'User subscribed successfully' });
    } catch (error: any) {
      res
        .status(error.response.status)
        .json({ message: 'An error occurred while subscribing the user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
