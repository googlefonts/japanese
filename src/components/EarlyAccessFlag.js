import React from 'react';
import PropTypes from 'prop-types';

const EarlyAccessFlag = (props) => {
  return (
    <div
      className="absolute border-top line-height-3 col-1 top-0 right-0 border-gray gray pt2 font-weight-400"
      style={{height: '100%', marginTop: '-1px'}}>
      <div className="vertical">
        <div lang="en">{props.label.en}</div>{' '}
        <div lang="ja" style={{fontSize: '0.9em'}}>
          {props.label.ja}
        </div>
      </div>
    </div>
  );
};

EarlyAccessFlag.defaultProps = {
  label: {
    en: 'Early Access',
    ja: '早期アクセス',
  },
};

EarlyAccessFlag.propTypes = {
  label: PropTypes.object,
};

export default EarlyAccessFlag;
