import React from 'react';
import PropTypes from 'prop-types';

const button = ({ name }) => (
  <button className="button" type="button">{name}</button>
);

button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default button;
