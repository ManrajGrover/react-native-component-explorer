/*
* @Author: Manraj Singh
* @Date:   2016-04-28 01:02:16
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-28 21:55:09
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
      <TouchableOpacity
        style={styles.rootList}
        onPress={() => this.selectItem(this.props.rowData)}
      >
        <View>
            <Text 
              style={styles.rowData}
            >
              {this.props.rowData}
            </Text>
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
const styles = StyleSheet.create({
  rootList: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    borderWidth: 1,
    borderColor: '#e5e5e5'
  },
  rowData:{
    fontSize: 20,
    fontWeight: 'bold'
  }
});


export default RootList