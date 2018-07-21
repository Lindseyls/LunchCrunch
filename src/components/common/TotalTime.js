import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, FlatList, StyleSheet } from 'react-native';

class TotalTime extends Component {

  findAverage = () => {
    let total = 0;

    for (let i = 0; i < this.props.times.length; i++) {
      total += this.props.times[i].total_time_spent;
    }

    let avg = total / this.props.times.length;
    return (avg).toFixed(0);
  }

  findTotalTime = () => {
    const times = this.props.times

    if (times.length === 0) {
      return (
        <Text>Total Time: <Text style={styles.timeStyle}>none</Text></Text>
      );
    } else if (times.length === 1) {
      return (
        <View>
          <FlatList
            data={times}
            listKey={(item, index) => 'D' + index.toString()}
            renderItem={({item}) =>
            <Text>
              Total Time: <Text style={styles.timeStyle}>{item.total_time_spent} min</Text>
            </Text>
            }
          />
        </View>
      );
    } else if (times.length > 1) {
      return (
        <Text>
          Total Time: <Text style={styles.timeStyle}>{this.findAverage()} min</Text>
        </Text>
      );
    }
  }

  render () {
    return (
      <View>
        {this.findTotalTime()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeStyle: {
    fontWeight: '900',
    color: 'red',
    padding: 5,
    fontSize: 15
  }
});

TotalTime.propTypes = {
  times: PropTypes.array.isRequired,
}

export default TotalTime;
