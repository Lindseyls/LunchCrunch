import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, StyleSheet } from 'react-native';

class WaitTime extends Component {

  findAverage = () => {
    let total = 0;

    for (let i = 0; i < this.props.times.length; i++) {
      total += this.props.times[i].wait_time;
    }

    let avg = total / this.props.times.length;
    return (avg).toFixed(0);
  }

  findWaitTime = () => {
    const times = this.props.times

    if (times.length === 0) {
      return (
        <Text>Wait Time: <Text style={styles.timeStyle}>none</Text></Text>
      );
    } else if (times.length === 1) {
      return (
        <View>
          <FlatList
            data={times}
            listKey={(item, index) => 'W' + index.toString()}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) =>
            <Text>
              Wait Time: <Text style={styles.timeStyle}>{item.wait_time} min</Text>
            </Text>
            }
          />
        </View>
      );
    } else if (times.length > 1) {
      return (
        <Text>
          Wait Time: <Text style={styles.timeStyle}>{this.findAverage()} min</Text>
        </Text>
      );
    }
  }

  render () {
    return (
      <View>
        {this.findWaitTime()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeStyle: {
    fontWeight: '900',
    color: 'orange',
    padding: 5,
    fontSize: 15
  }
});

WaitTime.propTypes = {
  times: PropTypes.array.isRequired,
}

export default WaitTime;
