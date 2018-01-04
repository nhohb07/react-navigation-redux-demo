import React from 'react';
import { Text } from 'react-native';
import { BaseComponent, Container, Button } from 'src/components';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as navigationActionCreators from 'src/data/navigation/actions';

export class _Tab1Stack1 extends BaseComponent {
  render() {
    return (
      <Container>
        <Button
          onPress={() => this.props.navigation.navigate('Tab1Stack2')}
          block
          small
        >
          <Text>Push To Tab1 Stack2</Text>
        </Button>
      </Container>
    );
  }
}

_Tab1Stack1.propTypes = {
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

export const Tab1Stack1 = connect(mapStateToProps, mapActionToProps)(_Tab1Stack1);