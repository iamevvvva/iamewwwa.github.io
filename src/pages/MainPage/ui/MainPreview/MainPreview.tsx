import { Text } from '@/shared/ui/Text';
import cls from './MainPreview.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';

import Bechance from '@/shared/icons/behance.svg';
import { useTranslation } from 'react-i18next';

interface MainPreviewProps {
  showAboutInfo: () => void;
  showPortfolio: () => void;
}

export const MainPreview = ({ showAboutInfo, showPortfolio }: MainPreviewProps) => {
  const { t } = useTranslation();
  return (
    <section className={cls.MainPreview}>
      <div className={cls.MainPreviewWrapper}>
        <Text
          shadow
          title="Russian State University of Design and Applied Arts (Stroganov University)"
          className={cls.upperText}
        />
        <div className={cls.textWrapper}>
          <Text
            shadow
            title="I am an artist illustration from Moscow."
            size="xl"
            align="center"
            className={cls.mainText}
          />

          <Text shadow title="see my portfolio" size="l" align="center" className={cls.downText} />

          <HStack justify="center" gap="32" className={cls.buttonsWrapper}>
            <Button onClick={showAboutInfo}>{t('About me')}</Button>
            <Button onClick={showPortfolio}>{t('My_portfolio')}</Button>
          </HStack>
        </div>
      </div>
    </section>
  );
};
