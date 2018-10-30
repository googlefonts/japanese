// @kennethormandy/react-fitter-happier-text v2.0.0-rc.2
// MIT via https://github.com/jxnblk/react-fitter-happier-text

import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'

class FitterHappierText extends React.Component {

  constructor () {
    super ()
    this.resize = debounce(this.resize.bind(this))
    this.state = {
      width: 256,
      height: 24
    }
  }

  resize () {
    if (typeof this.el !== 'undefined') {
      let el = this.el;
      let state = this.state
      let width = el.offsetWidth || el.getComputedTextLength()
      let height = el.offsetHeight || 24
      if (state.width !== width || state.height !== height) {
        this.setState({
          width: width,
          height: height
        })
      }
    }
  }

  componentDidMount () {
    this.resize()
  }

  componentWillReceiveProps () {
    this.resize()
  }
  
  componentWillUnmount () {
    this.resize = null
  }

  render () {
    let styles = {
      svg: {
        width: '100%',
        maxHeight: '100%',
        fill: 'currentcolor',
        overflow: 'visible'
      },
      text: {
        fontFamily: 'inherit',
        fontSize: '1rem',
        fontWeight: 'inherit',
        textAnchor: 'middle'
      }
    }
    let viewBox = [
      0, 0,
      this.state.width,
      this.state.height
    ].join(' ')

    return (
      <svg
        viewBox={viewBox}
        style={styles.svg}>
        <text
          ref={(el) => { this.el = el }}
          x='50%'
          y={this.props.baseline}
          style={styles.text}>
          {this.props.text}
        </text>
      </svg>
    )
  }

}

FitterHappierText.defaultProps = {
  baseline: 16,
  paddingY: 0,
}

FitterHappierText.propTypes = {
  text: PropTypes.string,
  baseline: PropTypes.number,
  paddingY: PropTypes.number,
}

export default FitterHappierText
