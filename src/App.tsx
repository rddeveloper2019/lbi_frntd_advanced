import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import MainPageAsync from './pages/MainPage/MainPage.async';
import AboutPageAsync from './pages/AboutPage/AboutPage.async';

export const App = () => {
  return (
    <BrowserRouter>
      <Link to={'/'}>main page</Link>
      <Link to={'/about'}>about page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
