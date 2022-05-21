import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ContextMain } from '../../context/contextmain'
import HorizonMain from '../post/HorizonMain'

function StackMain({
  stackmainid, stackmainindex,

}) {
    const {
        stackmainstate,

    } = useContext(ContextMain)
    const navigate = useNavigate()
    const [stackmainrender, setstackmainrender] = useState()

    const rtatd = [
      {
        stackmainindex: 0,
        stackmainrender: () => {
          return stackmainstate?.stackmaindata?.map(data => (<>
              <HorizonMain onlick={() => {
                  navigate(`/${data?.postid}`)
                }} key={data?.postid} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} priceid={data?.priceid} param={data?.postid} />
              </>))
        },
      },
    ]

    const stackmain = [
        {
            stackmainid: 'rtatd',
            stackmainref: rtatd,
        },

    ]
    
    useEffect(() => {
      if(stackmainstate) {
            const filter = stackmain.filter(data => data.stackmainid === stackmainstate.stackmainid)
            const filtertwo = filter[0].stackmainref.filter(data => data.stackmainindex === stackmainstate.stackmainindex)
            setstackmainrender(filtertwo[0].stackmainrender)
      }
    }, [stackmainstate])
    
  return (
    <div>
        <main className="">
            <section className="flex flex-col gap-5">
              {stackmainrender && stackmainrender}
            </section>
        </main>
    </div>
  )
}

export default StackMain