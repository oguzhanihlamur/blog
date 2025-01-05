import React from 'react';
import styles from './Footer.module.css';
import { useLanguage } from '../../context/LanguageContext.tsx';

export const Footer: React.FC = () => {
  const { translations } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span className={styles.copyright}>
          © {currentYear} {translations.footer.copyright}
        </span>
      </div>
    </footer>
  );
}; 