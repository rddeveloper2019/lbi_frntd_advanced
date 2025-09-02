import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('test render', async () => {
    render(<Button>Hello</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  test('test clear theme', async () => {
    render(<Button theme={ThemeButton.CLEAR}>Hello</Button>);

    expect(screen.getByText('Hello')).toHaveClass('clear');
  });
});
