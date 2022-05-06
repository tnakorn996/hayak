import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { plansummary } from '../../content/contentmain'

import { ContextMain } from '../../context/contextmain'
import ExitMain from '../exit/ExitMain'

function OntroMain() {
    const {
        appmainstate, setappmainstate,
        ontromainstate,

    } = useContext(ContextMain)
    // console.log('appmainstate>>', appmainstate)

    const [ontromaintitle, setontromaintitle] = useState()
    const [ontromainimage, setontromainimage] = useState()
    const [ontromainref, setontromainref] = useState()
    
    const ontromain = [
        {
            ontromainid: 'plansummary',

            ontromainref: plansummary,
        },
    ]

    useEffect(() => {
      if(appmainstate){
          const filter = ontromain.filter(data => data.ontromainid === appmainstate.appmainid)
          filter.forEach(data => {
              setontromaintitle(data.ontromainref[0].ontromaintitle)
              setontromainimage(data.ontromainref[0].ontromainimage)
              setontromainref(data.ontromainref)
          })

      }
    }, [])

  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}  className="w-screen min-h-screen bg-pink-900 text-white">
            <section className="p-[30px] max-w-[600px] mx-auto flex flex-col md:flex-row justify-center">
                <ExitMain />
                <figcaption className="">
                <br />
                <br />
                <br />
                <h1 className="m-h6 text-4xl font-serif">{ontromaintitle}</h1>
                </figcaption>
                {/* <figure className="">
                    <img src={ontromainimage} alt="" className='max-h-[200px]' />
                </figure> */}
            </section>
            <section className="p-[30px] max-w-[600px] mx-auto flex flex-col gap-10">
                {ontromainref?.map(data => (<>
                <article onClick={() => {
                        // setplanformstate(data?.ontromainid)
                        setappmainstate(
                            {
                                appmainid: data?.ontromainid,
                                appmainredirect: data?.ontromainredirect,
                            }
                        )
                    }} className="m-article">
                    <div className="">
                    <h1 className="m-h4">{data?.ontromainheader}</h1>
                    <button className="">{ontromainstate}</button>
                    </div>
                    <br />
                    <h1 className="l-h3 text-white">{data?.ontromainsubheader}</h1>
                </article>
                </>))}
            </section>

        </motion.main>
    </div>
  )
}

export default OntroMain