import { useAnimatedStyle } from 'react-native-reanimated'
import { Gesture } from 'react-native-gesture-handler'
import { Body, Composite } from 'matter-js'
// type Global param hooks

/**
 * @template T
 * @typedef {import('react-native-reanimated').SharedValue<T>} SharedValue
 * @typedef {ReturnType<Parameters<useAnimatedStyle>['0']>} AnimatedStyleProp
 */

export const paramHooks = {
  meta: {
    /** @type {SharedValue<boolean>} */
    isPressed,
    /** @type {SharedValue<{ x: number, y: number }>} */
    rePosition
  },
  animations: {
    /** @type {AnimatedStyleProp<T>[]} */
    styles
  },
  handlers: {
    gesture: {
      /** @type {{ [Prop in keyof Gesture as string]: ReturnType<Gesture[Prop]> }[string]} */
      value,
      /** @type {SharedValue<{ x: number, y: number }>} */
      start
    }
  },
  physics: {
    /** @type {Body} */
    body,
    /** @type {Composite} */
    composite
  }
}
