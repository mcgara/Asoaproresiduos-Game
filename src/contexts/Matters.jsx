import { createContext } from 'react'

/**
 * @typedef {{ engine: import('matter-js').Engine, deltaTime: number }} Matter
 * @type {import('react').Context<Map<string, Matter>>}
 */
export const MattersContext = createContext()

export function MattersProvider({ children }) {
  return (
  <MattersContext.Provider value={new Map()}>
    {children}
  </MattersContext.Provider>
  )
}
