import { useState } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        'ok',
        styles.sidebar,
        { [styles.collapsed]: collapsed },
        className
      )}
    >
      <button onClick={handleToggle}>Toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        {/* Lang switcher */}
        <ThemeSwitcher />
      </div>
    </div>
  );
};
