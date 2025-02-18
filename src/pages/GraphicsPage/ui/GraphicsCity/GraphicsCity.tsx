import { GraphicsBlock } from '@/entities/GraphicsBlock/ui/GraphicsBlock';
import GraphicsCity1 from '@/shared/assets/pictures/graphics/graphics-city-1.png';
import GraphicsCity2 from '@/shared/assets/pictures/graphics/graphics-city-2.png';
import GraphicsCity3 from '@/shared/assets/pictures/graphics/graphics-city-3.png';

const data = {
  name: 'CITY',
  year: 2021,
  desc: 'GraphicsCity',
  images: [{ img: GraphicsCity1 }, { img: GraphicsCity2 }, { img: GraphicsCity3 }],
};

import cls from './GraphicsCity.module.scss';

export const GraphicsCity = () => {
  return (
    <section className={cls.mainWrapper}>
      <GraphicsBlock item={data} />
    </section>
  );
};
