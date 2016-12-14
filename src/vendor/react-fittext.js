/*
 * React FitText v0.1.0-beta.1
 * https://github.com/gianu/react-fittext
 *
 * A port of the jQuery plugin: http://github.com/davatron5000/FitText.js
 * Modified by Kenneth Ormandy
 *
 * Released under the MIT license
 * http://gianu.mit-license.org
 */
'use strict';

import React from 'react';
import {findDOMNode} from 'react-dom';
let ReactPropTypes = React.PropTypes;

module.exports = React.createClass({
  displayName: 'ReactFitText',

  propTypes: {
    children: ReactPropTypes.element.isRequired,
    compressor: ReactPropTypes.number,
    minFontSize: ReactPropTypes.number,
    maxFontSize: ReactPropTypes.number,
  },

  getDefaultProps: function() {
    return {
      compressor: 1.0,
      minFontSize: Number.NEGATIVE_INFINITY,
      maxFontSize: Number.POSITIVE_INFINITY,
    };
  },

  componentDidMount: function() {
    window.addEventListener('resize', this._onBodyResize);
    this._onBodyResize();
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this._onBodyResize);
  },

  _onBodyResize: function() {
    let element = findDOMNode(this);
    let width = element.offsetWidth;
    element.style.fontSize = Math.max(
                      Math.min((width / (this.props.compressor*10)),
                                parseFloat(this.props.maxFontSize)),
                      parseFloat(this.props.minFontSize)) + 'px';
  },

  render: function() {
    return this.props.children;
  },
});
