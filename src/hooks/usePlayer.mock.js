import { useMemo, useEffect } from 'react'
import { useSharedValue, useAnimatedStyle } from 'react-native-reanimated'
// import Animations from '../animations/player.mock'
// import Handlers from '../handlers/player.mock'
import { Gesture } from 'react-native-gesture-handler'
import Styles from '../styles/player.mock'
import Matter from 'matter-js'

export const initialPlayer = {
  position: {
    x: 0,
    y: 0
  },
  size: {
    width: Styles.box.width,
    height: Styles.box.height
  },
  events: {
    pressed: false
  }
}

/**
 * @typedef {import('../contexts/Matters').MatterContext} MatterContext
 * @typedef {{ [P in keyof initialPlayer]: import('react-native-reanimated').SharedValue<initialPlayer[P]> }} IPlayer
 */

/** @param {{ matter: MatterContext, player: IPlayer }} */
export function usePlayerMatter({ matter, player }) {
  const body = useMemo(() => Matter.Bodies.rectangle(
    player.position.value.x,
    player.position.value.y,
    player.size.value.width,
    player.size.value.height
  ), [])

  useEffect(() => {
    Matter.Composite.add(matter.engine.world, body)
    return () => Matter.Composite.remove(matter.engine.world, body)
  }, [])

  // Events of MatterEngine
  useEffect(() => {
    // Create Events
    const playerMove = () => {
      if (player.events.value.pressed) {
        Matter.Body.setPosition(body, {
          x: player.position.value.x,
          y: player.position.value.y
        }, true)
      } else {
        player.position.value = {
          x: body.position.x,
          y: body.position.y
        }
      }
    }

    // Set Events
    Matter.Events.on(matter.engine, 'beforeUpdate', playerMove)

    // Clear Events
    return () => Matter.Events.off(matter.engine, 'beforeUpdate', playerMove)
    // TODO: use for loop and array all events to set/clear events
  }, [])

  return { body }
}

/** @param {IPlayer} player */
export function usePlayerAnimations(player) {
  const playerMove = useAnimatedStyle(() => ({
    transform: [
      { translateX: player.position.value.x },
      { translateY: player.position.value.y }
    ]
  }))
  
  return [
    playerMove
  ]
}

/** @param {IPlayer} player */
export function usePlayerGestures(player) {
  const startPosition = useSharedValue({
    x: player.position.value.x,
    y: player.position.value.y
  })

  const gesture = Gesture.Pan()
    .onStart(() => {
      startPosition.value = { x: player.position.value.x, y: player.position.value.y }
      player.events.value = { ...player.events.value, pressed: true }
    })
    .onUpdate(e => {
      player.position.value = {
        x: e.translationX + startPosition.value.x,
        y: e.translationY + startPosition.value.y
      }
    })
    .onEnd(() => player.events.value = { ...player.events.value, pressed: false })
  
  return {
    gesture
  }
}

export default function usePlayer({ matter }) {
  const player = {
    position: useSharedValue(initialPlayer.position),
    size: useSharedValue(initialPlayer.size),
    events: useSharedValue(initialPlayer.events)
  }
  usePlayerMatter({ matter, player })
  const animatedStyles = usePlayerAnimations(player)
  const { gesture } = usePlayerGestures(player)

  return {
    animatedStyles,
    gesture
  }
}
