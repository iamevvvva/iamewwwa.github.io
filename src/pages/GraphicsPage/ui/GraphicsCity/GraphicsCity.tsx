import { GraphicsBlock } from '@/entities/GraphicsBlock/ui/GraphicsBlock';
import GraphicsCity1 from '@/shared/assets/pictures/graphics/graphics-city-1.png';
import GraphicsCity2 from '@/shared/assets/pictures/graphics/graphics-city-2.png';
import GraphicsCity3 from '@/shared/assets/pictures/graphics/graphics-city-3.png';

const data = {
  name: 'CITY',
  year: 2021,
  desc: 'In 2021, I created a series of graphic works using ink and ballpoint pen for an assignment at Stroganov University, where I had to depict the architecture of Russian cities. In my works, I aimed to convey the bleakness and isolation of old urban neighborhoods, focusing on the textures of facades, balconies, and wires.I used sharp lines and deep shadows to emphasize the decay and abandonment of these places. The ballpoint pen allowed me to create precise strokes, adding texture and structure, while the black-and-white palette enhanced the melancholic atmosphere of the architectural scenes.',
  images: [{ img: GraphicsCity1 }, { img: GraphicsCity2 }, { img: GraphicsCity3 }],
};

import cls from './GraphicsCity.module.scss';

export const GraphicsCity = () => {
  return (
    <div className={cls.mainWrapper}>
      <GraphicsBlock item={data} />
    </div>
  );
};
