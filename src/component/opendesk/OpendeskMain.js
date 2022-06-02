import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiFeedbackFill, RiShareFill } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'
import HorizonMain from '../post/HorizonMain'
import '../opendesk/opendesk.css'

function OpendeskMain() {
    const {
        postselect, postlink,
        categoryselect, categorylink,
        searchselect, searchlink,

        setappmainstate, appmainstate,
        opendeskmainstate, setopendeskmainstate,
        tabmainstate, settabmainstate,
        breadmainstate,
        genreindexstate,

    } = useContext(ContextMain)
    const [opendeskmainindex, setopendeskmainindex] = useState(0)
    const [opendeskmaintitle, setopendeskmaintitle] = useState()
    const [opendeskmainimage, setopendeskmainimage] = useState()
    const [opendeskmainparam, setopendeskmainparam] = useState()
    const [opendeskmainlocation, setopendeskmainlocation] = useState()

    const [opendeskmainrender, setopendeskmainrender] = useState()
    const [opendeskmainrendertwo, setopendeskmainrendertwo] = useState()

    ////////////////////////////////


    const postoption = [
        {
            opendeskmainindex: 0,
            opendeskmainrender: postselect
        },
        {
            opendeskmainindex: 1,
            opendeskmainrender: postlink.filter(data => data.tabmainid === tabmainstate?.tabmainidtwo),
        },
    ]

    const categoryoption = [
        {
            opendeskmainindex: 0,
            opendeskmainrender: categoryselect
        },
        {
            opendeskmainindex: 1,
            opendeskmainrender: categorylink.filter(data => data.tabmainid === tabmainstate?.tabmainidtwo),
        },
    ]

    const searchoption = [
        {
            opendeskmainindex: 0,
            opendeskmainrender: searchselect,
        },
        {
            opendeskmainindex: 1,
            opendeskmainrender: searchlink.filter(data => data.tabmainid === tabmainstate?.tabmainidtwo),
        },
    ]

    const opendeskmain = [
        {
            opendeskmainid: 'postoption',
            opendeskmainref: postoption
        },
        {
            opendeskmainid: 'categoryoption',
            opendeskmainref: categoryoption,
        },
        {
            opendeskmainid: 'searchoption',
            opendeskmainref: searchoption,
        },
    ]

    useEffect(() => {
      if(tabmainstate){
          setopendeskmainimage(tabmainstate?.tabmainimage)
          setopendeskmaintitle(tabmainstate?.tabmaintitle)
          setopendeskmainparam(tabmainstate?.tabmainparam)
          setopendeskmainlocation(tabmainstate?.tabmainlocation)
      }
    }, [])

    useEffect(() => {
        if(appmainstate && appmainstate.appmainidtwo === 'opendeskmain'){
            const filter = opendeskmain.filter(data => data.opendeskmainid === appmainstate.appmainid)
            const filtertwo = filter[0].opendeskmainref.filter(data => data.opendeskmainindex === opendeskmainindex)
            if(opendeskmainindex === 0) {
                setopendeskmainrender(filtertwo[0].opendeskmainrender)
            } else {
                setopendeskmainrendertwo(filtertwo[0].opendeskmainrender)
            }
        }
    }, [appmainstate, tabmainstate])

  return (
    <div>
        <motion.main key='opendeskmain' initial={{x: 200}} animate={{ x:0}} exit={{x: 200}}  className="fixed bottom-0 md:top-0 right-0 w-screen md:h-screen md:max-w-[500px] p-[20px]  border bg-white shadow-2xl overflow-hidden">
            <section className="md:h-[10vh]">
            {(opendeskmainlocation || opendeskmainparam) && (<>
                <HorizonMain
                posthero={opendeskmainimage} postid={opendeskmainlocation || '/' + opendeskmainparam} posttitle={opendeskmaintitle} postsubtitle={`https://toifood.co.nz${opendeskmainlocation || '/' + opendeskmainparam}`} />
            </>)}
            </section>

            <section className="h-[50vh] md:h-[75vh]  overflow-hidden">
                <br />
                {opendeskmainindex === 0 && opendeskmainrender?.map(data => (<>
                <div className="">
                    <article onClick={() => {
                        settabmainstate({
                            tabmainid: tabmainstate?.tabmainid,
                            tabmainidtwo: data?.tabmainid,
                        })
                        setopendeskmainindex(1)
                    }} className="grid grid-cols-12 items-center p-[20px]">
                        <h1 className="m-h3">{data?.tabmainicon}</h1>
                        <h1 className="col-span-10  first-letter:uppercase m-h2">{data?.tabmaintitle || data?.blemaintitle}</h1>
                        <h1 className="col-span-1  m-h2">→</h1>
                    </article>
                    <hr />
                </div>
                </>))}

                {opendeskmainindex !== 0 && (<>
                    <div className="grid grid-cols-11 items-center text-center">
                        <button onClick={() => {
                            settabmainstate({
                                tabmainid: tabmainstate?.tabmainid,
                                tabmainidtwo: null,
                            })
                            setopendeskmainindex(0)
                        }} className="col-span-2  l-button border">←</button>
                        <h1 className="col-span-9  uppercase l-button border">{opendeskmainrendertwo && opendeskmainrendertwo[0]?.tabmainid}</h1>
                    </div>
                    <br />
                    <motion.div initial={{x: 200}} animate={{ x:0}} exit={{x: 200}}  className="max-h-full  overflow-y-scroll no-scrollbar">
                    {opendeskmainrendertwo?.map(data => (<>

                    <article onClick={() => {
                        data?.blemainaction()
                    }} className={`grid grid-cols-12 items-center p-[20px] ${(data?.blemainid === genreindexstate?.genreindexid || data?.blemainid === breadmainstate?.breadmainidtwo) && '!bg-gray-900 text-white'}`}>
                        <h1 className="m-h3">{data?.tabmainicon}</h1>
                        <h1 className="col-span-10  first-letter:uppercase m-h2">{data?.tabmaintitle || data?.blemaintitle}</h1>
                    </article>
                    <hr />
                    </>))}
                    <br /><br /><br /><br /><br />
                    </motion.div>
                </>)}

            </section>
            <section className="md:h-[10vh] flex items-center  bg-white">
                <button onClick={() => {
                    setappmainstate('')
                }} className=" w-full  l-button">Cancel</button>
            </section>

            {/* <section className="">
                {tabmainrendertwo?.map(data => (<>
                <motion.article  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} onClick={data?.blemainaction} className="grid grid-cols-12 items-center p-[20px]">
                    <h1 className="col-span-11  m-h2">{data?.blemaintitle}</h1>
                </motion.article>
                <hr />
                </>))}
            </section> */}
        </motion.main>
    </div>
  )
}

export default OpendeskMain