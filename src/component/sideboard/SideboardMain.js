import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiCloseFill, RiContrastDropLine } from 'react-icons/ri'
import { useLocation } from 'react-router-dom'

import { ContextMain } from '../../context/contextmain'
import CommentDialog from '../../page/comment/CommentDialog'
import SearchDialog from '../../page/search/SearchDialog'

function SideboardMain() {
  const {
    appmainstate, setappmainstate,


  } = useContext(ContextMain)
  const location = useLocation()
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

  const commentdialog = [
    {
      sideboardrender: <CommentDialog />,
    },
  ]
    
  const sideboardmain = [
    {
      sideboardmainid: 'searchdialog',
      sideboardmainref: searchdialog,
    },
    {
      sideboardmainid: 'commentdialog',
      sideboardmainref: commentdialog,
    },
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
        <motion.main initial={{x: -100}} animate={{ x:0}} exit={{x: -100}} className="h-screen w-[95vw] md:max-w-[55vw] fixed top-0 left-0 flex flex-col justify-start items-center bg-black text-white shadow-2xl">
            <section className="h-[10vh] px-[20px] md:px-[50px] w-full flex flex-row justify-between items-center">
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
                <RiCloseFill onClick={() => {
                setappmainstate({
                    appmainboolean: false
                })
                }} className="z-10 absolute top-3 right-3 text-4xl  text-white bg-black rounded-full" />
              </figcaption>
            </section>
            <section className="h-[90vh] w-full">
              {sideboardmainrender && sideboardmainrender}
            </section>
        </motion.main>
    </div>
  )
}

export default SideboardMain