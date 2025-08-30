import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
};

export const AppRoutes: (RouteProps & { key: string })[] = [
  { key: Routes.MAIN, path: RoutePath.main, element: <MainPage /> },
  { key: Routes.ABOUT, path: RoutePath.about, element: <AboutPage /> },
];
