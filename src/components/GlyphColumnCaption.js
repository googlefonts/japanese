import React from 'react'

const GlyphColumnCaption = props => {
  return (
    <h3
      className={`h6 sm-h5 md-h4 lg-h3 font-weight-400 white font-family-base select-none ${
        props.className
      }`}>
      {props.children}
    </h3>
  )
}

GlyphColumnCaption.defaultProps = {
  className: '',
}

export default GlyphColumnCaption
