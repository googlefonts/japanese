import React from 'react';
import FitText from '../vendor/react-fittext';
import FontList from '../components/FontList';

class HeaderColumn extends React.Component {
  render() {
    const self = this;

    return (
      <div className={'col-12 sm-col-6 px1 md-px2 ' + self.props.className} lang={self.props.lang}>
        <div className="h4 md-h3">{self.props.children}</div>
      </div>
    );
  }
}

HeaderColumn.defaultProps = {
  heading: '',
  headingClassName: '',
  className: '',
  lang: 'ja',
};

class Header extends React.Component {
  render() {
    const self = this;

    return (
      <div className="bg-white black font-family-base relative pb4 bg-white black" style={{zIndex: 100}}>
        <header className="mx-auto md-max-width-4 lg-max-width-5 mb4 px1 md-px2 lg-px3 pt2 md-pt3 font-weight-500">
          <div className="h4 md-h3 red-small mb1 md-pl1" lang="en">Google Fonts + Japanese Early Access</div>
          <div className="col-12 md-col-9">
            <FitText compressor={1}>
              <h1 className="h1 line-height-2 my0 mb3 red font-weight-500">
                <span className="break-none">Google Fonts</span><span style={{fontSize: 0.9 + 'em'}}>&nbsp;+&nbsp;日本語</span><br/>
                <span style={{fontSize: 0.9 + 'em'}}>早期アクセス</span>
              </h1>
            </FitText>
          </div>
          <div className="sm-flex sm-mxn1 md-mxn2 line-height-4 font-weight-400">
            <HeaderColumn>
              <p><a href="https://fonts.google.com">Google Fonts</a> は、デザイナー ウェブフォントを直感的にご利用いただける、安定したオープンソース ディレクトリです。<a href="https://fonts.google.com/earlyaccess" title="Google Fonts Early Access">Google Fonts 早期アクセス</a>では、現時点で完全にはサポートしていないフォントを試験的に提供しています。</p>
              <p>膨大な数の文字のデザインに要する時間や、大容量のフォント ファイルをウェブフォントとして提供する際に必要な技術的インフラストラクチャなど、日本語の書体デザインやフォント開発にはさまざまな課題が立ちふさがります。そこで、規格や技術の開発を進めると同時に、Google Fonts 早期アクセスを通じてデザイナーやデベロッパーの皆様に日本語のウェブフォントをお試しいただけるようにしました。</p>
            </HeaderColumn>
            <HeaderColumn lang="en">
              <p><a href="https://fonts.google.com">Google Fonts</a> provides an intuitive and robust directory of open source designer web fonts. <a href="https://fonts.google.com/earlyaccess" title="Google Fonts Early Access">Google Fonts Early Access</a> is an experimental showcase for fonts that aren’t yet fully supported.</p>
              <p>Japanese typeface design and font development presents many interesting challenges, from the time it takes to design thousands and thousands of available characters, to the technical infrastructure required to serve large font files as web fonts. As standards and technology continue to develop, we invite designers and developers to experiment with the Japanese web fonts now available on Google Fonts Early Access.</p>
            </HeaderColumn>
          </div>
        </header>
        <div className="mx-auto md-max-width-5 lg-max-width-6">
          <FontList className="sm-col-6 md-col-4 px2" textAlignment="center" {...self.props} />
        </div>
      </div>
    );
  }
}

export default Header;
