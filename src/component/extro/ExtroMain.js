import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RiCheckboxCircleLine, RiErrorWarningLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

import { extromain, plansummary } from '../../content/contentmain'
import { ContextMain } from '../../context/contextmain'

function ExtroMain() {
    const {
        setappmainstate, appmainstate,
        setontromainstate,
        extromainstate,
        
    } = useContext(ContextMain)

    const [extromainboolean, setextromainboolean] = useState()
    const [extromainref, setextromainref] = useState()

    useEffect(() => {
      if(appmainstate){
          const filter = extromain.filter(data => data.extromainid === appmainstate.appmainid)
          const filtertwo = filter[0].extromainref.filter(data => data.ontromainid === appmainstate.appmainref)
          setextromainboolean(appmainstate.appmainboolean)
          setextromainref(filtertwo[0])
      }
    }, [appmainstate])
    
  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="p-[20px] w-screen min-h-screen  bg-orange-700 text-white">
            <section className="h-[30vh] max-w-[900px] mx-auto flex justify-center text-center">
                <figure className="">
                    <br />
                    {extromainboolean ? (<>
                    <RiCheckboxCircleLine className='text-9xl' />
                    </>) : (<>
                    <RiErrorWarningLine className='text-9xl' />
                    </>)}
                </figure>
            </section>
            <section className="h-[30vh] max-w-[500px] mx-auto  text-center">
                    <figcaption className="flex flex-row gap-1">
                        <h1 className="text-5xl m-h1  font-serif">{extromainboolean ? 'Successfully process' : 'Fail to process'} {extromainref?.ontromainheader}</h1>
                    </figcaption>
                    <br />
                    <h1 className="l-h2 text-white">Product details:</h1>
                    <br />
            </section>
            <section className="h-[20vh] max-w-[500px] mx-auto  text-center overflow-y-scroll">
                    <motion.details layout className="p-[20px]  border rounded-md text-left">
                        <motion.summary layout className="">
                        <h1 className="m-h6">{extromainref?.ontromainheader}</h1>
                        </motion.summary>
                        <br />
                        <h1 className="l-h1 text-white">{extromainref?.ontromainsubheader}</h1>
                    </motion.details>
            </section>
            <section className="h-[20vh] flex flex-col md:grid md:grid-flow-col justify-center items-center gap-2 max-w-[500px] mx-auto">
                <button onClick={() => {
                    setappmainstate('appmain')
                }} className="w-full  l-button">Return to Homepage</button>
                <button onClick={() => {
                    setappmainstate({
                        appmainid: extromainref?.ontromainid,
                        appmainredirect: extromainref?.ontromainredirect
                    })
                }} className="w-full  m-button">Repeat {extromainref?.ontromainheader}</button>
            </section>
        </motion.main>
    </div>
  )
}

export default ExtroMain