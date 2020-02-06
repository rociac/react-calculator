import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const button = ({ name, background, wide }) => (
  <button
    style={wide ? { width: '50%', backgroundColor: background } : { width: '25%', backgroundColor: background }}
    className="button"
    type="button"
  >
    {name}
  </button>
);

button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  background: PropTypes.string,
};

button.defaultProps = {
  wide: false,
  background: 'orange',
};

export default button;
