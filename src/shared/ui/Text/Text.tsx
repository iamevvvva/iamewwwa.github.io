import classNames from 'classnames';
import { memo } from 'react';
import cls from './Text.module.scss';

export type TextTheme = 'primary' | 'error' | 'inverted';

export type TextAlign = 'right' | 'left' | 'center';

export type TextSize = 's' | 'm' | 'l' | 'xl';

type HeaderTagType = 'h1' | 'h2' | 'h3';

type MarginTop = 'mt5' | 'mt10' | 'mt15';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  size?: TextSize;
  theme?: TextTheme;
  align?: TextAlign;
  shadow?: boolean;
  circle?: boolean;
  marginTop?: MarginTop;
}

const mapSizeToheaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
  xl: 'h1',
};

export const Text = memo((props: TextProps) => {
  const { className, title, text, size = 's', align = 'left', theme = 'primary', shadow, circle, marginTop = '' } = props;

  const HeaderTag = mapSizeToheaderTag[size];

  const mods = {
    [cls.circle]: circle,
    [cls.shadow]: shadow,
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && circle ? (
        <div className={cls.wrapperCircle}>
          <div className={cls.circle}></div>
          <HeaderTag className={cls.titleShadow}>{title}</HeaderTag>
        </div>
      ) : (
        title && <HeaderTag className={cls.title}>{title}</HeaderTag>
      )}

      {text && <p className={classNames(cls.text, { [cls[marginTop]]: marginTop }, [])}>{text}</p>}
    </div>
  );
});
