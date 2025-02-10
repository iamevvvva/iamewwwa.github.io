import { IBlockInfo } from '@/pages/IllustrationPage/ui/IllustrationBambi/IllustrationBambi';
import cls from './IllustrationBlock.module.scss';
import classNames from 'classnames';
import { LazyImg } from '@/shared/ui/LazyImg/LazyImg';

const IllustraitonBlockInfo = ({ blockInfo }: { blockInfo: IBlockInfo }) => {
  const { title, subtitle, description } = blockInfo;

  return (
    <div className={cls.IllustrationBlockInfo}>
      <h2 className={cls.title}>{title}</h2>
      <h3 className={cls.subtitle}>{subtitle}</h3>
      <p className={cls.description}>{description}</p>
    </div>
  );
};

export const IllustrationBlock = (props) => {
  const { images, blockInfo, reverse = false } = props;

  return (
    <div>
      {reverse ? <ReverseBlockImages images={images} /> : <BlockImages images={images} />}

      <div className={cls.IllustrationBlock}>
        <IllustraitonBlockInfo blockInfo={blockInfo} />
      </div>
      <p className={cls.descriptionBlock}>{blockInfo.descriptionSecondBlock}</p>
    </div>
  );
};

/* REVERSE BLOCK */
const ReverseBlockImages = ({ images }) => {
  return (
    <>
      {images.map(({ src, styles }, idx) => (
        <LazyImg src={src} alt="book" className={classNames(cls[styles], cls.bookImg)} key={idx} />
      ))}
    </>
  );
};

/* BLOCK IMAGES */
const BlockImages = ({ images }) => {
  return (
    <>
      {images.map(({ src, styles, addition }, idx) => (
        <LazyImg src={src} alt="book" className={classNames(cls[styles], cls[addition], cls.bookImg)} key={idx} />
      ))}
    </>
  );
};
