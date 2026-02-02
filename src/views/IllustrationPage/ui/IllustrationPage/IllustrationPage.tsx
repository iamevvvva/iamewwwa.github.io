'use client';

import classNames from 'classnames';
import cls from './IllustrationPage.module.scss';

import { IllustrationBambi } from '../IllustrationBambi/IllustrationBambi';
import { IllustrationBaggage } from '../IllustrationBaggage/IllustrationBaggage';
import { IllustrationBlackChicken } from '../IllustrationBlackChicken/IllustrationBlackChicken';
import { useEffect, useRef } from 'react';

const IllustrationPage = () => {
  const bambiRef = useRef<HTMLDivElement>(null);
  const baggageRef = useRef<HTMLDivElement>(null);
  const blackChickenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (hash === '#bambi' && bambiRef.current) {
      bambiRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#baggage' && baggageRef.current) {
      baggageRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#black-chicken' && blackChickenRef.current) {
      blackChickenRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className={classNames(cls.IllustrationPage)}>
      <IllustrationBambi ref={bambiRef} />
      <IllustrationBaggage ref={baggageRef} />
      <IllustrationBlackChicken ref={blackChickenRef} />
    </div>
  );
};

export default IllustrationPage;
