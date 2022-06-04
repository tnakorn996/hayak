import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { ContextMain } from '../../context/contextmain'
import ToastMain from '../toast/ToastMain'
import { useState } from 'react'
import SnackbarMain from '../snackbar/SnackbarMain'
import { AnimatePresence, motion } from 'framer-motion'

function Overlay() {
    const {
        appmainstate,
        overlaystate,

    } = useContext(ContextMain)
    const [overlayrender, setoverlayrender] = useState()
    // const [overlayboolean, setoverlayboolean] = useState(false)

    // useEffect(() => {
    //     if(appmainstate === ''){
    //         setoverlayboolean(false)
    //         console.log('overlayboolean :>>> ', overlayboolean);
    //     } 
    //     if(appmainstate !== ''){
    //         setoverlayboolean(true)
    //     } 
    // }, [appmainstate])

    const overlay = [
        {
            overlayid: 'toastmain',
            overlayrender: <ToastMain />,
        },
        {
            overlayid: 'snackbarmain',
            overlayrender: <SnackbarMain />,
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
        <main className="">
            {/* <AnimatePresence> */}
                {/* {overlayboolean && ( */}
                <motion.section key='overlay' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className=" duration-100">
                    {overlayrender && overlayrender}
                </motion.section>
                {/* )} */}
            {/* </AnimatePresence> */}
        </main>
    </div>
  )
}

export default Overlay