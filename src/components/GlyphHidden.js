import React from 'react';
import PropTypes from 'prop-types';

const GlyphHidden = (props) => {
  return (
    <span style={{opacity: 0}} className="speak-none" aria-hidden="true">
      {props.text}
    </span>
  );
};

GlyphHidden.defaultProps = {
  text: '',
};

GlyphHidden.propTypes = {
  text: PropTypes.string || PropTypes.object,
};
