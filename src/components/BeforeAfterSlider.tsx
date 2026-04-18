import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
  brandName?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  className = "",
  brandName = "SA"
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[1/1] md:aspect-[4/3] overflow-hidden rounded-sm select-none group/container ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/container:scale-[1.12] scale-110 object-bottom"
      />

      {/* Before Image (Clipping) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-700 group-hover/container:scale-[1.12] scale-110"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Slider Bar */}
      <div
        className="absolute inset-y-0 w-px bg-white/30 backdrop-blur-sm z-30 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{ 
              scale: isDragging ? 0.9 : 1,
              backgroundColor: isDragging ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.95)"
            }}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.2)] flex items-center justify-center border border-white/60 backdrop-blur-md cursor-ew-resize"
          >
            <div className="flex gap-2 items-center">
              <div className="w-0.5 h-4 bg-[#d89a5b]/70" />
              <div className="w-0.5 h-4 bg-[#d89a5b]/70" />
            </div>
          </motion.div>
          
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover/container:opacity-100 transition-all duration-500 whitespace-nowrap scale-90 group-hover/container:scale-100">
            <span className="text-[10px] tracking-[0.5em] uppercase text-white font-black drop-shadow-lg bg-black/10 px-4 py-1 backdrop-blur-sm">
              Slide
            </span>
          </div>
        </div>
      </div>

      {/* Labels - Refined Minimalist Style with Background for clarity */}
      <div className="absolute top-8 left-8 z-20 pointer-events-none">
        <div className="flex flex-col gap-0.5 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/10">
          <span className="text-[8px] tracking-[0.4em] uppercase text-white/60 font-medium">Concept</span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-white font-black">
            Before
          </span>
        </div>
      </div>
      
      <div className="absolute top-8 right-8 z-20 pointer-events-none text-right">
        <div className="flex flex-col gap-0.5 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/10 items-end">
          <span className="text-[8px] tracking-[0.4em] uppercase text-white/60 font-medium">Realized</span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-white font-black">
            After
          </span>
        </div>
      </div>

      {/* Interactive Overlay to capture movement anywhere */}
      <div className="absolute inset-0 z-40 cursor-ew-resize active:cursor-grabbing" />
    </div>
  );
};

export default BeforeAfterSlider;
