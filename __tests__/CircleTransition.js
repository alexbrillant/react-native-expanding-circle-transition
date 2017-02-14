import 'react-native'
import React from 'react'
import CircleTransition from '../CircleTransition.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

const positionTest = (position) => {
  const tree = renderer.create(
    <CircleTransition
      color={'orange'}
      position={position}
      expand
      customLeftMargin={100}
      customTopMargin={100}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
}

it('renders correctly with default props', () => {
  const tree = renderer.create(
    <CircleTransition />
  )
})

it('renders correctly when position is center', () => {
  positionTest('center')
})

it('renders correctly when position is topRight', () => {
  positionTest('topRight')
})

it('renders correctly when position is topLeft', () => {
  positionTest('topLeft')
})

it('renders correctly when position is bottomLeft', () => {
  positionTest('bottomLeft')
})

it('renders correctly when position is bottomRight', () => {
  positionTest('bottomRight')
})

it('renders correctly when position is left', () => {
  positionTest('left')
})

it('renders correctly when position is right', () => {
  positionTest('right')
})

it('renders correctly when position is top', () => {
  positionTest('top')
})

it('renders correctly when position is bottom', () => {
  positionTest('bottom')
})

it('renders correctly when position is custom', () => {
  positionTest('custom')
})
