/*
* @Author: Manraj Singh
* @Date:   2016-04-28 00:46:48
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-28 22:33:30
*/

'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  View,
  ListView,
  Navigator,
  TouchableOpacity
} from 'react-native';

import MapView from 'react-native-maps';

class Maps extends Component {
  
  getInitialState() {
    console.log('LEL');
    return {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    console.log('LOL');
    return (
      <MapView
        style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      />
    );
  }
}


const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Maps