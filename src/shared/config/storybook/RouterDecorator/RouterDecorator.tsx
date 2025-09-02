import { FC } from 'react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: FC) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
