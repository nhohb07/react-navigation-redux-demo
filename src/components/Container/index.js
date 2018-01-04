import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container as NBContainer, Content } from 'native-base';

import styles from './styles';

export class Container extends Component {
  render() {
    return (
      <NBContainer>

        <Content contentContainerStyle={styles.content}>
          {this.props.children}
        </Content>

      </NBContainer>
    );
  }
}

Container.propTypes = {
  children: PropTypes.element,
};

Container.defaultProps = {
  children: null,
};