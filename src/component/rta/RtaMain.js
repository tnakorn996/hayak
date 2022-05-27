import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { RiQuestionFill } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom';

import { sheetmain, spreadmain } from '../../content/contentmain';
import { ContextMain } from '../../context/contextmain'
import HorizonMain from '../post/HorizonMain';
import TooltipMain from '../tooltip/TooltipMain';

function RtaMain({type}) {
  const {
    setappmainstate,
    spreadmainstate,
    setbreadmainstate,
    setstackmainstate,

  } = useContext(ContextMain)
  const navigate = useNavigate()

  const [rtamainrender, setrtamainrender] = useState()
  
  useEffect(() => {
    if(spreadmainstate){
      const empty = []
      sheetmain.forEach(data  => {
        for(const dat of spreadmainstate){
          if(data.sheetmainid === dat.spreadmainidtwo && dat.spreadmainid === 'success'){
            const filter = spreadmain.filter(da => da.spreadmainid === dat.spreadmainid && da.spreadmainid === 'success')
            empty.push({
              rtamainrender: filter,
              rtamainrendertwo: [data],
              rtamainrenderthree: dat.spreadmainrender,
            })
            setrtamainrender(empty)
          }
        }
      })
    }
  }, [spreadmainstate])

  return (
    <div>
        <main className="">
          {rtamainrender?.map(data => (<>
            {data?.rtamainrendertwo?.map(dat => (<>
                <br /><br />
                <section className="grid grid-cols-12 items-center justify-between">
                  <div className=" col-span-10 flex flex-row items-start gap-3 ">
                    <h1 className="m-h6 font-serif">{dat?.sheetmainsubtitle}</h1>
                    <div className="relative">
                    <TooltipMain title={dat?.sheetmainsubtitle}>
                    <RiQuestionFill className='text-lg  text-gray-500' />
                    </TooltipMain>
                    </div>
                  </div>
                  {data?.rtamainrenderthree?.length > 0 && (<>
                    <article onClick={() => {
                      setstackmainstate({
                        stackmainid: 'rtatd',
                        stackmainindex: 0,
                        stackmaindata: data?.rtamainrenderthree,
                      })
                      setappmainstate({
                              appmainid: 'rtasection',
                              appmainidtwo: 'modalmain',
                              appmainidthree: 0,
                              appmainboolean: true,
                          })
                      }} className="col-span-2  l-h2">See all</article>
                    </>)}
                  </section>
                  <br />
              </>))}
              {data?.rtamainrenderthree?.slice(0, 3)?.map(da => (<>
                  <HorizonMain onlick={() => {
                    navigate(`/${da?.postid}`)
                  }} key={da?.postid} createdat={da?._createdAt} posticon={da?.posticon} posthero={da?.posthero} posttitle={da?.posttitle} postsubtitle={da?.postsubtitle} categoryid={da?.categoryid} priceid={da?.priceid} param={da?.postid} />
            </>))}
          </>))}
        </main>
    </div>
  )
}

export default RtaMain