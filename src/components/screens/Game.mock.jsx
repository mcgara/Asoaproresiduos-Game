import { useContext, useMemo, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, useFrameCallback } from 'react-native-reanimated'
import { ScreensContext } from '../../contexts/Screens'
import { MattersContext } from '../../contexts/Matters'

import Player from '../Player.mock'

import Matter from 'matter-js'

export default function GameScreen() {
  const { setScreen } = useContext(ScreensContext)
  const Matters = useContext(MattersContext)

  const handleTouch = () => setScreen(() => ({ active: 'MenuScreen' }))
  
  const matter = useMemo(() => {
    const matter = Matters.get('GameScreen') ??
      { engine: Matter.Engine.create(), deltaTime: 10 }
    if (!Matters.has('GameScreen')) Matters.set('GameScreen', matter)
    // const floor = Matter.Bodies.rectangle(1000, 1000, 1000, 100, { isStatic: true });
    // Matter.Composite.add(matter.engine.world, [floor])
    return matter
  }, [])

  const colorBg = useSharedValue('black')
  const animatedStyle = useAnimatedStyle(() => ({ backgroundColor: colorBg.value }))

  useEffect(() => {
    const engineUpdate = setInterval(() => {
      // const r = Matter.Common.random(0, 9).toFixed(0)
      // const g = Matter.Common.random(0, 9).toFixed(0)
      // const b = Matter.Common.random(0, 9).toFixed(0)
      // colorBg.value = "#" + r + g + b
      Matter.Engine.update(matter.engine, matter.deltaTime)
    }, matter.deltaTime)
    return () => clearInterval(engineUpdate)
  }, [])

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Pressable onPress={handleTouch} style={styles.buttonToMenu} />
      <Text style={styles.text}>Gameplay</Text>
      <Player matter={matter} />
      <Player matter={matter} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32
  },
  buttonToMenu: {
    width: 40,
    height: 40,
    backgroundColor: 'red'
  }
})

