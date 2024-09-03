import classNames from 'classnames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<React.SVGAttributes<SVGAElement>> {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
  width?: number;
  height?: number;
  circle?: boolean;
}

export const Icon = (props: IconProps) => {
  const { className, Svg, width = 30, height = 30, circle = false, ...otherProps } = props;

  const mods = {
    // [cls.circle]: circle,
  };

  return (
    <>
      <div className={cls.circle}></div>
      {/* @ts-ignore */}
      <Svg className={classNames(cls.Icon, mods, [className])} width={width} height={height} {...otherProps} />
    </>
  );
};
