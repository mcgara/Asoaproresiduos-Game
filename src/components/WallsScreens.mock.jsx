import { useEffect } from 'react'
import { View, StyleSheet, useWindowDimensions, StatusBar } from 'react-native'
import Matter from 'matter-js'

/** @param {{ matter: import('../contexts/Matters').MatterContext }} */
export default function WallsScreens({ matter }) {
  const { width, height: heightWindow } = useWindowDimensions()
  const height = heightWindow + StatusBar.currentHeight

  useEffect(() => {
    const top = Matter.Bodies.rectangle(0, -height / 2, width, 1, { isStatic: true })
    const start = Matter.Bodies.rectangle(-width / 2, 0, 1, height, { isStatic: true })
    const end = Matter.Bodies.rectangle(width / 2, 0, 1, height, { isStatic: true })
    const bottom = Matter.Bodies.rectangle(0, height / 2, width, 1, { isStatic: true })

    const bodies = [top, start, end, bottom]
    Matter.Composite.add(matter.engine.world, bodies)

    return () => {
      Matter.Composite.remove(matter.engine.world, bodies)
    }
    
  }, [])

  return <>
    <View style={[styles.wall, { width, height: 1, top: 0 }]} />
    <View style={[styles.wall, { width: 1, height, start: 0 }]} />
    <View style={[styles.wall, { width: 1, height, start: width - 1 }]} />
    <View style={[styles.wall, { width, height: 1, top: height - 1 }]} />
  </>
}

const styles = StyleSheet.create({
  wall: {
    backgroundColor: 'blue',
    position: 'absolute'
  }
})
