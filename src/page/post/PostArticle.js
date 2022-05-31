import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { RiContrastDropLine, RiEyeLine, RiShareFill, RiBookOpenLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import LoadingMain from '../../component/load/LoadingMain'

import HorizonMain from '../../component/post/HorizonMain'
import { categoryui, genreui } from '../../content/contentmantwo'
import { ContextMain } from '../../context/contextmain'


function PostArticle() {
  const {

      setappmainstate, appmainstate,
      genreindexstate,

      postplaceproduct,

  } = useContext(ContextMain)
  const navigate = useNavigate()

  const [postarticlestate, setpostarticlestate] = useState()
  const [postarticlestatetwo, setpostarticlestatetwo] = useState()
  const [postarticlerenderthree, setpostarticlerenderthree] = useState()
  const [postarticlerenderfour, setpostarticlerenderfour] = useState()

  useEffect(() => {
    const filter = postplaceproduct?.filter(data => data.postid === appmainstate.appmainparam)
    const filtertwo = postplaceproduct?.filter(data => data.postid !== appmainstate.appmainparam)
    setpostarticlestate(filter[0])
    setpostarticlestatetwo(filtertwo)
}, [])

useEffect(() => {
    if(postarticlestate && genreui){
        const filter = categoryui.filter(data => data.crummainid === postarticlestate.categoryid)
        const filtertwo = genreui.filter(data => data.crummainid === postarticlestate.genreid)
        setpostarticlerenderthree(filter[0]?.crummaintitle)
        setpostarticlerenderfour(filtertwo[0]?.crummaintitle)
    }
  }, [postarticlestate])
  
  return (
    <div>
        <main className="h-screen md:h-full overflow-y-scroll md:overflow-auto">
                <section className="z-0 sticky top-0 left-0">
                    <figure className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">

                        <div className="absolute">
                            <LoadingMain />
                        </div>
                        <figure className="h-full w-full flex justify-center items-center">
                        <img src={postarticlestate?.posthero} alt="" className=" z-0 max-w-[100ch] h-full  md:h-fit md:w-full" />
                        </figure>
                    </figure>
                </section>
                <section className="">
                    <figure className="w-full relative">
                        <div className="z-10 absolute bottom-0 left-0 min-h-[25vh] md:min-h-[40vh] w-full  bg-gradient-to-b from-transparent to-white" />
                        <div className="z-10 absolute bottom-0 left-8 md:left-14 max-w-[70%] md:max-w-[60%] ">
                            {postarticlerenderfour && <h1 className=" flex flex-row items-center gap-1  tracking-[0.2em] md:m-h3 uppercase"><RiContrastDropLine className='md:m-h3' /> {postarticlerenderfour}</h1>}
                            <h1 className="md:text-5xl  m-h6 font-serif">{postarticlestate?.posttitle}</h1>
                        </div>
                    </figure>
                </section>
                <section className="sticky z-10 p-[30px] md:p-[60px] flex flex-col md:grid md:grid-cols-12 gap-5  bg-white">
                    <figure className="md:col-span-7">
                        <figure className="grid grid-cols-12 items-center  ">
                            <div className="col-span-12 grid grid-cols-12 gap-5">
                                <button onClick={() => {
                                    setappmainstate({
                                        appmainboolean: false,
                                    })
                                    navigate(`/${postarticlestate?.postid}`)
                                }} className="col-span-12 md:col-span-5 m-button m-h3">→ Read more</button>
                                <figure className="col-span-12 md:col-span-7 flex flex-row gap-3 items-center justify-between ">
                                    <div className="flex flex-row gap-4 items-center">
                                        <h1 className="block md:hidden l-h5">{postarticlestate?._createdAt?.slice(0, 10)}</h1>
                                        <div className="flex flex-row items-center gap-1">
                                        <RiBookOpenLine className='m-h5' />
                                        <h1 className="l-h5">{Math.floor(postarticlestate?.postblock?.length * 0.2) || 1} min</h1>
                                        </div>
                                        <div className="flex flex-row items-center gap-1">
                                        <RiEyeLine className='m-h5' />
                                        <h1 className="l-h5">{postarticlestate?.postcount || 0}</h1>
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center gap-3 justify-end ">
                                        <figure onClick={() => {
                                            setappmainstate({
                                                appmainid: 'sharesection',
                                                appmainidtwo: 'modalmain',
                                                appmainidthree: 0,
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
                            </div>
                            
                        </figure>
                        <figcaption className="">
                            <br />
                            <h1 className="hidden md:flex  l-h6">{postarticlestate?._createdAt?.slice(0, 10)}</h1>
                            <br />
                            <h1 className="l-h5">{postarticlestate?.postsubtitle}</h1>
                        </figcaption>
                    </figure>
                    <figcaption className="md:col-span-5 grid grid-cols-2">
                        <div className="col-span-2">
                                <HorizonMain onlick={() => {
                                    navigate(`/${postarticlestate?.placepostid?.postid}`)
                                }} key={postarticlestate?.placepostid?.postid} createdat={postarticlestate?.placepostid?._createdAt}  posticon={postarticlestate?.placepostid?.posticon} posthero={postarticlestate?.placepostid?.posthero} posttitle={postarticlestate?.placepostid?.posttitle} postsubtitle={postarticlestate?.placepostid?.postsubtitle} categoryid={postarticlestate?.placepostid?.categoryid} priceid={postarticlestate?.placepostid?.priceid} param={postarticlestate?.placepostid?.postid} />
                        </div>
                        <div className="">
                        <br /><br />
                        <h1 className="l-h2">Category: </h1>
                        <h1 className="l-h4 text-black first-letter:uppercase">{postarticlerenderthree ? postarticlerenderthree : '--'}</h1>
                        </div>
                        <div className="">
                        <br /><br />
                        <h1 className="l-h2">This article is: </h1>
                        <h1 className="l-h4 text-black first-letter:uppercase">{postarticlerenderfour ? postarticlerenderfour : '--'}</h1>
                        </div>

                    </figcaption>
                </section>
                <section className="sticky z-10 p-[30px] md:p-[60px] bg-white">
                    <h1 className="m-h6 font-serif">More like this</h1>
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