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
        <main className="flex flex-col md:flex-row">
          {rtamainrender?.map(data => (<>
            <div className="w-full px-0 md:px-[30px]  md:border">
            {data?.rtamainrendertwo?.map(dat => (<>

                <br /><br />
                <section className="grid grid-cols-12 items-center justify-between">
                  <div className=" col-span-10 flex flex-row items-start gap-1 ">
                    <h1 className=" m-h5 md:m-h6 font-serif">{dat?.sheetmainsubtitle}</h1>
                    <div className="hidden md:block relative">
                    <TooltipMain title={dat?.sheetmainsubtitle}>
                    <RiQuestionFill className='l-h3' />
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
                      }} className="col-span-2 text-right  l-h6">→</article>
                    </>)}
                  </section>
                  <br />
              </>))}
              <section className="flex flex-col">
              {data?.rtamainrenderthree?.slice(0, 2)?.map(da => (<>
                  <HorizonMain onlick={() => {
                    navigate(`/${da?.postid}`)
                  }} key={da?.postid} postid={da?.postid} createdat={da?._createdAt} posticon={da?.posticon} posthero={da?.posthero} posttitle={da?.posttitle} postsubtitle={da?.postsubtitle} categoryid={da?.categoryid} priceid={da?.priceid} param={da?.postid} />
              </>))}
              </section>
              <br /><br />
              </div>
          </>))}
        </main>
    </div>
  )
}

export default RtaMain