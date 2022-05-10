import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiContrastDropLine } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'
import SearchDialog from '../../page/search/SearchDialog'

function SideboardMain() {
  const {
    appmainstate, setappmainstate,


  } = useContext(ContextMain)
  const [sideboardmainrender, setsideboardmainrender] = useState()

  useEffect(() => {
    if(appmainstate && appmainstate.appmainid){

    }
  }, [appmainstate])


  const searchdialog = [
    {
      sideboardrender: <SearchDialog />,
    },
  ]
    
  const sideboardmain = [
    {
      sideboardmainid: 'searchdialog',
      sideboardmainref: searchdialog,
    }
  ]

  useEffect(() => {
    if(appmainstate && appmainstate.appmainidtwo === 'sideboardmain'){
      const filter = sideboardmain.filter(data => data.sideboardmainid === appmainstate.appmainid)
      const filtertwo = filter[0].sideboardmainref.filter(data => filter[0].sideboardmainref.indexOf(data) === 0)
      setsideboardmainrender(filtertwo[0].sideboardrender) 
    }

  }, [appmainstate])

  return (
    <div>
        <motion.main initial={{x: -100}} animate={{ x:-10}} exit={{x: -100}} className="h-screen w-screen md:max-w-[55vw] fixed top-0 left-0 flex flex-col justify-start items-center bg-black text-white">
            <section className="p-[50px] h-[10vh] w-full flex flex-row justify-between items-center">
              <figure className="">
                <article className=" flex flex-row gap-1 items-center">
                <figure className="">
                    <RiContrastDropLine className='text-3xl' />
                </figure>
                <figcaption className="flex flex-row gap-1">
                    <h1 className='m-h6 font-bold'>HAYAK</h1>
                    <h1 className="l-h3">Blog</h1>
                </figcaption>
                </article>
              </figure>
              <figcaption className="">
                <button onClick={() => {
                  setappmainstate('')
                }} className="l-button">close</button>
              </figcaption>
            </section>
            <section className="p-[50px] h-[90vh] w-full">
              {sideboardmainrender && sideboardmainrender}
            </section>
        </motion.main>
    </div>
  )
}

export default SideboardMain