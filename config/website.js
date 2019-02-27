const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Quinn McPhail', // Navigation and Site Title
  siteTitleAlt: 'Quinn McPhail', // Alternative Site title for SEO
  siteTitleShort: 'Quinn', // short_name for manifest
  siteHeadline: 'Salesforce Consultant and Web Dev Nerd', // Headline for schema.org JSONLD
  siteUrl: 'https://quinnmcphail.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Salesforce consultant specializing in Lightning Web Components.',
  author: 'Quinn McPhail', // Author for schema.org JSONLD

  userTwitter: '@quinnmcphail', // Twitter Username
  ogSiteName: 'quinnmcphail', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-116100020-2',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
