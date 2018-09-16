import React from 'react';

class SVGBackground extends React.Component {
  constructor() {
    super();

    this.state = {
      eventPageX: 0,
      eventPageY: 0,
      offsetTop: 0,
      offsetLeft: 0,
      r: 200,
    };

    this.handleOnMouseMove = this.handleOnMouseMove.bind(this);
    this.handleOnTouchMove = this.handleOnTouchMove.bind(this);
  }

  componentDidMount() {
    const container = this._container;

    this.setState({
      offsetTop: container.offsetLeft,
      offsetLeft: container.offsetLeft,
    });
  }

  handleOnMouseMove(e) {
    e.persist();
    const eventPageX = e.pageX;
    const eventPageY = e.pageY;
    const container = this._container;

    this.setState({
      eventPageX: eventPageX,
      eventPageY: eventPageY,
      offsetTop: container.offsetTop,
      offsetLeft: container.offsetLeft,
    });
  }

  handleOnTouchMove(e) {
    e.persist();
    // const touch = e.touches[0];
    // const eventPageX = touch.clientX;
    // const eventPageY = touch.clientY;

    // this.setState({
    //   eventPageX: eventPageX,
    //   eventPageY: eventPageY,
    //   offsetTop: 0,
    //   offsetLeft: 0
    // })
  }

  render() {
    const props = this.props;
    // const state = this.state;
    // const cx = state.eventPageX;
    // const cy = state.eventPageY;

    return (
      <div
        className="overflow-y-hidden"
        onMouseMove={this.handleOnMouseMove}
        onTouchMove={this.handleOnTouchMove}
        ref={(c) => (this._container = c)}>
        <div className="z1">{props.children}</div>
        <div className="">
          <svg
            width="100%"
            height="100%"
            viewBox={'0 0 1122 705'}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              strokeLinejoin: 'round',
              strokeMiterlimit: 1.41421,
            }}>
            <g>
              {/*
              <path x={ cx } y={ cy } d="M60,60l-9,0c0,-28.118 -22.804,-50.952 -51,-51l0,-9c33.105,0.043 59.915,26.826 60,60Z" className="fill-red" />
              <path x={ cx + 100 } y={ cy + 100 } d="M60,60l-9,0c0,-28.118 -22.804,-50.952 -51,-51l0,-9c33.105,0.043 59.915,26.826 60,60Z" className="fill-red" />
              */}
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default SVGBackground;
