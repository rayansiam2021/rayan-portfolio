import { useEffect, useRef, useCallback } from 'react';

const ElectricBorder = ({
  children,
  color = '#00f2ff', // Electric cyan
  speed = 1,
  chaos = 0.12,
  borderRadius = 24,
  className,
  style
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const timeRef = useRef(0);
  const lastFrameTimeRef = useRef(0);

  const random = useCallback(x => (Math.sin(x * 12.9898) * 43758.5453) % 1, []);

  const noise2D = useCallback((x, y) => {
    const i = Math.floor(x); const j = Math.floor(y);
    const fx = x - i; const fy = y - j;
    const a = random(i + j * 57); const b = random(i + 1 + j * 57);
    const c = random(i + (j + 1) * 57); const d = random(i + 1 + (j + 1) * 57);
    const ux = fx * fx * (3.0 - 2.0 * fx); const uy = fy * fy * (3.0 - 2.0 * fy);
    return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
  }, [random]);

  const octavedNoise = useCallback((x, octaves, lacunarity, gain, baseAmplitude, baseFrequency, time, seed, baseFlatness) => {
    let y = 0; let amplitude = baseAmplitude; let frequency = baseFrequency;
    for (let i = 0; i < octaves; i++) {
      let octaveAmplitude = i === 0 ? amplitude * baseFlatness : amplitude;
      y += octaveAmplitude * noise2D(frequency * x + seed * 100, time * frequency * 0.3);
      frequency *= lacunarity; amplitude *= gain;
    }
    return y;
  }, [noise2D]);

  const getCornerPoint = useCallback((centerX, centerY, radius, startAngle, arcLength, progress) => ({
    x: centerX + radius * Math.cos(startAngle + progress * arcLength),
    y: centerY + radius * Math.sin(startAngle + progress * arcLength)
  }), []);

  const getRoundedRectPoint = useCallback((t, left, top, width, height, radius) => {
    const sw = width - 2 * radius; const sh = height - 2 * radius;
    const arc = (Math.PI * radius) / 2; const total = 2 * sw + 2 * sh + 4 * arc;
    const dist = t * total; let acc = 0;

    if (dist <= (acc += sw)) return { x: left + radius + (dist - (acc - sw)) / sw * sw, y: top };
    if (dist <= (acc += arc)) return getCornerPoint(left + width - radius, top + radius, radius, -Math.PI / 2, Math.PI / 2, (dist - (acc - arc)) / arc);
    if (dist <= (acc += sh)) return { x: left + width, y: top + radius + (dist - (acc - sh)) / sh * sh };
    if (dist <= (acc += arc)) return getCornerPoint(left + width - radius, top + height - radius, radius, 0, Math.PI / 2, (dist - (acc - arc)) / arc);
    if (dist <= (acc += sw)) return { x: left + width - radius - (dist - (acc - sw)) / sw * sw, y: top + height };
    if (dist <= (acc += arc)) return getCornerPoint(left + radius, top + height - radius, radius, Math.PI / 2, Math.PI / 2, (dist - (acc - arc)) / arc);
    if (dist <= (acc += sh)) return { x: left, y: top + height - radius - (dist - (acc - sh)) / sh * sh };
    return getCornerPoint(left + radius, top + radius, radius, Math.PI, Math.PI / 2, (dist - acc) / arc);
  }, [getCornerPoint]);

  useEffect(() => {
    const canvas = canvasRef.current; const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    const borderOffset = 60;

    const updateSize = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width + borderOffset * 2; const h = rect.height + borderOffset * 2;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      return { w, h };
    };

    let { w, h } = updateSize();

    const draw = currentTime => {
      const deltaTime = (currentTime - lastFrameTimeRef.current) / 1000;
      timeRef.current += deltaTime * speed;
      lastFrameTimeRef.current = currentTime;
      ctx.setTransform(Math.min(window.devicePixelRatio || 1, 2), 0, 0, Math.min(window.devicePixelRatio || 1, 2), 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.strokeStyle = color; ctx.lineWidth = 1.5; ctx.lineCap = 'round'; ctx.lineJoin = 'round';

      const bw = w - 2 * borderOffset; const bh = h - 2 * borderOffset;
      const r = Math.min(borderRadius, Math.min(bw, bh) / 2);
      const sampleCount = Math.floor((2 * (bw + bh) + 2 * Math.PI * r) / 2);

      ctx.beginPath();
      for (let i = 0; i <= sampleCount; i++) {
        const p = i / sampleCount;
        const pt = getRoundedRectPoint(p, borderOffset, borderOffset, bw, bh, r);
        const xN = octavedNoise(p * 8, 10, 1.6, 0.7, chaos, 10, timeRef.current, 0, 0);
        const yN = octavedNoise(p * 8, 10, 1.6, 0.7, chaos, 10, timeRef.current, 1, 0);
        i === 0 ? ctx.moveTo(pt.x + xN * 60, pt.y + yN * 60) : ctx.lineTo(pt.x + xN * 60, pt.y + yN * 60);
      }
      ctx.stroke();
      animationRef.current = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => { const s = updateSize(); w = s.w; h = s.h; });
    ro.observe(container);
    animationRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(animationRef.current); ro.disconnect(); };
  }, [color, speed, chaos, borderRadius, octavedNoise, getRoundedRectPoint]);

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-visible isolation-auto ${className ?? ''}`} 
      style={{ ...style, borderRadius }}
    >
      {/* 1. THE SYNCED GLOW ENGINE (Border Glow) */}
      <div className="absolute inset-0 pointer-events-none z-0">
         
         {/* LAYER A: The "Bloom" (Soft background bleed) */}
         <div 
            className="absolute inset-[-20px] opacity-30 blur-3xl animate-pulse" 
            style={{ 
              background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
              borderRadius: borderRadius + 20 
            }} 
         />
         
         {/* LAYER B: The "Neon" (The thick glowing border) */}
         {/* We use a thick border with a heavy blur to make it look like a tube */}
         <div 
            className="absolute inset-[-4px] opacity-90 blur-xl border-[6px]" 
            style={{ borderColor: color, borderRadius: borderRadius + 4 }} 
         />

         {/* LAYER C: The "Inner Glow" (Added thickness to the edge) */}
         <div 
            className="absolute inset-[-1px] opacity-100 blur-sm border-[2px]" 
            style={{ borderColor: color, borderRadius: borderRadius }} 
         />
      </div>

      {/* 2. THE ELECTRIC SPARKS (Canvas - Synced to 'color' prop) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30">
        <canvas ref={canvasRef} className="block" />
      </div>

      {/* 3. THE CONTENT (Sits inside the glow) */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;