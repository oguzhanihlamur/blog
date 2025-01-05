import React from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  image?: string;
  size?: 'small' | 'medium' | 'large';
  alt?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ 
  image, 
  size = 'medium',
  alt = 'Avatar'
}) => {
  return (
    <div className={`${styles.avatar} ${styles[size]}`}>
      {image ? (
        <img 
          src={image} 
          alt={alt}
          className={styles.image}
        />
      ) : (
        <div className={styles.placeholder} />
      )}
    </div>
  );
}; 