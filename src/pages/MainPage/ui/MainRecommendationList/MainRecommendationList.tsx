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
  { title: 'BAMBI', img: BambiBackgroundImage, link: 'illustration#bambi', alt: 'Иллюстрации к произведению «Бемби» написал австрийский писатель Феликс Зальтен.' },
  { title: 'ETCHING', img: EtchingImage, link: 'etching', alt: 'Офорты, выполненные в технике гравюры на металле' },
  { title: 'IN THE VAN', img: InTheVanImage, link: 'illustration#baggage', alt: 'Иллюстрации к произведению "Багаж". Стихотворение Самуила Маршака' },
  { title: 'BLACK CHICKEN', img: BlackChickenImage, link: 'illustration#black-chicken', alt: 'Иллюстрации к произведению "Черная курица" Антония Погорельского' },
  { title: 'GRAPHICS', img: GraphicsImage, link: 'graphics', alt: 'Коллекция графических работ: "NEW YORK", "STALKER", "CITY"' },
];

export const MainRecommendationList = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section ref={ref}>
      <HStack wrap className={cls.MainRecommendationList}>
        {cards.map(({ title, img, link, alt }) => (
          <Link to={link} key={title}>
            <Card title={title} src={img} alt={alt} />
          </Link>
        ))}
      </HStack>
    </section>
  );
});
