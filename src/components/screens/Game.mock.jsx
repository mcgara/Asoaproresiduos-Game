import { useContext, useMemo, useEffect } from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import Animated from 'react-native-reanimated'
import { ScreensContext } from '../../contexts/Screens'
import { MattersContext } from '../../contexts/Matters'

import Player from '../Player.mock'
import WallsScreens from '../WallsScreens.mock'

import Matter from 'matter-js'

export default function GameScreen() {
  const { setScreen } = useContext(ScreensContext)
  const Matters = useContext(MattersContext)

  const handleTouch = () => setScreen(() => ({ active: 'MenuScreen' }))

  const matter = useMemo(() => {
    const matter = { engine: Matter.Engine.create(), deltaTime: 16.6666666 }

    // const matter = Matters.get('GameScreen') ?? { engine: Matter.Engine.create(), deltaTime: 10 }
    // if (!Matters.has('GameScreen')) Matters.set('GameScreen', matter)

    return matter
  }, [])

  useEffect(() => {
    const engineUpdate = setInterval(() => {
      Matter.Engine.update(matter.engine, matter.deltaTime)
    }, matter.deltaTime)
    return () => clearInterval(engineUpdate)
  }, [])

  return (
    <Animated.View style={styles.container}>
      <Pressable onPress={handleTouch} style={styles.buttonToMenu} />
      <Text style={styles.text}>Gameplay</Text>
      <Player matter={matter} />
      <Player matter={matter} />
      <Player matter={matter} />
      <Player matter={matter} />
      <Player matter={matter} />
      <Player matter={matter} />
      <Player matter={matter} />
      <Player matter={matter} />
      <Player matter={matter} />
      <Player matter={matter} />
      <Player matter={matter} />
      <Player matter={matter} />
      <WallsScreens matter={matter} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
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

