import { createContext } from 'react'

/**
 * @typedef {{ engine: import('matter-js').Engine, deltaTime: number }} MatterContext
 * @type {import('react').Context<Map<string, MatterContext>>}
 */
export const MattersContext = createContext()

export function MattersProvider({ children }) {
  return (
  <MattersContext.Provider value={new Map()}>
    {children}
  </MattersContext.Provider>
  )
}
