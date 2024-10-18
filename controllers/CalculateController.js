import { mathAgent } from '../agents/mathAgent.js';

export const calculateController = async (req, res) => {
  try {
    const { message } = req.body;

    //input validation
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid input! An input message is required and it must be a string.' });
    }

    const response = await mathAgent(message);
    return res.status(200).json({ message: response });

  } catch (error) {
    
    console.error('Error in calculateController:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
