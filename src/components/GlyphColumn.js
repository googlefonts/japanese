import React from 'react';
import FitterHappierText from '../vendor/react-fitter-happier-text';

class GlyphColumn extends React.Component {
  render() {
    const self = this;

    return (
      <div className={self.props.className + ' font-weight-' + self.props.fontWeight}>
        <FitterHappierText text={self.props.value} />
      </div>
    );
  }
}

GlyphColumn.defaultProps = {
  fontWeight: 400,
  className: '',
  compressor: 1.0,
  value: '',
};

export default GlyphColumn;
