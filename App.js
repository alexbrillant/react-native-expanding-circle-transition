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
      expand: true
    }
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress () {
    this.setState({
      color: 'orange',
      expand: true
    })
  }

  render () {
    const { color, expand } = this.state
    return (
      <View style={styles.container}>
        <CircleTransition
          expand={expand}
          color={color}
          position={'center'} />
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View>
            <Text style={styles.title}>CircleTransition</Text>
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
  }
})
