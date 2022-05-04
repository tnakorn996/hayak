import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiContrastDropLine, RiFileCopyLine } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'

function ModalMain() {
    const {
        appmainstate, setappmainstate,

    } = useContext(ContextMain)
    const [modalmainstate, setmodalmainstate] = useState()
    const [modalmainindex, setmodalmainindex] = useState(0)
    const [modalmaintitle, setmodalmaintitle] = useState()
    const [modalmainrender, setmodalmainrender] = useState()
    const [modalmainaction, setmodalmainaction] = useState()
    const [modalmainentitle, setmodalmainentitle] = useState()

    const sharesection = [
        {
            modalmainindex: 0,
            modalmaintitle: 'Share Post',
            modalmainrender: () => {
                return (<>
                <section className="flex justify-center ">
                    <figure className="h-[250px] w-[250px] flex justify-center items-center  m-article">
                        <RiContrastDropLine className='absolute text-3xl w-[50px] h-[50px]  bg-white rounded-full' />
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://hayak.vercel.app/${appmainstate?.appmainparam}`} alt="" />
                    </figure>
                </section>
                 <br />
                <section className="">
                    <article className="grid grid-cols-12  m-article">
                        <figcaption className="col-span-10">
                            <h1 className="m-h3">Blog Address</h1>
                            <h1 className="l-h2">https://hayak.vercel.app/{appmainstate?.appmainparam}</h1>
                        </figcaption>
                        <figure className="col-span-2 flex justify-center items-center  l-article">
                            <RiFileCopyLine className='m-h3' />
                        </figure>
                    </article>
                </section>
                </>)
            },
            modalmainaction: () => {
                navigator.clipboard.writeText(`https://hayak.vercel.app/${appmainstate?.appmainparam}`) 
            },
            modalmainentitle: 'Copy URL'
        },

    ]

    const modalmain = [
        {
            modalmainid: 'sharesection',
            modalmaindata: sharesection,
        },
    ]

    useEffect(() => {
        if(appmainstate && appmainstate.appmainidtwo === 'modalmain'){
            const filter = modalmain.filter(data => data.modalmainid === appmainstate.appmainid)
            const filtertwo = filter[0].modalmaindata.filter(data => data.modalmainindex === modalmainindex)
            setmodalmaintitle(filtertwo[0].modalmaintitle)
            setmodalmainrender(filtertwo[0].modalmainrender)
            setmodalmainaction(filtertwo[0].modalmainaction)
            setmodalmainentitle(filtertwo[0].modalmainentitle)
        }
      
    }, [appmainstate])

  return (
    <div>
        <br />
        <main className="w-screen md:max-w-[500px] bg-white rounded-3xl shadow-2xl">
            <section className="p-[20px] text-center">
                <h1 className="m-h4">{modalmaintitle}</h1>
            </section>
            <hr />
            <section className="p-[20px]">
                <h1 className="">{modalmainrender}</h1>
            </section>
            <hr />
            <section className="p-[20px] grid grid-cols-2">
                <button onClick={() => {
                    setappmainstate({
                        appmainboolean: false,
                    })
                }} className="l-button">Cancel</button>
                <button onClick={() => {
                    modalmainaction()
                }} className="m-button">{modalmainentitle}</button>
            </section>
        </main>
        <br />
    </div>
  )
}

export default ModalMain