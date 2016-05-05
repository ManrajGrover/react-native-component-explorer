/*
* @Author: Manraj Singh
* @Date:   2016-04-27 22:37:58
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-05-05 13:41:47
*/

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  Navigator,
  BackAndroid
} from 'react-native';

import Root from './root';
import Maps from './maps';
import VP from './vp';
import STV from './scrolltabs';
import Cam from './camera';
var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

class uiexp extends Component {
  renderScene(route, navigator){
    _navigator = navigator;
    switch (route.name) {
      case 'Root':
        return (<Root navigator={navigator} />);
      case 'Maps':
        return ( <Maps navigator={navigator} />);
      case 'ViewPager':
        return ( <VP navigator={navigator} />);
      case 'ScrollableTabView':
        return ( <STV navigator={navigator} />);
      case 'Camera':
        return ( <Cam navigator={navigator} />);
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Navigator
          initialRoute={{name:'Root'}}
          renderScene={this.renderScene.bind(this)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('uiexp', () => uiexp);
