import React from 'react';
import styles from './Description.module.css';

interface DescriptionProps {
  text: string;
}

export const Description: React.FC<DescriptionProps> = ({ text }) => {
  return (
    <p className={styles.description}>
      {text}
    </p>
  );
}; 