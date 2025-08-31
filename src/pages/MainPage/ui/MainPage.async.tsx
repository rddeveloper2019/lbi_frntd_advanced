import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise<ModuleType<React.ComponentType>>((resolve) => {
      setTimeout(() => resolve(import('./MainPage')), 1500);
    })
);
