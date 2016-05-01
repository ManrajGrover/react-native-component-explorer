/*
* @Author: Manraj Singh
* @Date:   2016-05-02 00:57:53
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-05-02 01:24:11
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
  ToastAndroid,
  TouchableOpacity
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import ThirdPage from './ThirdPage';
import SecondPage from './SecondPage';
import FirstPage from './FirstPage';
class STV extends Component{
  render(){
  	console.log('STV');
    return (
      <ScrollableTabView>
      	<FirstPage tabLabel="First" />
        <SecondPage tabLabel="Second" />
        <ThirdPage tabLabel="Third" />
      </ScrollableTabView>
    );
  }
}

export default STV