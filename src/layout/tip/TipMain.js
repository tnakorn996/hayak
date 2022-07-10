import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'

// import PortMain from './PortMain'

function TipMain({tipmainstatic, children}) {
    const [tooltipmainstyle, settooltipmainstyle] = useState('')
    const [tipmainstyletwo, settipmainstyletwo] = useState('')
    const [tipmainstylethree, settipmainstylethree] = useState(0)

    function ll() {
        settooltipmainstyle('!flex')
        jj()
    }

    function kk() {
        settooltipmainstyle('!hidden')
        jj()
    }

    function jj() {
        if(tooltipmainstyle === '!flex') {
            settipmainstyletwo(0)
            settipmainstylethree(0)
        } else {
            settipmainstyletwo(1)
            settipmainstylethree(1)
        }
    }

  return (
    <div>
        <main className="relative z-10  cursor-pointer">
            <section className="flex justify-center">
                <div className={`hidden justify-center absolute bottom-7 ${tooltipmainstyle}`}>
                    <motion.article animate={{ scale: tipmainstyletwo, opacity: tipmainstylethree}} className=" p-[15px]  shadow rounded bg-gray-50 duration-75">
                        {/* Lorem ipsum dolor sit amet. */}
                        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, laudant */}
                        <h1 className="l-h2 text-center whitespace-nowrap">{tipmainstatic?.tipmaindata}</h1>
                    </motion.article>
                </div>
            </section>
            <section onMouseOver={() => {ll()}} onMouseOut={() => {kk()}} className="">
            {/* <section className=""> */}
                {children}
            </section>
        </main>
    </div>
  )
}

export default TipMain