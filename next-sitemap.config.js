module.exports = {
  siteUrl: 'https://www.amadousow.dev',
  generateRobotsTxt: true,
  exclude: ['/login/*', '/dashboard/*', '/signup/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/login', '/dashboard','/signup' ] }
    ],
    additionalSitemaps: [
      'https://www.amadousow.dev/sitemap.xml',
    ],
  },
};