/*
* @Author: Manraj Singh
* @Date:   2016-04-28 00:46:48
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-28 01:28:36
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

class Maps extends Component {
  render(){
    return (
    	<View style={styles.container}>
    		<Text>
    			Testing
    		</Text>
      	</View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Maps