import { Text } from '@/shared/ui/Text';
import cls from './MainPreview.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { MutableRefObject, useRef } from 'react';
// import BookIcon from '@/shared/assets/icons/bookForMobile.svg';

import BookIcon from '@/shared/assets/icons/lt.png';

export const MainPreview = () => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  const showPortfolio = () => {
    const offsetWidthToPortfolio = ref.current.offsetWidth;

    window.scrollTo({
      top: offsetWidthToPortfolio,
      behavior: 'smooth',
    });
  };

  const showAboutInfo = () => {
    const offsetWidthToAboutInfo = ref.current.offsetWidth;

    window.scrollTo({
      top: offsetWidthToAboutInfo,
      behavior: 'smooth',
    });
  };

  return (
    <div className={cls.MainPreview} ref={ref}>
      <div className={cls.MainPreviewWrapper}>
        {/* <img src={BookIcon} alt="book" width={200} height={200} /> */}
        {/* <BookIcon className={cls.bookForMobile} width={700} height={700} /> */}
        <Text shadow title="Russian State University of Design and Applied Arts (Stroganov University)" className={cls.upperText} />
        <div className={cls.textWrapper}>
          <Text shadow title="I am a artist illustration from Moscow." size="xl" align="center" className={cls.mainText} />
          <Text shadow title="see my portfolio" size="l" align="center" className={cls.downText} />

          <HStack justify="center" gap="32" className={cls.buttonsWrapper}>
            <Button onClick={showAboutInfo}>Аbout me</Button>
            <Button onClick={showPortfolio}>My portfolio</Button>
          </HStack>
        </div>
      </div>
    </div>
  );
};
