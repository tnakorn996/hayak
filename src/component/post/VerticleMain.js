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

function VerticleMain({onlick, createdat, posthero, posttitle, postsubtitle,  categoryid, priceid, param}) {
  const {
    setappmainstate,

  } = useContext(ContextMain)
  const navigate = useNavigate()

  const [verticledivstate, setverticledivstate] = useState()
  
  useEffect(() => {
    if(categoryid){
        const filter = categorymain.filter(data => data.categorymainid === categoryid)
        setverticledivstate({
          verticledivtitle: filter[0].categorymaintitle,
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
                    <img src={posthero} alt="" className="w-full h-full  hover:scale-110 duration-1000" />
                </figure>
                <figure className="flex flex-row py-[7px] gap-2 justify-end items-center">
                    {/* <figure onClick={() => {
                      setappmainstate({
                        appmainid: 'postarticle',
                        appmainidtwo: 'previewmain',
                        appmainparam: param,
                        appmainboolean: true,
                      })
                    }} className="">
                      <RiArrowDownSLine className='text-2xl l-m3' />
                    </figure> */}
                    <figure onClick={() => {
                        setappmainstate({
                        appmainid: 'sharesection',
                        appmainidtwo: 'modalmain',
                        appmainparam: param,
                        appmainboolean: true,
                      })
                    }} className="">
                      <RiShareLine className='text-md l-m3' />
                    </figure>
                </figure>
                <figcaption onClick={onlick} className="row-span-3 h-[100px]">
                  {/* <br /><br /> */}
                    <div className="flex flex-row gap-2 items-center">
                      <h1 className="l-h1 truncate">{createdat?.slice(0, 10)}</h1>
                      <h1 className="l-h1 truncate">|</h1>
                      <h1 className="l-h1 truncate">5 min read</h1>
                      <h1 className="l-h1 truncate">|</h1>
                      {verticledivstate && <h1 onClick={() => {
                        navigate(`/catagory/${verticledivstate.verticledivtitle}`)
                      }} className="px-[7px]  text-gray-500 uppercase text-[8px] bg-gray-200 rounded-full">{verticledivstate.verticledivtitle}</h1>}
                    </div>
                    <br />
                    <h1 className="l-h3 text-gray-900">{posttitle}</h1>
                    {/* <h1 className="l-h2">{postsubtitle}</h1> */}
                    {/* {ll(data?.categoryid)} */}
                </figcaption>
            </article>
        </main>
    </div>
  )
}

export default VerticleMain