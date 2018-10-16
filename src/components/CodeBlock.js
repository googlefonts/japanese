import React from 'react';
import PropTypes from 'prop-types';

const CodeBlock = (props) => {
  let className = `overflow-x-auto h5 md-h4 line-height-3 bg-lighten-2 black p2 md-px3 font-family-monospace ${
    props.rounded ? 'rounded' : ''
  }`;

  return (
    <pre className={className} data-language={props.language}>
      <code>{props.children.toString()}</code>
    </pre>
  );
};

CodeBlock.defaultProps = {
  language: 'auto',
  rounded: true,
};

CodeBlock.propTypes = {
  language: PropTypes.string,
  rounded: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default CodeBlock;
