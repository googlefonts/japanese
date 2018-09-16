import React from 'react';
import content from '../../CONTRIBUTING.md';

class Contributing extends React.Component {
  render() {
    // const data = self.props.data;
    const colors = ['fuchsia', 'maroon', 'red', 'yellow', 'green', 'olive', 'aqua', 'blue', 'navy', 'purple', 'black'];

    let colorGrid = colors.map((color) => {
      return (
        <div key={ 'color-' + color } className={ 'bg-' + color + ' col-12 h3 flex items-center justify-center white' } style={{height: 100 + 'px '}}>
          <code>{ '.bg-' + color }</code>
        </div>
      );
    });

    return (
      <div>

      <div className="clearfix bg-white" lang="en">
        <div className="max-width-4 mx-auto py3">
          <div className="max-width-3 mx-auto">
            {/* Should be consistent non-homepage header */}
            <h2 className=""><span className="font-family-product-sans font-weight-600">Google Fonts</span> <span className="font-family-product-sans font-weight-400">Japanese</span></h2>
            <div dangerouslySetInnerHTML={{
              __html: content,
            }} />
            <h3 className="h2 font-weight-600">Colors</h3>
          </div>
          <div className="sm-flex flex-wrap sm-mxn1">
            { colorGrid }
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default Contributing;
