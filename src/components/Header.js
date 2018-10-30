import React from 'react';
import PropTypes from 'prop-types';
import FitText from '@kennethormandy/react-fittext';
import FontList from '../components/FontList';

const HeaderColumn = (props) => {
  return (
    <div
      className={`col-12 sm-col-6 px1 md-px2 ${props.className}`}
      lang={props.lang}
    >
      <div className="h4 md-h3">{props.children}</div>
    </div>
  );
};

HeaderColumn.defaultProps = {
  heading: '',
  headingClassName: '',
  className: '',
  lang: 'ja',
};

HeaderColumn.propTypes = {
  heading: PropTypes.string,
  headingClassName: PropTypes.string,
  className: PropTypes.string,
  lang: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Header = (props) => {
  const data = props.data;
  return (
    <div
      className="bg-white black font-family-base relative pb4 bg-white black"
      style={{zIndex: 100}}
    >
      <header className="mx-auto md-max-width-4 lg-max-width-5 mb4 px1 md-px2 lg-px3 pt2 md-pt3 font-weight-500">
        <div className="h4 md-h3 red-small mb1 md-pl1" lang="en">
          {data.name.en}
          {data.titleSeparator}
          {data.title.en}
        </div>
        <div className="col-12 h1 notranslate" lang="ja">
          <FitText compressor={1.975}>
            <h1 className="line-height-2 my0 mb3 red font-weight-400">
              <span className="break-none">{data.name.ja}</span>
              <span style={{fontSize: `0.9em`}}>
                {data.titleSeparator}
                {data.title.ja}
              </span>
            </h1>
          </FitText>
        </div>
        <div className="sm-flex sm-mxn1 md-mxn2 line-height-4 font-weight-400">
          <HeaderColumn className="notranslate" lang="ja">
            <p>
              <a
                href="https://fonts.google.com"
                title="Google Fonts"
                target="_blank"
                rel="noopener"
              >
                Google Fonts
              </a>{' '}
              は、デザイナー
              ウェブフォントを直感的にご利用いただける、安定したオープンソース
              ディレクトリです。
            </p>
            <p>
              膨大な数の文字のデザインに要する時間や、大容量のフォント
              ファイルをウェブフォントとして提供する際に必要な技術的インフラストラクチャなど、日本語の書体デザインやフォント開発にはさまざまな課題が立ちふさがります。そこで、規格や技術の開発を進めると同時に、Google
              Fonts
              を通じてデザイナーやデベロッパーの皆様に日本語のウェブフォントをお試しいただけるようにしました。
            </p>
          </HeaderColumn>
          <HeaderColumn lang="en">
            <p>
              <a
                href="https://fonts.google.com"
                title="Google Fonts"
                target="_blank"
                rel="noopener"
              >
                Google Fonts
              </a>{' '}
              provides an intuitive and robust directory of open source designer
              web fonts.
            </p>
            <p>
              Japanese typeface design and font development presents many
              interesting challenges, from the time it takes to design thousands
              and thousands of available characters, to the technical
              infrastructure required to serve large font files as web fonts. As
              standards and technology continue to develop, we invite designers
              and developers to experiment with the Japanese web fonts now
              available on Google Fonts.
            </p>
          </HeaderColumn>
        </div>
      </header>
      <div className="mx-auto md-max-width-5 lg-max-width-6">
        <FontList
          className="sm-col-6 md-col-4 px2"
          textAlignment="center"
          {...props}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Header;
