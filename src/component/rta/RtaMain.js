import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { RiQuestionFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import { sheetmain, spreadmain } from '../../content/contentmain';
import { ContextMain } from '../../context/contextmain'
import useApp from '../../hook/useApp';
import TipMain from '../../layout/tip/TipMain';
import HorizonMain from '../post/HorizonMain';

function RtaMain({
  rtamainid,
  rtamainindex,
  rtamaindata,

}) {
  const {
    setappmainstate,
    // spreadmainstate,
    rtamainstate,
    setbreadmainstate,
    setstackmainstate,

  } = useContext(ContextMain)
  const navigate = useNavigate()

  const [rtamainrender, setrtamainrender] = useState()
  const [rtamainrendertwo, setrtamainrendertwo] = useState()

  const categorycanvas = [
    {
      rtamainindex: 0,
      rtamainrender: [
        {
          rtamaintitle: 'Place Location',
          rtamainrender: rtamaindata?.filter(data => data.sheetindex === 1)
        },
        {
          rtamaintitle: 'Related Blogs',
          rtamainrender: rtamaindata?.filter(data => data.sheetindex === 0)
        },
        {
          rtamaintitle: 'Related Products',
          rtamainrender: rtamaindata?.filter(data => data.sheetindex === 2)
        },
      ]
    },
    {
      rtamainindex: 1,
      rtamainrender: [
        {
          rtamaintitle: 'Place Location',
          rtamainrender: rtamaindata?.filter(data => data.sheetindex === 1)
        },
        {
          rtamaintitle: 'Related Blogs',
          rtamainrender: rtamaindata?.filter(data => data.sheetindex === 0)
        },
        {
          rtamaintitle: `What You'll Need`,
          rtamainrender: rtamaindata?.filter(data => data.sheetindex === 3)
        },
      ]
    },
  ]
  const rtamain = [
    {
      rtamainid: 'categorycanvas',
      rtamainref: categorycanvas,
    }
  ]

  const [appstatic, setappstatic] = useApp(rtamain, rtamainid, rtamainindex)

  useEffect(() => {
    if(appstatic && rtamainid && rtamaindata){
      setrtamainrender(appstatic[0].rtamainrender)
    }
  }, [appstatic, rtamainid, rtamaindata])

  useEffect(() => {
    if(rtamainrender){
      const empty = []
      for(const data of rtamainrender){
          data.rtamainrender.forEach(dat => {
            if(dat.sheetrender && dat.sheetrender.length > 0){
              empty.push({
                rtamaintitle: data.rtamaintitle,
                rtamainrender: dat.sheetrender
              })
            }
          })
          setrtamainrendertwo(empty);
      }
      
    }
  }, [rtamainrender])

  return (
    <div>
       <main className="flex flex-col md:flex-row">
          {rtamainrendertwo?.map((data, index) => (<>
            <div key={index} className="w-full px-0 md:px-[30px]  md:border">
                <br /><br />
                <section className="grid grid-cols-12 items-center justify-between">
                  <div className=" col-span-11 flex flex-row items-center gap-1 ">
                    <h1 className=" m-h5 md:m-h6 font-serif">{data?.rtamaintitle}</h1>
                    {/* <h1 className=" m-h5 md:l-h6">{data?.rtamainrenderthree?.length}</h1> */}
                    <TipMain tipmainstatic={{tipmaindata: data?.rtamaintitle}}>
                    </TipMain>
                  </div>
                  {data?.rtamainrender?.length > 0 && (<>
                    <TipMain tipmainstatic={{tipmaindata: 'More'}}>
                    <article onClick={() => {
                      setappmainstate({
                        appmainid: 'rtasection',
                        appmainidtwo: 'modalmain',
                        appmainidthree: 0,
                        appmainboolean: true,
                        appmaindata: data?.rtamainrender,
                      })
                    }} className="col-span-1 text-right p-0  l-button font-serif">→</article>
                    </TipMain>
                    </>)}
                  </section>
                  <br />
              <section className="flex flex-col gap-2">
              {data?.rtamainrender?.slice(0, 2)?.map(da => (<>
                  <HorizonMain onlick={() => {
                    navigate(`/${da?.postid}`)
                  }} key={da?.postid} postid={da?.postid} createdat={da?._createdAt} posticon={da?.posticon} posthero={da?.posthero} posttitle={da?.posttitle} postsubtitle={da?.postsubtitle} categoryid={da?.categoryid} priceid={da?.priceid} param={da?.postid} />
              </>))}
              </section>
              <div className="hidden md:block">
              <br /><br />
              </div>
              </div>
          </>))}
        </main>
       
    </div>
  )
}

export default RtaMain