import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Screen8 from './Screen8';
import Screen7 from '../screen7/screen7';

const FirstRoute = () => (
  <Screen8 />
);
const SecondRoute = () => (
  <Screen7 />
);

export default class Tabtop extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Money' },
      { key: 'second', title: 'Weather' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight
  },
  scene: {
    flex: 1,
  },
});