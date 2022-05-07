import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { motion } from 'framer-motion'

import { ContextMain } from '../../context/contextmain'
import ToastMain from '../toast/ToastMain'
import { useState } from 'react'

function Overlay() {
    const {
        appmainstate,

    } = useContext(ContextMain)
    const [overlayrender, setoverlayrender] = useState()

    const overlay = [
        {
            overlayid: 'toastmain',
            overlayrender: <ToastMain />,
        }
    ]

    useEffect(() => {
      if(appmainstate && appmainstate.appmainid === 'overlay'){
          const filter = overlay.filter(data => data.overlayid === appmainstate.appmainidtwo)
          setoverlayrender(filter[0].overlayrender)
      }
    }, [appmainstate])

  return (
    <div>
        <motion.main   initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}  className="">
            <section className="">
                {overlayrender && overlayrender}
            </section>

        </motion.main>
    </div>
  )
}

export default Overlay