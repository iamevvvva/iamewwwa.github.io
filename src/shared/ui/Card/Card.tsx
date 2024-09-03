import classNames from 'classnames';
import { memo } from 'react';
import cls from './Card.module.scss';
import { Link } from 'react-router-dom';

interface CardProps {
  className?: string;
  title: string;
  alt: string;
  src: string;
}

export const Card = memo((props: CardProps) => {
  const { className, title, alt, src } = props;

  return (
    <div className={classNames(cls.Card, {}, [className])}>
      <div className={cls.titleCard}>{title}</div>
      <img src={src} alt={alt} width={340} height={200} className={cls.cardImg} />
    </div>
  );
});
