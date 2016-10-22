import React from 'react';
import {Keyframes, Frame} from 'react-keyframes';
import Section from '../components/Section';
import FitterHappierText from '../vendor/react-fitter-happier-text';

class SpecimenNicoMoji extends React.Component {
  render() {
    return (
      <Section
        maxWidth={4}
        basePaddingX={3}
        className="bg-fallback-black green wf-nicomoji overflow-hidden">

        <img src="media/illustration-storefront-2-outlined.svg" className="col-12 block" role="presentation" alt="" />
        <div className="flex items-center px3 my3 center height-nicomojiplus blue">
          <div className="line-height-1 mt0 mb2 wf-nicomoji mx-auto col-10">
            <Keyframes loop={true}>

              <Frame duration={2500}><div className="red transition-color"><FitterHappierText text="ニコもじ" /></div></Frame>
              <Frame duration={2500}><div className="green transition-color"><FitterHappierText text="カフェでコーヒー" /></div></Frame>
              <Frame duration={2500}><div className="blue transition-color"><FitterHappierText text="おちゃにしますか" /></div></Frame>
              <Frame duration={2500}><div className="purple transition-color"><FitterHappierText text="いらっしゃいませ" /></div></Frame>

            </Keyframes>
          </div>
        </div>
        <img src="media/illustration-storefront-3-outlined.svg" className="col-12 block" role="presentation" alt="" />

      </Section>
    );
  }
}

SpecimenNicoMoji.defaultProps = {
  data: {}
};

export default SpecimenNicoMoji;
