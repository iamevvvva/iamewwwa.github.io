import classNames from 'classnames';

import { MainPreview } from '../MainPreview/MainPreview';
import { MainAbout } from '../MainAbout/MainAbout';
import { MainRecommendationList } from '../MainRecommendationList/MainRecommendationList';

const MainPage = () => {
  return (
    <>
      <MainPreview />
      <MainAbout />
      <MainRecommendationList />
    </>
  );
};

export default MainPage;
