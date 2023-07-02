import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  const prompt = 'integral from 2 to 8 of square root of x plus theta';
  try {
    const completion = await openai.createCompletion({
      model: 'gpt-3.5-turbo',
      prompt: prompt,
      max_tokens: 50,
    });

    const result = { text: completion.data.choices[0].text };
    console.log(result);
    response.status(200).json(result);
  } catch (error: any) {
    response.status(500).json({ error: error.message });
  }
}
