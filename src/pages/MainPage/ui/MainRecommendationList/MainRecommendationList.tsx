import cls from './MainRecommendationList.module.scss';

import BambiBackgroundImage from '@/shared/assets/pictures/books/BambiImageBackground.png';
import EtchingImage from '@/shared/assets/pictures/books/etching.png';
import InTheVanImage from '@/shared/assets/pictures/books/InTheVanImage.png';
import BlackChickenImage from '@/shared/assets/pictures/books/BlackChickenImage.png';
import GraphicsImage from '@/shared/assets/pictures/books/graphicsImage.png';

import { Card } from '@/shared/ui/Card/Card';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

const cards = [
  { title: 'BAMBI', img: BambiBackgroundImage, link: 'illustration#bambi' },
  { title: 'ETCHING', img: EtchingImage, link: 'etching' },
  { title: 'IN THE VAN', img: InTheVanImage, link: 'illustration#baggage' },
  { title: 'BLACK CHICKEN', img: BlackChickenImage, link: 'illustration#black-chicken' },
  { title: 'GRAPHICS', img: GraphicsImage, link: 'graphics' },
];

export const MainRecommendationList = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section ref={ref}>
      <HStack wrap className={cls.MainRecommendationList}>
        {cards.map(({ title, img, link }) => (
          <Link to={link} key={title}>
            <Card title={title} src={img} alt={title} />
          </Link>
        ))}
      </HStack>
    </section>
  );
});
