# react-native-expanding-circle-transition


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
| position | enum   | position of the circle in the screen :  ['topLeft', 'topRight', 'bottomLeft', 'bottomRight', 'center']  | 'topLeft'                        |

## Usage exemple

To trigger the animations, you need to update the props since the animation is tiggered on the componentWillReceiveProps event. 
```javascript
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
    let { color, expand } = this.state
    return (
      <View style={styles.container}>
        <CircleTransition
          expand={expand}
          position={'center'} 
          color={color}
          />
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
