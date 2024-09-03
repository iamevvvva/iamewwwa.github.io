import { GraphicsBlock } from '@/entities/GraphicsBlock/ui/GraphicsBlock';
import Stalker1 from '@/shared/assets/pictures/graphics/graphics-stalker-1.png';
import Stalker2 from '@/shared/assets/pictures/graphics/graphics-stalker-2.png';
import Stalker3 from '@/shared/assets/pictures/graphics/graphics-stalker-3.png';

const data = {
  name: 'STALKER',
  year: 2023,
  desc: 'This etching, created using the "drypoint" technique, reflects my desire to convey an atmosphere of mystery and melancholy. In the foreground, I depicted a solitary figure standing in a field, surrounded by tall grass and fencing. The silhouette of the person is barely discernible against the twilight sky, which, in my view, evokes a sense of abandonment and loneliness.The drypoint method allowed me to achieve soft lines and deep shadows, adding texture and emotional richness to the work. The rough, scratchy strokes characteristic of this technique convey the roughness of the grass and branches, creating a sense of a damp and cool evening.',
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
