import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {VanIconAdd} from '@vant-react-native/icons';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <VanIconAdd size={50} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
