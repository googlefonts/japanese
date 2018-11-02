// This fixes the single page app on GitHub Pages
let basePath = '/japanese';
if (process && process.env && process.env.NODE_ENV === 'development') {
  basePath = '';
}

module.exports = basePath;
