import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { breadmain, sheetmain, spreadmain, statemain } from '../../content/contentmain'

import { ContextMain } from '../../context/contextmain'
import BarMain from '../bar/BarMain'
import CtaMain from '../ctamain/CtaMain'

function SnackbarMain({
    snackbarmainid,
    snackbarmaindata,
    snackbarmaindatatwo,
    snackbarmaindatathree,

}) {
    const {
        setappmainstate,
        // snackbarmainstate, 

        postupdatedat,
        placeupdatedat,
        productupdatedat,

    } = useContext(ContextMain)
    const navigate = useNavigate()
    const [snackbarmainindex, setsnackbarmainindex] = useState(0)

    const [snackbarmainrender, setsnackbarmainrender] = useState()

    const postfooter = [
        {
            snackbarmainindex: 0,
            snackbarmainrender: <figcaption className={`col-span-12 h-[50vh] flex flex-col`}>
                <section className="w-full px-[20px] md:px-[60px] max-w-[900px] mx-auto min-h-[20vh] md:h-fit">
                <br />
                {/* <hr /> */}
                <br />
                    <div className="flex flex-row justify-between">
                        <h1 className={`l-h2 uppercase tracking-[0.2em]`}>{snackbarmaindata && snackbarmaindata}</h1>
                    </div>
                    <h1 className={`text-3xl md:text-4xl m-h6 py-[10px]  font-serif leading-normal`}>{snackbarmaindatatwo?.posttitle}</h1>
                    <h1 className={`l-h6`}>{snackbarmaindatatwo?.postsubtitle}</h1>
                    <br />
                    <figure className="">
                        {snackbarmaindatatwo && <BarMain barmainid={'postindextime'} barmainindex={0} barmaindata={snackbarmaindatathree} />}
                    </figure>
                    <br />
                    <hr />
                    <br />
                </section>
                <section className="w-full px-[20px] md:px-[60px] max-w-[900px] mx-auto md:h-fit  bg-white  ">
                    <CtaMain />
                </section>
            </figcaption>,
        },
        {
            snackbarmainindex: 1,
            snackbarmainrender: <figcaption className={`col-span-12 w-full md:sticky md:top-0 md:left-0 h-[30vh] flex flex-row  bg-white shadow`}>
                <section className="w-full px-[20px] md:px-[60px] max-w-[900px] mx-auto min-h-[20vh] md:h-fit">
                <br />
                <br />
                    <div className="flex flex-row justify-between">
                        <h1 className='uppercase tracking-[0.2em]  !m-h1' >{snackbarmaindata && snackbarmaindata}</h1>
                    </div>
                    <h1 className='text-xl md:text-4xl m-h6 py-[10px]  font-serif leading-normal' >{snackbarmaindatatwo?.posttitle}</h1>
                    <h1 className='text-base' >{snackbarmaindatatwo?.postsubtitle}</h1>
                    <br />
                    <figure className="">
                        {snackbarmaindatatwo && <BarMain barmainid={'postindextime'} barmainindex={0} barmaindata={snackbarmaindatathree} />}
                    </figure>
                    <br />
                    <hr />
                    <br />
                </section>
                <section className="w-full px-[20px] md:px-[60px] max-w-[900px] mx-auto md:h-fit  bg-white  ">
                    <CtaMain />
                </section>
            </figcaption>,
        },
    ]

    const snackbarmain = [
        {
            snackbarmainid: 'postfooter',
            snackbarmainref: postfooter,
        }
    ]

    useEffect(() => {
      if(snackbarmaindata && snackbarmaindatatwo && snackbarmaindatathree){
            const filter = snackbarmain.filter(data => data.snackbarmainid === snackbarmainid)
            const filtertwo = filter[0].snackbarmainref.filter(data => data.snackbarmainindex === snackbarmainindex)
            setsnackbarmainrender(filtertwo[0].snackbarmainrender)
      }
    }, [snackbarmainid, snackbarmainindex])

    window.onscroll = function (){
        if (((window.innerHeight + document.documentElement.scrollTop) >= window.innerHeight + (window.innerHeight * 1.1)) && window.screen.width > 1000) {
            setsnackbarmainindex(1)
        } 
        if (((window.innerHeight + document.documentElement.scrollTop) < window.innerHeight + (window.innerHeight * 0.8)) && window.screen.width > 1000) {
            setsnackbarmainindex(0)
        }
    }

  return (
    <div>
        <main className="">
            <section className="">
                {snackbarmainrender  && snackbarmainrender}
            </section>
        </main>
    </div>
  )
}

export default SnackbarMain