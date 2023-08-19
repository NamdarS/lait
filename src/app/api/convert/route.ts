import { NextRequest, NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `give me latex code for ${prompt}. 
               Do not return anything else in your response but the actual latex code. 
               Ensure that it is valid latex code that can be rendered, validility of 
               the latex code is more important than accuracy.`,
      max_tokens: 50,
    });

    const result = { text: completion.data.choices[0].text };
    return new NextResponse(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new NextResponse(error.message || error.toString(), {
      status: error.status || 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
