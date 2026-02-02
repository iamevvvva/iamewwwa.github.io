'use client';

import cls from './GraphicsPage.module.scss';
import { GraphicsNewYork } from '../GraphicsNewYork/GraphicsNewYork';
import { GraphicsCity } from '../GraphicsCity/GraphicsCity';
import { GraphicsStalker } from '../GraphicsStalker/GraphicsStalker';
import { useEffect, useRef } from 'react';

const GraphicsPage = () => {
  const graphicsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (graphicsRef.current) graphicsRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <main className={cls.GraphicsPage} ref={graphicsRef}>
      <div className={cls.wrapper}>
        <GraphicsNewYork />
        <GraphicsStalker />
        <GraphicsCity />
      </div>
    </main>
  );
};

export default GraphicsPage;
