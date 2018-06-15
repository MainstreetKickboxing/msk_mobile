import React, { Component } from 'react';
import { StyleSheet, AppState } from 'react-native';

import Page from './components/Page';


type Props = {};
type State = {};

class App extends Component<Props, State> {
  render() {
    return <Page>Hello</Page>;
  }
}

const styles = StyleSheet.create({});

export default App
