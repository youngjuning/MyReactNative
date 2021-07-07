import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'vant-react-native';
// 🔽
// var _button = require('antd/lib/button');

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Button />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
