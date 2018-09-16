import React from 'react'
import FitterHappierText from '../vendor/react-fitter-happier-text'

const GlyphColumn = props => {
  return (
    <div className={`${props.className} font-weight-${props.fontWeight}`}>
      <FitterHappierText text={props.value} />
    </div>
  )
}

GlyphColumn.defaultProps = {
  fontWeight: 400,
  className: '',
  compressor: 1.0,
  value: '',
}

export default GlyphColumn
