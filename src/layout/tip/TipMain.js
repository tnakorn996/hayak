import React from 'react'
import { useState } from 'react'

// import PortMain from './PortMain'

function TipMain({tipmainstatic, children}) {
    const [tooltipmainstyle, settooltipmainstyle] = useState('')
    // const ref = useRef({top: 0, left: 0})

    function ll() {
        settooltipmainstyle('!block')
    }

    function kk() {
        settooltipmainstyle('!hidden')
    }

  return (
    <div>
        <main className="z-10 grid grid-flow-col items-center">
            {/* <PortMain> */}
            <section 
            onMouseOver={() => {
                ll()
            }}
            onMouseOut={() => {
                kk()
            }} className="">
                {children}
            </section>
            <section className={`relative hidden ${tooltipmainstyle}`}>
                <span className={`min-w-[150px] grid grid-flow-col items-center absolute -top-3 md:-top-4 left-0`}>
                    <h1 className="m-h6 text-gray-700">◀</h1>
                    <h1 className="absolute left-[7px] p-[10px]  l-h1 text-white bg-gray-700 rounded-sm">{tipmainstatic?.tipmaindata}</h1>
                </span>
            </section>
            {/* </PortMain> */}
        </main>
    </div>
  )
}

export default TipMain