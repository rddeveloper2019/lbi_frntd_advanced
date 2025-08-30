import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/button';
import { AppRouter } from 'app/router';

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <Button onClick={toggleTheme}>Theme</Button>
      <Link to={'/'}>main page</Link>
      <Link to={'/about'}>about page</Link>
      <AppRouter />
    </div>
  );
};
