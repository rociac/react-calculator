import React from 'react';
import PropTypes from 'prop-types';

const button = (props) => {
  return (
    <button className="button">{props.name}</button>
  );
};

button.propTypes = {
  name: PropTypes.string
};

export default button;