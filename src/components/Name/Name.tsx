import React from 'react';
import styles from './Name.module.css';

interface NameProps {
  firstName: string;
  lastName: string;
  size?: 'small' | 'medium' | 'large';
}

export const Name: React.FC<NameProps> = ({ 
  firstName,
  lastName,
  size = 'large' 
}) => {
  return (
    <h1 className={`${styles.name} ${styles[size]}`}>
      <span className={styles.firstName}>{firstName}</span>
      <span className={styles.lastName}>{lastName}</span>
    </h1>
  );
}; 