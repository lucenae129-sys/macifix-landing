import { useState, useRef } from 'react';

export default function BeforeAfterImage({ beforeImage, afterImage, direction = 'horizontal', objectFit = 'cover' }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (event) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    let clientX, clientY;
    if (event.touches) {
      clientX = event.touches[0].clientX;
      clientY = event.touches[0].clientY;
    } else {
      clientX = event.clientX;
      clientY = event.clientY;
    }

    if (direction === 'horizontal') {
      const position = ((clientX - left) / width) * 100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    } else {
      const position = ((clientY - top) / height) * 100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full ${direction === 'horizontal' ? 'cursor-col-resize' : 'cursor-row-resize'} overflow-hidden rounded-2xl bg-black shadow-2xl`}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Before Image (Base) */}
      <img 
        src={beforeImage} 
        alt="Antes"
        className={`absolute inset-0 w-full h-full pointer-events-none ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
      />
      
      {/* Before Label */}
      <div className={`absolute ${direction === 'horizontal' ? 'top-4 left-4' : 'top-4 left-4'} bg-black/70 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full z-10 border border-white/10`}>
        ANTES
      </div>

      {/* After Image (Clipped) */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        style={{ 
          clipPath: direction === 'horizontal' 
            ? `inset(0 0 0 ${sliderPosition}%)` 
            : `inset(${sliderPosition}% 0 0 0)` 
        }}
      >
         <img 
           src={afterImage} 
           alt="Después"
           className={`absolute inset-0 w-full h-full pointer-events-none ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
         />
         {/* After Label */}
         <div className={`absolute ${direction === 'horizontal' ? 'top-4 right-4' : 'bottom-4 left-4'} bg-blue-600/90 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full border border-white/20`}>
           DESPUÉS
         </div>
      </div>

      {/* Slider Line */}
      <div 
        className={`absolute bg-white pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.5)] z-30 ${
          direction === 'horizontal' 
            ? 'top-0 bottom-0 w-[2px] md:w-[3px]' 
            : 'left-0 right-0 h-[2px] md:h-[3px]'
        }`}
        style={{ 
          left: direction === 'horizontal' ? `${sliderPosition}%` : '0', 
          top: direction === 'vertical' ? `${sliderPosition}%` : '0',
          transform: direction === 'horizontal' ? 'translateX(-50%)' : 'translateY(-50%)'
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-xl">
           <div className={direction === 'horizontal' ? 'flex gap-1' : 'flex flex-col gap-1'}>
             <div className={`${direction === 'horizontal' ? 'w-[2px] h-3 md:h-4' : 'h-[2px] w-3 md:w-4'} bg-blue-600 rounded-full`}></div>
             <div className={`${direction === 'horizontal' ? 'w-[2px] h-3 md:h-4' : 'h-[2px] w-3 md:w-4'} bg-blue-600 rounded-full`}></div>
           </div>
        </div>
      </div>
    </div>
  );
}
