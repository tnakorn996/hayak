import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'

import { feedbackul, searchul } from '../../content/contentmantwo'
import { ContextMain } from '../../context/contextmain'

function LandMain() {
    const {
        landmainstate,

    } = useContext(ContextMain)
    const [landmainrender, setlandmainrender] = useState()

    const feedbacktbody = [
        {
            landmainindex: 0,
            landmainrender: feedbackul.filter(data => data.breadmainid === landmainstate.landmainidtwo),
        }
    ]

    const searchtbody = [
        {
            landmainindex: 0,
            landmainrender: searchul.filter(data => data.breadmainid === landmainstate.landmainidtwo),
        }
    ]

    const landmain = [
        {
            landmainid: 'feedbacktbody',
            landmainref: feedbacktbody,
        },
        {
            landmainid: 'searchtbody',
            landmainref: searchtbody,
        },
    ]
    
    useEffect(() => {
      if(landmainstate){
          const filter = landmain.filter(data => data.landmainid === landmainstate.landmainid)
          const filtertwo = filter[0].landmainref.filter(data => data.landmainindex === landmainstate.landmainindex)
            setlandmainrender(filtertwo[0].landmainrender)
      }
    }, [landmainstate])
    
  return (
    <div>
        <main className="absolute w-full">
            {landmainrender?.map(data => (<>
            <section className="relative h-[35vh] md:h-[40vh] flex justify-center items-center  overflow-hidden ">
                <img src={data?.breadmainimage} alt="" className="h-fit min-w-[100ch] md:w-full md:h-fit" />
                <div className="h-full w-screen absolute bottom-0 left-0  bg-black bg-opacity-30" />
                <h1 className="text-3xl px-[20px] md:px-[50px] absolute top-16 left-0  m-h6 font-serif first-letter:uppercase text-white">{data?.breadmaintitle}</h1>
            </section>
            {/* <br />
            <br />
            <hr /> */}
            </>))}
        </main>
    </div>
  )
}

export default LandMain