import type { Meta, StoryObj } from '@storybook/react';
import { ThemeButton } from './ButtonAdv';
import { ButtonAdv } from './ButtonAdv';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta: Meta<typeof ButtonAdv> = {
  title: 'shared/Button',
  component: ButtonAdv,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(ThemeButton),
      description: 'Тема кнопки',
    },
    disabled: {
      control: 'boolean',
      description: 'Состояние disabled',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML-тип кнопки',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonAdv>;

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
  },
};
export const OutlineDark: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    theme: ThemeButton.CLEAR,
    disabled: true,
  },
};
