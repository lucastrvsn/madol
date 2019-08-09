import { createContext } from 'react'

export default createContext({
  modals: [],
  openModal: () => {},
  closeModal: () => {}
})
