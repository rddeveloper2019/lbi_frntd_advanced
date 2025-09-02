import type { Meta, StoryObj } from '@storybook/react';
import { ThemeButton } from './Button';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
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

type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    theme: ThemeButton.CLEAR,
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Full width button',
    theme: ThemeButton.CLEAR,
    style: { width: '100%' },
  },
};

// Пример с кастомным className (если нужно проверить интеграцию)
export const WithCustomClass: Story = {
  args: {
    children: 'With custom class',
    theme: ThemeButton.CLEAR,
    className: 'custom-button-class',
  },
};

// Если в будущем добавишь другие темы — легко расширить
