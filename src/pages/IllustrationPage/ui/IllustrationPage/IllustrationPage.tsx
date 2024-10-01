import classNames from 'classnames';
import cls from './IllustrationPage.module.scss';

import { IllustrationBambi } from '../IllustrationBambi/IllustrationBambi';
import { IllustrationBaggage } from '../IllustrationBaggage/IllustrationBaggage';
import { IllustrationBlackChicken } from '../IllustrationBlackChicken/IllustrationBlackChicken';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const IllustrationPage = () => {
  const bambiRef = useRef<HTMLDivElement>(null);
  const baggageRef = useRef<HTMLDivElement>(null);
  const blackChickenRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    // Получаем хеш из URL
    const hash = location.hash;

    // Прокручиваем к соответствующему блоку
    if (hash === '#bambi' && bambiRef.current) {
      bambiRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#baggage' && baggageRef.current) {
      baggageRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#black-chicken' && blackChickenRef.current) {
      blackChickenRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className={classNames(cls.IllustrationPage)}>
      <IllustrationBambi ref={bambiRef} />
      <IllustrationBaggage ref={baggageRef} />
      <IllustrationBlackChicken ref={blackChickenRef} />
    </div>
  );
};

export default IllustrationPage;
