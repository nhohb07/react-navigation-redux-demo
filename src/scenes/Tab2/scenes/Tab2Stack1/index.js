import React from 'react';
import { Text } from 'react-native';
import { BaseComponent, Container, Button } from 'src/components';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as navigationActionCreators from 'src/data/navigation/actions';

export class _Tab2Stack1 extends BaseComponent {
  render() {
    return (
      <Container>
        <Button
          onPress={() => this.popTo('Tab1Stack1')}
          block
          small
        >
          <Text>Pop To Tab1 Stack1</Text>
        </Button>
      </Container>
    );
  }
}

_Tab2Stack1.propTypes = {
  actions: PropTypes.object
};

const mapStateToProps = (state) => ({
  appNavigation: state.data.navigation
});

const mapActionToProps = (dispatch) => ({
  actions: {
    appNavigation: bindActionCreators(navigationActionCreators, dispatch)
  }
});

export const Tab2Stack1 = connect(mapStateToProps, mapActionToProps)(_Tab2Stack1);