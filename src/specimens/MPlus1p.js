import React from 'react';
import Section from '../components/Section';
import GlyphColumn from '../components/GlyphColumn';
import GlyphColumnCaption from '../components/GlyphColumnCaption';

class SpecimenMPlus extends React.Component {
  constructor() {
    super();

    this.state = {
      animate: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const self = this;

    self.setState({
      animate: !self.state.animate,
    });
  }

  render() {
    const self = this;

    return (
      <Section
        maxWidth={5}
        basePaddingX={3}
        className="bg-fallback-blue black wf-mplus1p">

        <div className="py4" onClick={self.handleOnClick}>

          <GlyphColumnCaption className="flex">
            <div className="flex-auto pl2">Thin</div>
            <div className="flex-auto pl2">Light</div>
            <div className="flex-auto pl2">Regular</div>
            <div className="flex-auto pl2">Medium</div>
            <div className="flex-auto pl2">Bold</div>
            <div className="flex-auto pl2">Extra&nbsp;Bold</div>
            <div className="flex-auto pl2">Black</div>
          </GlyphColumnCaption>

          <div className={'relative ty50 animate animate-ty50 ' + (self.state.animate ? '' : 'animate-pause')}>
            <div className="flex wf-mplus1p white h0">
              <GlyphColumn value="夜" compressor={0.125} fontWeight={200} className="flex-auto" />
              <GlyphColumn value="空" compressor={0.125} fontWeight={300} className="flex-auto" />
              <GlyphColumn value="に" compressor={0.125} fontWeight={400} className="flex-auto" />
              <GlyphColumn value="な" compressor={0.125} fontWeight={500} className="flex-auto" />
              <GlyphColumn value="が" compressor={0.125} fontWeight={700} className="flex-auto" />
              <GlyphColumn value="れ" compressor={0.125} fontWeight={800} className="flex-auto" />
              <GlyphColumn value="星" compressor={0.125} fontWeight={900} className="flex-auto" />
            </div>
          </div>

          <div className={'blend-luminosity tyn50 animate animate-tyn50 ' + (self.state.animate ? '' : 'animate-pause')}>
            <div className="flex muted wf-roundedmplus1c h0">
              <GlyphColumn value="夜" compressor={0.125} fontWeight={200} className="flex-auto" />
              <GlyphColumn value="空" compressor={0.125} fontWeight={300} className="flex-auto" />
              <GlyphColumn value="に" compressor={0.125} fontWeight={400} className="flex-auto" />
              <GlyphColumn value="な" compressor={0.125} fontWeight={500} className="flex-auto" />
              <GlyphColumn value="が" compressor={0.125} fontWeight={700} className="flex-auto" />
              <GlyphColumn value="れ" compressor={0.125} fontWeight={800} className="flex-auto" />
              <GlyphColumn value="星" compressor={0.125} fontWeight={900} className="flex-auto" />
            </div>
          </div>

          <GlyphColumnCaption className="flex">
            <div className="flex-auto pl2">Thin</div>
            <div className="flex-auto pl2">Light</div>
            <div className="flex-auto pl2">Regular</div>
            <div className="flex-auto pl2">Medium</div>
            <div className="flex-auto pl2">Bold</div>
            <div className="flex-auto pl2">Extra&nbsp;Bold</div>
            <div className="flex-auto pl2">Black</div>
          </GlyphColumnCaption>

        </div>
      </Section>
    );
  }
}

SpecimenMPlus.defaultProps = {
  data: {},
};

export default SpecimenMPlus;
