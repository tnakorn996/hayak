import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { crummain } from '../../content/contentmain'

import { ContextMain } from '../../context/contextmain'
import HorizonMain from '../post/HorizonMain'

function WireMain() {
    const {
        breadmainstate, setbreadmainstate,
        wiremainstate,

    } = useContext(ContextMain)
    const navigate = useNavigate()
    const [wiremainrender, setwiremainrender] = useState()

    const hometr = [
      {
        wiremainindex: 0,
        wiremainrender: () => {
          const filter = crummain.filter(data => data.breadmainid !== breadmainstate?.breadmainid)
          return filter.slice(0, 6).map(data => (<>
            <article onClick={() => {
              setbreadmainstate({
                breadmainid: data?.breadmainid,
                breadmainidtwo: data?.crummainid,
              })
              navigate(`/category/${data?.breadmainid}`)
            }} className={` ${data?.crummainstyle} !bg-black border border-black`}>
              <figure className="relative h-[40vh] md:h-[80vh] flex items-center justify-center  overflow-hidden">
                <img src={data?.crummainimage} alt="" className="max-w-fit scale-50" />
                <div className="absolute bottom-0 h-[10vh] md:h-[50vh] w-full  bg-gradient-to-b from-transparent to-black" />
                <h1 className="absolute bottom-0 p-[20px] md:text-8xl w-full  m-h6 font-serif truncate">{data.crummaintitle}</h1>
              </figure>
            </article>
            </>))
        },
      },
    ]

    const rtatr = [
      {
        wiremainindex: 0,
        wiremainrender: () => {
          return wiremainstate?.wiremaindata?.map(data => (<>
              <HorizonMain onlick={() => {
                  navigate(`/${data?.postid}`)
                }} key={data?.postid} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} priceid={data?.priceid} param={data?.postid} />
              </>))
        },
      },
    ]

    const wiremain = [
        {
            wiremain: 'hometr',
            wireref: hometr,
        },
        {
            wiremain: 'rtatr',
            wireref: rtatr,
        },

    ]
    
    useEffect(() => {
      if(wiremainstate) {
            const filter = wiremain.filter(data => data.wiremain === wiremainstate.wiremainid)
            const filtertwo = filter[0].wireref.filter(data => data.wiremainindex === wiremainstate.wiremainindex)
            setwiremainrender(filtertwo[0].wiremainrender)
      }
    }, [wiremainstate])
    
  return (
    <div>
        <main className="">
            <section className="grid grid-cols-2 gap-5">
              {wiremainrender && wiremainrender}
            </section>
        </main>
    </div>
  )
}

export default WireMain