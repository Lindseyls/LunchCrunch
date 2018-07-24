import React, { Component } from 'react'
import { View, Text, Picker, StyleSheet } from 'react-native'

class Filter extends Component {
  state = {
    lunchTime: 0
  }

  render () {

    const pickerTime = () => {
      let pickerArray = []
      for(let i = 5 ; i < 61 ; i+=5) {
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
    textAlign: 'center',
    margin: 10
  },
  pickerContainer: {
    width: '100%'
  }
});

export default Filter;
