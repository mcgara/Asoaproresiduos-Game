import Animated from 'react-native-reanimated'
import { GestureDetector } from 'react-native-gesture-handler'
import Styles from '../styles/player.mock'
import usePlayer from '../hooks/usePlayer.mock'

export default function Player({ matter }) {
  const { gesture, animatedStyles } = usePlayer({ matter })
  
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[Styles.box, ...animatedStyles]} />
    </GestureDetector>
  )
}
