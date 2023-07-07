import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST() {
  try {
    const imagePath = path.join(
      process.cwd(),
      'public',
      'images',
      'sample.png'
    );
    const imageBuffer = fs.readFileSync(imagePath);

    const form = new FormData();
    form.append('file', imageBuffer, {
      filename: 'image.png',
      contentType: 'image/png',
    });

    // Send POST request with axios
    const response = await axios.post('http://localhost:8502/predict/', form, {
      headers: form.getHeaders(),
    });

    // Extract the response data
    const latexCode = response.data;

    const prompt = `The following text may or may not be valid latex code: ${latexCode}}
                    process it so that it's valid latex code that can be rendered`;
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${prompt}`,
      max_tokens: 50,
    });

    const latexCodeValid = { text: completion.data.choices[0].text };
    return new Response(JSON.stringify(latexCodeValid), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(error.message || error.toString(), {
      status: error.status || 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
