import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './InputGroup.css';


class InputGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  getClassNames() {
    const classes = ['input-group'];
    if (this.state.isActive) classes.push('is-active');
    return classes.join(' ');
  }

  handleFocus() {
    this.setState({
      isActive: true,
    });
  }

  handleBlur() {
    this.setState({
      isActive: false,
    });
  }

  render() {
    const { name, label, type, value, onChange } = this.props;
    return (
      <div className={this.getClassNames()}>
        <label className="visuallyhidden" htmlFor={name}>{label || name}</label>
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={label || name}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </div>
    );
  }
}

InputGroup.defaultProps = {
  label: null,
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputGroup;
