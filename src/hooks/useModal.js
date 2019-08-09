import { useState, useContext } from 'react'
import ModalContext from '../contexts/ModalContext'

function useModal(modal) {
  const [modalId, setModalId] = useState('')
  const { openModal, closeModal } = useContext(ModalContext)

  return [
    props => setModalId(openModal(modal, props)),
    () => closeModal(modalId)
  ]
}

export default useModal
