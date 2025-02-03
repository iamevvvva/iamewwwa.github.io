import classNames from 'classnames';
import cls from './MainAbout.module.scss';
import { Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { SkillsSection } from '@/widgets/AboutBlock';
import { forwardRef } from 'react';

export const MainAbout = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <section className={classNames(cls.MainAbout)} ref={ref}>
      <HStack align="start" className={cls.wrapperWidth} justify="between">
        <iframe
          className={cls.iframe}
          frameBorder={'0'}
          src="https://www.youtube.com/embed/hei-Dr-51yE?si=NAgAQiA2eVVNZg3J"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>

        <VStack gap="32" align="start" className={cls.wrapperAbout}>
          <Text title="About me" size="m" circle />

          <div className={cls.mainText}>My name is Eva</div>
          <div className={cls.divider}></div>
          <Text
            size="l"
            shadow
            text="Hi! I'm Eva Varnakova (Ева Варнакова), currently studying at Stroganov University (2020-2026), where I'm focusing on developing my skills and knowledge in art and design. This period has been both challenging and rewarding, as I explore various creative disciplines and techniques that will help me build a solid foundation for my future career. Through my studies, I am not only enhancing my technical abilities but also learning to express my ideas and inspirations through different media."
          />

          <SkillsSection />
        </VStack>
      </HStack>
    </section>
  );
});
