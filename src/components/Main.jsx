import { ScreensProvider } from '../contexts/Screens'
import { MattersProvider } from '../contexts/Matters'
import Screens, { DefaultScreen } from './screens'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Main() {
  return (
    <View style={{ backgroundColor: 'green' }}>
      <GestureHandlerRootView>
        <MattersProvider>
          <ScreensProvider screens={Screens}>
            <DefaultScreen />
          </ScreensProvider>
        </MattersProvider>
      </GestureHandlerRootView>
    </View>
  )
}
