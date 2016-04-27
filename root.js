/*
* @Author: Manraj Singh
* @Date:   2016-04-27 22:37:58
* @Last Modified by:   Manraj Singh
* @Last Modified time: 2016-04-28 01:25:25
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
  Navigator
} from 'react-native';

import RootList from './rootList';

const data = ['maps'];

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    console.log('here!');
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData(){
  	this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    });
    console.log(this.state.dataSource);
  }

  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  render() {
    return (
      <ListView
      	dataSource={this.state.dataSource}
      	renderRow={this.renderRowData.bind(this)}
      	style={styles.listView}
      />
    );
  }
  renderRowData(rowData) {
  	console.log(rowData);
  	return(
  		<RootList
  			rowData={ rowData }
  			navigator={ this.props.navigator }
  		/>
  	);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    borderWidth: 1,
    borderColor: '#e5e5e5'
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }
});


export default Root