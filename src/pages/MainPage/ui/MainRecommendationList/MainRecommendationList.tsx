import cls from './MainRecommendationList.module.scss';

import BambiBackgroundImage from '@/shared/assets/pictures/books/BambiImageBackground.png';
import SnowWomenImage from '@/shared/assets/pictures/books/SnowWomenImage.png';
import EthingImage from '@/shared/assets/pictures/books/ething.png';
import InTheVanImage from '@/shared/assets/pictures/books/InTheVanImage.png';
import BlackChickenImage from '@/shared/assets/pictures/books/BlackChickenImage.png';
import BambiImage from '@/shared/assets/pictures/books/BambiImage.png';

import { Card } from '@/shared/ui/Card/Card';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Link } from 'react-router-dom';

const cards = [
  { title: 'BAMBI', img: BambiBackgroundImage, link: 'test' },
  { title: 'SNOW WOMEN', img: SnowWomenImage, link: 'test' },
  { title: 'ETCHING', img: EthingImage, link: 'etching' },
  { title: 'IN THE VAN', img: InTheVanImage, link: 'test' },
  { title: 'BLACK CHICKEN', img: BlackChickenImage, link: 'test' },
  { title: 'BAMBII', img: BambiImage, link: 'test' },
];

export const MainRecommendationList = () => {
  return (
    <HStack wrap className={cls.MainRecommendationList}>
      {cards.map(({ title, img, link }) => (
        <Link to={link} key={title}>
          <Card title={title} src={img} alt={title} />
        </Link>
      ))}
    </HStack>
  );
};
