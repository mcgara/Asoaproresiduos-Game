import { createContext, useState } from 'react'

export const ScreensContext = createContext()

export function ScreensProvider({ children: defaultScreen, screens, active }) {
  const [screen, setScreen] = useState({
    active,
    data: null,
  })
  
  return (
    <ScreensContext.Provider value={{ screen, setScreen }}>
      {screens[screen.active] ?? defaultScreen}
    </ScreensContext.Provider>
  )
}
