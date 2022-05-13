import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { ContextMain } from '../../context/contextmain'
import CtaMain from '../ctamain/CtaMain'

function ToastMain() {
    const {
        appmainstate, setappmainstate,

    } = useContext(ContextMain)
    const [toastmainrender, settoastmainrender] = useState()

    const ctafigcaption = [
        {
            toastmainidtwo: 'ctamain',
            toastmaintitle: 'Want to chat with seller?',
            toastmainaction: <CtaMain />
        }
    ]

    const toastmain = [
        {
            toastmainid: 'ctafigcaption',
            toastmainref: ctafigcaption,
        }
    ]

    useEffect(() => {
      if(appmainstate && appmainstate.appmainidtwo === 'toastmain'){
          const filter = toastmain.filter(data => data.toastmainid === appmainstate.appmainidthree)
          const filtertwo = filter[0].toastmainref.filter(data => data.toastmainidtwo === appmainstate.appmainidfour)
          settoastmainrender(filtertwo[0])
        }
    }, [appmainstate])
    
  return (
    <div>
        <motion.main  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}  className="z-10 w-full fixed bottom-0 left-0 flex items-center  bg-gray-100 text-white">
            <div className="w-full px-[20px] md:px-[60px] flex flex-col md:grid md:grid-cols-12 justify-center items-center text-center">
                    <section className="md:col-span-8">
                        <br />
                        <h1 className="m-h6 font-semibold">{toastmainrender?.toastmaintitle}</h1>
                        {/* <h1 className="l-h3">{toastmainrender?.toastmainsubtitle}</h1> */}
                        <br />
                    </section>
                    <section className="md:col-span-4">
                        <br />
                        {toastmainrender?.toastmainaction}
                        <br /><br />
                    </section>
            </div>
        </motion.main>
    </div>
  )
}

export default ToastMain