import { useAnimatedStyle, withSpring } from 'react-native-reanimated'

export function movePlayer({ offset }) {
  return useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value.x },
      { translateY: offset.value.y }
    ]
  }))
}

export function scaleOnPressPlayer({ isPressed }) {
  return useAnimatedStyle(() => ({
    transform: [
      { scale: withSpring(isPressed.value ? 1.5 : 1) }
    ]
  }))
}

export function moveWithScalePlayer({ isPressed, offset }) {
  return useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value.x },
      { translateY: offset.value.y },
      { scale: withSpring(isPressed.value ? 1.5 : 1) }
    ]
  }))
}

export function changeBgOnPressPlayer({ isPressed }) {
  return useAnimatedStyle(() => ({
    backgroundColor: isPressed.value ? 'red' : 'blue'
  }))
}

export default {
  move: movePlayer,
  scaleOnPress: scaleOnPressPlayer,
  moveWithScale: moveWithScalePlayer,
  changeBgOnPress: changeBgOnPressPlayer
}
