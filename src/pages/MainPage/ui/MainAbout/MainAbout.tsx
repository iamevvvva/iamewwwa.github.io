import { forwardRef } from 'react';
import classNames from 'classnames';

import { SkillsSection } from '@/widgets/AboutBlock';

import { Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { useResize } from '@/shared/hooks/useResize/useResize';

import { LazyVideo } from '@/shared/ui/LazyVideo/LazyVideo';

import videoForDesktop from '@/shared/assets/video/horizontalVideo.mp4';
import videoForMobile from '@/shared/assets/video/verticalPreview.mp4';

import cls from './MainAbout.module.scss';

export const MainAbout = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const { width } = useResize();

  return (
    <section className={classNames(cls.MainAbout)} ref={ref}>
      <HStack align="start" className={cls.wrapperWidth} justify="between">
        {width < 800 ? (
          <LazyVideo key="mobile-video" src={videoForMobile} classNames={classNames(cls.iframe, cls.iframeMobile)} />
        ) : (
          <LazyVideo key="desktop-video" src={videoForDesktop} classNames={classNames(cls.iframe, cls.iframeDesktop)} />
        )}

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
