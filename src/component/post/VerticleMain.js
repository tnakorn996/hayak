import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiArrowDownSLine, RiContrastDropLine, RiMore2Fill, RiShareLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

import { categorymain } from '../../content/contentmain'
import LoadingMain from '../load/LoadingMain'
import { useContext } from 'react'
import { ContextMain } from '../../context/contextmain'
import { useNavigate } from 'react-router-dom'

function VerticleMain({onlick, createdat, posthero, posticon, posttitle, postsubtitle,  categoryid, priceid, param, placepostid}) {
  const {
    setappmainstate,

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
                <figure onClick={() => {
                      setappmainstate({
                        appmainid: 'postarticle',
                        appmainidtwo: 'previewmain',
                        appmainparam: param,
                        appmainboolean: true,
                      })
                    }} className="relative row-span-3 overflow-hidden max-h-[120px] flex items-center">
                    {priceid === 'pro' && (<>
                    <figure className="z-10 absolute top-2 left-2">
                      <RiContrastDropLine className='m-h6 text-gray-300  !opacity-100' />
                    </figure>
                    </>)}
                    <img loading='lazy' src={posthero} alt="" className="w-full h-full  hover:scale-110 duration-1000" />
                </figure>
                <figure className="relative flex flex-row py-[7px] gap-2 justify-end items-center">
                    {placepostid && (<>
                    <div className="absolute -top-11 left-3 w-[30px] h-[30px] flex items-center  bg-white rounded-full overflow-hidden border-2 border-white shadow">
                        <img src={placepostid?.posticon} alt="" className="" />
                    </div>
                    </>)}
                    {posticon && (<>
                    <div className="absolute -top-20 left-3 w-[100px] h-[100px] flex items-center  bg-white rounded-full overflow-hidden border-4 border-white shadow">
                        <img src={posticon} alt="" className="" />
                    </div>
                    </>)}
                    <figure onClick={() => {
                        setappmainstate({
                        appmainid: 'sharesection',
                        appmainidtwo: 'modalmain',
                        appmainparam: param,
                        appmainboolean: true,
                      })
                    }} className="">
                      <RiMore2Fill className='my-[7px]  text-md l-m3' />
                    </figure>
                </figure>
                <figcaption onClick={onlick} className="row-span-3 h-[100px]">
                    {/* <div className="flex flex-row gap-2 items-center">
                      <h1 className="text-[9px]  l-h1 truncate">{createdat?.slice(0, 10)}</h1>
                      <h1 className="l-h1 truncate">|</h1>
                      <h1 className="text-[9px]  l-h1 truncate">5 min</h1>
                      <h1 className="l-h1 truncate">|</h1>
                      {verticledivstate && <h1 onClick={() => {
                        navigate(`/catagory/${verticledivstate?.verticledivtitle || null}`)
                      }} className="px-[7px]  text-gray-500 uppercase text-[8px] bg-gray-200 rounded-full">{verticledivstate?.verticledivtitle || null}</h1>}
                    </div> */}
                    <h1 className="l-h2 text-gray-900">{posttitle}</h1>
                    {/* <h1 className="l-h2">{postsubtitle}</h1> */}
                    {/* {ll(data?.categoryid)} */}
                </figcaption>
            </article>
        </main>
    </div>
  )
}

export default VerticleMain