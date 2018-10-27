import React from 'react';

class fourOhFour extends React.Component {
  componentDidMount () {
    if (window && window.location) {
      window.location.replace("/");      
    }
  }
  render() {
    return (
      <div className="p2 max-width-2 mx-auto">
        <h1>404 – Page not found</h1>
        <a href="/">Visit the site</a>
      </div>
    );
  }
}

export default fourOhFour;
