import { dataGraphics } from '../../model/consts/consts';

import cls from './GraphicsPage.module.scss';
import { GraphicsNewYork } from '../GraphicsNewYork/GraphicsNewYork';
import { GraphicsCity } from '../GraphicsCity/GraphicsCity';
import { GraphicsStalker } from '../GraphicsStalker/GraphicsStalker';

const data = dataGraphics;

const GraphicsPage = () => {
  return (
    <div className={cls.GraphicsPage}>
      <div className={cls.wrapper}>
        <GraphicsNewYork />
        <GraphicsStalker />
        <GraphicsCity />
      </div>
    </div>
  );
};

export default GraphicsPage;
