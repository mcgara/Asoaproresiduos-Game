import { useContext } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { ScreensContext } from '../../contexts/Screens'

export default function MenuScreen() {
  const { setScreen } = useContext(ScreensContext)

  const handleTouch = () => setScreen(() => ({ active: 'GameScreen' }))
  
  return (
    <Pressable onPress={handleTouch}>
      <View style={styles.container}>
        <Text style={styles.text}>Asoaproresiduos</Text>
        <Text style={styles.text}>Menu de Pausa</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  text: {
    fontSize: 32
  }
})
