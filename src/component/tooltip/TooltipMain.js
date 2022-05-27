import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

import Portal from './Portal'

function TooltipMain({title, children, ...props}) {
    const [tooltipmainstyle, settooltipmainstyle] = useState('')
    const ref = useRef({
        top: 0,
        left: 0,
    })

    function ll() {
        settooltipmainstyle('!opacity-100')
    }

    function kk() {
        settooltipmainstyle('')
    }


  return (
    <div>
        <main className="z-10 top-0 left-0 absolute flex flex-row items-center">
            {React.cloneElement(children, {
                onMouseOver: ll,
                onMouseOut: kk,
            })}
            {/* <Portal> */}

                <span ref={ref} className={`min-w-[150px] top-${p => p.ref.current.top} left-${p => p.ref.current.left}  opacity-0 ${tooltipmainstyle} duration-500`}>
                    <div className="relative flex flex-row">
                    <h1 className="m-h6 text-gray-700">◀</h1>
                    <h1 className="absolute left-[7px] p-[8px]  l-h1 text-white bg-gray-700 rounded-sm">{title} </h1>
                    </div>
                </span>
            {/* </Portal> */}
        </main>
    </div>
  )
}

export default TooltipMain