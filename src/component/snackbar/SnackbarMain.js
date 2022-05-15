import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { sheetmain, spreadmain, statemain } from '../../content/contentmain'

import { ContextMain } from '../../context/contextmain'

function SnackbarMain() {
    const {
        setappmainstate,
        spreadmainstate, 


    } = useContext(ContextMain)

    const [snackbarrender, setsnackbarrender] = useState()
    const [snackbarrendertwo, setsnackbarrendertwo] = useState()

    useEffect(() => {
      if(spreadmainstate){
            const filter = spreadmain.filter(data => data.spreadmainid === spreadmainstate.spreadmainid)
            const filtertwo = sheetmain.filter(data => data.sheetmainid === spreadmainstate.spreadmainidtwo)
            setsnackbarrender(filter)
            setsnackbarrendertwo(filtertwo)
      }
    }, [])

  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="grid justify-items-center">
            {snackbarrender?.map(data => (<>
            <figure className={`p-[20px] fixed z-10 top-0 w-screen grid grid-cols-12  border-b-2 ${data?.spreadmainstyle}`} >
                <section className="text-3xl col-span-1  flex justify-center">
                    {data?.spreadmainicon}
                </section>
                <section className="px-[20px] col-span-10">
                    <h1 className="m-h4">{data?.spreadmaintitle}</h1>
                    {snackbarrendertwo?.map(dat => (<>
                    <h1 className="l-h3">{dat?.sheetmaintitle}</h1>
                    </>))}
                </section>
                <section onClick={() => {
                    setappmainstate('')
                    }} className="col-span-1 flex justify-center">
                    <article className="l-h6">╳</article>
                </section>
            </figure>
            </>))}
        </motion.main>
    </div>
  )
}

export default SnackbarMain