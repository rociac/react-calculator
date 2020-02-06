import React from 'react';
import PropTypes from 'prop-types';

const display = ({ result }) => (
  <div className="display">
    <p>{result}</p>
  </div>
);

display.defaultProps = {
  result: '0',
};

display.propTypes = {
  result: PropTypes.string,
};

export default display;
