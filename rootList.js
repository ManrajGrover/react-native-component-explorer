/*
* @Author: Manraj Singh
* @Date:   2016-04-28 01:02:16
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-28 01:25:40
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

class RootList extends Component {
  render(){
    return (
      <TouchableOpacity onPress={() => this.selectItem(this.props.rowData)}>
        <View>
            <Text>{this.props.rowData}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  selectItem(rowData) {
    this.props.navigator.push({
    	name: rowData
    });
  }
}


export default RootList