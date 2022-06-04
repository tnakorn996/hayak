import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiArrowDownSLine, RiContrastDropLine, RiMore2Fill, RiShareLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

import { categorymain } from '../../content/contentmain'
import { useContext } from 'react'
import { ContextMain } from '../../context/contextmain'
import { useLocation, useNavigate } from 'react-router-dom'
import LoadingMain from '../load/LoadingMain'
import { genreui } from '../../content/contentmantwo'

function VerticleMain({onlick, type, postid, createdat, posthero, posticon, posttitle, postsubtitle,  categoryid, genreid, priceid, param, placepostid}) {
  const {
    setappmainstate,
    settabmainstate,
    setopendeskmainstate,
    setsharemainstate,
    setbreadmainstate,
    setgenreindexstate,

  } = useContext(ContextMain)
  const navigate = useNavigate()
  // const location = useLocation()
  const [verticledivstate, setverticledivstate] = useState()
  const [verticlemainrendertwo, setverticlemainrendertwo] = useState()
  
  useEffect(() => {
    if(categoryid){
        const filter = categorymain.filter(data => data.categorymainid === categoryid)
        setverticledivstate({
          verticledivtitle: filter[0]?.categorymaintitle,
        })
    }
  }, [categoryid])

  useEffect(() => {
    if(genreid){
        const filter = genreui.filter(data => data.crummainid === genreid)
        setverticlemainrendertwo(filter[0]?.crummaintitle)
    }
  }, [genreid])

  return (
    <div>
        {/* <main className="w-[250px] md:w-[300px] snap-center"> */}
        <main className="">
          <article className="relative flex flex-col justify-center">
                <figure 
                    onClick={() => {
                      // window.history.replaceState(null, "" , postid)
                      setappmainstate({
                        appmainid: 'postarticle',
                        appmainidtwo: 'previewmain',
                        appmainpage: 0,
                        appmainparam: param,
                        appmainboolean: true,
                      })
                    }} className="relative row-span-3 overflow-hidden h-[50vh] md:h-[60vh] flex justify-center items-center">
                    <div className="absolute">
                    <LoadingMain />
                    </div>
                    <div className="z-30 absolute top-0 left-0">
                      {verticlemainrendertwo && verticlemainrendertwo && (<>
                      <button onClick={() => {
                        setbreadmainstate('')
                        setgenreindexstate({
                          genreindexid: genreid,
                        })
                        navigate(`/category/${type}`)
                      }} className="text-xs  uppercase l-button opacity-100">{verticlemainrendertwo}</button>
                      </>)}
                    </div>
                    <div className="z-20 w-full h-full absolute top-0 left-0  bg-black opacity-5" />
                    <motion.img loading='lazy' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5}} src={posthero} alt="" className="max-w-[100ch] z-10 h-full hover:scale-110 duration-1000" />
                </figure>
                <figure className="relative flex flex-row py-[7px] gap-2 justify-end items-center">
                    {placepostid && (<>
                    <div className="z-20 absolute -top-11 left-3 w-[30px] h-[30px] flex items-center  bg-white rounded-full overflow-hidden shadow">
                        <img src={placepostid?.posticon} alt="" className="" />
                    </div>
                    </>)}
                    {posticon && (<>
                    <div className="z-20 absolute -top-20 left-3 w-[100px] h-[100px] flex items-center  bg-white rounded-full overflow-hidden shadow">
                        <img src={posticon} alt="" className="" />
                    </div>
                    </>)}
                    <figure onClick={() => {
                        settabmainstate({
                          tabmainid: 'postoption',
                          tabmainparam: param,
                          // tabmainlocation: location.pathname,
                          tabmainimage: posthero,
                          tabmaintitle: posttitle,
                        })
                        setappmainstate({
                          appmainid: 'postoption',
                          appmainidtwo: 'opendeskmain',
                          appmainparam: param,
                          appmainboolean: true,
                        })
                        setsharemainstate({
                          sharemainparam: param,
                        })
                    }} className="">
                      <RiMore2Fill className='my-[7px]  text-md l-m3' />
                    </figure>
                </figure>
                <figcaption className="row-span-3 h-[15vh]">
                    {/* <div className="flex flex-row gap-2 items-center">
                      <h1 className="text-[9px]  l-h1 truncate">{createdat?.slice(0, 10)}</h1>
                      <h1 className="l-h1 truncate">|</h1>
                      <h1 className="text-[9px]  l-h1 truncate">5 min</h1>
                      <h1 className="l-h1 truncate">|</h1>
                      {verticledivstate && <h1 onClick={() => {
                        navigate(`/catagory/${verticledivstate?.verticledivtitle || null}`)
                      }} className="px-[7px]  text-gray-500 uppercase text-[8px] bg-gray-200 rounded-full">{verticledivstate?.verticledivtitle || null}</h1>}
                    </div> */}
                    <a href={`https://toifood.co.nz/${postid}`} className="m-h2 uppercase font-serif font-normal  leading-loose text-black">{posttitle}</a>
                    <h1 className="l-h2">{postsubtitle}</h1>
                    {/* {ll(data?.categoryid)} */}
                </figcaption>
            </article>
        </main>
    </div>
  )
}

export default VerticleMain