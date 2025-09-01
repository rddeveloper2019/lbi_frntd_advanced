import ReactDOM from 'react-dom/client';
import 'app/styles/index.scss';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import 'shared/config/i18next/i18next';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ErrorBoundary>
);
