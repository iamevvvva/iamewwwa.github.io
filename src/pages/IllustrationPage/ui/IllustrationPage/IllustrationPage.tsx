import classNames from 'classnames';
import cls from './IllustrationPage.module.scss';

import { IllustrationBambi } from '../IllustrationBambi/IllustrationBambi';
import { IllustrationBaggage } from '../IllustrationBaggage/IllustrationBaggage';
import { IllustrationBlackChicken } from '../IllustrationBlackChicken/IllustrationBlackChicken';

const IllustrationPage = () => {
  return (
    <div className={classNames(cls.IllustrationPage)}>
      <IllustrationBambi />
      <IllustrationBaggage />
      <IllustrationBlackChicken />
    </div>
  );
};

export default IllustrationPage;
