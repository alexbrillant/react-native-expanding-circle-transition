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
| color    | string | color of the circle view                                                                                | 'orange'                         |
| size     | number | size of the circle view when fully expanded                                                             | the height of the screen times 3 |
| duration | number | duration of the animation                                                                               | 800                              |
| expand   | bool   | expand if true, reduce false                                                                            | true                             |
| position | enum   | position of the circle :  ['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'center', 'left', 'right', 'top', 'bottom', 'custom']  | 'topLeft'                        |
| customLeftMargin | number   |  custom position's left margin from the center of the circle positioned at topLeft |  0                       |
| customTopMargin | number   |  custom position's top margin from the center of the circle positioned at topLeft |  0                       |

## How to use

To trigger the animation, you need to use a ref to call the start function of this component. Pass a callback to the start function to change the scene before the circle is hidden(check out usage exemple handle press function). 

## Usage exemple
```javascript
import React, {
    Component
} from 'react'

import {
    AppRegistry,
    StyleSheet,
    Text,
    Easing,
    View,
    Animated,
    TouchableWithoutFeedback
} from 'react-native'

import CircleTransition from './CircleTransition'

export default class Exemples extends Component {
  constructor (props) {
    super(props)
    this.state = {
      oldColor: '#E3E4E5',
      color: 'orange'
    }
  }

  componentDidMount () {
    this.circleTransition.start(() => {
      this.setState({
        oldColor: this.state.color
      })
    })
  }

  render () {
    let {
      color,
      oldColor
    } = this.state

    return (
      <View style={[styles.container, {
        backgroundColor: oldColor
      }
    ]}>
    <TouchableWithoutFeedback style={styles.touchable}>
      <View>
        <Text style={styles.position}>
          CircleTransition
        </Text>
      </View>
    </TouchableWithoutFeedback>
    <CircleTransition
      ref={(circle) => {
        this.circleTransition = circle
      }}
      color={color}
      expand={true}
      position={'center'} />
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
    color: '#253039'
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})``````
