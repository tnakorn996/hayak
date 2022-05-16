import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiContrastDropLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { breadmain } from '../../content/contentmain'
import { ContextMain } from '../../context/contextmain'

function PortMain() {
    const {
        portmainstate,
        setbreadmainstate,

    } = useContext(ContextMain)
    const navigate = useNavigate()
    const [portmaindata, setportmaindata] = useState()

    const posttfoot = [
        {
            portmainidtwo: 'breadmain',
            portmainrender: breadmain,
        },

    ]

    const portmain = [
        {
            portmainid: 'posttfoot',
            portmainref: posttfoot
        },
    ]

    useEffect(() => {
      if(portmainstate && portmainstate.portmainidtwo === 'breadmain'){
          const filter = portmain.filter(data => data.portmainid === portmainstate.portmainid)
          const filtertwo = filter[0].portmainref.filter(data => data.portmainidtwo === portmainstate.portmainidtwo)
          const filterthree = filtertwo[0].portmainrender.filter(data => data.breadmainid === portmainstate.portmainidthree)
          setportmaindata(filterthree)
      }
      if(portmainstate && portmainstate.portmainidtwo === 'auditmain'){
        //   const filter = portmain.filter(data => data.portmainid === portmainstate.portmainid)
        //   const filtertwo = filter[0].portmainref.filter(data => data.portmainidtwo === portmainstate.portmainidtwo)
        //   const filterthree = filtertwo[0].portmainref.filter(data => data.portmainidtwo === portmainstate.portmainidtwo)
      }
    }, [portmainstate])

  return (
    <div>
        <main className="h-[80vh] p-[20px] md:px-[60px] flex justify-center items-center  bg-gray-100 text-black">
            {portmaindata?.map(data => (<>
            <article onClick={() => {
                        setbreadmainstate('')
                        navigate(data?.breadmainaction)
                    }} className="">
                <section className="flex-col mx-auto h-[30vh] flex md:flex-row justify-center text-center items-center gap-3">
                    <h1 className="flex flex-row items-center  m-h6 font-serif"><RiContrastDropLine className='' />{data?.breadmaintitle}</h1>
                    <h1 className="m-h4 text-gray-500">{data?.breadmainsubtitle}</h1>
                </section>
                <br />
                <section className="max-w-[500px] mx-auto h-[20vh] flex justify-center items-center">
                    <button className="m-h3  ">{data?.breadmainentitle} →</button>
                </section>
            </article>
            </>))}
        </main>
    </div>
  )
}

export default PortMain