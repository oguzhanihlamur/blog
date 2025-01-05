import React, { useMemo, useState } from 'react';
import styles from './App.module.css';
import { Avatar } from './components/Avatar/Avatar.tsx';
import { Name } from './components/Name/Name.tsx';
import { Description } from './components/Description/Description.tsx';
import { Location } from './components/Location/Location.tsx';
import { Company } from './components/Company/Company.tsx';
import { Footer } from './components/Footer/Footer.tsx';
import { useLanguage } from './context/LanguageContext.tsx';
import { CodeRain } from './components/CodeRain/CodeRain.tsx';
import { SocialLinks } from './components/SocialLinks/SocialLinks.tsx';
import { TechStack } from './components/TechStack/TechStack.tsx';

function App() {
  const { language, setLanguage, translations } = useLanguage();
  const [cvFileName, setCvFileName] = useState('');

  const cvExists = useMemo(() => {
    const fileName = language === 'tr' ? 'oguzhan-ihlamur-cv-tr.pdf' : 'oguzhan-ihlamur-cv-en.pdf';
    setCvFileName(fileName);
    const availableLanguages = ['en']; // Sadece İngilizce CV var ise
    return availableLanguages.includes(language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = `/assets/${cvFileName}`;
    link.download = cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <CodeRain />
      <div className={styles.square}>
        <div className={styles.profileContainer}>
          <Avatar 
            image="/assets/my-photo.png"
            size="medium" 
            alt={translations.profile.alt}
          />
          <div className={styles.textContainer}>
            <Name 
              firstName="Oğuzhan"
              lastName="Ihlamur"
              size="medium"
            />
            <Description text={translations.profile.description} />
            <div className={styles.infoContainer}>
              <Location 
                city={translations.profile.location.city}
                country={translations.profile.location.country}
              />
              <Company 
                title={translations.profile.position.title}
                company={translations.profile.position.company}
                companyUrl={translations.profile.position.companyUrl}
              />
              <TechStack />
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button 
            onClick={toggleLanguage} 
            className={styles.languageToggle}
          >
            {translations.common.languageButton}
          </button>
          {cvExists && (
            <button 
              onClick={handleDownloadCV}
              className={styles.cvButton}
            >
              {translations.common.cvButton}
            </button>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
