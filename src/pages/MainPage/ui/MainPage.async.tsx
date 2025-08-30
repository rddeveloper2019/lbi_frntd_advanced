import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise<any>((resolve) => {
      //ts-ignore
      setTimeout(() => resolve(import('./MainPage')), 1500);
    })
);
