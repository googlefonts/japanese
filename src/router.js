import React from 'react';
import {render} from 'react-dom';
import Router from 'ampersand-router';

import Layout from './components/Layout';
import Index from './pages/index';

export default Router.extend({
  renderPage(page, opts = {layout: true}) {
    if (opts.layout) {
      page = <Layout>{page}</Layout>;
    }

    // https://github.com/facebook/react/issues/11538#issuecomment-417504600
    /*eslint-disable */
    if (typeof Node === "function" && Node.prototype) {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function(child) {
        if (child.parentNode !== this) {
          // eslint-ignore
          if (console) {
            console.error(
              // eslint-ignore
              "Cannot remove a child from a different parent",
              child,
              this
            );
          }
          return child;
        }
        return originalRemoveChild.apply(this, arguments);
      };

      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function(newNode, referenceNode) {
        if (referenceNode && referenceNode.parentNode !== this) {
          // eslint-ignore
          if (console) {
            // eslint-ignore
            console.error(
              "Cannot insert before a reference node from a different parent",
              referenceNode,
              this
            );
          }
          return newNode;
        }
        return originalInsertBefore.apply(this, arguments);
      };
    }
    /*eslint eqeqeq:0*/

    render(page, document.getElementById("js-root"));
  },
  routes: {
    "": "home",
    "#:hash": "home",
    "*path": "fourOhFour",
    "*404": "fourOhFour"
  },
  home() {
    return this.renderPage(<Index />);
  },
  fourOhFour: function() {
    return this.redirectTo("");
  }
});
