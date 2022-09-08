import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { ContextMain } from '../../context/contextmain'
import useApp from '../../hook/useApp'
import HorizonMain from '../post/HorizonMain'

export default function  BioMain({
  biomainstatic,

}) {
  const {
    toastermainstate,
    ptamainstate,

    parsepost,
    postplaceproduct,

  } = useContext(ContextMain)
  const { pathname } = useLocation()
  const slice = pathname.slice(1, pathname.length)

  const [biomainrender, setbiomainrender] = useState()
  const [biomainrendertwo, setbiomainrendertwo] = useState()

  const postaddress = [
    {
      biomainindex: 0,
      biomainrender: postplaceproduct && toastermainstate && postplaceproduct.filter(data => toastermainstate.toastermaindata.some(dat => dat.postid === data.postid))
    },
    {
      biomainindex: 1,
      biomainrender: [parsepost.filter(data => data.postid === slice)[0] || null, ...parsepost.filter(data => data.postid !== slice) || null]
    },
  ]

  const biomain = [
    {
      biomainid: 'postaddress',
      biomaindata: postaddress,
    },
  ]

  const [appstatic, setappstatic] = useApp(biomain, biomainstatic.biomainid, biomainstatic.biomainindex, ptamainstate)

  useEffect(() => {
    if(appstatic){
      setbiomainrender(appstatic[0].biomainrender)
    }
  }, [appstatic, ptamainstate])

  useEffect(() => {
    if(biomainrender){
      const empty = []
      for(const data of biomainrender){
        if(data !== null){
          empty.push(data)
        }
      }
      setbiomainrendertwo(empty)
    }
  }, [biomainrender])
    
  return (
    <div>
        <main className="">
            <section className="">
              {biomainrendertwo && biomainrendertwo?.map((data, index) => (<>
              <div key={index} className="px-[20px] py-[15px]">
                <HorizonMain 
                  key={data.postid} 
                  data={data}
                  postid={data.postid} 
                  posthero={data.posthero} 
                  posticon={data.posticon} 
                  posttitle={data.posttitle} 
                  postsubtitle={data.postsubtitle}  
                  createdat={data._createdAt} 
                  param={data.postid} />
              </div>
              </>))}
            </section>
        </main>
    </div>
  )
}
