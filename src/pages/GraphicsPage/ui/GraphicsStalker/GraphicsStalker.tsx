import { GraphicsBlock } from '@/entities/GraphicsBlock/ui/GraphicsBlock';
import Stalker1 from '@/shared/assets/pictures/graphics/graphics-stalker-1.png';
import Stalker2 from '@/shared/assets/pictures/graphics/graphics-stalker-2.png';
import Stalker3 from '@/shared/assets/pictures/graphics/graphics-stalker-3.png';

const data = {
  name: 'STALKER',
  year: 2023,
  desc: 'In 2023, I created a series of works inspired by the film Stalker by director Andrei Tarkovsky for an assignment at Stroganov University. The works were done using watercolor and colored pencils, which allowed me to convey the softness and atmospheric depth of the natural landscape, a key element of the film. In each piece, I aimed to capture the mystical and philosophical atmosphere of the "Zone," where nature feels alive yet mysterious and incomprehensible. Forest scenes, blurred tree contours, muted colors, and dark silhouettes evoke a sense of eerie silence.',
  images: [{ img: Stalker1 }, { img: Stalker2 }, { img: Stalker3 }],
};

import cls from './GraphicsStalker.module.scss';

export const GraphicsStalker = () => {
  return (
    <div className={cls.mainWrapper}>
      <GraphicsBlock item={data} reverse />
    </div>
  );
};
