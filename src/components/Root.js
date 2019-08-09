import React, { useContext, useMemo } from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import ModalContext from '../contexts/ModalContext'
import RootContext from '../contexts/RootContext'

function Root() {
  const { modals, closeModal } = useContext(ModalContext)

  useEffect(() => {
    const htmlNode = document.querySelector('html')
    const bodyNode = document.querySelector('body')
    const overflowStyle = modals.length > 0 ? 'hidden' : 'visible'

    htmlNode.style.overflow = overflowStyle
    bodyNode.style.overflow = overflowStyle
  }, [modals.length])

  return (
    <>
      <TransitionGroup component={null}>
        {useMemo(
          () =>
            modals.map(({ id, component: Component, props }, index) => (
              <Transition key={id} appear timeout={{ exit: 300 }}>
                {state => (
                  <RootContext.Provider
                    value={{
                      transitionState: state,
                      zIndex: index + 5000,
                      onRequestClose: () => closeModal(id)
                    }}
                  >
                    <Component {...props} />
                  </RootContext.Provider>
                )}
              </Transition>
            )
          ),
          [modals]
        )}
      </TransitionGroup>
    </>
  )
}

export default Root
