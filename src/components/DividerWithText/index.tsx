import React from 'react';
import styles from './DividerWithText.module.scss';

interface IDividerWithTextProps {
  children: any;
}

const DividerWithText: React.FC<IDividerWithTextProps> = (props) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <div className={styles.border} />
        <span className={styles.content}>{children}</span>
      <div className={styles.border} />
    </div>
  );
};

export default DividerWithText;
