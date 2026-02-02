import { GraphicsBlock } from '@/entities/GraphicsBlock/ui/GraphicsBlock';

const data = {
  name: 'STALKER',
  year: 2023,
  desc: 'GraphicsStalker',
  images: [
    { img: '/assets/pictures/graphics/graphics-stalker-1.png' },
    { img: '/assets/pictures/graphics/graphics-stalker-2.png' },
    { img: '/assets/pictures/graphics/graphics-stalker-3.png' },
  ],
};

import cls from './GraphicsStalker.module.scss';

export const GraphicsStalker = () => {
  return (
    <section className={cls.mainWrapper}>
      <GraphicsBlock item={data} reverse />
    </section>
  );
};
