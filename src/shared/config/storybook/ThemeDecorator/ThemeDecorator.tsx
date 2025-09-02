import { FC } from 'react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: FC) => {
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};
