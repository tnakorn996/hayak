import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RiCloseCircleFill, RiCloseFill, RiContrastDropLine, RiEyeFill, RiEyeLine, RiMore2Fill, RiShareFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { ContextMain } from '../../context/contextmain'
import HorizonMain from '../post/HorizonMain'

function PreviewMain() {
    const {
        appmainstate, setappmainstate,

        postupdatedat,

    } = useContext(ContextMain)
    const navigate = useNavigate()

    const [previewmainrender, setpreviewmainrender] = useState()
    const [previewmainpage, setpreviewmainpage] = useState(3)

    const postarticle = [
        {
            previewmainindex: 0,
            previewmainrender: () => {
                const filter = postupdatedat?.filter(data => data.postid === appmainstate.appmainparam)
                const filtertwo = postupdatedat?.filter(data => data.postid !== appmainstate.appmainparam)
                const ref = filter[0]
                return (<>
                <section className="">
                    <figure className="relative max-h-[50vh] flex items-center  overflow-hidden">
                        <div className="absolute bottom-0 left-0 h-[20vh] w-full  bg-gradient-to-b from-transparent to-white" />
                        <div className="absolute bottom-0 left-8 max-w-[40%] ">
                            <h1 className="text-3xl  m-h6 font-serif truncate">{ref?.posttitle}lorem100dsfkjafhrghrkughsuhgrsjjjjjjj </h1>
                        </div>
                        {ref?.priceid === 'pro' &&<RiContrastDropLine className="absolute top-8 left-8 text-4xl  m-h5 text-orange-600" />}
                        <img src={ref?.posthero} alt="" className="w-full" />
                    </figure>
                </section>
                <section className="p-[30px] flex flex-col md:grid md:grid-cols-12 md:gap-20">
                    <figure className="md:col-span-7">
                        <figure className="flex flex-row items-center justify-between">
                            <div className="flex flex-row gap-3 items-center">
                                <button onClick={() => {
                                    setappmainstate({
                                        appmainboolean: false,
                                    })
                                    navigate(`/${ref?.postid}`)
                                }} className="m-button">→ Read</button>
                                {ref?.priceid === 'pro' &&<RiContrastDropLine className="m-h5 text-orange-600" />}
                                <h1 className="l-h5">{ref?.postblock?.length} min</h1>
                                <div className="flex flex-row items-center gap-1">
                                <RiEyeLine className='m-h5' />
                                <h1 className="l-h5">{ref?.postcount}</h1>
                                </div>
                            </div>
                            <div className="">
                                <figure onClick={() => {
                                    setappmainstate({
                                        appmainid: 'sharesection',
                                        appmainidtwo: 'modalmain',
                                        appmainparam: ref?.postid,
                                        appmainboolean: true,
                                    })
                                }} className="">
                                    <article className="">
                                    <RiShareFill className='m-h5' />
                                    </article>
                                </figure>
                            </div>
                        </figure>
                        <figcaption className="">
                            <br />
                            <h1 className="l-h6">{ref?._createdAt?.slice(0, 10)}</h1>
                            <br />
                            <h1 className="l-h5">{ref?.postsubtitle}</h1>
                            <br /><br />
                        </figcaption>
                    </figure>
                    <figcaption className="md:col-span-5 flex flex-col md:grid md:grid-cols-2">
                        <div className="">
                        <br />
                        <h1 className="l-h2">Category: </h1>
                        <h1 className="l-h4 text-black first-letter:uppercase">{ref?.categoryid}</h1>
                        </div>
                        <div className="">
                        <br />
                        <h1 className="l-h2">This article is: </h1>
                        <h1 className="l-h4 text-black first-letter:uppercase">--</h1>
                        </div>
                        <br /><br />
                    </figcaption>
                </section>
                <section className="p-[30px]">
                    <h1 className="m-h6">More like this</h1>
                    <br />
                    <div className="flex flex-col gap-3">
                    {filtertwo?.slice(0, previewmainpage).map(data => (<>
                        <HorizonMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle}  createdat={data?._createdAt} param={data?.postid} />
                    </>))}
                    </div>
                    {/* <br />
                    <hr />
                    <br />
                    <article className="text-center">
                    <h1 onClick={() => setpreviewmainpage(previewmainpage + 3)} className="text-3xl">↓</h1>
                    </article> */}
                </section>
                </>)
            },
        }
    ]

    const previewmain = [
        {
            previewmainid: 'postarticle',
            previewmaindata: postarticle, 
        },
    ]

    useEffect(() => {
        if(appmainstate && appmainstate.appmainidtwo === 'previewmain'){
        const filter = previewmain.filter(data => data.previewmainid === appmainstate.appmainid)
        const filtertwo = filter[0].previewmaindata.filter(data => data.previewmainindex === 0)
        setpreviewmainrender(filtertwo[0].previewmainrender)
      }
    }, [appmainstate])

  return (
    <div>
        <br />
        <main className="relative max-w-[900px] mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">
            <RiCloseFill onClick={() => {
                setappmainstate({
                    appmainboolean: false
                })
            }} className="z-10 absolute top-3 right-3 text-4xl  text-white bg-black rounded-full" />
            {previewmainrender && previewmainrender}
        </main>
        <br />
    </div>
  )
}

export default PreviewMain