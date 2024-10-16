import classNames from 'classnames';

import cls from './SkillsSection.module.scss';

import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { AboutSkil } from '@/entities/Skil';

import PaintBrush from '@/shared/assets/icons/paintbrush.svg';

interface SkillsSectionProps {
  className?: string;
  desc?: string;
}

const iconAboutSkil = [
  { icon: PaintBrush, title: 'Colorful Dreams', text: 'Inspiring, boundless.' },
  { icon: PaintBrush, title: 'Artful Passion', text: 'Creative, engaging.' },
  { icon: PaintBrush, title: 'Expressive Strokes', text: 'Bold, emotional.' },
];

export const SkillsSection = ({ className }: SkillsSectionProps) => {
  return (
    <div className={classNames(cls.SkillsSection, {}, [className])}>
      <HStack wrap gap="32">
        {iconAboutSkil.map((item, idx) => (
          <AboutSkil Svg={item.icon} title={item.title} text={item.text} key={idx} />
        ))}
      </HStack>
    </div>
  );
};
