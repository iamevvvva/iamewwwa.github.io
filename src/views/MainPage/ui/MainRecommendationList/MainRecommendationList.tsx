import cls from './MainRecommendationList.module.scss';

import { Card } from '@/shared/ui/Card/Card';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import Link from 'next/link';
import { forwardRef } from 'react';

const cards = [
  { title: 'BAMBI', img: '/assets/pictures/books/BambiImageBackground.png', link: '/illustration#bambi', alt: 'Иллюстрации к произведению «Бемби» написал австрийский писатель Феликс Зальтен.' },
  { title: 'ETCHING', img: '/assets/pictures/books/etching.png', link: '/etching', alt: 'Офорты, выполненные в технике гравюры на металле' },
  { title: 'IN THE VAN', img: '/assets/pictures/books/InTheVanImage.png', link: '/illustration#baggage', alt: 'Иллюстрации к произведению "Багаж". Стихотворение Самуила Маршака' },
  { title: 'BLACK CHICKEN', img: '/assets/pictures/books/BlackChickenImage.png', link: '/illustration#black-chicken', alt: 'Иллюстрации к произведению "Черная курица" Антония Погорельского' },
  { title: 'GRAPHICS', img: '/assets/pictures/books/graphicsImage.png', link: '/graphics', alt: 'Коллекция графических работ: "NEW YORK", "STALKER", "CITY"' },
];

export const MainRecommendationList = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section ref={ref}>
      <HStack wrap className={cls.MainRecommendationList}>
        {cards.map(({ title, img, link, alt }) => (
          <Link href={link} key={title}>
            <Card title={title} src={img} alt={alt} />
          </Link>
        ))}
      </HStack>
    </section>
  );
});
