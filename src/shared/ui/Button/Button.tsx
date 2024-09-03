import classNames from 'classnames';
import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

export type ThemeButton = 'clear' | 'outline' | 'background';
export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  size?: string;
  theme?: ThemeButton;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, size = 'm', theme = 'outline', onClick } = props;

  const mods = {
    [cls[theme]]: true,
    [cls[size]]: true,
  };

  return (
    <button onClick={onClick} type="button" className={classNames(cls.Button, mods, [className])}>
      {children}
    </button>
  );
});
