import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash.map';
import FitText from '@kennethormandy/react-fittext';

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

const FontListItemDesigner = (props) => {
  if (props) {
    return (
      <span className="block mt1">
        {props.name.ja}{' '}
        <span lang="en" className="muted-dark">
          {props.name.en === props.name.ja ? '' : props.name.en}
        </span>
      </span>
    );
  }

  return null;
};

const FontListItem = (props) => {
  if (props.published === false || typeof props.designer === 'undefined') {
    return null;
  }

  let fontSizeAdjust =
    typeof props.font_size_adjust === 'undefined'
      ? 1
      : 1 / props.font_size_adjust;

  let textString = ['安', 'あ', 'ア'];

  if (props.kanji !== true) {
    textString[0] = <GlyphHidden text={textString[0]} />;
  }

  if (props.hiragana !== true) {
    textString[1] = <GlyphHidden text={textString[1]} />;
  }

  if (props.katakana !== true) {
    textString[2] = <GlyphHidden text={textString[2]} />;
  }

  return (
    <li className={`col-12 m0 ${props.className}`}>
      <a className="block py2 border-none" href={`#${props.font}`}>
        <div className="flex items-center py3 border-top border-muted-light height-fontlist-item">
          <div
            className={`h1 line-height-1 col-4 sm-col-3 md-col-5 lg-col-${
              props.firstColumnLgCol
            } ${props.color} ${props.textAlign}`}>
            <div style={{fontSize: `${props.font_size_adjust || 1}em`}}>
              <FitText
                compressor={0.33 * fontSizeAdjust}
                minFontSize={props.minFontSize}
                maxFontSize={props.maxFontSize}>
                <div
                  className={`break-none wf-${props.font} font-weight-${
                    props.fontWeight
                  }`}>
                  <span>{textString}</span>
                </div>
              </FitText>
            </div>
          </div>
          <div className="flex-auto line-height-2 pl2">
            <span>
              {props.name.ja}{' '}
              <span lang="en" className="muted-dark">
                {props.name.en === props.name.ja ? '' : props.name.en}
              </span>
            </span>
            <FontListItemDesigner {...props.designer} />
            {props.earlyAccess === true ? (
              <div className="font-weight-600 red mt2">
                <span lang="en">{props.earlyAccessLabel.en}</span>{' '}
                <span style={{fontSize: '0.9em'}} lang="ja">
                  {props.earlyAccessLabel.ja}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </a>
    </li>
  );
};

FontListItem.propTypes = {
  designer: PropTypes.object.isRequired,
};

FontListItem.defaultProps = {
  color: 'black',
  fontWeight: 400,
  maxFontSize: 120,
  minFontSize: 24,
  firstColumnLgCol: 5, // TODO This this a quick fix, could be much nicer. Fixes column width on footer
  textAlignment: 'left',
  className: '',
  earlyAccessLabel: {
    en: 'Early Access',
    ja: '早期アクセス',
  },
};

class FontList extends React.Component {
  render() {
    const props = this.props;
    const data = props.data;

    let textAlign = props.textAlignment;

    if (props.textAlignment === 'left' || props.textAlignment === 'right') {
      textAlign = `${props.textAlignment}-align`;
    }

    let typefaceList = Object.keys(data.fonts).map(function(index) {
      return (
        <FontListItem
          key={`header_${index}`}
          font={index}
          textAlign={textAlign}
          {...props}
          {...data.fonts[index]}
        />
      );
    });

    return (
      <ul className="flex flex-wrap m0 p0 list-style-none items-center">
        {typefaceList}
      </ul>
    );
  }
}

FontList.defaultProps = {
  data: {},
};

export default FontList;
