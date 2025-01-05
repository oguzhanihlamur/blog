import React from 'react';
import styles from './App.module.css';
import { Avatar } from './components/Avatar/Avatar.tsx';
import { Name } from './components/Name/Name.tsx';
import { Description } from './components/Description/Description.tsx';
import { Location } from './components/Location/Location.tsx';
import { useLanguage } from './context/LanguageContext.tsx';
import { CodeRain } from './components/CodeRain/CodeRain.tsx';

function App() {
  const { language, setLanguage, translations } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <div className={styles.container}>
      <CodeRain />
      <div className={styles.square}>
        <div className={styles.profileContainer}>
          <Avatar 
            image="/assets/my-photo.png" 
            size="large" 
            alt={translations.profile.alt}
          />
          <div className={styles.textContainer}>
            <Name 
              firstName="Oğuzhan"
              lastName="Ihlamur"
              size="medium"
            />
            <Description text={translations.profile.description} />
            <Location 
              city={translations.profile.location.city}
              country={translations.profile.location.country}
            />
          </div>
        </div>
        <button 
          onClick={toggleLanguage} 
          className={styles.languageToggle}
        >
          {translations.common.languageButton}
        </button>
      </div>
    </div>
  );
}

export default App;
