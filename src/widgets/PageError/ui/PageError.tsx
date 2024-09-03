import classNames from 'classnames';

import cls from './PageError.module.scss';

import { memo } from 'react';
import { Button } from '@/shared/ui/Button/Button';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const handleReload = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <div>Произошла ошибка</div>
      <Button onClick={handleReload}>Обновить страницу</Button>
    </div>
  );
});
