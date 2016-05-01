/*
* @Author: Manraj Singh
* @Date:   2016-05-02 01:16:37
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-05-02 01:24:51
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

class ThirdPage extends Component {
  render(){
    return (
      <View style={styles.container}>
      	<Text>
      		ThirdPage
      	</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
	flex: 1
  }
});


export default ThirdPage