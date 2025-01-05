import React from 'react';
import styles from './Location.module.css';

interface LocationProps {
  city: string;
  country: string;
}

export const Location: React.FC<LocationProps> = ({ city, country }) => {
  const mapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(city)},${encodeURIComponent(country)}`;

  return (
    <div className={styles.container}>
      <a 
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <svg 
          className={styles.icon} 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
        >
          <path 
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        <span className={styles.text}>{city}, {country}</span>
      </a>
    </div>
  );
}; 