import styles from './LanguageSwitcher.module.scss';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = ({
  isNone = false,
  isPhone = false,
  setActiveBurger,
}: {
  isNone?: boolean;
  className?: string;
  isPhone?: boolean;
  setActiveBurger: (prev: unknown) => boolean;
}) => {
  const { i18n } = useTranslation();
  const isRussian = i18n.language === 'ru';

  const handleChange = () => {
    i18n.changeLanguage(isRussian ? 'en' : 'ru');
    setTimeout(() => {
      setActiveBurger((prev: boolean) => !prev);
    }, 250);
  };

  return (
    <div className={clsx(styles.wrapper, { [styles.none]: isNone }, [])}>
      <div className={clsx(styles.switcher, { [styles.phone]: isPhone })} onClick={handleChange}>
        {isRussian ? 'EN' : 'RU'}
      </div>
    </div>
  );
};
