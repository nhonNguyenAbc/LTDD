import {Component} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: [],
      lapButtonState: false,
      elapsedTimeBeforeStop: 0,
    };
    this.handleStartPress = this.handleStartPress.bind(this);
    this.startStopButton = this.startStopButton.bind(this);
    this.handleLapPress = this.handleLapPress.bind(this);
    this.handleResetPress = this.handleResetPress.bind(this);
  }
  laps() {
    const reversedLaps = [...this.state.laps].reverse();
    return this.state.laps.map(function (time, index) {
      return (
        <View key={index} style={styles.lap}>
          <Text style={styles.lapText}>Lap {reversedLaps.length - index}</Text>
          <Text style={styles.lapText}>{formatTime(time)}</Text>
        </View>
      );
    });
  }
  handleStartPress() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({
        running: false,
        lapButtonState: true,
      });
      return;
    }
    const startTime = this.state.startTime ? this.state.startTime : new Date();
    const elapsedTimeBeforeStop = this.state.elapsedTimeBeforeStop;
    this.setState({
      startTime: startTime,
      lapButtonState: false,
    });
    this.interval = setInterval(() => {
      const elapsedTime =
        elapsedTimeBeforeStop +
        (this.state.running ? new Date() - this.state.startTime : 0);
      this.setState({
        timeElapsed: elapsedTime,
        running: true,
      });
    }, 30);
  }
  handleResetPress() {
    clearInterval(this.interval);
    this.setState({
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: [],
      lapButtonState: false,
    });
  }
  startStopButton() {
    var style = this.state.running ? styles.stopButton : styles.startButton;
    var textStyle = this.state.running
      ? styles.stopButtonText
      : styles.startButtonText;

    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={this.handleStartPress}
        style={[styles.button, style]}>
        <Text style={[styles.buttonText, textStyle]}>
          {this.state.running ? 'Stop' : 'Start'}
        </Text>
      </TouchableHighlight>
    );
  }
  lapButton() {
    if (this.state.startTime !== null) {
      return (
        <TouchableHighlight
          style={styles.button}
          underlayColor="gray"
          onPress={
            this.state.lapButtonState
              ? this.handleResetPress
              : this.handleLapPress
          }>
          <View style={styles.innerLapButton}>
            <Text style={styles.lapText1}>
              {this.state.lapButtonState ? 'Reset' : 'Lap'}
            </Text>
          </View>
        </TouchableHighlight>
      );
    } else {
      return (
        <View
          style={[
            styles.button,
            {backgroundColor: '#1b1a1c'},
            {borderColor: '#6a696d'},
          ]}>
          <Text style={styles.lapText2}>Lap</Text>
        </View>
      );
    }
  }
  handleLapPress() {
    var lap = this.state.timeElapsed;
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap]),
    });
  }
  render() {
    const formattedTime = formatTime(this.state.timeElapsed);

    const formattedTimeWithComma = formattedTime.replace('.', ',');
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timeWrapper}>
            <Text style={styles.timer}>{formattedTimeWithComma}</Text>
          </View>
          <View style={styles.buttonWrapper}>
            {this.lapButton()}
            {this.startStopButton()}
          </View>
        </View>
        <View style={styles.footer}>{this.laps()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  header: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  timeWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lap: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: '#1b1a1c',
  },
  startButton: {
    borderColor: 'green',
    backgroundColor: '#092910',
  },
  stopButton: {
    borderColor: 'red',
    backgroundColor: '#340e0d',
  },
  timer: {
    fontSize: 60,
    color: 'white',
  },
  lapText: {
    fontSize: 30,
    color: 'white',
  },
  lapText1: {
    color: 'white',
  },
  lapText2: {
    color: '#6a696d',
  },
  startButtonText: {
    color: 'green',
  },

  stopButtonText: {
    color: 'red',
  },
});
