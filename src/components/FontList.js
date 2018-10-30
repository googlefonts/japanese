import React from 'react';
import PropTypes from 'prop-types';
import FitText from '@kennethormandy/react-fittext';
import GlyphHidden from './GlyphHidden';
import EarlyAccessFlag from './EarlyAccessFlag';

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

FontListItemDesigner.propTypes = {
  name: PropTypes.object.isRequired,
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
  let keyStr = `GlyphHidden_${props.font}`;

  if (props.kanji !== true) {
    textString[0] = <GlyphHidden key={`${keyStr}_0`} text={textString[0]} />;
  }

  if (props.hiragana !== true) {
    textString[1] = <GlyphHidden key={`${keyStr}_1`} text={textString[1]} />;
  }

  if (props.katakana !== true) {
    textString[2] = <GlyphHidden key={`${keyStr}_2`} text={textString[2]} />;
  }

  return (
    <li className={`col-12 m0 ${props.className}`}>
      <a className="block py2 border-none" href={`#${props.font}`}>
        <div className={`flex relative items-center py3 border-top border-muted-light height-fontlist-item ${props.earlyAccess ? 'pr3' : ''}`}>
          {props.earlyAccess === true ? (
            <EarlyAccessFlag label={props.earlyAccessLabel} />
          ) : null}
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
                  <span lang="ja" className="notranslate">
                    {textString}
                  </span>
                </div>
              </FitText>
            </div>
          </div>
          <div className="flex-auto line-height-2 pl2">
            <span>
              <span lang="ja" className="notranslate">
                {props.name.ja}
              </span>{' '}
              <span lang="en" className="muted-dark">
                {props.name.en === props.name.ja ? '' : props.name.en}
              </span>
            </span>
            {props.designer ? <FontListItemDesigner {...props.designer} /> : null }
          </div>
        </div>
      </a>
    </li>
  );
};

FontListItem.defaultProps = {
  color: 'black',
  fontWeight: 400,
  maxFontSize: 120,
  minFontSize: 24,
  firstColumnLgCol: 5, // TODO This this a quick fix, could be much nicer. Fixes column width on footer
  textAlign: 'left',
  className: '',
  kanji: false,
  hiragana: true,
  katakana: true,
  earlyAccess: false,
};

FontListItem.propTypes = {
  name: PropTypes.object.isRequired,
  font: PropTypes.string.isRequired,
  designer: PropTypes.object,
  published: PropTypes.bool,
  color: PropTypes.string.isRequired,
  font_size_adjust: PropTypes.number,
  fontWeight: PropTypes.number.isRequired,
  maxFontSize: PropTypes.number.isRequired,
  minFontSize: PropTypes.number.isRequired,
  textAlign: PropTypes.oneOf(['left-align', 'right-align', 'center']),
  className: PropTypes.string,
  firstColumnLgCol: PropTypes.number.isRequired,

  earlyAccess: PropTypes.bool.isRequired,
  earlyAccessLabel: PropTypes.object,

  kanji: PropTypes.oneOf([true, false, 'IPA']).isRequired,
  hiragana: PropTypes.bool.isRequired,
  katakana: PropTypes.bool.isRequired,
};

class FontList extends React.Component {
  render() {
    const props = this.props;
    const data = props.data;

    let textAlign = props.textAlignment;

    if (props.textAlignment === 'left' || props.textAlignment === 'right') {
      textAlign = `${props.textAlignment}-align`;
    }

    let typefaceList = Object.keys(data.fonts).map(function(key, index) {
      return (
        <FontListItem
          key={`FontList_${key}_${index}`}
          font={key}
          textAlign={textAlign}
          {...props}
          {...data.fonts[key]}
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

FontList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FontList;
