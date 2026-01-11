import React, { useRef, useState } from 'react';
import { Download, Image as ImageIcon, Loader2 } from 'lucide-react';
import { Language, translations } from '../translations';

interface BrandGeneratorProps {
  language: Language;
}

const BrandGenerator: React.FC<BrandGeneratorProps> = ({ language }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const t = translations[language].dashboard.brand_gen;

  const generateAndDownload = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    setIsGenerating(true);
    
    // Simulate a brief delay for UX
    await new Promise(resolve => setTimeout(resolve, 800));

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- Configuration ---
    const WIDTH = 1080;
    const HEIGHT = 1080;
    
    // Colors
    const BG_COLOR = '#1c1917'; // Stone 900 (Dark)
    const TEXT_COLOR = '#f5f5f4'; // Stone 100 (Paper)
    const ACCENT_COLOR = '#d97706'; // Amber 600

    // Clear Canvas
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // --- Draw Content ---
    
    // 1. Tagline Top
    ctx.fillStyle = ACCENT_COLOR;
    ctx.font = 'bold 24px "Inter"'; // Fallback font first
    // Need to ensure font is loaded, but for canvas direct drawing we assume system/web font matches
    ctx.textAlign = 'center';
    ctx.letterSpacing = '4px'; // Canvas letterSpacing support is recent, manual adjustment might be needed if old browser
    ctx.fillText('EST. 2020 • ACADEMIC SOLUTIONS', WIDTH / 2, 280);

    // 2. Main Logo "HOMEWORK"
    ctx.fillStyle = TEXT_COLOR;
    ctx.font = '900 130px "Space Grotesk", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('HOMEWORK', WIDTH / 2, HEIGHT / 2 - 20);

    // 3. Sub Logo "TERMINATOR"
    ctx.font = '300 130px "Space Grotesk", sans-serif';
    ctx.fillText('TERMINATOR.', WIDTH / 2, HEIGHT / 2 + 110);

    // 4. Accent Line
    ctx.beginPath();
    ctx.moveTo(WIDTH / 2 - 100, HEIGHT / 2 + 180);
    ctx.lineTo(WIDTH / 2 + 100, HEIGHT / 2 + 180);
    ctx.strokeStyle = ACCENT_COLOR;
    ctx.lineWidth = 6;
    ctx.stroke();
    
    // 5. Bottom Text
    ctx.font = 'italic 30px "Noto Sans TC", sans-serif';
    ctx.fillStyle = '#a8a29e'; // Stone 400
    ctx.fillText('Professional Counselling & Ghostwriting', WIDTH / 2, HEIGHT - 250);

    // --- Convert & Download ---
    try {
        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
        const link = document.createElement('a');
        link.download = 'HomeworkTerminator-Brand-IG.jpg';
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (e) {
        console.error("Download failed", e);
    } finally {
        setIsGenerating(false);
    }
  };

  return (
    <div className="border border-black bg-white p-8">
      <div className="flex items-center gap-3 mb-6">
        <ImageIcon size={24} className="text-accent" />
        <h3 className="text-xl font-bold uppercase">{t?.title || 'Brand Asset Generator'}</h3>
      </div>
      <p className="text-sm text-gray-500 mb-8 max-w-lg">
        {t?.subtitle || 'Generate official brand logo images optimized for Instagram (1080x1080).'}
      </p>

      {/* Hidden Canvas for Rendering */}
      <canvas 
        ref={canvasRef} 
        width={1080} 
        height={1080} 
        className="hidden"
      />

      <button 
        onClick={generateAndDownload}
        disabled={isGenerating}
        className="bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto justify-center"
      >
        {isGenerating ? (
            <>
                <Loader2 size={18} className="animate-spin" /> Generating...
            </>
        ) : (
            <>
                <Download size={18} /> {t?.btn_download || 'Download JPG'}
            </>
        )}
      </button>
      
      <p className="mt-4 text-[10px] text-gray-400 font-mono uppercase">
        * Generates a High-Res 1080px JPG file.
      </p>
    </div>
  );
};

export default BrandGenerator;