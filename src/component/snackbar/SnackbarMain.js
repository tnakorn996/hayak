import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { breadmain, sheetmain, spreadmain, statemain } from '../../content/contentmain'

import { ContextMain } from '../../context/contextmain'

function SnackbarMain() {
    const {
        setappmainstate,
        snackbarmainstate, 

        postupdatedat,
        placeupdatedat,
        productupdatedat,

    } = useContext(ContextMain)
    const navigate = useNavigate()

    const [snackbarmainrender, setsnackbarmainrender] = useState()

    const categoryfooter = [
        {
            snackbarmainindex: 0,
            snackbarmainid: 'postcategoryidcreatedat',
            snackbarmainrender: postupdatedat?.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt)),
            snackbarmaintitle: 'New',
        },
        {
            snackbarmainindex: 1,
            snackbarmainid: 'postcategoryidupdatedat',
            snackbarmainrender: placeupdatedat?.sort((a, b) => new Date(b._updatedAt) - new Date(a._updatedAt)),
            snackbarmaintitle: 'Trending',
        },
        {
            snackbarmainindex: 2,
            snackbarmainid: 'postcategoryidpostcount',
            snackbarmainrender: productupdatedat?.sort((a, b) => b.postcount - a.postcount),
            snackbarmaintitle: 'Hottest',
        },
    ]

    const snackbarmain = [
        {
            snackbarmainid: 'categoryfooter',
            snackbarmainref: categoryfooter,
        }
    ]

    useEffect(() => {
      if(snackbarmainstate){
            const filter = snackbarmain.filter(data => data.snackbarmainid === snackbarmainstate.snackbarmainid)
            // const filtertwo = filter[0].snackbarmainref.filter(data => data.snackbarindex === 0)
            setsnackbarmainrender(filter[0].snackbarmainref)
      }
    }, [snackbarmainstate])


  return (
    <div>
        <main  className="h-[50vh] absolute bottom-[30vh] left-0  w-screen text-center   bg-gray-900">
            <section className="relative w-full border-b border-gray-700  ">
                <br />
                <h1 className="m-h6 font-serif text-white">You may also be interested in</h1>
                <br />
                <RiCloseFill onClick={() => {
                    setappmainstate('')
                }} className="z-20 absolute top-5 right-5 text-4xl  text-white bg-black cursor-pointer" />
            </section>
            <br />
            <section className="px-[50px] grid grid-cols-3 items-center">
                {snackbarmainrender?.map(data => (<>
                <figcaption className="flex flex-col gap-3">
                    {data?.snackbarmainrender?.slice(0, 6)?.map(dat => (<>
                    <article onClick={() => {
                    navigate(`/${dat?.postid}`)
                    }} className="l-h4 font-extralight text-white">{dat?.posttitle}</article>
                    </>))}
                </figcaption>
                </>))}
            </section>
        </main>
    </div>
  )
}

export default SnackbarMain