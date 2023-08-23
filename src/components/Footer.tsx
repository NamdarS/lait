export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-2 mt-8">
      <div className="container mx-auto text-center">
        <div className="space-x-4">
          <a
            href="https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes"
            className="text-castleton-green hover:underline"
          >
            Learn LaTeX
          </a>
          <a
            href="https://pix2tex.readthedocs.io/en/latest/"
            className="text-castleton-green hover:underline"
          >
            OCR API
          </a>
          <a
            href="https://namdarsadiq.vercel.app/"
            className="text-castleton-green hover:underline"
          >
            Creator
          </a>
        </div>
        <p className="text-gray-500 mt-4">Powered by GPT and pix2tex</p>
      </div>
    </footer>
  );
};
