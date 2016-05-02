/*
* @Author: Manraj Singh
* @Date:   2016-04-28 00:46:48
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-05-02 21:29:48
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
  constructor(props) {
    super(props);
    this.state = {
      region : {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
    console.log(this.state.region)
    console.log('here!');
  }

  onRegionChange(region) {
    this.setState({
      region: region
    });
  }

  render() {
    console.log('LOL');
    return (
      <MapView
        style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange.bind(this)}
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