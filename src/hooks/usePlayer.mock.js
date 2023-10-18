import { useMemo, useEffect } from 'react'
import { useSharedValue } from 'react-native-reanimated'
import Animations from '../animations/player.mock'
import Handlers from '../handlers/player.mock'
import Styles from '../styles/player.mock'

import Matter from 'matter-js'

export function usePlayerAnimations({ isPressed, offset }) {
  return [
    Animations.moveWithScale({ isPressed, offset }),
    Animations.changeBgOnPress({isPressed})
  ]
}

export function usePlayerGestures({ isPressed, offset }) {
  const start = useSharedValue(offset.value)
  return {
    gesture: Handlers.gesture({ isPressed, offset, start }),
    start
  }
}

export function usePlayerMatter({ matter, isPressed, offset }) {
  const matterPlayer = useMemo(() => {
    const body = Matter.Bodies.rectangle(
      offset.value.x,
      offset.value.y,
      Styles.box.width,
      Styles.box.height
    )
    const composite = Matter.Composite.add(matter.engine.world, body);
    return { body, composite }
  }, [])

  useEffect(() => {
    const body = matterPlayer.body
    const eventPlayerBody = () => {
      if (isPressed.value) {
        body.position = { x: offset.value.x, y: offset.value.y }
      } else {
        offset.value = { x: body.position.x, y: body.position.y }
      }
      // console.log(offset.value, body.position)
    }
    Matter.Events.on(matter.engine, 'afterUpdate', eventPlayerBody)
    return () => Matter.Events.off(matter.engine, 'afterUpdate', eventPlayerBody)
  }, [])

  return { matterPlayer }
}

export default function usePlayer({ matter }) {
  const isPressed = useSharedValue(false)
  const offset = useSharedValue({ x: 0, y: 0 }) // Styles.box.possition

  const animatedStyles = usePlayerAnimations({ isPressed, offset })
  const { gesture, start: startGesture } = usePlayerGestures({ isPressed, offset })
  const { matterPlayer } = usePlayerMatter({ matter, isPressed, offset })

  return {
    isPressed,
    offset,
    animatedStyles,
    gesture,
    startGesture,
    matterPlayer
  }
}
