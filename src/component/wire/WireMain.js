import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { crummain } from '../../content/contentmain'
import { categoryui, categoryul } from '../../content/contentmantwo'

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
          const filter = categoryui.filter(data => data.breadmainid !== breadmainstate?.breadmainid)
          return filter.slice(0, 6).map(data => (<>
            <article onClick={() => {
              setbreadmainstate({
                breadmainid: data?.breadmainid,
                breadmainidtwo: data?.crummainid,
              })
              navigate(`/category/${data?.breadmainid}`)
            }} className={` ${data?.crummainstyle}`}>
              <figure className="relative h-[40vh] md:h-[80vh] flex items-center justify-center  overflow-hidden">
                {/* <div className="absolute w-[900px] h-[900px] -right-80   -rotate-45 scale-50 bg-red-500"> */}
                <img src={data?.crummainimage} alt="" className="max-w-[100ch] min-h-full  grayscale" />
                {/* </div> */}
                {/* <div className="absolute bottom-0 h-[10vh] md:h-[50vh] w-full  bg-gradient-to-b from-transparent to-black" /> */}
                {/* <h1 className="absolute bottom-0 p-[20px] md:text-8xl w-full  m-h6 text-white font-serif truncate">{data.crummaintitle}</h1> */}
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
                }} key={data?.postid} postid={data?.postid} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} priceid={data?.priceid} param={data?.postid} />
              </>))
        },
      },
    ]


    const blocktr = [
      {
        wiremainindex: 0,
        wiremainrender: () => {
          return <section className="">
            ff
          </section>
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
        {
            wiremain: 'blocktr',
            wireref: blocktr,
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