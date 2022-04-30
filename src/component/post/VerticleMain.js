import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiContrastDropLine } from 'react-icons/ri'

import { categorymain } from '../../content/contentmain'

function VerticleMain({onlick, createdat, posthero, posttitle, postsubtitle,  categoryid, priceid}) {

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
          <article onClick={onlick} className="relative flex flex-col justify-center  hover:scale-105 duration-200">
                {priceid === 'pro' && (<>
                <figure className="absolute top-2 left-2">
                  <RiContrastDropLine className='m-h6 text-gray-300  !opacity-100' />
                </figure>
                </>)}
                <figure className="row-span-3 overflow-hidden max-h-[120px] flex items-center">
                    <img src={posthero} alt="" className="w-full h-full" />
                </figure>
                <figcaption className="row-span-3 h-[170px]">
                    <br /><br />
                    <div className="flex flex-row gap-2 items-center">
                      <h1 className="l-h1 truncate">{createdat?.slice(0, 10)}</h1>
                      <h1 className="l-h1 truncate">|</h1>
                      <h1 className="l-h1 truncate">5 min read</h1>
                      <h1 className="l-h1 truncate">|</h1>
                      {verticledivstate && <h1 className="px-[7px]  text-gray-500 uppercase text-[8px] bg-gray-200 rounded-full">{verticledivstate.verticledivtitle}</h1>}
                    </div>
                    <br />
                    <h1 className="m-h3">{posttitle}</h1>
                    {/* <h1 className="l-h2">{postsubtitle}</h1> */}
                    {/* {ll(data?.categoryid)} */}
                </figcaption>
            </article>
        </main>
    </div>
  )
}

export default VerticleMain