import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from 'shared/config/routeConfig';

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
