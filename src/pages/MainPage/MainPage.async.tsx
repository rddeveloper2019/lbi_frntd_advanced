import { lazy } from 'react';

const MainPageAsync = lazy(
  () =>
    new Promise<any>((resolve) => {
      //ts-ignore
      setTimeout(() => resolve(import('./MainPage')), 1500);
    })
);

export default MainPageAsync;
