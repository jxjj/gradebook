import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = ({ name, type, value, onChange }) => (
  <div className="input-group">
    <label htmlFor={name}>{name}</label>
    <input name={name} type={type} value={value} onChange={onChange} />
  </div>
);

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputGroup;
