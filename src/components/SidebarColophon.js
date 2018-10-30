import React from 'react';
import PropTypes from 'prop-types';
import {StickyContainer, Sticky} from 'react-sticky';
import CodeBlock from '../components/CodeBlock';
import Swipeable from 'react-swipeable';

const Blockquote = (props) => {
  return (
    <blockquote>
      <p className="sidebar-quote" lang="ja">
        {props.quote.ja}
      </p>
      <p className="xsh-hide smh-hide mdh-hide muted-dark" lang="en">
        {props.quote.en}
      </p>
      <footer>
        <span lang="ja" className="notranslate">
          {props.name.ja}
        </span>{' '}
        <span className="muted-dark" lang="en">
          {props.name.en}
        </span>
      </footer>
    </blockquote>
  );
};

Blockquote.propTypes = {
  quote: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
};

const CodeBlockWrapper = (props) => {
  let cssHref = `https://fonts.googleapis.com/css?family=${props.google_fonts_id
    .split(' ')
    .join('+')}`;

  if (props.earlyAccess === true) {
    cssHref = `https://fonts.googleapis.com/earlyaccess/${props.google_fonts_id
      .split(' ')
      .join('')
      .toLowerCase()}.css`;
  }

  return (
    <div className="mxn2 md-mxn3">
      <div className="mb2">
        <abbr className="xsh-hide smh-hide mdh-hide border-none h5 m0 line-height-1 pl2 md-pl3">
          HTML
        </abbr>
        <CodeBlock rounded={false} language="html">
          {`<link href="${cssHref}" rel="stylesheet">`}
        </CodeBlock>
      </div>
      <div className="mb2">
        <abbr className="xsh-hide smh-hide mdh-hide border-none h5 m0 line-height-1 pl2 md-pl3">
          CSS
        </abbr>
        <CodeBlock rounded={false} language="css">
          {'.wf-' +
            props.font +
            ' { font-family: "' +
            (props.google_fonts_id || props.name.en || props.name.ja) +
            '"; }'}
        </CodeBlock>
      </div>
    </div>
  );
};

CodeBlockWrapper.defaultProps = {
  earlyAccess: false,
};

CodeBlockWrapper.propTypes = {
  font: PropTypes.string.isRequired,
  google_fonts_id: PropTypes.string.isRequired,
  earlyAccess: PropTypes.bool,
  name: PropTypes.object,
};

const SidebarArrow = (props) => {
  let className = `pb2 speak-none select-none ${!props.visible ? 'hide' : ''}`;

  // Arrow SVG via Apache 2.0 via https://design.google.com/icons/#ic_arrow_forward */}
  return (
    <div className={className} aria-label="hidden">
      <span
        className="inline-block"
        style={{
          transform: `rotate(${props.deg}deg)`,
          transition: 'transform 0.5s 0.15s ease-in-out',
        }}
      >
        <svg height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
            fill="inherit"
          />
        </svg>
      </span>
    </div>
  );
};

SidebarArrow.defaultProps = {
  visible: false,
  deg: 0,
};

SidebarArrow.propTypes = {
  visible: PropTypes.bool.isRequired,
  deg: PropTypes.number.isRequired,
};

