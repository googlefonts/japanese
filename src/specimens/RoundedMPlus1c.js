import React from 'react';
import Section from '../components/Section';
import GlyphColumn from '../components/GlyphColumn';
import GlyphColumnCaption from '../components/GlyphColumnCaption';

class SpecimenRoundedMPlus extends React.Component {
  render() {
    const self = this;
    const data = self.props.data;
    const font = data.fonts.roundedmplus1c;

    return (
      <Section
        maxWidth={5}
        basePaddingX={3}
        className="bg-fallback-navy black wf-mplus1p">
        <div className="sm-flex mxn1 sm-mxn2 md-mxn3 py3 md-py3">
          <div className="col-12 sm-col-6 px1 sm-px2 md-px3 wf-mplus1p white">
            <GlyphColumn fontWeight={200} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumn fontWeight={300} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumn fontWeight={400} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumn fontWeight={500} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumn fontWeight={600} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumn fontWeight={700} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumn fontWeight={900} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumnCaption className="center">{ data.fonts.mplus1p.name.ja }</GlyphColumnCaption>
          </div>
          <div className="col-12 sm-col-6 px1 sm-px2 md-px3 wf-roundedmplus1c white">
            <GlyphColumn fontWeight={200} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumn fontWeight={300} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumn fontWeight={400} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumn fontWeight={500} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumn fontWeight={600} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumn fontWeight={700} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumn fontWeight={900} value="すると、夜空に最初の流れ星が現れた。" />
            <GlyphColumnCaption className="center">{ font.name.ja }</GlyphColumnCaption>
          </div>
        </div>
      </Section>
    );
  }
}

SpecimenRoundedMPlus.defaultProps = {
  data: {},
};

export default SpecimenRoundedMPlus;
