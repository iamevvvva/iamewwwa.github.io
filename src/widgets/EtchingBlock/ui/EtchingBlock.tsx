import classNames from 'classnames';

import cls from './EtchingBlock.module.scss';

interface EtchingBlockProps {
  className?: string;
  name: string;
  year: number;
  desc: string;
  img: string;
}

export const EtchingBlock = (props: EtchingBlockProps) => {
  const { className, name, year, desc, img } = props;
  return (
    <div className={classNames(cls.EtchingBlock, {}, [className])}>
      <div className={cls.imgWrapper}>
        <img src={img} alt="etchingBackground" className={cls.imgMain} />
        <img src={img} alt="etching" className={cls.imgMainAbsolute} width={550} height={550} />
      </div>
      <div className={cls.etchingWrapperText}>
        <div className={cls.etchingTitle}>{name}</div>
        <div className={cls.etchingDate}>{year}</div>
        <div className={cls.etchingText}>{desc}</div>
      </div>
    </div>
  );
};
