import React, { Component, PropTypes } from 'react'
import { Easing, Dimensions, Animated } from 'react-native'
const { width, height } = Dimensions.get('window')
const EXPAND = 1
const SHRINK = 0

class CircleTransition extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      scale: new Animated.Value(SHRINK)
    }
  }

  start (callback) {
    const {expand} = this.props
    this.setModalVisible(true, expand, () => {
      this.animate(expand, callback)
    })
  }

  animate (expand, callback) {
    let toValue = expand ? EXPAND : SHRINK
    const { easing } = this.props
    Animated.timing(this.state.scale, {
      toValue: toValue,
      duration: this.props.duration,
      easing: easing
    }).start(() => {
      callback()
      this.setModalVisible(false, expand)
    })
  }

  setModalVisible (visible, expand, callback) {
    let fromValue = expand ? SHRINK : EXPAND
    this.setState({
      visible: visible,
      scale: new Animated.Value(fromValue)
    }, callback)
  }

  getLeftPosition (position) {
    const {size, customLeftMargin} = this.props
    const halfSize = size / 2
    const halfWidth = width / 2
    let marginHorizontalTopLeft = -halfSize

    switch (position) {
      case 'center':
      case 'top':
      case 'bottom':
        return marginHorizontalTopLeft + halfWidth

      case 'topRight':
      case 'bottomRight':
      case 'right':
        return marginHorizontalTopLeft + width

      case 'custom':
        return marginHorizontalTopLeft + customLeftMargin

      default:
        return marginHorizontalTopLeft
    }
  }

  getTopPosition (position) {
    const {size, customTopMargin} = this.props
    const halfSize = size / 2
    const halfHeight = height / 2
    let marginVerticalTopLeft = -halfSize

    switch (position) {
      case 'center':
      case 'left':
      case 'right':
        return marginVerticalTopLeft + halfHeight

      case 'bottomLeft':
      case 'bottomRight':
      case 'bottom':
        return marginVerticalTopLeft + height

      case 'custom':
        return marginVerticalTopLeft + customTopMargin

      default:
        return marginVerticalTopLeft
    }
  }

  render () {
    const {scale, visible} = this.state
    const {size, color, position, zIndex} = this.props
    let topPosition = this.getTopPosition(position)
    let leftPosition = this.getLeftPosition(position)
    if (visible) {
      return (
        <Animated.View style={{
          position: 'absolute',
          backgroundColor: color,
          zIndex: zIndex,
          top: topPosition,
          left: leftPosition,
          width: size,
          height: size,
          borderRadius: size / 2,
          transform: [{
            scale: scale
          }]
        }} />
      )
    } else {
      return null
    }
  }
}

CircleTransition.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  duration: PropTypes.number,
  position: PropTypes.oneOf([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'center',
    'left',
    'right',
    'top',
    'bottom',
    'custom'
  ]),
  customLeftMargin: PropTypes.number,
  customTopMargin: PropTypes.number,
  expand: PropTypes.bool,
  easing: PropTypes.func,
  zIndex: PropTypes.number
}

CircleTransition.defaultProps = {
  color: 'orange',
  size: height * 3,
  duration: 800,
  position: 'topLeft',
  expand: true,
  customLeftMargin: 0,
  customTopMargin: 0,
  easing: Easing.linear,
  zIndex: 999
}
export default CircleTransition
