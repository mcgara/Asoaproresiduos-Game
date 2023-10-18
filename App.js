import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Main from './src/components/Main'

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <Main />
    </View>
  )
}

// import TestEngine from './src/testEngine'
// export default function TestMotorEngine() {
//   return <TestEngine />
// }
