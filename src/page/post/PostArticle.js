import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { RiContrastDropLine, RiEyeLine, RiShareFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import HorizonMain from '../../component/post/HorizonMain'
import { ContextMain } from '../../context/contextmain'


function PostArticle() {
  const {

      setappmainstate, appmainstate,

      postplaceproduct,

  } = useContext(ContextMain)
  const navigate = useNavigate()

  const [postarticlestate, setpostarticlestate] = useState()
  const [postarticlestatetwo, setpostarticlestatetwo] = useState()
  // const [previewmainpage, setpreviewmainpage] = useState(3)

  useEffect(() => {
    const filter = postplaceproduct?.filter(data => data.postid === appmainstate.appmainparam)
    const filtertwo = postplaceproduct?.filter(data => data.postid !== appmainstate.appmainparam)
    const ref = filter[0]
    setpostarticlestate(ref)
    setpostarticlestatetwo(filtertwo)
  }, [])
  
  return (
    <div>
        <main className="">
                <section className="">
                    <figure className="relative max-h-[40vh] md:max-h-[60vh] flex items-center  overflow-hidden">
                        <div className="absolute bottom-0 left-0 min-h-[35vh] md:min-h-[30vh] w-full  bg-gradient-to-b from-transparent to-white" />
                        <div className="absolute bottom-0 left-8 md:left-14 max-w-[70%] md:max-w-[60%] ">
                            <h1 className="md:text-3xl  m-h6 font-serif">{postarticlestate?.posttitle}</h1>
                        </div>
                        {postarticlestate?.priceid === 'pro' &&<RiContrastDropLine className="absolute top-8 left-8 text-4xl  m-h5 text-gray-300" />}
                        <img src={postarticlestate?.posthero} alt="" className="w-full" />
                    </figure>
                </section>
                <section className="p-[30px] md:p-[60px] flex flex-col md:grid md:grid-cols-12 gap-5">
                    <figure className="md:col-span-8">
                        <figure className="flex flex-row items-center justify-between">
                            <div className="flex flex-row gap-5 items-center">
                                <button onClick={() => {
                                    setappmainstate({
                                        appmainboolean: false,
                                    })
                                    navigate(`/${postarticlestate?.postid}`)
                                }} className="m-button m-h3">→ Read more</button>
                                {postarticlestate?.priceid === 'pro' &&<RiContrastDropLine className="m-h5 text-gray-700" />}
                                <h1 className="l-h5">{postarticlestate?.postblock?.length || 5} min</h1>
                                <div className="flex flex-row items-center gap-1">
                                <RiEyeLine className='m-h5' />
                                <h1 className="l-h5">{postarticlestate?.postcount}</h1>
                                </div>
                            </div>
                            <div className="">
                                <figure onClick={() => {
                                    setappmainstate({
                                        appmainid: 'sharesection',
                                        appmainidtwo: 'modalmain',
                                        appmainparam: postarticlestate?.postid,
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
                            <h1 className="l-h6">{postarticlestate?._createdAt?.slice(0, 10)}</h1>
                            <br />
                            <h1 className="l-h5">{postarticlestate?.postsubtitle}</h1>
                        </figcaption>
                    </figure>
                    <figcaption className="md:col-span-4 grid grid-cols-2">
                        <div className="col-span-2">
                                <HorizonMain onlick={() => {
                                    navigate(`/${postarticlestate?.placepostid?.postid}`)
                                }} key={postarticlestate?.placepostid?.postid} createdat={postarticlestate?.placepostid?._createdAt}  posticon={postarticlestate?.placepostid?.posticon} posthero={postarticlestate?.placepostid?.posthero} posttitle={postarticlestate?.placepostid?.posttitle} postsubtitle={postarticlestate?.placepostid?.postsubtitle} categoryid={postarticlestate?.placepostid?.categoryid} priceid={postarticlestate?.placepostid?.priceid} param={postarticlestate?.placepostid?.postid} />
                        </div>
                        <div className="">
                        <br /><br />
                        <h1 className="l-h2">Category: </h1>
                        <h1 className="l-h4 text-black first-letter:uppercase">{postarticlestate?.categoryid}</h1>
                        </div>
                        <div className="">
                        <br /><br />
                        <h1 className="l-h2">This article is: </h1>
                        <h1 className="l-h4 text-black first-letter:uppercase">--</h1>
                        </div>

                    </figcaption>
                </section>
                <section className="hidden md:block p-[30px] md:p-[60px]">
                    <h1 className="m-h6">More like this</h1>
                    <br />
                    <div className="flex flex-col gap-3">
                    {postarticlestatetwo?.slice(0, 3).map(data => (<>
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

        </main>
    </div>
  )
}

export default PostArticle