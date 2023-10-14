import { NextApiRequest, NextApiResponse } from 'next';
import { signUp } from '../../utils/auth';

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { email, password } = req.body;

  try {
    const response = await signUp(email, password);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send({ success: false, error: error });
  }
};

export default signup;
