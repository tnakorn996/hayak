import React from 'react'
import { useContext } from 'react'

import { ContextMain } from '../../context/contextmain'

function ExitMain() {
  const {
    appmainstate, setappmainstate,

  } = useContext(ContextMain)

  function ll() {
    if(appmainstate.appmainredirect === 'ontromain'){
      setappmainstate(
        {
          appmainredirect: 'appmain',
        }
      )
    }
    else {
      setappmainstate(
        {
          appmainredirect: 'appmain',
        }
      )
    }
  }

  return (
    <div>
        <main onClick={() => {
          ll()
        }} className="absolute top-3 left-3">
            <article className="">
            <h1 className="h-[50px] w-[50px] flex items-center justify-center text-3xl  m-h6 text-white">←</h1>
            </article>
            <br />
        </main>
    </div>
  )
}

export default ExitMain