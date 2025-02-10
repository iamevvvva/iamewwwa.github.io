import { MainPreview } from '../MainPreview/MainPreview';
import { MainAbout } from '../MainAbout/MainAbout';
import { MainRecommendationList } from '../MainRecommendationList/MainRecommendationList';
import { useRef } from 'react';

const MainPage = () => {
  const divAboutRef = useRef<HTMLDivElement>(null);
  const divPortfolioRef = useRef<HTMLDivElement>(null);

  const showAboutInfo = () => {
    if (divAboutRef.current) {
      divAboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showPortfolio = () => {
    if (divPortfolioRef.current) {
      divPortfolioRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <MainPreview showAboutInfo={showAboutInfo} showPortfolio={showPortfolio} />
      <MainAbout ref={divAboutRef} />
      <MainRecommendationList ref={divPortfolioRef} />
    </main>
  );
};

export default MainPage;
