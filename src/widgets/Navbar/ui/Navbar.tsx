import classNames from 'classnames';

import cls from './Navbar.module.scss';

import { memo } from 'react';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Link } from 'react-router-dom';

import Telegram from '@/shared/icons/telegram.svg';
import VkIcon from '@/shared/icons/vk.svg';
import Bechance from '@/shared/icons/behance.svg';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
  handleActiveBurger: () => void;
  activeBurger: boolean;
}

export const textNavbar = [
  { title: 'My portfolio', href: '/' },
  { title: 'Etching', href: '/etching' },
  { title: 'Illustration', href: '/illustration' },
  { title: 'Graphics', href: '/graphics' },
];

export const Navbar = memo(({ className, handleActiveBurger, activeBurger }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <HStack justify="between" className={cls.wrapperText}>
        <HStack gap="32">
          {textNavbar.map(({ title, href }) => (
            <Link to={href} key={title} className={cls.textNavbar}>
              {t(title)}
            </Link>
          ))}
        </HStack>
        <HStack gap="32">
          <a href="https://t.me/iamewwwaa" aria-label="Telegram чат">
            <Telegram className={cls.NavbarIcon} />
          </a>
          <a href="https://vk.com/iamewwwa" aria-label="Мой профиль в ВКонтакте">
            <VkIcon className={cls.NavbarIcon} />
          </a>
          <a href="https://www.behance.net/a3939d98/projects" aria-label="Мои проекты на Behance">
            <Bechance className={cls.NavbarIcon} />
          </a>
        </HStack>

        {!activeBurger && (
          <div onClick={handleActiveBurger} className={cls.hamburgerWrapper}>
            <span className={classNames(cls.line, cls.line1)}></span>
            <span className={classNames(cls.line, cls.line2, {}, [])}></span>
            <span className={classNames(cls.line, cls.line3)}></span>
          </div>
        )}
      </HStack>
    </header>
  );
});
