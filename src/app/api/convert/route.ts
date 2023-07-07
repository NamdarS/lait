import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST() {
  const prompt = 'integral from 2 to 8 of square root of x plus theta';
  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `give me latex code for ${prompt}`,
      max_tokens: 50,
    });

    const result = { text: completion.data.choices[0].text };
    console.log(result);

    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(error.message || error.toString(), {
      status: error.status || 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
