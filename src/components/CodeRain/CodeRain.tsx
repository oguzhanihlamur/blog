import React, { useEffect, useRef } from 'react';
import styles from './CodeRain.module.css';
import '../../styles/theme.css';

export const CodeRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dropsRef = useRef<number[]>([]);
  const columnsRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const characters = 'ANTOZYAntozyantozy';
    const fontSize = 10;

    const initializeDrops = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columnsRef.current = Math.floor(canvas.width / fontSize);
      
      if (dropsRef.current.length !== columnsRef.current) {
        dropsRef.current = new Array(columnsRef.current).fill(0);
      }
    };

    initializeDrops();

    const draw = () => {
      const root = document.documentElement;
      const styles = getComputedStyle(root);
      const bgOpacity = styles.getPropertyValue('--global-bg-opacity').trim();
      const textColor = styles.getPropertyValue('--coderain-text-color').trim();

      ctx.fillStyle = bgOpacity;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = textColor;
      ctx.font = `bold ${fontSize}px monospace`;

      dropsRef.current.forEach((drop, i) => {
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drop * fontSize;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.98) {
          dropsRef.current[i] = 0;
        } else {
          dropsRef.current[i]++;
        }
      });
    };

    let animationFrameId: number;
    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const oldColumns = columnsRef.current;
      initializeDrops();

      if (oldColumns < columnsRef.current) {
        for (let i = oldColumns; i < columnsRef.current; i++) {
          dropsRef.current[i] = Math.floor(Math.random() * canvas.height / fontSize);
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}; 