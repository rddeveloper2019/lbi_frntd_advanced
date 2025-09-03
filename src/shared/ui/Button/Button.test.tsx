import { render, screen } from '@testing-library/react';

import { ButtonAdv, ThemeButton } from 'shared/ui/Button/ButtonAdv';

describe('Button', () => {
  test('test render', async () => {
    render(<ButtonAdv>Hello</ButtonAdv>);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  test('test clear theme', async () => {
    render(<ButtonAdv theme={ThemeButton.CLEAR}>Hello</ButtonAdv>);

    expect(screen.getByText('Hello')).toHaveClass('clear');
  });
});
