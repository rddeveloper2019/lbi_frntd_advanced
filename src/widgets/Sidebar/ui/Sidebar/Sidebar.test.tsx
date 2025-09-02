import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib/test/renderWithTransslation';

import { Sidebar } from 'widgets/Sidebar';

describe('SideBar', () => {
  test('test render', async () => {
    renderWithTranslation(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    screen.debug();
  });
});
