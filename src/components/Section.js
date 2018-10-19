import React from 'react';
import PropTypes from 'prop-types';

// TODO Remove `.overflow-hidden` and min height
const Section = (props) => {
  return (
    <div
      className={`notranslate ${props.className}px ${props.basePaddingX} py${
        props.basePaddingY
      } sm-py3 md-py4 overflow-hidden ${
        props.verticalCenter === true ? ' flex items-stretch ' : ''
      } height-section`}>
      <div
        className={`max-width-${props.maxWidth} mx-auto ${
          props.verticalCenter === true ? 'self-center' : ''
        }`}>
        {props.children}
      </div>
    </div>
  );
};

Section.defaultProps = {
  maxWidth: 3,
  basePaddingX: 2,
  basePaddingY: 2,
  className: '',
  verticalCenter: false,
};

Section.propTypes = {
  maxWidth: PropTypes.number.isRequired,
  basePaddingX: PropTypes.number.isRequired,
  basePaddingY: PropTypes.number.isRequired,
  className: PropTypes.string,
  verticalCenter: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
};

export default Section;
