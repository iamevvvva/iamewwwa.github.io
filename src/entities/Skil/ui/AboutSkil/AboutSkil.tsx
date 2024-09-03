import classNames from 'classnames';

import cls from './AboutSkil.module.scss';

import { HStack } from '@/shared/ui/Stack/HStack/HStack';

import { Icon } from '@/shared/ui/Icon/Icon';
import { Text } from '@/shared/ui/Text';

interface AboutSkilProps {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  title: string;
  text: string;
}

export const AboutSkil = ({ className, Svg, title, text }: AboutSkilProps) => {
  return (
    <div className={classNames(cls.AboutSkil, {}, [className])}>
      <HStack gap="32" align="center" justify="between" className={cls.wrapperText}>
        <Icon Svg={Svg} circle />

        <Text title={title} text={text} marginTop="mt10" />
      </HStack>
    </div>
  );
};
