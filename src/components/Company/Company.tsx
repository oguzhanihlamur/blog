import React from 'react';
import styles from './Company.module.css';
import { useLanguage } from '../../context/LanguageContext.tsx';

interface CompanyProps {
  title: string;
  company: string;
  companyUrl: string;
}

export const Company: React.FC<CompanyProps> = ({ title, company, companyUrl }) => {
  const { translations } = useLanguage();

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{translations.profile.position.heading}</h3>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <a 
          href={companyUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.companyLink}
        >
          {company}
        </a>
      </div>
    </div>
  );
}; 