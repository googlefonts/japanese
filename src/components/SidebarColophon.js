import React from 'react';
import {StickyContainer, Sticky} from 'react-sticky';
import CodeBlock from '../components/CodeBlock';
import Swipeable from 'react-swipeable';

class SidebarArrow extends React.Component {
  render() {
    const self = this;
    let className = 'pb2 speak-none select-none';

    if (self.props.visible === false) {
      className += ' hide';
    }

    return (
      <div className={ className } aria-label="hidden">
        <span className="inline-block" style={{
          transform: 'rotate(' + self.props.deg + 'deg)',
          transition: 'transform 0.5s 0.15s ease-in-out',
        }}>
          {/* Apache 2.0 via https://design.google.com/icons/#ic_arrow_forward */}
          <svg height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="inherit" />
          </svg>
        </span>
      </div>
    );
  }
}

SidebarArrow.defaultProps = {
  visible: false,
  deg: 0,
};

class SidebarColophon extends React.Component {
  render() {
    const self = this;
    let data = self.props.data;
    let font = data.fonts[self.props.font];
    let desc = '';
    let quote = '';
    let codeBlock = '';
    let sidebarStyles = {};
    let fontNameHeading = font.name.ja;
    let sidebarLargeScreen = self.props.viewport.width > self.props.sidebarMaxWidth;

    let fontNameEn = (font.name.ja === font.name.en) ? <span className="block speak-none">&nbsp;</span> : <span lang="en" className="block font-weight-400 muted">{font.name.en}</span>;
    let fontDesignerNameEn = (font.designer.name.ja === font.designer.name.en) ? '' : <span lang="en" className="muted"> {font.designer.name.en}</span>;

    if (sidebarLargeScreen) {
      sidebarStyles.left = 0;
    } else {
      sidebarStyles.left = (self.props.show ? 25 : 83.3333333) + '%';
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
      desc = <p className="m0" lang="en">{font.description.en}</p>;
    }

    if (font.designer.quote.ja || font.designer.quote.en) {
      quote = <blockquote>
          <p className="sidebar-quote">{font.designer.quote.ja}</p>
          <p className="xsh-hide smh-hide mdh-hide muted-dark" lang="en">{font.designer.quote.en}</p>
          <footer>
            <span>{font.designer.name.ja}</span> <span className="muted-dark" lang="en">{fontDesignerNameEn}</span>
          </footer>
        </blockquote>;
    }

    if (self.props.showCodeBlock !== false) {
      codeBlock = <div className="mxn2 md-mxn3">
        <div className="mb2">
          <abbr className="xsh-hide smh-hide mdh-hide border-none h5 m0 line-height-1 pl2 md-pl3">HTML</abbr>
          <CodeBlock rounded={false } language="html">{'<link href="https://fonts.googleapis.com/earlyaccess/' + self.props.font + '.css" rel="stylesheet" />'}</CodeBlock>
        </div>
        <div className="mb2">
          <abbr className="xsh-hide smh-hide mdh-hide border-none h5 m0 line-height-1 pl2 md-pl3">CSS</abbr>
          <CodeBlock rounded={false } language="css">{'.wf-' + self.props.font + ' { font-family: "' + ( font.google_fonts_id || font.name.en || font.name.ja ) + '"; }'}</CodeBlock>
        </div>
      </div>;
    }

    return (
      <StickyContainer style={{zIndex: 5, overflow: 'hidden'}}>
        <div className="flex flex-wrap justify-start md-justify-end relative font-family-base">
          <div className="col-10 md-col-8 lg-col-9">{self.props.children}</div>
          <div className="col-12 md-col-4 lg-col-3 absolute md-relative top-0 right-0 height-100 md-height-auto">
            <div ref="sidebar" className="col-9 md-col-12 right height-100 absolute md-relaitve transition-sidebar"
                 style={sidebarStyles}>
            <Sticky style={{zIndex: 10, height: 0}} onClick={self.props.onClickSidebar}>
            {/* bottomOffset could be set to this computed height */}
              <div className={'bg-' + self.props.backgroundColor}>
              <Swipeable
                onSwipedLeft={self.props.onSwipedLeft}
                onSwipedRight={self.props.onSwipedRight}>
              <div className="right col-12 md-col-12 ds-sidebar md-ds-none">
                <div className={'h5 md-h4 animate-bg bg-' + self.props.backgroundColor} style={{height: 100 + 'vh'}}>
                <div className={'p2 md-p3 animate-bg transition-color transition-sidebar ' + (self.props.backgroundColor === 'white' ? 'bg-white' : 'bg-lighten-3') + ' ' + ((self.props.backgroundColor === 'black' || self.props.backgroundColor === 'gray') ? 'white fill-white' : '')}
                     style={{minHeight: 100 + 'vh'}}>

                  <SidebarArrow visible={!sidebarLargeScreen} deg={self.props.show ? 540 : 0} />

                  <h3 className="border-top pt2 onum pnum inline-block mt0 font-weight-600">{fontNameHeading}{fontNameEn}</h3>

                  {/* Fixes heights so the changing content is less jarring */}
                  {/* TODO might need to change this minHeight based on CSS breakpoints */}
                  <div className="height-sidebar-description">{desc}</div>

                  <div className="height-sidebar-quote xsh-hide smh-hide mb2">{quote}</div>

                  {codeBlock}

                </div>
                </div>
               </div>
              </Swipeable>
              </div>
            </Sticky>
            </div>
          </div>
        </div>
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

export default SidebarColophon;
