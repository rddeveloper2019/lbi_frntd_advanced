import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from 'shared/ui/Button/Button';

test('loads and displays greeting', async () => {
  render(<Button>Hello</Button>);

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
