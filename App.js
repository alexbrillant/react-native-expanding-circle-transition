/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native'

import CircleTransition from './CircleTransition'

export default class expandingcircle extends Component {

  constructor (props) {
    super(props)
    this.state = {
      color: 'orange',
      expand: true,
      counter: 0
    }
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress () {
    let counter = this.state.counter + 1
    if (counter === 5) {
      counter = 0
    }
    this.setState({
      color: 'orange',
      expand: true,
      counter: counter
    })
  }

  getPosition (counter) {
    switch (counter) {
      case 0:
      return 'topLeft'
      case 1:
      return 'center'
      case 2:
      return 'topRight'
      case 3:
      return 'bottomLeft'
      case 4:
      return 'bottomRight'
      default:
      'topLeft'
    }
  }

  render () {
    let { color, counter, expand } = this.state
    const position = this.getPosition(counter)
    return (
      <View style={styles.container}>
        <CircleTransition
          expand={expand}
          position={position} />
          <TouchableWithoutFeedback style={styles.touchable} onPress={this.handlePress}>
            <View>
              <Text style={styles.title}>CircleTransition</Text>
              <Text style={styles.position}>{position}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    title: {
      fontSize: 30,
      fontWeight: '500',
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    },
    position: {
      fontSize: 20,
      fontWeight: '400',
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5
    },
    touchable: {
      flex: 1
    }
  })
