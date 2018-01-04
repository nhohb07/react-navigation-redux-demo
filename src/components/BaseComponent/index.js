import { Component } from 'react';
import _ from 'lodash';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as navigationActionCreators from 'src/data/navigation/actions';

export class BaseComponent extends Component {
  constructor(props) {
    super(props);

    const appNavigationActions = _.get(this.props, 'actions.appNavigation', null);
    const screenKey = _.get(this.props.navigation, 'state.key', null);
    const routeName = _.get(this.props.navigation, 'state.routeName', null);

    if (screenKey && appNavigationActions) {
      appNavigationActions.addScreen({ key: screenKey, name: routeName });
    }
  }

  popTo = (screenKey = null) => {
    if (screenKey) {
      const appNavigationActions = _.get(this.props, 'actions.appNavigation', null);
      const screenKeys = _.get(this.props, 'appNavigation.screenKeys', null);

      if (!screenKeys.length) {
        return;
      }

      const screenIndex = _.findIndex(screenKeys, item => (item.name === screenKey));
      if (screenIndex > -1) {
        const screenId = screenKeys[screenIndex + 1].key;
        appNavigationActions.removeScreen({ from: screenIndex });

        return this.props.navigation.goBack(screenId);
      }
    }

    return this.props.navigation.goBack();
  }
}