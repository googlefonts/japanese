import 'es6-shim';
import app from 'ampersand-app';
import {loadCSS} from 'fg-loadcss';
import data from './data';
import Router from './router';
import googleFontsEndpoint from './utils/google-fonts-endpoint'

// CSS
require('./css/index.scss');

window.app = app.extend({
  init() {
    // Remove `.no-js` class from root for progressively enhanced styling
    let el = document.getElementById('js-root');
    el.classList.remove('no-js');

    // Load UI fonts
    // Remainder are loaded when Layout mounts
    loadCSS('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
    loadCSS('https://fonts.googleapis.com/css?family=Noto+Sans');

    this.router = new Router();
    this.router.history.start({
      hashChange: false,
    });

    // Specimen
    Object.keys(data.fonts).map(function(index) {
      let font = data.fonts[index];
      if (font.load !== false) {
        let url = googleFontsEndpoint(font.google_fonts_id, { earlyAccess: font.earlyAccess })
        loadCSS(url);
      }
    });

    // Non-critical UI
    // TODO Check on existing hosted version
    // although I’m using a fairly heavily subset version here
    loadCSS('css/notosansmono.css');
  },
});

app.init();
