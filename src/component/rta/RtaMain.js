import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { sheetmain, spreadmain } from '../../content/contentmain';
import { ContextMain } from '../../context/contextmain'
import HorizonMain from '../post/HorizonMain';

function RtaMain() {
  const {
    spreadmainstate,
    setbreadmainstate,

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
                <h1 className="m-h6">{dat?.sheetmainsubtitle}</h1>
                <br />
            </>))}
            {data?.rtamainrenderthree?.map(da => (<>
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