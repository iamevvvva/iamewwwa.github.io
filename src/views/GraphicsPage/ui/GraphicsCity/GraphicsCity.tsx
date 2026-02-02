import { GraphicsBlock } from '@/entities/GraphicsBlock/ui/GraphicsBlock';

const data = {
  name: 'CITY',
  year: 2021,
  desc: 'GraphicsCity',
  images: [
    { img: '/assets/pictures/graphics/graphics-city-1.png' },
    { img: '/assets/pictures/graphics/graphics-city-2.png' },
    { img: '/assets/pictures/graphics/graphics-city-3.png' },
  ],
};

import cls from './GraphicsCity.module.scss';

export const GraphicsCity = () => {
  return (
    <section className={cls.mainWrapper}>
      <GraphicsBlock item={data} />
    </section>
  );
};
