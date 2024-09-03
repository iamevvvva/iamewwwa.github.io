import { RouteProps } from 'react-router-dom';

export enum AppRouter {
  MAIN = 'main',
  ETCHING = 'etching',
  ILLYSTRATION = 'illustration',
}

const getRouteMain = () => '/';
const getRouteEtching = () => '/etching';
const getRouteIllustration = () => '/illustration';

export const RoutePath: Record<AppRouter, string> = {
  [AppRouter.MAIN]: getRouteMain(),
  [AppRouter.ETCHING]: getRouteEtching(),
  [AppRouter.ILLYSTRATION]: getRouteIllustration(),
};

export const RouteConfig: Record<AppRouter, RouteProps> = {
  [AppRouter.MAIN]: {
    path: getRouteMain(),
    element: <div>1</div>,
  },
  [AppRouter.ETCHING]: {
    path: getRouteEtching(),
    element: <div>2</div>,
  },
  [AppRouter.ILLYSTRATION]: {
    path: getRouteIllustration(),
    element: <div>2</div>,
  },
};
