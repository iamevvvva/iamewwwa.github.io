import { GraphicsBlock } from '@/entities/GraphicsBlock/ui/GraphicsBlock';

import Stalker1 from '@/shared/assets/pictures/graphics/graphics-stalker-1.png';
import Stalker2 from '@/shared/assets/pictures/graphics/graphics-stalker-2.png';
import Stalker3 from '@/shared/assets/pictures/graphics/graphics-stalker-3.png';

const data = {
  name: 'STALKER',
  year: 2023,
  desc: 'GraphicsStalker',
  images: [{ img: Stalker1 }, { img: Stalker2 }, { img: Stalker3 }],
};

import cls from './GraphicsStalker.module.scss';

export const GraphicsStalker = () => {
  return (
    <section className={cls.mainWrapper}>
      <GraphicsBlock item={data} reverse />
    </section>
  );
};
