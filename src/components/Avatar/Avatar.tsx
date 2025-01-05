import React from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  image: string;
  size: 'small' | 'medium' | 'large';
  alt: string;
}

/**
 * Avatar bileşeni kullanıcı resmini gösterir
 * @param {string} image - Resim URL'i
 * @param {'small' | 'medium' | 'large'} size - Avatar boyutu
 * @param {string} alt - Resim alt metni
 */
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