# react-native-expanding-circle-transition
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[![https://nodei.co/npm/YOUR-MODULE-NAME.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/react-native-expanding-circle-transition.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-native-expanding-circle-transition)

## Preview

![App preview](/animation.gif)

## Installation

  `npm install react-native-expanding-circle-transition --save`

## Props

| Props    | type   | description                                                                                             | default                          |
|----------|--------|---------------------------------------------------------------------------------------------------------|----------------------------------|
| color    | string | color of the circle view                                                                                | 'orange'                         |
| size     | number | size of the circle view when fully expanded                                                             | the height of the screen times 3 |
| duration | number | duration of the animation                                                                               | 800                              |
| expand   | bool   | expand if true, reduce false                                                                            | true                             |
| position | enum   | position of the circle :  ['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'center', 'left', 'right', 'top', 'bottom', 'custom']  | 'topLeft'                        |
| customLeftMargin | number   |  custom position's left margin from the center of the circle positioned at topLeft |  0                       |
| customTopMargin | number   |  custom position's top margin from the center of the circle positioned at topLeft |  0                       |

## Usage exemple

To trigger the animations, you need to update the props since the animation is tiggered on the componentWillReceiveProps event.
```javascript
import React, {
    Component
} from 'react'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native'

import CircleTransition from 'react-native-expanding-circle-transition'

export default class Exemples extends Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'orange',
      expand: true,
      position: 'center'
    }
    this.handlePress = this.handlePress.bind(this)
  }

  handlePress () {
    this.setState({
      color: 'orange',
      expand: true,
      position: 'center'
    })
  }

  render () {
    let { color, expand, position } = this.state
    return (
      <View style={styles.container}>
          <CircleTransition color={color} expand={expand} position={position} />
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
``````
