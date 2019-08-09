import { useRef, useContext } from 'react'
import ModalContext from '../contexts/ModalContext'

function useModal(modal) {
  const modalId = useRef(0)
  const { openModal, closeModal } = useContext(ModalContext)
  const onClose = () => closeModal(modalId.current)

  return [
    props => (modalId.current = openModal(modal, { ...props, onClose })),
    onClose
  ]
}

export default useModal
