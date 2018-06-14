import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, AppState, Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushController from './PushController';
type Props = {};
type State = {};
class App extends Component<Props, State> {
  constructor(props, state) {
    super(props, state);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state={
      seconds: 5,
    };
  }
  componentDidMount(){
    AppState.addEventListener('change', this.handleAppStateChange)
  }
  componentWillUnmount(){
    AppState.removeEventListener('change', this.handleAppStateChange)
  }

  handleAppStateChange(appState) {
    console.log(`appstate foo ${appState}`);
  }

  handleButtonClick(sessionData) {
    // YOU ARE HERE
    // Add a button and get recurring notifications working
    this.addRecurringNotification();
  }

  addRecurringNotification(schedule) {
    if(schedule) {
      const date = new Date(Date.now() + (this.state.seconds * 1000));
      PushNotification.localNotificationSchedule({
        ticker: "My Notification Ticker", // (optional)
        message: "My Notification Message", // (required)
        repeatType: 'week',
        // date: Platform.OS === 'ios' ? date.toISOString() : date, // in 60 secs
        date: date, // in 60 secs
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Choose your notification time in seconds
        </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.seconds}
          onValueChange={seconds => this.setState({seconds})}
        >
          <Picker.Item label="5" value={5} />
          <Picker.Item label="10" value={10} />
          <Picker.Item label="15" value={15} />
        </Picker>
        <PushController />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  picker: {
    width: 100,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
