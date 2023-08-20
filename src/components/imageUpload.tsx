import React, { FC, ChangeEvent } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLatexCode } from '../store/slices/latexSlice';

interface Props {
  OCR_API_ENDPOINT: string;
}

export const ImageUpload: FC<Props> = ({ OCR_API_ENDPOINT }) => {
  const dispatch = useDispatch();

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const image = files[0];

      if (image.type.startsWith('image/')) {
        const formData = new FormData();
        formData.append('file', image);
     
        try {
          // Send image to OCR API
          const ocrResponse = await axios.post(OCR_API_ENDPOINT, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          const latexFromOCR = ocrResponse.data; // Adjust based on your API's response structure

          // Update Redux state
          dispatch(setLatexCode(latexFromOCR));
        } catch (error: any) {
          console.error('Error processing image:', error.response.data);
          // Optionally, show an error message to the user
        }
      } else {
        console.error('Uploaded file is not an image.');
        // Optionally show an error message to the user
      }
    }
  };

  return (
    <div>
      <label htmlFor="image-upload">Upload an Image:</label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
    </div>
  );
};
