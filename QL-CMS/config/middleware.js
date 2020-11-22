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
      }
    ]
    }
  }
});
