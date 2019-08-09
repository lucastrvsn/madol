import React, { useState } from 'react'
import ModalContext from '../contexts/ModalContext'

function ModalProvider({ children }) {
  const [modals, setModals] = useState([])

  const openModal = (modal, props) => {
    const id = modals.length + 1
    const newModal = {
      id,
      component: modal,
      props
    }

    setModals([...modals, newModal])

    return id
  }

  const closeModal = id => {
    setModals(modals.filter(m => m.id !== id))
  }

  return (
    <ModalContext.Provider
      value={{
        modals,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
