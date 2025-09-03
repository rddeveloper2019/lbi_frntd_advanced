import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from 'app/router/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {AppRoutes.map(({ key, path, element }) => (
          <Route
            key={key}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
