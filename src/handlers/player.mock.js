import { Gesture } from 'react-native-gesture-handler'

export function gesturePanPlayer({ isPressed, offset, start }) {
  return Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true
      start.value = offset.value
    })
    .onUpdate(e => offset.value = {
      x: e.translationX + start.value.x,
      y: e.translationY + start.value.y
    })
    .onFinalize(() => isPressed.value = false)
}

export default {
  gesture: gesturePanPlayer
}
