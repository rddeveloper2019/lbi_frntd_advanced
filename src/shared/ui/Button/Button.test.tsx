import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button tests', () => {
  test('toBeInTheDocument', async () => {
    render(<Button>Hello</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  test('toHave Class', async () => {
    render(<Button theme={ThemeButton.CLEAR}>Hello</Button>);

    expect(screen.getByText('Hello')).toHaveClass('clear');
    screen.debug();
  });
});
