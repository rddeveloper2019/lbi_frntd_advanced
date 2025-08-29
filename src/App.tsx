import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { Link } from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Link to={'/'}>main page</Link>
      <Link to={'/about'}>about page</Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};
