/*
* @Author: Manraj Singh
* @Date:   2016-05-01 21:02:24
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-05-01 21:30:08
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

import ViewPager from 'react-native-viewpager';

var PAGES = [
  'Page 0',
  'Page 1',
  'Page 2',
  'Page 3',
  'Page 4',
];

function notifyMessage(msg: string) {
  ToastAndroid.show(msg, ToastAndroid.SHORT)
}

class VP extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource : new ViewPager.DataSource({
      	pageHasChanged: (p1, p2) => p1 !== p2
      })
    };
    console.log('here!');
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
  	this.setState({
      dataSource: this.state.dataSource.cloneWithPages(PAGES)
    });
  }
  render(){
    return (
      <ViewPager
        style={this.props.style}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        onChangePage={this._onChangePage}
        isLoop={false}
        autoPlay={false}/>
    );
  }

  _renderPage(data: Object, pageID: number | string){
    return (
      <View style={styles.page}>
        <Text style={styles.text}>{data}</Text>
      </View>
    );
  }

  _onChangePage(page: number | string){
    notifyMessage('Current page: ' + page);
  }
}

var styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default VP