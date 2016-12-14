import React from 'react';
import Section from '../components/Section';
import KokoroSecret from '../components/svg/kokoro-secret';

class KokoroNotebook extends React.Component {
  render() {
    const self = this;

    return (
      <div className="height-kokoro-book mx-auto max-width-4 bg-white black ds-bookcover rounded flex flex-wrap items-stretch content-stretch overflow-hidden">
        <div className="height-kokoro-page col-12 sm-col-6 md-col-12 lg-col-6 ds-page-left sm-rounded-left flex items-top">
          <div className="flex-auto p4">
            <div className="fill-red blend-multiply sm-hide lg-hide" aria-label="Secret mark" style={{maxWidth: 3 + 'rem'}}>
              <KokoroSecret />
            </div>
          </div>
        </div>
        <div className="height-kokoro-page col-12 sm-col-6 md-col-12 lg-col-6 ds-page-right flex items-stretch">
          <div className="relative px4 py3 sm-px3 md-px4 lg-px3 flex flex-wrap" style={{height: 100 + '%'}}>
            <div className="self-start fill-red xs-hide md-hide" style={{height: 50 + '%', maxWidth: 2.5 + 'rem'}}>
              <KokoroSecret />
            </div>
            <div className="self-baseline max-width-2 mx-auto h0-kokoro align-left">{ self.props.children }</div>
          </div>
        </div>
      </div>
    );
  }
}

class SpecimenKokoro extends React.Component {
  render() {
    return (
      <Section
        maxWidth={4}
        basePaddingX={3}
        className="bg-fallback-green black wf-kokoro">
        <KokoroNotebook>
          <p className="m0">わたしのふたつのじんかくにはきょうつうのきおくがある。</p>
        </KokoroNotebook>
      </Section>
    );
  }
}

SpecimenKokoro.defaultProps = {
  data: {},
};

export default SpecimenKokoro;
