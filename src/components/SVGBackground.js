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
    const self = this;
    const container = self._container;

    self.setState({
      offsetTop: container.offsetLeft,
      offsetLeft: container.offsetLeft,
    });
  }

  handleOnMouseMove(e) {
    e.persist();
    const self = this;
    const eventPageX = e.pageX;
    const eventPageY = e.pageY;
    const container = self._container;

    self.setState({
      eventPageX: eventPageX,
      eventPageY: eventPageY,
      offsetTop: container.offsetTop,
      offsetLeft: container.offsetLeft,
    });
  }

  handleOnTouchMove(e) {
    e.persist();
    // const self = this;
    // const touch = e.touches[0];
    // const eventPageX = touch.clientX;
    // const eventPageY = touch.clientY;

    // self.setState({
    //   eventPageX: eventPageX,
    //   eventPageY: eventPageY,
    //   offsetTop: 0,
    //   offsetLeft: 0
    // })
  }

  render() {
    const self = this;
    // const state = self.state;
    // const cx = state.eventPageX;
    // const cy = state.eventPageY;

    return (
      <div className="overflow-y-hidden"
           onMouseMove={self.handleOnMouseMove}
           onTouchMove={self.handleOnTouchMove}
           ref={(c) => self._container = c}>
        <div className="z1">{ self.props.children }</div>
        <div className="">
          <svg width="100%"
               height="100%"
               viewBox={'0 0 1122 705'}
               version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 1.41421}}>
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
