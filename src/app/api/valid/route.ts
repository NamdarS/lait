import { Configuration, OpenAIApi } from 'openai';
import { NextRequest, NextResponse } from 'next/server';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req: NextRequest) {
  try {
    const { latexCode } = await req.json();

    const prompt = `The following text may or may not be valid latex code: ${latexCode}}
                    process it so that it's valid latex code that can be rendered.
                    Do not return anything in your response but the actual latex code.`;
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${prompt}`,
      max_tokens: 50,
    });

    const latexCodeValid = { text: completion.data.choices[0].text };
    return new NextResponse(JSON.stringify(latexCodeValid), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.log('error', error);
    return new NextResponse(error.message || error.toString(), {
      status: error.status || 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
