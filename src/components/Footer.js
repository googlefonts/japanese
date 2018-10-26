import React from 'react';
import FontList from '../components/FontList';

class Footer extends React.Component {
  render() {
    const props = this.props;
    const data = props.data;

    return (
      <div
        className="clearfix bg-white bg-fallback-white py2 md-py4"
        style={{minHeight: `60vh`}}>
        <div className="mx-auto max-width-5 px2 sm-px3">
          <div className="md-flex flex-wrap">
            <div className="col-12 lg-col-4 md-pr4 mb4 lg-mt4">
              <p lang="ja" className="notranslate">ぜひ定期的にチェックしてください。</p>
              <p lang="ja" className="notranslate">
                このページでは、Google
                Fontsに追加された新しいフォントのサンプルをご利用いただけます。また、Google
                での試験運用や技術についてお知らせすることもあります。
              </p>
              <p lang="en">Check back often!</p>
              <p lang="en">
                We’ll update this page with samples as new Japanese fonts are
                added to Google Fonts, and provide information about our own
                experiments and technology when possible.
              </p>
              <ul className="list-style-none p0 m0" lang="en">
                <li>
                  <a
                    href={`${data.repository}/blob/master/CONTRIBUTING.md`}
                    aria-label="Read more about contributing to this open source site.">
                    Contribute
                  </a>
                </li>
                <li className="fill-navy">
                  <a href={`https://twitter.com/${data.social.twitter}`}>
                    @{data.social.twitter} on Twitter
                  </a>
                </li>
                <li className="fill-navy">
                  <a href={`https://github.com/${data.social.github}`}>
                    @{data.social.github} on GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 md-col-8">
              <div className="clearfix mb4">
                <h3 className="h3 mt0">Featured Typefaces</h3>
                <FontList
                  color="black"
                  maxFontSize={48}
                  textAlignment="left"
                  firstColumnLgCol={3}
                  {...props}
                />
              </div>
              <div className="clearfix">
                <h3 className="h3">Made by Friends of Google Fonts</h3>
                <div className="sm-flex mxn1" lang="en">
                  <div className="col-12 sm-col-6 px1">
                    <a className="" href={data.authors.marikotakagi.url}>
                      {data.authors.marikotakagi.name}
                    </a>
                    <p className="mt0">{data.authors.marikotakagi.credit}</p>
                  </div>
                  <div className="col-12 sm-col-6 px1">
                    <a className="" href={data.authors.kennethormandy.url}>
                      {data.authors.kennethormandy.name}
                    </a>
                    <p className="mt0">{data.authors.kennethormandy.credit}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
