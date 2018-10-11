import 'es6-shim';
import app from 'ampersand-app';
import {loadCSS} from 'fg-loadcss';
import data from './data';
import Router from './router';

// CSS
// require('../build/css/fonts.css')
require('./css/index.scss');

// Load fonts that are part of the site, not part of the specimens.
// <link href="http://fonts.googleapis.com/earlyaccess/notosansjp.css" rel="stylesheet">
// <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet">

window.app = app.extend({
  init() {
    // Remove `.no-js` class from root for progressively enhanced styling
    let el = document.getElementById('js-root');
    el.classList.remove('no-js');

    // Load UI fonts
    // Remainder are loaded when Layout mounts
    loadCSS('https://fonts.googleapis.com/earlyaccess/notosansjp.css');
    loadCSS('https://fonts.googleapis.com/css?family=Noto+Sans');
    // TODO loadCSS('http://fonts.googleapis.com/earlyaccess/productsans.css')

    this.router = new Router();
    this.router.history.start();

    // Specimen
    Object.keys(data.fonts).map(function(index) {
      let font = data.fonts[index];
      if (font.load !== false) {
        loadCSS('https://fonts.googleapis.com/earlyaccess/' + index + '.css');
      }
    });

    // Non-critical UI
    // TODO Check on existing hosted version
    // although I’m using a fairly heavily subset version here
    loadCSS('css/notosansmono.css');
  },
});

app.init();
