import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiCloseFill, RiContrastDropLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
import { categoryul, categoryui } from '../../content/contentmantwo'

import '../sideboard/sideboardmain.css'
import { ContextMain } from '../../context/contextmain'
import CommentDialog from '../../page/comment/CommentDialog'
import ZoomMain from '../zoom/ZoomMain'

function SideboardMain() {
  const {
    appmainstate, setappmainstate,
    setbreadmainstate,


  } = useContext(ContextMain)
  const [sideboardmainpage, setsideboardmainpage] = useState(0)
  const [sideboardmainrender, setsideboardmainrender] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    if(appmainstate && appmainstate.appmainid){

    }
  }, [appmainstate])

  const searchdialog = [
    {
      sideboardrender: <ZoomMain zoommainid={'searchinput'} zoommainslice={3} />,
    },
  ]

  const commentdialog = [
    {
      sideboardrender: <CommentDialog />,
    },
  ]

  const navdialog = [
    {
      sideboardrender: () => {
        return <main className="h-full flex flex-col justify-between">
          <section className="">
            {categoryul?.map(data => (<>
              <article onClick={() => {
                setappmainstate({
                            appmainid: 'navdialog',
                            appmainidtwo: 'sideboardmain',
                            appmainidthree: data.breadmainid,
                            appmainboolean: true,
                })
                setsideboardmainpage(1)
              }} className="p-[20px] flex flex-row items-start justify-between">
                <h1 className="m-h6 text-2xl  font-serif">{data?.breadmaintitle}</h1>
                <h1 className="m-h6 text-2xl  font-serif">→</h1>
              </article>
            </>))}
          </section>
          {/* <section className="!bg-black">
            <PortMain />
          </section> */}
        </main>
        }
    },
    {
      sideboardrender: () => {
        const filter = categoryui.filter(data => data.breadmainid === appmainstate.appmainidthree)
        return <motion.main initial={{x: -100}} animate={{ x:0}} exit={{x: -100}} className="">
          <section className="">
            <button onClick={() => {
              setsideboardmainpage(0)
            }} className='m-button'>← Main menu</button>
          </section>
          <section className="">
            {filter.map(data => (<>
            <article onClick={() => {
              setbreadmainstate({
                            breadmainid: data?.breadmainid,
                            breadmainidtwo: data?.crummainid,
              })
              navigate(`/category/${data?.breadmainid}`)
            }} className="p-[20px]">
                <h1 className="m-h6 text-2xl  font-serif">{data?.crummaintitle}</h1>
                <h1 className="l-h5">{data?.crummainsubtitle}</h1>
            </article>
            </>))}
          </section>
        </motion.main>
      }
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
    {
      sideboardmainid: 'navdialog',
      sideboardmainref: navdialog,
    },
  ]

  useEffect(() => {
    if(appmainstate && appmainstate.appmainidtwo === 'sideboardmain'){
        const filter = sideboardmain.filter(data => data.sideboardmainid === appmainstate.appmainid)
        const filtertwo = filter[0].sideboardmainref.filter(data => filter[0].sideboardmainref.indexOf(data) === sideboardmainpage)
        setsideboardmainrender(filtertwo[0].sideboardrender) 
    }
  }, [appmainstate, sideboardmainpage])

  return (
    <div>
        <motion.main initial={{x: -100}} animate={{ x:0}} exit={{x: -100}} className="h-screen w-screen md:max-w-[55vw] fixed top-0 left-0 flex flex-col justify-start items-center bg-black text-white">
            <section className="h-[10vh] px-[20px] md:px-[50px] w-full flex flex-row justify-between items-center">
              <figure className="">
                <article className=" flex flex-row gap-1 items-center">
                <figure className="">
                    <RiContrastDropLine className='text-3xl' />
                </figure>
                <figcaption className="flex flex-row gap-1">
                    <h1 className='m-h6 font-serif font-bold'>TOI</h1>
                </figcaption>
                </article>
              </figure>
              <figcaption className="">
                <RiCloseFill onClick={() => {
                setappmainstate({
                    appmainboolean: false
                })
                }} className="z-10 absolute top-5 right-5 text-4xl  text-white bg-black rounded-full" />
              </figcaption>
            </section>
            <section className="h-[90vh] w-full  overflow-y-scroll no-scrollbar ">
              {sideboardmainrender && sideboardmainrender}
            </section>
            {/* <section className="h-[10vh] w-full p-[20px] grid grid-flow-col  border-t border-gray-700">
              <button className="m-button">Our story</button>
              <button className="l-button">List your business</button>
            </section> */}
        </motion.main>
    </div>
  )
}

export default SideboardMain