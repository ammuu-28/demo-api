import { ChatVertexAI } from '@langchain/google-vertexai';
process.env.GOOGLE_APPLICATION_CREDENTIALS = 'F:/Dice/ai-backend-task/gemini_key.json';  

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
};



const model = new ChatVertexAI({
    model: 'gemini-1.5-flash',   
    temperature: 0,              
}).bindTools([add, subtract, multiply, divide]);



export const mathAgent = async (userMessage) => {
   
  try {

    const response = await model.invoke([
        { role: 'system', content: 'You are a math assistant. Solve math problems.' },
        { role: 'user', content: userMessage }
    ]);

   
    const extractResult = (content) => {
      // Match for a number in the response content
      const numberMatch = content.match(/= ([\d.]+)/);
      if (numberMatch) {
        return `The answer to your specified mathematical operation is ${numberMatch[1]}.`;
      }
    
      // Fallback if no number is found
      return content; 
    };
    
    const responseContent = response.content;
    return extractResult(responseContent);


  } catch (error) {

    console.error('Error in mathAgent:', error);
    throw new Error('Failed to process the math operation.');

  }
};
