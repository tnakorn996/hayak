import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiArrowDownSLine, RiContrastDropLine, RiMore2Fill, RiShareLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

import { categorymain } from '../../content/contentmain'
import { useContext } from 'react'
import { ContextMain } from '../../context/contextmain'
import { useNavigate } from 'react-router-dom'
import LoadingMain from '../load/LoadingMain'

function VerticleMain({onlick, postid, createdat, posthero, posticon, posttitle, postsubtitle,  categoryid, priceid, param, placepostid}) {
  const {
    setappmainstate,
    settabmainstate,
    setopendeskmainstate,

  } = useContext(ContextMain)
  const navigate = useNavigate()
  const [verticledivstate, setverticledivstate] = useState()
  
  useEffect(() => {
    if(categoryid){
        const filter = categorymain.filter(data => data.categorymainid === categoryid)
        setverticledivstate({
          verticledivtitle: filter[0]?.categorymaintitle,
        })
    }
  }, [categoryid])
  
  return (
    <div>
        <main className="">
          <article className="relative flex flex-col justify-center">
                <figure 

                    // onMouseEnter={() => {
                    //   setTimeout(
                    //   setappmainstate({
                    //     appmainid: 'postarticle',
                    //     appmainidtwo: 'previewmain',
                    //     appmainpage: 0,
                    //     appmainparam: param,
                    //     appmainboolean: true,
                    //   }), 100000);
                    // }}
                
                    onClick={() => {
                      setappmainstate({
                        appmainid: 'postarticle',
                        appmainidtwo: 'previewmain',
                        appmainpage: 0,
                        appmainparam: param,
                        appmainboolean: true,
                      })
                      // window.history.replaceState(null, "" , postid)
                    }} className="relative row-span-3 overflow-hidden h-[20vh] md:h-[60vh] flex justify-center items-center   border border-black">
                    {priceid === 'pro' && (<>
                    <figure className="z-20 absolute top-2 left-2">
                      <RiContrastDropLine className='m-h6 text-white  !opacity-100' />
                    </figure>
                    </>)}
                    <div className="absolute">
                    <LoadingMain />
                    </div>
                    {/* <div className="absolute top-0 left-0 z-10 w-full h-full  bg-black opacity-10" /> */}
                    <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5}} loading='lazy' src={posthero} alt="" className="md:max-w-[100ch] z-10 md:h-full hover:scale-110 duration-1000" />
                </figure>
                <figure className="relative flex flex-row py-[7px] gap-2 justify-end items-center">
                    {placepostid && (<>
                    <div className="z-10 absolute -top-11 left-3 w-[30px] h-[30px] flex items-center  bg-white rounded-full overflow-hidden border border-black">
                        <img src={placepostid?.posticon} alt="" className="" />
                    </div>
                    </>)}
                    {posticon && (<>
                    <div className="z-10 absolute -top-20 left-3 w-[100px] h-[100px] flex items-center  bg-white rounded-full overflow-hidden border border-black">
                        <img src={posticon} alt="" className="" />
                    </div>
                    </>)}
                    <figure onClick={() => {
                        settabmainstate({
                          tabmainid: 'postoption',
                          tabmainparam: param,
                          tabmainimage: posthero,
                          tabmaintitle: posttitle,
                        })
                        setappmainstate({
                          appmainid: 'postoption',
                          appmainidtwo: 'opendeskmain',
                          appmainboolean: true,
                      })
                    }} className="">
                      <RiMore2Fill className='my-[7px]  text-md l-m3' />
                    </figure>
                </figure>
                <figcaption onClick={onlick} className="row-span-3 h-[10vh]">
                    {/* <div className="flex flex-row gap-2 items-center">
                      <h1 className="text-[9px]  l-h1 truncate">{createdat?.slice(0, 10)}</h1>
                      <h1 className="l-h1 truncate">|</h1>
                      <h1 className="text-[9px]  l-h1 truncate">5 min</h1>
                      <h1 className="l-h1 truncate">|</h1>
                      {verticledivstate && <h1 onClick={() => {
                        navigate(`/catagory/${verticledivstate?.verticledivtitle || null}`)
                      }} className="px-[7px]  text-gray-500 uppercase text-[8px] bg-gray-200 rounded-full">{verticledivstate?.verticledivtitle || null}</h1>}
                    </div> */}
                    <button className="m-h3 uppercase text-black">{posttitle}</button>
                    {/* <h1 className="l-h2">{postsubtitle}</h1> */}
                    {/* {ll(data?.categoryid)} */}
                </figcaption>
            </article>
        </main>
    </div>
  )
}

export default VerticleMain