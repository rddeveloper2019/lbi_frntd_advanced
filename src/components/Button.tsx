import { PropsWithChildren } from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  onClick: () => void;
};

export const Button = ({
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};
