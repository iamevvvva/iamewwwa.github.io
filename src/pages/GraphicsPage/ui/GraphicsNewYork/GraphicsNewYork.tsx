import { GraphicsBlock } from '@/entities/GraphicsBlock/ui/GraphicsBlock';
import NewYork1 from '@/shared/assets/pictures/graphics/graphics-new-york-1.png';
import NewYork2 from '@/shared/assets/pictures/graphics/graphics-new-york-2.png';
import NewYork3 from '@/shared/assets/pictures/graphics/graphics-new-york-3.png';

const data = {
  name: 'NEW YORK',
  year: 2022,
  desc: 'This etching, created using the "drypoint" technique, reflects my desire to convey an atmosphere of mystery and melancholy. In the foreground, I depicted a solitary figure standing in a field, surrounded by tall grass and fencing. The silhouette of the person is barely discernible against the twilight sky, which, in my view, evokes a sense of abandonment and loneliness.The drypoint method allowed me to achieve soft lines and deep shadows, adding texture and emotional richness to the work. The rough, scratchy strokes characteristic of this technique convey the roughness of the grass and branches, creating a sense of a damp and cool evening.',
  images: [{ img: NewYork1 }, { img: NewYork2 }, { img: NewYork3 }],
};

import cls from './GraphicsNewYork.module.scss';

export const GraphicsNewYork = () => {
  return (
    <div className={cls.mainWrapper}>
      <h1 className={cls.graphicsTitle}>Graphics</h1>
      <GraphicsBlock item={data} />
    </div>
  );
};
