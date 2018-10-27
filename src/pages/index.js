import React from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import Waypoint from 'react-waypoint';
import googleFontsBadge from '@googlefonts/badge';
import 'smoothscroll';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SidebarColophon from '../components/SidebarColophon';

import SpecimenMPlus1p from '../specimens/MPlus1p';
import SpecimenRoundedMPlus1c from '../specimens/RoundedMPlus1c';
import SpecimenHannari from '../specimens/Hannari';
import SpecimenKokoro from '../specimens/Kokoro';
import SpecimenSawarabiGothic from '../specimens/SawarabiGothic';
import SpecimenSawarabiMincho from '../specimens/SawarabiMincho';
import SpecimenNikukyu from '../specimens/Nikukyu';
import SpecimenNicoMoji from '../specimens/NicoMoji';
import SpecimenNotoSansJapanese from '../specimens/NotoSansJapanese';

class Index extends React.Component {
  constructor() {
    super();

    this.state = {
      sidebar: true, // Default to true for mobile-first prerender
      active: 'mplus1p',
      backgroundColor: 'gray',
      codeBlock: true,
      viewport: {
        width: 1024, // TODO Change
        height: 768,
      },
    };

    // If window is less than medium breakpoint, this.setState({ sidebar: true })
    this.onClickSpecimen = this.onClickSpecimen.bind(this);
    this.onSwipedRightSidebar = this.onSwipedRightSidebar.bind(this);
    this.onSwipedLeftSidebar = this.onSwipedLeftSidebar.bind(this);

    this.getViewportWidth = () => {
      if (window && document) {
        // Via http://stackoverflow.com/a/11744120/864799
        return {
          width:
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth,
          height:
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight,
        };
      }
    };

    this.setViewportWidth = () => {
      let viewport = this.getViewportWidth();
      this.setState({
        viewport: viewport,
        sidebar: viewport.width > this.props.sidebarMaxWidth,
      });
    };

    this.handleResize = () => {
      return throttle(this.setViewportWidth, 500);
    };
  }

  componentDidMount() {
    const self = this;
    self.setViewportWidth();
    window.addEventListener('resize', self.handleResize(), false);

    googleFontsBadge();
  }

  componentWillUnmount() {
    const self = this;
    window.removeEventListener('resize', self.handleResize(), false);
  }

  setSidebarState(newSidebarState) {
    const self = this;
    self.refs.sidebar.forceUpdate();

    if (self.state.viewport.width < self.props.sidebarMaxWidth) {
      self.setState({
        sidebar:
          typeof newSidebarState === 'undefined'
            ? !self.state.sidebar
            : newSidebarState,
      });
    }
  }

  onSwipedLeftSidebar() {
    const self = this;
    self.setSidebarState(true);
  }

  onSwipedRightSidebar() {
    const self = this;
    self.setSidebarState(false);
  }

  onClickSpecimen() {
    const self = this;
    self.setSidebarState();
  }

  handleSpecimenWaypoint(font, opts, e) {
    const self = this;

    if (e && e.currentPosition === 'inside') {
      self.setState({
        active: font,
        backgroundColor:
          typeof opts.backgroundColor === 'undefined'
            ? self.state.backgroundColor
            : opts.backgroundColor,
        codeBlock:
          typeof opts.codeBlock === 'undefined'
            ? self.state.codeBlock
            : opts.codeBlock,
      });
    }
  }

