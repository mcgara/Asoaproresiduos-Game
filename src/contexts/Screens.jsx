import { createContext, useState } from 'react'

/**
 * @typedef {{ active: string, data: any }} IScreen
 * @typedef {import('react').Dispatch<import('react').SetStateAction<IScreen>>} SetStateScreen
 * @type {import('react').Context<{ screen: IScreen, setScreen: SetStateScreen }>}
 */
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
