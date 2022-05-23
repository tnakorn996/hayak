import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ContextMain } from '../../context/contextmain'

import PreviewMain from '../preview/PreviewMain'
import ModalMain from './ModalMain'
import '../modal/backdropmain.css'
import SideboardMain from '../sideboard/SideboardMain'
import OpendeskMain from '../opendesk/OpendeskMain'

function BackdropMain() {
  const {
    appmainstate,

  } = useContext(ContextMain)
  
  const backdropmain = [
    {
      backdropmainid: 'modalmain',
      backdropmainrender: <ModalMain />
    },
    {
      backdropmainid: 'previewmain',
      backdropmainrender: <PreviewMain />
    },
    {
      backdropmainid: 'sideboardmain',
      backdropmainrender: <SideboardMain />
    },
    {
      backdropmainid: 'opendeskmain',
      backdropmainrender: <OpendeskMain />
    },
  ]

  const [backdropmainrender, setbackdropmainrender] = useState()
  
  useEffect(() => {
    if(appmainstate && appmainstate.appmainidtwo){
      const filter = backdropmain.filter(data => data.backdropmainid ===  appmainstate.appmainidtwo)
        setbackdropmainrender(filter[0].backdropmainrender)
    }
  }, [appmainstate])

  return (
    <div>
        <main className="z-20 w-screen h-screen top-0 left-0 fixed flex justify-center items-end md:items-start  bg-white bg-opacity-30 overflow-y-auto no-scrollbar">
            {backdropmainrender && backdropmainrender}
        </main>
    </div>
  )
}

export default BackdropMain