const MainWrapper = (props) => {
  return (
    <div className="flex flex-wrap justify-start md-justify-end relative font-family-base">
      <div className="col-10 md-col-8 lg-col-9">{props.children[0]}</div>
      <div className="col-12 md-col-4 lg-col-3 absolute md-relative top-0 right-0 height-100 md-height-auto">
        {props.children[1]}
      </div>
    </div>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.array.isRequired,
};

class SidebarColophon extends React.Component {
  getColorClasses() {
    const props = this.props;

    let classes = [];

    if (props.backgroundColor === 'white') {
      classes.push('bg-white');
    } else {
      classes.push('bg-lighten-3');
    }

    if (props.backgroundColor === 'black' || props.backgroundColor === 'gray') {
      classes.push('white fill-white');
    } else {
      classes.push('');
    }

    return classes.join(' ');
  }

  render() {
    const props = this.props;
    let data = props.data;
    let font = data.fonts[props.font];
    let desc = null;
    let quote = null;
    let codeBlock = null;
    let sidebarStyle = {};
    let fontNameHeading = font.name.ja;
    let sidebarLargeScreen = props.viewport.width > props.sidebarMaxWidth;

    let fontNameEn =
      font.name.ja === font.name.en ? (
        <span className="block speak-none">&nbsp;</span>
      ) : (
        <span lang="en" className="block font-weight-400 muted">
          {font.name.en}
        </span>
      );
    let fontDesignerNameEn =
      font.designer.name.ja === font.designer.name.en ? (
        ''
      ) : (
        <span lang="en" className="muted">
          {' '}
          {font.designer.name.en}
        </span>
      );

    if (sidebarLargeScreen) {
      sidebarStyle.left = 0;
    } else {
      sidebarStyle.left = (props.show ? 25 : 83.3333333) + '%';
    }

    // TODO switch to toggle
    // There are no translated versions of the descriptions right now
    // if (font.description) {
    //   if (font.description.ja && font.description.en) {
    //     desc = <div><p className="mt0">{font.description.ja}</p><p lang="en">{font.description.en}</p></div>
    //   } else {
    //     desc = <div><p className="mt0" lang="en">{font.description.en ? font.description.en : font.description.ja}</p></div>
    //   }
    // }
    if (font.description && font.description.en) {
      desc = (
        <p className="m0" lang="en">
          {font.description.en}
        </p>
      );
    }

    if (font.designer.quote.ja || font.designer.quote.en) {
      quote = (
        <Blockquote
          quote={font.designer.quote}
          name={{
            ja: font.designer.name.ja,
            en: fontDesignerNameEn,
          }}
        />
      );
    }

    if (props.showCodeBlock !== false) {
      codeBlock = <CodeBlockWrapper font={props.font} {...font} />;
    }

    return (
      <StickyContainer style={{zIndex: 5, overflow: 'hidden'}}>
        <MainWrapper>
          {props.children}
          <div
            ref="sidebar"
            style={sidebarStyle}
            className="col-9 md-col-12 right height-100 absolute md-relaitve transition-sidebar"
          >
            <Sticky
              style={{zIndex: 10, height: 0}}
              onClick={props.onClickSidebar}
            >
              {({style}) => {
                // bottomOffset could be set to this computed height
                return (
                  <div style={style} className={`bg-${props.backgroundColor}`}>
                    <Swipeable
                      onSwipedLeft={props.onSwipedLeft}
                      onSwipedRight={props.onSwipedRight}
                    >
                      <div className="right col-12 md-col-12 ds-sidebar md-ds-none">
                        <div
                          className={`h5 md-h4 animate-bg bg-${
                            props.backgroundColor
                          }`}
                          style={{height: `100vh`}}
                        >
                          <div
                            className={`p2 md-p3 animate-bg transition-color transition-sidebar ${this.getColorClasses()}}`}
                            style={{minHeight: `100vh`}}
                          >
                            <SidebarArrow
                              visible={!sidebarLargeScreen}
                              deg={props.show ? 540 : 0}
                            />

                            <h3 className="border-top pt2 onum pnum inline-block mt0 font-weight-600">
                              {fontNameHeading}
                              {fontNameEn}
                            </h3>

                            {/* Fixes heights so the changing content is less jarring */}
                            {/* TODO might need to change this minHeight based on CSS breakpoints */}
                            <div className="height-sidebar-description">
                              {desc}
                            </div>

                            <div className="height-sidebar-quote xsh-hide smh-hide mb2">
                              {quote}
                            </div>

                            {codeBlock}
                          </div>
                        </div>
                      </div>
                    </Swipeable>
                  </div>
                );
              }}
            </Sticky>
          </div>
        </MainWrapper>
      </StickyContainer>
    );
  }
}

SidebarColophon.defaultProps = {
  backgroundColor: 'silver',
  onClickSidebar: false,
  onSwipedLeft: false,
  onSwipedRight: false,
  showCodeBlock: true,
  viewport: {
    width: 1024,
    height: 768,
  },
};

SidebarColophon.propTypes = {
  backgroundColor: PropTypes.string,
  onClickSidebar: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onSwipedLeft: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  onSwipedRight: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  showCodeBlock: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  viewport: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default SidebarColophon;
