import React from 'react';

class NoScript extends React.Component {
  render() {
    const self = this;
    const data = self.props.data;

    let stylesheets = [
      '<link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/notosansjp.css">',
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans">',
      '<link rel="stylesheet" href="css/notosansmono.css" async>',
    ];

    // Determine fallback stylesheets
    // This is done in the same way as in `app.js`
    Object.keys(data.fonts).map(function(index) {
      let font = data.fonts[index];
      if (font.load !== false) {
        stylesheets.push('<link rel="stylesheet" href="https://fonts.googleapis.com/earlyaccess/' + index + '.css" async>');
      }
    });

    // https://git.io/vPtBU
    return (
      <noscript dangerouslySetInnerHTML={{
        __html: stylesheets.join(''),
      }} />
    );
  }
}

NoScript.defaultProps = {
  data: {},
};

export default NoScript;
