import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  RotateCcw, 
  Check, 
  X, 
  Move, 
  RotateCcw as ResetIcon, 
  Crop,
  Sparkles
} from 'lucide-react';

export interface ImageCropModalProps {
  isOpen: boolean;
  imageSrc: string | null;
  onCropComplete: (croppedDataUrl: string) => void;
  onClose: () => void;
}

export const ImageCropModal: React.FC<ImageCropModalProps> = ({
  isOpen,
  imageSrc,
  onCropComplete,
  onClose
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageObj, setImageObj] = useState<HTMLImageElement | null>(null);

  // Transform states
  const [zoom, setZoom] = useState<number>(1);
  const [rotation, setRotation] = useState<number>(0);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Load image when imageSrc changes
  useEffect(() => {
    if (!imageSrc) {
      setImageObj(null);
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setImageObj(img);
      // Reset transforms
      setZoom(1);
      setRotation(0);
      setPanOffset({ x: 0, y: 0 });
    };
    img.src = imageSrc;
  }, [imageSrc]);

  // Canvas size for editing workspace
  const CANVAS_SIZE = 320;
  const CROP_RADIUS = 120; // 240px diameter crop circle

  // Draw main interactive canvas
  const drawMainCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || !imageObj) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // Save state
    ctx.save();

    // Move to canvas center + pan offset
    ctx.translate(CANVAS_SIZE / 2 + panOffset.x, CANVAS_SIZE / 2 + panOffset.y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(zoom, zoom);

    // Calculate aspect-ratio fit dimensions
    const minDim = Math.min(imageObj.width, imageObj.height);
    const scale = (CROP_RADIUS * 2) / minDim;
    const drawW = imageObj.width * scale;
    const drawH = imageObj.height * scale;

    ctx.drawImage(imageObj, -drawW / 2, -drawH / 2, drawW, drawH);

    ctx.restore();

    // Draw dark overlay with transparent circular hole (Crop Mask)
    ctx.save();
    ctx.fillStyle = 'rgba(15, 23, 42, 0.65)'; // Slate-900 transparent
    ctx.beginPath();
    // Outer boundary
    ctx.rect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    // Inner transparent circle (counter-clockwise)
    ctx.arc(CANVAS_SIZE / 2, CANVAS_SIZE / 2, CROP_RADIUS, 0, Math.PI * 2, true);
    ctx.fill();

    // Draw circular guideline border
    ctx.strokeStyle = '#10B981'; // Emerald-500
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(CANVAS_SIZE / 2, CANVAS_SIZE / 2, CROP_RADIUS, 0, Math.PI * 2);
    ctx.stroke();

    // Draw center crosshair guide (subtle)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    // Horizontal
    ctx.beginPath();
    ctx.moveTo(CANVAS_SIZE / 2 - 30, CANVAS_SIZE / 2);
    ctx.lineTo(CANVAS_SIZE / 2 + 30, CANVAS_SIZE / 2);
    ctx.stroke();
    // Vertical
    ctx.beginPath();
    ctx.moveTo(CANVAS_SIZE / 2, CANVAS_SIZE / 2 - 30);
    ctx.lineTo(CANVAS_SIZE / 2, CANVAS_SIZE / 2 + 30);
    ctx.stroke();

    ctx.restore();

    // Also update mini preview
    drawPreview();
  }, [imageObj, zoom, rotation, panOffset]);

  // Draw small circular preview
  const drawPreview = useCallback(() => {
    const previewCanvas = previewCanvasRef.current;
    if (!previewCanvas || !imageObj) return;

    const ctx = previewCanvas.getContext('2d');
    if (!ctx) return;

    const size = 64;
    ctx.clearRect(0, 0, size, size);

    ctx.save();
    // Circular clip
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.clip();

    // Background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, size, size);

    // Render scaled image exactly as cropped
    const scaleFactor = size / (CROP_RADIUS * 2);
    ctx.translate(size / 2 + panOffset.x * scaleFactor, size / 2 + panOffset.y * scaleFactor);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(zoom * scaleFactor, zoom * scaleFactor);

    const minDim = Math.min(imageObj.width, imageObj.height);
    const baseScale = (CROP_RADIUS * 2) / minDim;
    const drawW = imageObj.width * baseScale;
    const drawH = imageObj.height * baseScale;

    ctx.drawImage(imageObj, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();
  }, [imageObj, zoom, rotation, panOffset]);

  useEffect(() => {
    drawMainCanvas();
  }, [drawMainCanvas]);

  // Drag handlers (Mouse & Touch)
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - panOffset.x,
        y: e.touches[0].clientY - panOffset.y
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPanOffset({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Reset all adjustments
  const handleReset = () => {
    setZoom(1);
    setRotation(0);
    setPanOffset({ x: 0, y: 0 });
  };

  // Crop and generate crisp square Base64 Data URL (256x256)
  const handleSaveCrop = () => {
    if (!imageObj) return;

    try {
      const outputCanvas = document.createElement('canvas');
      const outputSize = 256;
      outputCanvas.width = outputSize;
      outputCanvas.height = outputSize;

      const ctx = outputCanvas.getContext('2d');
      if (!ctx) return;

      // Draw background white/transparent
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, outputSize, outputSize);

      ctx.save();
      const scaleFactor = outputSize / (CROP_RADIUS * 2);
      ctx.translate(outputSize / 2 + panOffset.x * scaleFactor, outputSize / 2 + panOffset.y * scaleFactor);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.scale(zoom * scaleFactor, zoom * scaleFactor);

      const minDim = Math.min(imageObj.width, imageObj.height);
      const baseScale = (CROP_RADIUS * 2) / minDim;
      const drawW = imageObj.width * baseScale;
      const drawH = imageObj.height * baseScale;

      ctx.drawImage(imageObj, -drawW / 2, -drawH / 2, drawW, drawH);
      ctx.restore();

      const croppedDataUrl = outputCanvas.toDataURL('image/jpeg', 0.92);
      onCropComplete(croppedDataUrl);
      onClose();
    } catch (err) {
      console.error('Failed to crop image:', err);
    }
  };

  if (!isOpen || !imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <Crop className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 dark:text-white">
                फोटो काँटछाँट गर्नुहोस् (Crop & Zoom)
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                फोटोलाई तानेर मिलाउनुहोस्, जुम गर्नुहोस् वा घुमाउनुहोस्
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Interactive Canvas Stage */}
        <div className="p-5 flex flex-col items-center space-y-4">
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 bg-slate-950 flex items-center justify-center select-none">
            <canvas
              ref={canvasRef}
              width={CANVAS_SIZE}
              height={CANVAS_SIZE}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`cursor-${isDragging ? 'grabbing' : 'grab'} touch-none`}
            />

            {/* Helper drag icon pill */}
            <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-sm text-[10px] font-bold text-white flex items-center gap-1 border border-white/10 pointer-events-none">
              <Move className="w-3 h-3 text-emerald-400" />
              <span>तानेर सारेर मिलाउनुहोस् (Drag to move)</span>
            </div>

            {/* Live circular preview in corner */}
            <div className="absolute bottom-2.5 right-2.5 flex flex-col items-center gap-1 pointer-events-none bg-slate-900/90 backdrop-blur-md p-1.5 rounded-2xl border border-white/15 shadow-xl">
              <canvas
                ref={previewCanvasRef}
                width={64}
                height={64}
                className="w-12 h-12 rounded-full border-2 border-emerald-500 shadow-md"
              />
              <span className="text-[9px] font-bold text-emerald-400">पूर्वावलोकन</span>
            </div>
          </div>

          {/* Controls: Zoom & Rotate */}
          <div className="w-full space-y-3 pt-1">
            {/* Zoom Slider */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(0.6, +(z - 0.15).toFixed(2)))}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <div className="flex-1 flex items-center gap-2">
                <input
                  type="range"
                  min="0.6"
                  max="3"
                  step="0.05"
                  value={zoom}
                  onChange={(e) => setZoom(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 w-10 text-right">
                  {Math.round(zoom * 100)}%
                </span>
              </div>

              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(3, +(z + 0.15).toFixed(2)))}
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Rotation & Reset Actions */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setRotation((r) => (r - 90 + 360) % 360)}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                  title="बायाँ ९०° घुमाउनुहोस्"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-emerald-500" />
                  <span>-९०°</span>
                </button>

                <button
                  type="button"
                  onClick={() => setRotation((r) => (r + 90) % 360)}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                  title="दायाँ ९०° घुमाउनुहोस्"
                >
                  <RotateCw className="w-3.5 h-3.5 text-emerald-500" />
                  <span>+९०°</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                  title="रिसेट गर्नुहोस्"
                >
                  <ResetIcon className="w-3.5 h-3.5" />
                  <span>रिसेट</span>
                </button>
              </div>

              <span className="text-[11px] font-semibold text-slate-400">
                कोण: {rotation}°
              </span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-4 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
          >
            रद्द गर्नुहोस्
          </button>

          <button
            type="button"
            onClick={handleSaveCrop}
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black flex items-center gap-1.5 shadow-md hover:shadow-emerald-600/30 transition cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>काँटछाँट र सुरक्षित गर्नुहोस् (Crop & Save)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
