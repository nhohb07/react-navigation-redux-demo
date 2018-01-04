import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button as NBButton } from 'native-base';

import styles from './styles';

export class Button extends Component {
  render() {
    return (
      <NBButton
        {...this.props}
      >
        {this.props.children}
      </NBButton>
    );
  }
}

Button.propTypes = {
  children: PropTypes.element,
};

Button.defaultProps = {
  children: null,
};