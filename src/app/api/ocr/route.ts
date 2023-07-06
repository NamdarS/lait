import fetch from 'node-fetch';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

export async function POST() {
  try {
    const imagePath = path.join(
      process.cwd(), 'public', 'images', 'sample.png'
    );
    const imageBuffer = fs.readFileSync(imagePath);

    const form = new FormData();
    form.append('file', imageBuffer, {
      filename: 'image.png',
      contentType: 'image/png',
    });

    const response = await fetch('http://localhost:8502/predict/', {
      method: 'POST',
      body: form,
      headers: form.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const latexCode = await response.text();
    return new Response(JSON.stringify(latexCode), {
      headers: { 'Content-Type': 'application/json' },
    });
 
  } catch (error: any) {
    return new Response(error.message || error.toString(), {
      status: error.status || 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
