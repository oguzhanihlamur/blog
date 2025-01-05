import React from 'react';
import styles from './Title.module.css';

interface TitleProps {
  text: string;
  font?: 'primary' | 'secondary' | 'accent';
  size?: 'small' | 'medium' | 'large';
}

export const Title: React.FC<TitleProps> = ({ 
  text, 
  font = 'primary',
  size = 'medium' 
}) => {
  return (
    <h2 className={`${styles.title} ${styles[font]} ${styles[size]}`}>
      {text}
    </h2>
  );
}; 