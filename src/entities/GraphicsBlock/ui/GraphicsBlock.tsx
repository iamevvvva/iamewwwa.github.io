import { Text } from '@/shared/ui/Text';
import cls from './GraphicsBlock.module.scss';
import classNames from 'classnames';
import { LazyImg } from '@/shared/ui/LazyImg/LazyImg';

interface GraphicsBlockProps {
  item: any;
  reverse?: boolean;
}

const ReverseGraphicsBlock = ({ item }) => {
  return (
    <div className={cls.mainImg}>
      <div className={classNames(cls.block, {}, [cls.blockReverse])}>
        <div className={classNames(cls.blockTitle, {}, [cls.blockTitleReverse])}>
          <Text align="center" title={item.name} className={cls.mainTitle} />
          <Text align="center" title={item.year} className={cls.titleYear} />
          <div className={cls.desc}>{item.desc}</div>
        </div>
      </div>
      {item.images.map((el, index) => (
        <LazyImg src={el.img} alt={'img'} className={`${cls[`imgGraphics-${index + 1}-reverse`]}`} />
      ))}
    </div>
  );
};

const MainGraphicsBlock = ({ item }) => {
  return (
    <div className={cls.mainImg}>
      <div className={classNames(cls.block, {}, [cls.mainGraphicBlock])}>
        <div className={classNames(cls.blockTitle, {}, [cls.mainGraphicTitleBlock])}>
          <Text align="center" title={item.name} className={cls.mainTitle} />
          <Text align="center" title={item.year} className={cls.titleYear} />
          <div className={cls.desc}>{item.desc}</div>
        </div>
      </div>
      {item.images.map((el, index) => (
        <LazyImg src={el.img} alt={'img'} className={`${cls[`imgGraphics-${index + 1}`]}`} />
      ))}
    </div>
  );
};

export const GraphicsBlock = (props: GraphicsBlockProps) => {
  const { item, reverse = false } = props;

  return <>{reverse ? <ReverseGraphicsBlock item={item} /> : <MainGraphicsBlock item={item} />}</>;
};
