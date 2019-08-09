import React, { useState } from 'react'
import ModalContext from '../contexts/ModalContext'

const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([])

  const openModal = (modal, props) => {
    const newModal = {
      id: modals.length + 1,
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
