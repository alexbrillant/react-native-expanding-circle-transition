import React, { Component } from 'react'
import { Modal, Dimensions, Animated } from 'react-native'
const { width, height } = Dimensions.get('window')

class CircleTransition extends Component {

  constructor (props) {
    super(props)
    this.state = {}
    this.state.modalVisible = false
    this.state.scale = new Animated.Value(0)
  }

  componentWillReceiveProps (nextProps) {
    const { expand } = nextProps
    this.setModalVisible(true, expand, () => {
      this.animate(expand)
    })
  }

  animate (expand) {
    let toValue = expand ? 1 : 0
    Animated.timing(this.state.scale, {
      toValue: toValue,
      duration: this.props.duration
    }).start(() => {
      this.setModalVisible(false)
    })
  }

  setModalVisible (visible, expand, callback) {
    let fromValue = expand ? 0 : 1
    this.setState({
      modalVisible: visible,
      scale: new Animated.Value(fromValue)
    }, callback)
  }

  getMarginHorizontal (position) {
    const { size, customLeftMargin } = this.props
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

  getMarginVertical (position) {
    const { size, customTopMargin } = this.props
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
    const { scale, modalVisible } = this.state
    const { size, color, position } = this.props
    let marginVertical = this.getMarginVertical(position)
    let marginHorizontal = this.getMarginHorizontal(position)
    return (
      <Modal
        animationType={'none'}
        transparent
        visible={modalVisible}>
        <Animated.View style={{
          backgroundColor: color,
          marginVertical: marginVertical,
          marginHorizontal: marginHorizontal,
          width: size,
          height: size,
          borderRadius: size / 2,
          transform: [{
            scale: scale
          }]
        }} />
      </Modal>
    )
  }
}

CircleTransition.propTypes = {
  color: React.PropTypes.string,
  size: React.PropTypes.number,
  duration: React.PropTypes.number,
  position: React.PropTypes.oneOf([
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
  customLeftMargin: React.PropTypes.number,
  customTopMargin: React.PropTypes.number,
  expand: React.PropTypes.bool
}

CircleTransition.defaultProps = {
  color: 'orange',
  size: height * 3,
  duration: 800,
  position: 'topLeft',
  expand: true,
  customLeftMargin: 0,
  customTopMargin: 0
}

export default CircleTransition
