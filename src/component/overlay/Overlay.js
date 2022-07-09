import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { ContextMain } from '../../context/contextmain'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ToasterMain from '../toaster/ToasterMain'
import useApp from '../../hook/useApp'

function Overlay() {
    const {
        appmainstate,

    } = useContext(ContextMain)
    const [overlayrender, setoverlayrender] = useState()

    const overlay = [
        {
            overlayid: 'toastermain',
            overlayrender: <ToasterMain />,
        },
    ]

    // const [appstatic, setappstatic] = useApp(overlay, appmainstate.appmainidtwo, null)
    
    // useEffect(() => {
    //   if(appstatic && appmainstate && appmainstate.appmainid === 'overlay'){
    //       setoverlayrender(appstatic.overlayrender)
    //   }
    // }, [appstatic, appmainstate])

    useEffect(() => {
      if(appmainstate && appmainstate.appmainid === 'overlay'){
          const filter = overlay.filter(data => data.overlayid === appmainstate.appmainidtwo)
          setoverlayrender(filter[0].overlayrender)
      }
    }, [appmainstate])

  return (
    <div>
        <main className="">
            {/* <AnimatePresence> */}
                {/* {overlayboolean && ( */}
                <section className=" duration-100">
                    {overlayrender && overlayrender}
                </section>
                {/* )} */}
            {/* </AnimatePresence> */}
        </main>
    </div>
  )
}

export default Overlay