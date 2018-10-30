import React from 'react';
import PropTypes from 'prop-types';
import FitterHappierText from '../vendor/react-fitter-happier-text';

const GlyphColumn = (props) => {
  return (
    <div
      className={`notranslate ${props.className} font-weight-${
        props.fontWeight
      }`}
    >
      <FitterHappierText text={props.value} />
    </div>
  );
};

GlyphColumn.defaultProps = {
  fontWeight: 400,
  className: '',
  compressor: 1.0,
  value: '',
};

GlyphColumn.propTypes = {
  fontWeight: PropTypes.number.isRequired,
  className: PropTypes.string,
  compressor: PropTypes.number,
  value: PropTypes.string.isRequired,
};

export default GlyphColumn;
