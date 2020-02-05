import React from 'react';
import PropTypes from 'prop-types';

const display = (props) => {
  return (
    <div className="display">
      <p>{props.result}</p>
    </div>
  );
};

display.defaultProps = {
  result: '0'
};

display.propTypes = {
  result: PropTypes.string
};

export default display;