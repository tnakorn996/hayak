import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { sheetmain, spreadmain } from '../../content/contentmain';
import { ContextMain } from '../../context/contextmain'

function SpreadMain() {
  const {
    spreadmainstate,
    setbreadmainstate,

  } = useContext(ContextMain)
  const navigate = useNavigate()
  const param = useParams()

  const [spreadmainrender, setspreadmainrender] = useState()
  const [spreadmainrendertwo, setspreadmainrendertwo] = useState()

  useEffect(() => {
    // console.log('spreadmainstate :>> ', spreadmainstate);
    if(spreadmainstate && spreadmainstate.spreadmainrender !== null){
      const empty = []
      sheetmain.forEach(data  => {
        for(const dat of spreadmainstate){
          if(data.sheetmainid === dat.spreadmainidtwo && !param.id){
            const filter = spreadmain.filter(da => da.spreadmainid === dat.spreadmainid)
            empty.push({
              spreadmainrender: filter,
              spreadmainrendertwo: [data],
            })
            setspreadmainrender(empty)
          }
          if(data.sheetmainid === dat.spreadmainidtwo && param.id && dat.spreadmainid !== 'success'){
            const filter = spreadmain.filter(da => da.spreadmainid === dat.spreadmainid && da.spreadmainid !== 'success')
            empty.push({
              spreadmainrender: filter,
              spreadmainrendertwo: [data],
            })
            setspreadmainrender(empty)
          }
        }
      })
    }
  }, [spreadmainstate])

  return (
    <div>
        <main className="">
          {spreadmainrender?.map(data => (<>
            {data?.spreadmainrendertwo?.map(dat => (<>
            <br /><br />
            <h1 className="m-h6 font-serif">{dat?.sheetmainsubtitle}</h1>
            <br />
            {data?.spreadmainrender?.map(da => (<>
            <figure className={`p-[20px] grid grid-cols-12  ${da?.spreadmainstyle}`}>
              <section className="col-span-1">
                <h1 className="l-m3">{da?.spreadmainicon}</h1>
              </section>
              <section className="col-span-6">
                <h1 className="l-m3">{da?.spreadmaintitle}</h1>
                <h1 className="l-m3">{dat?.sheetmaintitle}</h1>
              </section>
              <section onClick={() => {
                setbreadmainstate('')
                navigate(`${dat?.sheetmainaction}`)
              }} className="col-span-5">
                <button className="w-full  l-button">See more</button>
              </section>
            </figure>
            </>))}
            </>))}
          </>))}
        </main>
    </div>
  )
}

export default SpreadMain