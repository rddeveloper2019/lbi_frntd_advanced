import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise<ModuleType<React.ComponentType>>((resolve) => {
      setTimeout(() => resolve(import('./AboutPage')), 1500);
    })
);
