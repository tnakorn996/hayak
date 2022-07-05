import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { sheetmain } from '../../content/contentmain';
import { categorydi, categorydl } from '../../content/contentmantwo';
import { ContextMain } from '../../context/contextmain'

function SpreadMain({
  sheetmainid,
  sheetmainindex,
  sheetmaindata,

}) {
  const {
    // spreadmainstate, setspreadmainstate,
    setrtamainstate,
    setbreadmainstate,
    setbarmainstate,

  } = useContext(ContextMain)
  const navigate = useNavigate()
  const param = useParams()

  const [spreadmainrender, setspreadmainrender] = useState()
  const [spreadmainrendertwo, setspreadmainrendertwo] = useState()
  
  const categoryindexdi = [
    {
      sheetmainindex: 0,
      sheetmainrender: () => {
        const empty = []
          sheetmaindata?.forEach(data => {
            if (data?.postindextworender?.length <= 0 && data?.postindextwoid !== 'productdi'){
                empty.push({
                    spreadmainid: 'break',
                    spreadmainidtwo: data.postindextwoid,
                    spreadmainrender: data.postindextworender,
                })
                setrtamainstate(empty)
            }
            if (data?.postindextworender?.length > 0 && data?.postindextwoid !== 'productdi') {
                empty.push({
                    spreadmainid: 'success',
                    spreadmainidtwo: data.postindextwoid,
                    spreadmainrender: data.postindextworender,
                })
                setrtamainstate(empty)
            }
        })
        return empty
      }

    },
    {
      sheetmainindex: 1,
      sheetmainrender: () => {
        const empty = []
        const filter = sheetmaindata.filter(data => data.postindextwoid !== 'pickdi')
        filter?.forEach(data => {
            if (data?.postindextworender?.length <= 0){
                empty.push({
                    spreadmainid: 'break',
                    spreadmainidtwo: data.postindextwoid,
                    spreadmainrender: data.postindextworender,
                })
                setrtamainstate(empty)
            }
            if (data?.postindextworender?.length > 0) {
                empty.push({
                    spreadmainid: 'success',
                    spreadmainidtwo: data.postindextwoid,
                    spreadmainrender: data.postindextworender,
                })
                setrtamainstate(empty)
            }
        })
        return empty
      }

    },

  ]

  const postindexdi = [
    {
      sheetmainindex: 0,
      sheetmainrender: () => {
        const empty = []
        sheetmaindata?.forEach(data => {
            if (data?.postindexthreerender?.length <= 0){
                empty.push({
                    spreadmainid: 'break',
                    spreadmainidthree: data.postindexthreeid,
                    spreadmainrender: data.postindexthreerender,
                })
                setbarmainstate(empty)
            }
            if (data?.postindexthreerender?.length > 0) {
                empty.push({
                    spreadmainid: 'success',
                    spreadmainidthree: data.postindexthreeid,
                    spreadmainrender: data.postindexthreerender,
                })
                setbarmainstate(empty)
            }
        })
        return empty
      }
    }
  ]

  // const spreadmain = [
  //   {
  //     spreadmainid: 'categorydi',
  //     spreadmainref: categorydi,
  //   }
  // ]

  const sheetmain = [
    {
      sheetmainid: 'categoryindexdi',
      sheetmainref: categoryindexdi,
    },
    {
      sheetmainid: 'postindexdi',
      sheetmainref: postindexdi,
    },
  ]

  useEffect(() => {
    if(sheetmaindata){
      const filter = sheetmain.filter(data => data.sheetmainid === sheetmainid);
      const filtertwo = filter[0].sheetmainref.filter(data => data.sheetmainindex === sheetmainindex);
      setspreadmainrender(filtertwo[0].sheetmainrender)
    }
  }, [])

  useEffect(() => {
    if(spreadmainrender) {
      const empty = []
        categorydl.forEach(data  => {
          for(const dat of spreadmainrender){
            if(data.sheetmainid === dat.spreadmainidtwo && !param.id){
              const filter = categorydi.filter(da => da.spreadmainid === dat.spreadmainid)
              empty.push({
                spreadmainrender: filter,
                spreadmainrendertwo: [data],
              })
              setspreadmainrendertwo(empty)
            }
            if(data.sheetmainid === dat.spreadmainidtwo && param.id && dat.spreadmainid !== 'success'){
              const filter = categorydi.filter(da => da.spreadmainid === dat.spreadmainid && da.spreadmainid !== 'success')
              empty.push({
                spreadmainrender: filter,
                spreadmainrendertwo: [data],
              })
              setspreadmainrendertwo(empty)
            }
          }
        })
    }
  }, [spreadmainrender])

  if(spreadmainrendertwo === undefined) return null

  return (
    <div>
        <main className="h-full flex flex-col md:flex-row">
          {spreadmainrendertwo?.map(data => (<>
          <div className="w-full px-0 md:px-[30px]  md:border ">
            {data?.spreadmainrendertwo?.map(dat => (<>
            <br /><br />
            <h1 className="m-h5 md:m-h6 font-serif">{dat?.sheetmainsubtitle}</h1>
            <br />
            {data?.spreadmainrender?.map(da => (<>
            <figure className={`p-[20px] grid grid-cols-12  ${da?.spreadmainstyle}`}>
              <section className="col-span-1">
                <h1 className="l-m3">{da?.spreadmainicon}</h1>
              </section>
              <section className="col-span-6">
                <h1 className="m-h2">{da?.spreadmaintitle}</h1>
                <h1 className="l-h1">{dat?.sheetmaintitle}</h1>
              </section>
              <section onClick={() => {
                setbreadmainstate('')
                navigate(`${dat?.sheetmainaction}`)
              }} className="col-span-5 justify-center">
                <button className="w-full  l-button  border">See more</button>
              </section>
            </figure>
            </>))}
            </>))}
            <div className="hidden md:block">
            <br />
            </div>
          </div>
          </>))}
        </main>
    </div>
  )
}

export default SpreadMain