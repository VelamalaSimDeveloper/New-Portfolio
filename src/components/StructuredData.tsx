export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://simmannaidu.dev/#person',
        name: 'Simmannaidu Velamala',
        url: 'https://github.com/VelamalaSimDeveloper',
        jobTitle: 'Full Stack Java Developer',
        email: 'velamala.sim@gmail.com',
        knowsAbout: [
          'Java',
          'Python',
          'JavaScript',
          'SQL',
          'AWS',
          'Full Stack Development',
          'Cloud Computing',
          'Machine Learning',
        ],
        sameAs: [
          'https://github.com/VelamalaSimDeveloper',
          'https://linkedin.com/in/simmannaidu-velamala',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://simmannaidu.dev/#website',
        url: 'https://simmannaidu.dev',
        name: 'Simmannaidu Velamala Portfolio',
        description: 'Full Stack Java Developer Portfolio showcasing modern web and cloud applications',
        publisher: {
          '@id': 'https://simmannaidu.dev/#person',
        },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://simmannaidu.dev/#webpage',
        url: 'https://simmannaidu.dev',
        name: 'Simmannaidu Velamala - Full Stack Java Developer Portfolio',
        isPartOf: {
          '@id': 'https://simmannaidu.dev/#website',
        },
        about: {
          '@id': 'https://simmannaidu.dev/#person',
        },
        description:
          'Portfolio showcasing full-stack development and cloud computing projects using Java, Python, AWS, and modern technologies',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
