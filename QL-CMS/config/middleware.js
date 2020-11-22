module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: true,
      models: ['articles', 
      {
        model: 'landing-section',
        singleType: true,
      },
      {
        model: 'feature-stats',
        singleType: true,
      },
      {
        model: 'features-section',
        singleType: true,
      },
      {
        model: 'main-features',
        singleType: true,
      },
      {
        model: 'testimonial',
        singleType: true,
      },
      {
        model: 'faqs',
        singleType: true,
      }
    ]
    }
  }
});
