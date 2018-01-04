import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from 'src/reducers';

import { TabNavigator, StackNavigator } from 'react-navigation';

import { Tab1Stack1, Tab1Stack2 } from 'src/scenes/Tab1';
import { Tab2Stack1, Tab2Stack2 } from 'src/scenes/Tab2';
import { Tab3Stack1, Tab3Stack2 } from 'src/scenes/Tab3';

const Tab1 = StackNavigator({
  Tab1Stack1: {
    screen: Tab1Stack1,
    navigationOptions: {
      headerTitle: 'Tab1 Stack1',
    },
  },
  Tab1Stack2: {
    screen: Tab1Stack2,
    navigationOptions: {
      headerTitle: 'Tab1 Stack2',
    },
  },
});

const Tab2 = StackNavigator({
  Tab2Stack1: {
    screen: Tab2Stack1,
    navigationOptions: {
      headerTitle: 'Tab2 Stack1',
    },
  },
  Tab2Stack2: {
    screen: Tab2Stack2,
    navigationOptions: {
      headerTitle: 'Tab2 Stack2',
    },
  },
});

const Tab3 = StackNavigator({
  Tab3Stack1: {
    screen: Tab3Stack1,
    navigationOptions: {
      headerTitle: 'Tab3 Stack1',
    },
  },
  Tab3Stack2: {
    screen: Tab3Stack2,
    navigationOptions: {
      headerTitle: 'Tab3 Stack2',
    },
  },
});

const AppNavigation = TabNavigator({
  Tab1: {
    screen: Tab1,
  },
  Tab2: {
    screen: Tab2,
  },
  Tab3: {
    screen: Tab3,
  },
});

export default class App extends Component {
  render() {
    return (
      <Provider store={AppReducer}>
        <AppNavigation />
      </Provider>
    );
  }
}