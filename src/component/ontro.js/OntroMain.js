import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { ContextMain } from '../../context/contextmain'

function OntroMain() {
    const {
        setappmainstate,
        setplanformstate,
        ontromainstate,

    } = useContext(ContextMain)

    const [ontromaintitle, setontromaintitle] = useState()
    const [ontromainimage, setontromainimage] = useState()
    const [ontromainref, setontromainref] = useState()

    const plansummary = [
                {
                    ontromainindex: 0,
                    ontromainid: 'once',
                    ontromaintitle: 'Would you like to donate on a monthly basis, or a one-off?',
                    ontromainimage: 'https://everybodyeats.nz/assets/elements/coins-white.png',
                    ontromainheader: 'One-off donation',
                    ontromainsubheader: `Big or small, your donations help us to feed homeless, elderly, single parents and other struggling kiwis that can't afford to contribute towards their meal with us.`,
                    ontromainredirect: 'planmain',
                },
                {
                    ontromainindex: 1,
                    ontromainid: 'month',
                    ontromaintitle: 'Would you like to donate on a monthly basis, or a one-off?',
                    ontromainimage: 'https://everybodyeats.nz/assets/elements/coins-white.png',
                    ontromainheader: 'Monthly donation',
                    ontromainsubheader: 'A nutritious, freshly prepared meal, served with love and shared amongst friends has the ability to turn someones day around. An ongoing donation is your commitment to help us put an end to food poverty, food waste and social isolation in New Zealand.',
                    ontromainredirect: 'planmain',
                },
    ]
    
    const ontromain = [
        {
            ontromainid: 'plansummary',

            ontromainref: plansummary
        },
    ]

    useEffect(() => {
      if(ontromainstate){
          const filter = ontromain.filter(data => data.ontromainid === ontromainstate)
          filter.forEach(data => {
              setontromaintitle(data.ontromainref[0].ontromaintitle)
              setontromainimage(data.ontromainref[0].ontromainimage)
              setontromainref(data.ontromainref)
          })

      }
    }, [])

  return (
    <div>
        <main className="w-screen min-h-screen bg-orange-700 text-white">
            <section className="p-[30px] max-w-[500px] mx-auto flex flex-col md:flex-row justify-center">
                <figcaption className="">
                <h1 className="m-h6 text-4xl font-serif">{ontromaintitle}</h1>
                <br />
                </figcaption>
                <figure className="">
                    <img src={ontromainimage} alt="" className='max-h-[200px]' />
                </figure>
            </section>
            <section className="p-[30px] max-w-[500px] mx-auto flex flex-col gap-10">
                {ontromainref?.map(data => (<>
                <article onClick={() => {
                        setplanformstate(data?.ontromainid)
                        setappmainstate(data?.ontromainredirect)
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

        </main>
    </div>
  )
}

export default OntroMain