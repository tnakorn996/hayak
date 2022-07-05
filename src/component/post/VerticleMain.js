import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiArrowDownSLine, RiContrastDropLine, RiMore2Fill, RiShareLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

import { categorymain } from '../../content/contentmain'
import { useContext } from 'react'
import { ContextMain } from '../../context/contextmain'
import { useLocation, useNavigate } from 'react-router-dom'
import { genreui } from '../../content/contentmantwo'
import BarMain from '../bar/BarMain'
import { urlFor } from '../../lib/sanity'
import PtaMain from '../pta/PtaMain'
import ScrollMain from '../scroll/ScrollMain'
import LoadMain from '../../layout/load/LoadMain'

function VerticleMain({
  onlick, 
  data,
  type, 
  postid, 
  createdat, 
  posthero,
  postherotwo,
  posticon, 
  posttitle, 
  postsubtitle,  
  categoryid, 
  genreid, 
  priceid, 
  param, 
  placepostid

}) {
  const {
    setappmainstate,
    // settabmainstate,
    // setopendeskmainstate,
    // setsharemainstate,
    setbreadmainstate,
    setgenreindexstate,

  } = useContext(ContextMain)
  const navigate = useNavigate()
  // const location = useLocation()
  const [verticledivstate, setverticledivstate] = useState()
  const [verticlemainrendertwo, setverticlemainrendertwo] = useState()
  const [verticlemainimage, setverticlemainimage] = useState(posthero)

  const postindexthree = [
        // {
        //     postindexthreeid: 'readdi',
        //     postindexthreerender: data
        // },
        // {
        //     postindexthreeid: 'viewdi',
        //     postindexthreerender: data
        // },
        // {
        //     postindexthreeid: 'commentdi',
        //     postindexthreerender: data
        // },
        // {
        //     postindexthreeid: 'timedi',
        //     postindexthreerender: data,
        // },
        {
            postindexthreeid: 'moredi',
            postindexthreerender: data,
        },
  ]

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
        <main className="">
          <article className="relative flex flex-col justify-center">
                
                <figure 

                    // onMouseEnter={() => {
                    //   setverticlemainimage(postherotwo)
                    // }}

                    // onMouseLeave={() => {
                    //   setverticlemainimage(posthero)
                    // }}

                    className="relative row-span-3 overflow-hidden h-[50vh] md:h-[60vh] flex justify-center items-center">
                    <div className="absolute">
                    <LoadMain />
                    </div>
                    <div className="z-30 absolute top-3 right-3">
                    <PtaMain ptamainstatic={{ptamainid: 'postiframe', ptamaindata: data}} ptamainstyle={'!text-lg'} />
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

                    {/* <div className="z-20 w-full h-full absolute top-0 left-0  bg-black opacity-5" /> */}

                    <motion.img onClick={() => {
                      setappmainstate({
                        appmainid: 'postarticle',
                        appmainidtwo: 'previewmain',
                        appmainpage: 0,
                        appmainparam: param,
                        appmainboolean: true,
                      })
                    }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} loading='lazy' src={urlFor(verticlemainimage)} alt="" className="max-h-full z-10 max-w-[150ch] duration-1000 hover:scale-110" />

                </figure>
                <figure className="h-[5vh] relative flex flex-row py-[7px] gap-2 justify-start items-center">
                    <div className="w-full">
                      <BarMain barmainid='postindextime' barmainindex={2} barmaindata={postindexthree} />
                    </div>
                </figure>
                <figcaption className="max-w-[90%] row-span-3 h-[20vh]">
                    {/* <div className="flex flex-row gap-2 items-center">
                      <h1 className="text-[9px]  l-h1 truncate">{createdat?.slice(0, 10)}</h1>
                      <h1 className="l-h1 truncate">|</h1>
                      <h1 className="text-[9px]  l-h1 truncate">5 min</h1>
                      <h1 className="l-h1 truncate">|</h1>
                      {verticledivstate && <h1 onClick={() => {
                        navigate(`/catagory/${verticledivstate?.verticledivtitle || null}`)
                      }} className="px-[7px]  text-gray-500 uppercase text-[8px] bg-gray-200 rounded-full">{verticledivstate?.verticledivtitle || null}</h1>}
                    </div> */}
                    <a href={`/${postid}`} className="m-h3 uppercase font-serif font-normal  leading-loose text-black">{posttitle}</a>
                    <h1 className="l-h2">{postsubtitle}</h1>
                    {/* {ll(data?.categoryid)} */}
                </figcaption>
            </article>
        </main>
    </div>
  )
}

export default VerticleMain