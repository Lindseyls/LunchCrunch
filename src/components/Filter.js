import React, { Component } from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'
import Button from 'react-native-button'

class Filter extends Component {
  state = {
    lunchTime: 0
  }

  timeHandler = () => {
    console.log(this.state.lunchTime);
    // this.props.timeCallback(this.state.lunchTime)
  }

  render () {

    const pickerTime = () => {
      let pickerArray = []
      for(let i = 15 ; i < 61 ; i+=5) {
        pickerArray.push(<Picker.Item label={`${i}`} value={i} />)
      }
      return pickerArray
    }

    return (
      <View style={styles.container}>
        <Text style={styles.message}>
         Select your lunch time in minutes
        </Text>
        <Picker
          style={styles.pickerContainer}
          selectedValue={this.state.lunchTime}
          onValueChange={(lunchTime) => this.setState({ lunchTime })}
        >
          {pickerTime()}
        </Picker>
        <Button
          style={styles.buttonStyle}
          onPress={() => this.timeHandler()}
        >
          Select
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FACDC2'
  },
  message: {
    fontSize: 21,
    color: '#414B6B',
    textAlign: 'center',
    margin: 10
  },
  pickerContainer: {
    width: '100%'
  },
  buttonStyle: {
    padding: 10,
    paddingRight: 40,
    paddingLeft: 40,
    height: 40,
    color: 'white',
    overflow:'hidden',
    borderColor: '#414B6B',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#414B6B',
  }
});

export default Filter;
