export const calculateController = async (req, res) => {
  try {
    const { message } = req.body;

    // Input validation
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid input! An input message is required and it must be a string.' });
    }

    // Extract numbers from the message string
    const numbers = message.match(/-?\d+(\.\d+)?/g)?.map(Number);

    if (!numbers || numbers.length < 2) {
      return res.status(400).json({ error: 'Please provide at least two numbers in the message to add.' });
    }

    // Calculate the sum of the first two numbers
    const sum = numbers[0] + numbers[1];

    return res.status(200).json({ message: `The sum is ${sum}` });

  } catch (error) {
    console.error('Error in calculateController:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
