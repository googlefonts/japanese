import React from 'react';
import {render} from 'react-dom';
import Router from 'ampersand-router';

import Layout from './components/Layout';
import Index from './pages/index';
// import Contributing from './pages/contributing'
import FourOhFour from './pages/404';

export default Router.extend({
  renderPage(page, opts = {layout: true}) {
    if (opts.layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      );
    }
    render(page, document.getElementById('js-root'));
  },
  routes: {
    '': 'home',
    // 'contributing': 'contributing',
    // 'contributing/': 'contributing',
    // 'contributing/index.html': 'contributing',
    '*404': 'home', // TODO 404 Breaking `#` links
  },
  home() {
    this.renderPage(<Index />);
  },
  // test() {
  //   this.renderPage(<Test />);
  // },
  // contributing() {
  //   this.renderPage(<Contributing />);
  // },
  fourOhFour() {
    this.renderPage(<FourOhFour />);
  },
});
