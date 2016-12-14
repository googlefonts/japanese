import React from 'react';

// TODO Remove `.overflow-hidden` and min height
class Section extends React.Component {
  render() {
    return (
      <div className={this.props.className + ' px' + this.props.basePaddingX + ' py' + this.props.basePaddingY + ' sm-py3 md-py4 overflow-hidden' + (this.props.verticalCenter === true ? ' flex items-stretch ' : '') + ' height-section'}>
        <div className={'max-width-' + this.props.maxWidth + ' mx-auto ' + (this.props.verticalCenter === true ? 'self-center' : '')}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Section.defaultProps = {
  maxWidth: 3,
  basePaddingX: 2,
  basePaddingY: 2,
  className: '',
  verticalCenter: false,
};

export default Section;
