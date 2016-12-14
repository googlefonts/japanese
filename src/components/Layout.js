import React from 'react';
import data from '../data';
import dataFonts from '../data/fonts';
import dataAuthors from '../data/authors';
import ga from 'react-ga';
import smoothscroll from 'smoothscroll';
import NoScript from '../components/NoScript';

data.fonts = dataFonts;
data.authors = dataAuthors;

class Layout extends React.Component {
  renderChildren(props) {
    return React.Children.map(props.children, (child) => {
      return React.cloneElement(child, {
        data: props.data,
      });
    });
  }

  componentDidMount() {
    ga.initialize(data.service.analytics);
    ga.pageview(window.location.pathname.toString());
  }

  render() {
    const self = this;

    return (
      <div className="kern liga">
        {self.renderChildren(self.props)}
        <script async src="https://fonts.googleapis.com/measure"></script>
        <NoScript {...self.props} />
      </div>
    );
  }
}

Layout.defaultProps = {
  data: data,
};

export default Layout;
