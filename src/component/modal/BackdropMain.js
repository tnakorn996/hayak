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
    appmainstate,
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
        <main className="">
          <AnimatePresence>
              <motion.section key='backdrop' initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0}} className="z-20 w-screen h-screen top-0 left-0 fixed flex justify-center items-end md:items-start  bg-opacity-40 overflow-y-auto no-scrollbar duration-75">
                {backdropmainrender && backdropmainrender}
              </motion.section>
          </AnimatePresence>
        </main>
    </div>
  )
}

export default BackdropMain