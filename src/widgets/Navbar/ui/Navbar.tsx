import classNames from 'classnames';

import cls from './Navbar.module.scss';

import { memo, useState } from 'react';
import { HStack } from '@/shared/ui/Stack/HStack/HStack';
import { Link } from 'react-router-dom';

interface NavbarProps {
  className?: string;
  handleActiveBurger: () => void;
  activeBurger: boolean;
}

export const textNavbar = [
  { title: 'My portfolio', href: '/' },
  { title: 'Ething', href: '/etching' },
  { title: 'Illustration', href: '/illustration' },
  { title: 'Graphics', href: '/graphics' },
];

export const Navbar = memo(({ className, handleActiveBurger, activeBurger }: NavbarProps) => {
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <HStack gap="32" align="center" className={cls.wrapperText}>
        {textNavbar.map(({ title, href }) => (
          <Link to={href} key={title} className={cls.textNavbar}>
            {title}
          </Link>
        ))}
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
