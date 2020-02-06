import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const button = ({ name, width, background }) => (
  <button
    style={{ backgroundColor: background, width }}
    className="button"
    type="button"
  >
    {name}
  </button>
);

button.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  background: PropTypes.string,
};

button.defaultProps = {
  width: '25%',
  background: 'grey',
};

export default button;
