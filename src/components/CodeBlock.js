import React from 'react';

class CodeBlock extends React.Component {
  render() {
    const self = this;
    let className = 'overflow-x-auto h5 md-h4 line-height-3 bg-lighten-2 black p2 md-px3 font-family-monospace';

    if (self.props.rounded) {
      className += ' rounded';
    }
    return (
      <pre className={className}
           data-language={self.props.language}><code>{self.props.children.toString()}</code></pre>
    );
  }
}

CodeBlock.defaultProps = {
  language: 'auto',
  rounded: true,
};

export default CodeBlock;
