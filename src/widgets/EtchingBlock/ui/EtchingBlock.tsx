import classNames from 'classnames';

import cls from './EtchingBlock.module.scss';
import { LazyImg } from '@/shared/ui/LazyImg/LazyImg';
import { useTranslation } from 'react-i18next';

interface EtchingBlockProps {
  className?: string;
  name: string;
  year: number;
  desc: string;
  img: string;
}

export const EtchingBlock = (props: EtchingBlockProps) => {
  const { className, name, year, desc, img } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(cls.EtchingBlock, {}, [className])}>
      <div className={cls.imgWrapper}>
        <LazyImg src={img} className={cls.imgMain} alt="etchingBackground" />
        <LazyImg src={img} className={cls.imgMainAbsolute} width={550} height={550} alt="etching" />
      </div>
      <div className={cls.etchingWrapperText}>
        <div className={cls.etchingTitle}>{name}</div>
        <div className={cls.etchingDate}>{year}</div>
        <div className={cls.etchingText}>{t(desc)}</div>
      </div>
    </div>
  );
};
