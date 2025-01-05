export interface Translations {
  profile: {
    description: string;
    position: {
      heading: string;
      title: string;
      company: string;
      companyUrl: string;
    };
    alt: string;
    location: {
      city: string;
      country: string;
    };
    social: {
      heading: string;
    };
    techStack: {
      heading: string;
      categories: {
        languages: string;
        databases: string;
        queue: string;
      };
    };
  };
  common: {
    languageButton: string;
    cvButton: string;
  };
  footer: {
    copyright: string;
  };
}
