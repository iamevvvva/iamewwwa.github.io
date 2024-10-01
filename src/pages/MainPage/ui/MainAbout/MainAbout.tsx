import classNames from 'classnames';
import cls from './MainAbout.module.scss';
import { Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { SkillsSection } from '@/widgets/AboutBlock';
import { forwardRef } from 'react';

export const MainAbout = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div className={classNames(cls.MainAbout)} ref={ref}>
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
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          />

          <SkillsSection />
        </VStack>
      </HStack>
    </div>
  );
});
