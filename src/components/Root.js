import React, { useContext, useMemo } from 'react'
import { createGlobalStyle } from 'styled-components'
import { Transition, TransitionGroup } from 'react-transition-group'
import ModalContext from '../contexts/ModalContext'
import RootContext from '../contexts/RootContext'

const RemoveScroll = createGlobalStyle`
  html, body {
    overflow: hidden;
  }
`

function Root() {
  const { modals, closeModal } = useContext(ModalContext)

  return (
    <>
      {modals.length > 0 && <RemoveScroll />}

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
