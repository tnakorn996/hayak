import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { ContextMain } from '../../context/contextmain'
import PreviewMain from '../preview/PreviewMain'
import ModalMain from './ModalMain'
import '../modal/backdropmain.css'
import SideboardMain from '../sideboard/SideboardMain'
import OpendeskMain from '../opendesk/OpendeskMain'
import useApp from '../../hook/useApp'

function BackdropMain() {
  const {
    appmainstate, setappmainstate,
    backdropstate,

  } = useContext(ContextMain)
  const [backdropmainrender, setbackdropmainrender] = useState()

  const modalmain = [
    {
      backdropmaindex: 0,
      backdropmainrender: <ModalMain />
    },
  ]

  const previewmain = [
    {
      backdropmaindex: 0,
      backdropmainrender: <PreviewMain />
    },
  ]

  const sideboardmain = [
    {
      backdropmaindex: 0,
      backdropmainrender: <SideboardMain />
    },
  ]

  const opendeskmain = [
    {
      backdropmaindex: 0,
      backdropmainrender:  <OpendeskMain />
    },
  ]
  
  const backdropmain = [
    {
      backdropmainid: 'modalmain',
      backdropmainref: modalmain,
    },
    {
      backdropmainid: 'previewmain',
      backdropmainref: previewmain,
    },
    {
      backdropmainid: 'sideboardmain',
      backdropmainref: sideboardmain,
    },
    {
      backdropmainid: 'opendeskmain',
      backdropmainref: opendeskmain,
    },
  ]

  const [appstaic, setappstatic] = useApp(backdropmain, appmainstate.appmainidtwo, 0)
  
  useEffect(() => {
    if(appstaic && appmainstate && appmainstate.appmainidtwo){
        setbackdropmainrender(appstaic[0].backdropmainrender)
    }
  }, [appstaic, appmainstate])

  // useEffect(() => {
  //   if(appmainstate && appmainstate.appmainidtwo){
  //     const filter = backdropmain.filter(data => data.backdropmainid ===  appmainstate.appmainidtwo)
  //       setbackdropmainrender(filter[0].backdropmainrender)
  //   }
  // }, [appmainstate])

  return (
    <div>
        <main className="relative">
          {/* <AnimatePresence> */}
              <motion.section key='backdrop' initial={{scale: 1.5, opacity: 0}} animate={{scale: 1, opacity: 1}} exit={{scale: 1.5, opacity: 0}} className="z-20 w-screen h-screen top-0 left-0 fixed flex justify-center items-end md:items-start  bg-black bg-opacity-40 md:bg-opacity-0 overflow-y-auto no-scrollbar duration-100">
                {/* <div className="z-20"> */}
                  {backdropmainrender && backdropmainrender}
                {/* </div> */}
                {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 0.5 }}  onClick={() => {
                  setappmainstate('')
                }} className="w-screen h-screen z-10 fixed top-0 left-0  bg-black duration-100" /> */}
              </motion.section>
          {/* </AnimatePresence> */}
        </main>
    </div>
  )
}

export default BackdropMain