  render() {
    const self = this;

    // TODO Switch to map like in footer
    // Not sure how to use imported React elements with this pattern yet

    return (
      <div style={{height: 100 + '%'}}>
        <Header {...self.props} />
        <SidebarColophon
          {...self.props}
          ref="sidebar"
          show={self.state.sidebar}
          onClickSidebar={self.onClickSpecimen}
          onSwipedLeft={self.onSwipedLeftSidebar}
          onSwipedRight={self.onSwipedRightSidebar}
          font={self.state.active}
          viewport={self.state.viewport}
          showCodeBlock={self.state.codeBlock}
          backgroundColor={self.state.backgroundColor}>
          <div
            className={'clearfix animate-bg bg-' + self.state.backgroundColor}>
            <div className="clearfix" id="mplus1p">
              <Waypoint
                bottomOffset={'50%'}
                topOffset={'-50%'}
                onPositionChange={self.handleSpecimenWaypoint.bind(
                  self,
                  'mplus1p',
                  {
                    backgroundColor: 'blue',
                    codeBlock: true,
                  }
                )}
              />
              <SpecimenMPlus1p {...self.props} />
            </div>

            <div className="clearfix" id="roundedmplus1c">
              <Waypoint
                bottomOffset={'50%'}
                topOffset={'-50%'}
                onPositionChange={self.handleSpecimenWaypoint.bind(
                  self,
                  'roundedmplus1c',
                  {
                    backgroundColor: 'navy',
                    codeBlock: true,
                  }
                )}
              />
              <SpecimenRoundedMPlus1c {...self.props} />
            </div>

            <div className="clearfix" id="hannari">
              <Waypoint
                bottomOffset={'50%'}
                topOffset={'-50%'}
                onPositionChange={self.handleSpecimenWaypoint.bind(
                  self,
                  'hannari',
                  {
                    backgroundColor: 'red',
                    codeBlock: true,
                  }
                )}
              />
              <SpecimenHannari {...self.props} />
            </div>

            <div
              className="clearfix"
              id="kokoro"
              style={{minHeight: 100 + 'vh'}}>
              <Waypoint
                bottomOffset={'50%'}
                topOffset={'-50%'}
                onPositionChange={self.handleSpecimenWaypoint.bind(
                  self,
                  'kokoro',
                  {
                    backgroundColor: 'green',
                    codeBlock: true,
                  }
                )}
              />
              <SpecimenKokoro {...self.props} />
            </div>

            <div className="clearfix" id="sawarabimincho">
              <Waypoint
                bottomOffset={'50%'}
                topOffset={'-50%'}
                onPositionChange={self.handleSpecimenWaypoint.bind(
                  self,
                  'sawarabimincho',
                  {
                    backgroundColor: 'gray',
                    codeBlock: true,
                  }
                )}
              />
              <SpecimenSawarabiMincho {...self.props} />
            </div>

            <div className="clearfix" id="sawarabigothic">
              <Waypoint
                bottomOffset={'50%'}
                topOffset={'-50%'}
                onPositionChange={self.handleSpecimenWaypoint.bind(
                  self,
                  'sawarabigothic',
                  {
                    backgroundColor: 'gray',
                    codeBlock: true,
                  }
                )}
              />
              <SpecimenSawarabiGothic {...self.props} />
            </div>

            <div className="clearfix" id="nikukyu">
              <Waypoint
                bottomOffset={'50%'}
                topOffset={'-50%'}
                onPositionChange={self.handleSpecimenWaypoint.bind(
                  self,
                  'nikukyu',
                  {
                    backgroundColor: 'olive',
                    codeBlock: true,
                  }
                )}
              />
              <SpecimenNikukyu {...self.props} />
            </div>

            <div className="clearfix" id="nicomoji">
              <Waypoint
                bottomOffset={'50%'}
                topOffset={'-50%'}
                onPositionChange={self.handleSpecimenWaypoint.bind(
                  self,
                  'nicomoji',
                  {
                    backgroundColor: 'gray',
                    codeBlock: true,
                  }
                )}
              />
              <SpecimenNicoMoji {...self.props} />
            </div>

            <div className="clearfix" id="notosansjapanese">
              <Waypoint
                bottomOffset={'50%'}
                topOffset={'-50%'}
                onPositionChange={self.handleSpecimenWaypoint.bind(
                  self,
                  'notosansjapanese',
                  {
                    backgroundColor: 'fuchsia',
                    codeBlock: true,
                  }
                )}
              />
              <SpecimenNotoSansJapanese {...self.props} />
            </div>

            <div className="clearfix">
              <Waypoint
                bottomOffset={'50%'}
                topOffset={'-50%'}
                onPositionChange={self.handleSpecimenWaypoint.bind(
                  self,
                  'footer',
                  {
                    backgroundColor: 'white',
                    codeBlock: false,
                  }
                )}
              />
              <Footer {...self.props} />
            </div>
          </div>
        </SidebarColophon>
      </div>
    );
  }
}

Index.defaultProps = {
  // $breakpoint-md
  sidebarMaxWidth: 830,
};

Index.propTypes = {
  sidebarMaxWidth: PropTypes.number,
};

export default Index;
