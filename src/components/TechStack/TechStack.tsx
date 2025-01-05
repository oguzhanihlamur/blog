import React, { useMemo } from 'react';
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const categories: TechCategory[] = [
    {
      title: translations.profile.techStack.categories.languages,
      items: [
        { name: 'Java', icon: 'java.svg' },
        { name: 'JavaScript', icon: 'javascript.svg' },
      ]
    },
    {
      title: translations.profile.techStack.categories.databases,
      items: [
        { name: 'SQL Server', icon: 'sqlserver.svg' },
        { name: 'PostgreSQL', icon: 'postgresql.svg' },
        { name: 'SQLite', icon: 'sqlite.svg' },
        { name: 'Oracle', icon: 'oracle.svg' },
      ]
    },
    {
      title: translations.profile.techStack.categories.queue,
      items: [
        { name: 'Kafka', icon: 'kafka.svg' },
      ]
    }
  ];

  const technologies = useMemo(() => {
    return categories.map(category => ({
      ...category,
      items: category.items.map(item => ({
        ...item,
        icon: `/assets/tech/${item.icon}`
      }))
    }));
  }, [categories]);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{translations.profile.techStack.heading}</h3>
      <div className={styles.categories}>
        {technologies.map((category, categoryIndex) => (
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