# react-native-expanding-circle-transition
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[![https://nodei.co/npm/YOUR-MODULE-NAME.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/react-native-expanding-circle-transition.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/react-native-expanding-circle-transition)

## Preview

![App preview](/animation.gif)

## Installation

  `npm install react-native-expanding-circle-transition --save`

## Props

| Props    | type   | description                                                                                             | required or default                          |
|----------|--------|---------------------------------------------------------------------------------------------------------|----------------------------------|
| callback | func   | callback to change the scene before the circle is hidden | required |
| color    | string | color of the circle view                                                                                | 'orange'                         |
| size     | number | size of the circle view when fully expanded                                                             | the height of the screen times 3 |
| duration | number | duration of the animation                                                                               | 800                              |
| expand   | bool   | expand if true, reduce false                                                                            | true                             |
| position | enum   | position of the circle :  ['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'center', 'left', 'right', 'top', 'bottom', 'custom']  | 'topLeft'                        |
| customLeftMargin | number   |  custom position's left margin from the center of the circle positioned at topLeft |  0                       |
| customTopMargin | number   |  custom position's top margin from the center of the circle positioned at topLeft |  0                       |

## How to use

To trigger the animation, you need to use a ref to call the start function of this component.

## Usage exemple
```javascript
import React, {
    Component
} from 'react'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback
} from 'react-native'

import CircleTransition from './CircleTransition'

export default class Exemples extends Component {
  constructor (props) {
    super(props)
    this.state = {
      color: 'orange',
      expand: true,
      position: 'center',
      counter: 0,
      callback: '',
      customLeftMargin: 0,
      customTopMargin: 200
    }
    this.handlePress = this.handlePress.bind(this)
  }

  getPosition (counter) {
    switch(counter) {
      case 0:
        return 'center'
      case 1:
        return 'topLeft'
      case 2:
        return 'topRight'
      case 3:
        return 'bottomLeft'
      case 4:
        return 'bottomRight'
      case 5:
        return 'left'
      case 6:
        return 'right'
      case 7:
        return 'top'
      case 8:
        return 'bottom'
      case 9:
        return 'custom'
    }
  }

  getNextCounter (counter) {
    if (counter === 9) {
      return 0
    }
    return counter + 1
  }

  handlePress () {
    let { counter } = this.state
    const position = this.getPosition(counter)
    counter = this.getNextCounter(counter)
    this.setState({
      color: 'orange',
      expand: true,
      position: position,
      counter: counter,
      callback: ''
    })

    // TO START THE ANIMATION !
    this.circleTransition.start()
  }

  render () {
    let {
      color,
      expand,
      position,
      customLeftMargin,
      callback,
      customTopMargin
    } = this.state
    return (
      <View style={styles.container}>
        <CircleTransition
          ref={(circle) => { this.circleTransition = circle }}
          color={color}
          expand={expand}
          callback={() => {
            this.setState({
              callback: 'callback has been called'
            })
          }}
          position={position}
          customTopMargin={customTopMargin}
          customLeftMargin={customLeftMargin}
        />
        <TouchableWithoutFeedback style={styles.touchable} onPress={this.handlePress}>
          <View>
            <Text style={styles.position}>CircleTransition {position} {callback}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  position: {
    flex: 1,
    top: 320,
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: '400',
    textAlign: 'center',
    color: '#333333'
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
``````
