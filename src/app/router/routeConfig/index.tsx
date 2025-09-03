import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: '/about',
  [Routes.NOT_FOUND]: '*',
};

export const AppRoutes: (RouteProps & { key: string })[] = [
  { key: Routes.MAIN, path: RoutePath.main, element: <MainPage /> },
  { key: Routes.ABOUT, path: RoutePath.about, element: <AboutPage /> },
  {
    key: Routes.NOT_FOUND,
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
];
