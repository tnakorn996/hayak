import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiContrastDropLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { breadmain, categoryui } from '../../content/contentmantwo'
import { ContextMain } from '../../context/contextmain'

function PortMain() {
    const {
        portmainstate,
        setbreadmainstate,

    } = useContext(ContextMain)
    const navigate = useNavigate()
    const [portmaindata, setportmaindata] = useState()
    const [portmaindatatwo, setportmaindatatwo] = useState()

    const posttfoot = [
        {
            portmainidtwo: 'breadmain',
            portmainrender: breadmain[0].breadmainref.filter(data => data.breadmainid === portmainstate?.portmainidthree),
            portmainrendertwo: categoryui.filter(data => data.breadmainid === portmainstate?.portmainidthree)
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
          setportmaindata(filtertwo[0].portmainrender)
          setportmaindatatwo(filtertwo[0].portmainrendertwo)
      }
    }, [portmainstate])

  return (
    <div>
        <main className="h-[90vh] md:h-[70vh] p-[20px] md:px-[60px] flex justify-center items-center  bg-gray-100 text-black">
            {portmaindata?.map(data => (<>
            <figure className="">
                <section className="flex-col mx-auto flex justify-center text-center items-center gap-3">
                    <h1 className="flex flex-row items-center  m-h6 font-serif"><RiContrastDropLine className='' />{data?.breadmaintitle}</h1>
                    <br />
                    <h1 className="max-w-[1100px] m-h4 text-gray-500">{data?.breadmaindetail}</h1>
                </section>
                <br /><br />
                <section className="mx-auto max-w-[700px] flex flex-row justify-center flex-wrap gap-3">
                    {portmaindatatwo?.map(dat => (<>
                    <button onClick={() => {
                        setbreadmainstate({
                            breadmainid: dat?.breadmainid,
                            breadmainidtwo: dat?.crummainid,
                        })
                        navigate(data?.breadmainaction)
                    }} className="l-button !text-xs border-2 border-black">
                        {dat?.crummaintitle}
                    </button>
                    </>))}
                </section>
                <section onClick={() => {
                        setbreadmainstate('')
                        navigate(data?.breadmainaction)
                    }} className="max-w-[500px] mx-auto h-[15vh] flex justify-center items-center">
                    <button className="m-h3  ">{data?.breadmainentitle} →</button>
                </section>
            </figure>
            </>))}
        </main>
    </div>
  )
}

export default PortMain