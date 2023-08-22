import React, { FC, ChangeEvent, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLatexCode } from '../store/slices/latexSlice';

interface Props {
  OCR_API_ENDPOINT: string;
}

export const ImageUpload: FC<Props> = ({ OCR_API_ENDPOINT }) => {
  const dispatch = useDispatch();
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const image = files[0];

      if (image.type.startsWith('image/')) {
        setUploadedFileName(image.name);

        const formData = new FormData();
        formData.append('file', image);

        try {
          // Send image to OCR API
          const ocrResponse = await axios.post(OCR_API_ENDPOINT, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });
          const latexFromOCR = ocrResponse.data;

          // Update Redux state
          dispatch(setLatexCode(latexFromOCR));
        } catch (error: any) {
          console.error(
            'Error processing image:',
            error.response?.data || error.message
          );
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
      <label htmlFor="image-upload">
        📸
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden" // Hides the input but still makes it accessible via the label
        />
      </label>
      {uploadedFileName && <span>{uploadedFileName}</span>}
    </div>
  );
};
