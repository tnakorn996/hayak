import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { breadmain, sheetmain, spreadmain, statemain } from '../../content/contentmain'

import { ContextMain } from '../../context/contextmain'

function SnackbarMain() {
    const {
        setappmainstate,
        snackbarmainstate, 


    } = useContext(ContextMain)

    const [snackbarrender, setsnackbarrender] = useState()
    const [snackbarrendertwo, setsnackbarrendertwo] = useState()

    const sharefooter = [
        {
            snackbarmainrender: spreadmain?.filter(data => data.spreadmainid === snackbarmainstate.snackbarmainidtwo),
            snackbarmainrendertwo: sheetmain?.filter(data => data.sheetmainid === snackbarmainstate.snackbarmainidthree)
        }
    ]

    const snackbarmain = [
        {
            snackbarmainid: 'sharefooter',
            snackbarmainref: sharefooter,
        }
    ]

    useEffect(() => {
      if(snackbarmainstate){
            const filter = snackbarmain.filter(data => data.snackbarmainid === snackbarmainstate.snackbarmainid)
            const filtertwo = filter[0].snackbarmainref.filter(data => filter[0].snackbarmainref.indexOf(data) === 0)
            setsnackbarrender(filtertwo[0].snackbarmainrender)
            setsnackbarrendertwo(filtertwo[0].snackbarmainrendertwo)
      }
    }, [snackbarmainstate])

  return (
    <div>
        <main className="grid justify-items-center">
            {snackbarrender?.map(data => (<>
            <figure className={`p-[20px] fixed z-30 top-0 w-screen grid grid-cols-12  border-b-2 ${data?.spreadmainstyle}`} >
                <section className="text-5xl col-span-1  flex justify-center">
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
        </main>
    </div>
  )
}

export default SnackbarMain