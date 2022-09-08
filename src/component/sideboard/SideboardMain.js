import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiCloseFill, RiCloseLine, RiContrastDropLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
import { categoryul, categoryui, contactul } from '../../content/contentmantwo'

import '../sideboard/sideboardmain.css'
import { ContextMain } from '../../context/contextmain'
import CommentDialog from '../../page/comment/CommentDialog'
import ZoomMain from '../zoom/ZoomMain'
import FavouriteDialog from '../../page/favourite/FavouriteDialog'
import TabMain from '../tab/TabMain'
import FeedbackSection from '../../page/feedback/FeedbackSection'
import CheckMain from '../../layout/check/CheckMain'
import useApp from '../../hook/useApp'

function SideboardMain() {
  const {
    appmainstate, setappmainstate,
    setbreadmainstate,
    setsearchmainstate, searchmainstate,
    
    postupdatedat,


  } = useContext(ContextMain)
  const [sideboardmainpage, setsideboardmainpage] = useState(0)
  const [sideboardmainrender, setsideboardmainrender] = useState()
  const navigate = useNavigate()

  const searchdialog = [
    {
      sideboardindex: 0,
      sideboardrender: postupdatedat && <FavouriteDialog />
    },
  ]

  const commentdialog = [
    {
      sideboardindex: 0,

      sideboardrender: <CommentDialog />,
    },
  ]

  const navdialog = [
    {
      sideboardindex: 0,
      sideboardrender: () => {
        return <main className="h-full px-[20px] w-screen md:w-[55vh]  flex flex-col">
          <section className="h-[75vh]">
            {categoryul?.map((data, index) => (<>
              <article key={index} onClick={() => {
                setappmainstate({
                            appmainid: 'navdialog',
                            appmainidtwo: 'sideboardmain',
                            appmainidthree: data.breadmainid,
                            appmainboolean: true,
                })
                setsideboardmainpage(1)
              }} className="py-[10px] flex flex-row items-start justify-between">
                <h1 className="m-h6 text-2xl  font-serif">{data?.breadmaintitle}</h1>
                <h1 className="m-h6 text-2xl  font-serif">→</h1>
              </article>
            </>))}
          </section>
          <section className="py-[10px] w-full h-[10vh] grid grid-cols-2 items-center justify-center text-center">
            {contactul?.map((data, index) => (<>
              <a key={index} href={data?.breadmainaction} className={`font-serif ${data?.breadmainstyle}`}>{data?.breadmainentitle}</a>
            </>))}
          </section>
        </main>
        }
    },
    {
      sideboardindex: 1,
      sideboardrender: () => {
        const filter = categoryui.filter(data => data.breadmainid === appmainstate.appmainidthree)
        return <motion.main initial={{x: -100}} animate={{ x:0}} exit={{x: -100}} className="px-[20px] w-screen md:w-[55vh] duration-100">
          <section className="">
            <button onClick={() => {
              setsideboardmainpage(0)
            }} className=''>← Main menu</button>
            <br /><br />
          </section>
          <section className="h-[70vh]">
            {filter.map((data, index) => (<>
            <article key={index} onClick={() => {
                setbreadmainstate({
                  breadmainid: data?.breadmainid,
                  breadmainidtwo: data?.crummainid,
                })
                navigate(`/category/${data?.breadmainid}`)
              }} className="py-[10px]">
              <h1 className="m-h6 text-2xl  font-serif">{data?.crummaintitle}</h1>
              <h1 className="l-h2">{data?.crummainsubtitle}</h1>
            </article>
            </>))}
          </section>
          <section className="py-[10px] w-full h-[10vh] grid grid-cols-1 items-center">
            {filter.slice(0, 1).map((data, index) => (<>
              <a key={index} href={`/category/${data?.breadmainid}`} className='text-center m-button font-serif' >See all {data?.breadmainid}s</a>
            </>))}
          </section>
        </motion.main>
      }
    },
  ]

  const favouritedialog = [
    {
      sideboardindex: 0,
      sideboardrender: postupdatedat && <FavouriteDialog />
    },
  ]

  const feedbackdialog = [
    {
      sideboardindex: 0,
      sideboardrender: <FeedbackSection />
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
    {
      sideboardmainid: 'favouritedialog',
      sideboardmainref: favouritedialog,
    },
    {
      sideboardmainid: 'feedbackdialog',
      sideboardmainref: feedbackdialog,
    },
  ]

  const [appstatic, setappstatic] = useApp(sideboardmain, appmainstate.appmainid, sideboardmainpage)

  useEffect(() => {
    if(appstatic && appmainstate && appmainstate.appmainidtwo === 'sideboardmain'){
        // const filter = sideboardmain.filter(data => data.sideboardmainid === appmainstate.appmainid)
        // const filtertwo = filter[0].sideboardmainref.filter(data => data.sideboardindex === sideboardmainpage)
        // setsideboardmainrender(filtertwo[0].sideboardrender) 

        setsideboardmainrender(appstatic[0].sideboardrender) 
    }
  }, [appstatic, appmainstate, sideboardmainpage])

  return (
    <div>
        {/* <motion.main initial={{x: -100}} animate={{ x:0}} exit={{x: -100}} className="h-screen w-screen md:w-[55vw] fixed top-0 left-0 flex flex-col justify-start items-center  border bg-white shadow-2xl duration-100"> */}
        <main className="h-screen w-screen md:w-[55vw] fixed top-0 left-0 flex flex-col justify-start items-center  border bg-white shadow-2xl">
            <section className="h-[10vh] px-[20px] w-full flex flex-row justify-between items-center  shadow-md">
              <figure className="">
                <article className=" flex flex-row gap-1 items-center">
                <figure className="">
                    <RiContrastDropLine className='m-h6' />
                </figure>
                <figcaption className="flex flex-row gap-1">
                    <h1 className='m-h6 font-serif font-bold'>TOI</h1>
                </figcaption>
                </article>
              </figure>
              <figcaption className="">
                  <CheckMain>
                  <RiCloseLine className="z-10 absolute top-5 right-5  l-h6 " />
                  </CheckMain>
              </figcaption>
            </section>
            <section className="h-[90vh]  overflow-y-scroll no-scrollbar">
            <br />
              {sideboardmainrender && sideboardmainrender}
            </section>
        </main>
    </div>
  )
}

export default SideboardMain