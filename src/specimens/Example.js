import React from 'react';
import Section from '../components/Section';

class SpecimenExample extends React.Component {
  render() {
    const self = this;

    // Assign the metadata from `_data/fonts.js`
    // to variables to use in the tempaltes
    const data = self.props.data;
    const font = data.fonts.example;

    // Edit the template within `return()`!
    // This is JSX, which is made to look a lot like HTML,
    // but isn’t exactly HTML. Most notably, you’ll need to use
    // `className` instead of `class`.
    return (
      <Section maxWidth={3} className="bg-black white">
        <h2>
          {font.name.ja}
          <span className="muted" lang="en">{font.name.en}</span>
        </h2>
      </Section>
    );
  }
}

export default SpecimenExample;
