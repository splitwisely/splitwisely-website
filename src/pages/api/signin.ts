import { NextApiRequest, NextApiResponse } from 'next';
import { signIn } from '../../utils/auth';

const signin = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { email, password } = req.body;

  try {
    const response = await signIn(email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send({ success: false, error: error });
  }
};

export default signin;
