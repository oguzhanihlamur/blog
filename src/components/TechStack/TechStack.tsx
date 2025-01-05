import React from 'react';
import styles from './TechStack.module.css';
import { useLanguage } from '../../context/LanguageContext.tsx';

interface Technology {
  name: string;
  icon: string;
}

interface TechCategory {
  title: string;
  items: Technology[];
}

export const TechStack: React.FC = () => {
  const { translations } = useLanguage();

  const categories: TechCategory[] = [
    {
      title: translations.profile.techStack.categories.languages,
      items: [
        { name: 'Java', icon: '/assets/tech/java.svg' },
        { name: 'JavaScript', icon: '/assets/tech/javascript.svg' },
      ]
    },
    {
      title: translations.profile.techStack.categories.databases,
      items: [
        { name: 'SQL Server', icon: '/assets/tech/sqlserver.svg' },
        { name: 'PostgreSQL', icon: '/assets/tech/postgresql.svg' },
        { name: 'SQLite', icon: '/assets/tech/sqlite.svg' },
        { name: 'Oracle', icon: '/assets/tech/oracle.svg' },
      ]
    },
    {
      title: translations.profile.techStack.categories.queue,
      items: [
        { name: 'Kafka', icon: '/assets/tech/kafka.svg' },
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{translations.profile.techStack.heading}</h3>
      <div className={styles.categories}>
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.category}>
            <h4 className={styles.categoryTitle}>{category.title}</h4>
            <div className={styles.technologies}>
              {category.items.map((tech, techIndex) => (
                <div key={techIndex} className={styles.tech}>
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className={styles.icon}
                  />
                  <span className={styles.name}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 