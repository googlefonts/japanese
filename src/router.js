import React from 'react';
import {render} from 'react-dom';
import Router from 'ampersand-router';

import Layout from './components/Layout';
import Index from './pages/index';
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
    '#:hash': 'home',
    '*path': 'fourOhFour',
    '*404': 'fourOhFour',
  },
  home() {
    return this.renderPage(<Index />);
  },
  fourOhFour: function() {
    return this.redirectTo('');
  },
});
