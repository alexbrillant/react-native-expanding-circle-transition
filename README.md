# react-native-expanding-circle-transition
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/react-native-expanding-circle-transition.svg)](https://badge.fury.io/js/react-native-expanding-circle-transition)
[![npm](https://img.shields.io/badge/downloads-627%2Fmonth-green.svg)](https://www.npmjs.com/package/react-native-expanding-circle-transition)

## Preview

![App preview](/animation.gif)

## Installation

  `npm install react-native-expanding-circle-transition --save`

## Props

| Props    | type   | description                                                                                             | required or default                          |
|----------|--------|---------------------------------------------------------------------------------------------------------|----------------------------------|
| color    | string | Color of the circle view                                                                                | 'orange'                         |
| size     | number | Size of the circle view. Important: It has to fit in the window | Math.min(width, height) - 1  |
| scaleShrink | number | Scale factor to shrink the circle | 0 |
| scaleExpand | number | Scale factor to expand the circle | 4 |
| transitionBuffer | number | Buffer between the transition and the animation. The transition must happen before the circle is hidden | 5 |
| duration | number | Animation duration                                                                              | 800                              |
| expand   | bool   | Expand the circle if true, reduce the circle if false                                                                            | true                             |
| position | enum   | Circle position :  ['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'center', 'left', 'right', 'top', 'bottom', 'custom']  | 'topLeft'                        |
| customLeftMargin | number   |  Custom position's left margin from the center of the circle positioned at topLeft |  0                       |
| customTopMargin | number   |  Custom position's top margin from the center of the circle positioned at topLeft |  0                       |
| easing | func   | React Native Animation Easing  |      Easing.linear                   |

## How to use

To trigger the animation, you need to use a ref to call the start function of this component. 
To change the scene before the circle is hidden, pass a callback(check out usage exemple handlePress function). 

## Usage exemples
```javascript
import React, {
  Component
} from 'react'

import {
  Easing,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native'

import CircleTransition from 'react-native-expanding-circle-transition'
const ANIMATION_DURATION = 1200
const INITIAL_VIEW_BACKGROUND_COLOR = '#E3E4E5'
const CIRCLE_COLOR1 = '#29C5DB'
const CIRCLE_COLOR2 = '#4EB8AE'
const CIRCLE_COLOR3 = '#81C781'
const CIRCLE_COLOR4 = '#B0D882'
const TRANSITION_BUFFER = 10
const POSITON = 'custom'

const reactMixin = require('react-mixin')
import TimerMixin from 'react-timer-mixin'

class Exemples extends Component {
  constructor (props) {
    super(props)
    this.state = {
      viewBackgroundColor: INITIAL_VIEW_BACKGROUND_COLOR,
      circleColor: CIRCLE_COLOR1,
      customLeftMargin: 0,
      customTopMargin: 0,
      counter: 0
    }
    this.handlePress = this.handlePress.bind(this)
    this.changeColor = this.changeColor.bind(this)
  }

  handlePress (event) {
    let pressLocationX = event.nativeEvent.locationX
    let pressLocationY = event.nativeEvent.locationY
    this.setState({
      customLeftMargin: pressLocationX,
      customTopMargin: pressLocationY
    }, this.circleTransition.start(this.changeColor))
  }

  changeColor () {
    const { circleColor, counter } = this.state
    let newCounter = counter < 3 ? counter + 1 : 0
    let newCircleColor = this.getColor(newCounter)
    this.setState({
      viewBackgroundColor: circleColor,
      counter: newCounter
    })
    this.changeCircleColor(newCircleColor)
  }

  changeCircleColor (newCircleColor) {
    this.setTimeout(() => {
      this.setState({
        circleColor: newCircleColor
      })
    }, TRANSITION_BUFFER + 5)
  }

  getColor (counter) {
    switch (counter) {
      case 0:
        return CIRCLE_COLOR1
      case 1:
        return CIRCLE_COLOR2
      case 2:
        return CIRCLE_COLOR3
      case 3:
        return CIRCLE_COLOR4
      default:
        return CIRCLE_COLOR4
    }
  }

  render () {
    let {
      circleColor,
      viewBackgroundColor,
      customTopMargin,
      customLeftMargin
    } = this.state
    return (
      <View style={[
        styles.container,
        {
          backgroundColor: viewBackgroundColor
        }]}>
        <TouchableWithoutFeedback
          style={styles.touchable}
          onPress={this.handlePress}>
          <View style={styles.touchableView}>
            <Text style={styles.text}>{viewBackgroundColor.toString()}</Text>
          </View>
        </TouchableWithoutFeedback>
        <CircleTransition
          ref={(circle) => { this.circleTransition = circle }}
          color={circleColor}
          expand
          customTopMargin={customTopMargin}
          customLeftMargin={customLeftMargin}
          transitionBuffer={TRANSITION_BUFFER}
          duration={ANIMATION_DURATION}
          easing={Easing.linear}
          position={POSITON}
        />
      </View>
    )
  }
}

reactMixin(Exemples.prototype, TimerMixin)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  touchableView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 45,
    fontWeight: '400',
    color: '#253039'
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Exemples
