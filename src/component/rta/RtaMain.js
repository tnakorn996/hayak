import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import { RiQuestionFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import { sheetmain, spreadmain } from '../../content/contentmain';
import { ContextMain } from '../../context/contextmain'
import HorizonMain from '../post/HorizonMain';
import TooltipMain from '../tooltip/TooltipMain';

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

  useEffect(() => {
    if(rtamainid && rtamaindata){
      const filter = rtamain.filter(data => data.rtamainid === rtamainid)
      const filtertwo = filter[0].rtamainref.filter(data => data.rtamainindex === rtamainindex)
      setrtamainrender(filtertwo[0].rtamainrender)
    }
  }, [rtamainid, rtamaindata])

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
  
  // useEffect(() => {
  //   if(rtamainstate){
  //     const empty = []
  //     sheetmain.forEach(data  => {
  //       for(const dat of rtamainstate){
  //         if(data.sheetmainid === dat.spreadmainidtwo && dat.spreadmainid === 'success'){
  //           const filter = spreadmain.filter(da => da.spreadmainid === dat.spreadmainid && da.spreadmainid === 'success')
  //           empty.push({
  //             rtamainrender: filter,
  //             rtamainrendertwo: [data],
  //             rtamainrenderthree: dat.spreadmainrender,
  //           })
  //           setrtamainrender(empty)
  //         }
  //       }
  //     })
  //   }
  // }, [rtamainstate])

  return (
    <div>
       <main className="flex flex-col md:flex-row">
          {rtamainrendertwo?.map(data => (<>
            <div className="w-full px-0 md:px-[30px]  md:border">
                <br /><br />
                <section className="grid grid-cols-12 items-center justify-between">
                  <div className=" col-span-10 flex flex-row items-start gap-1 ">
                    <h1 className=" m-h5 md:m-h6 font-serif">{data?.rtamaintitle}</h1>
                    {/* <h1 className=" m-h5 md:l-h6">{data?.rtamainrenderthree?.length}</h1> */}
                    <div className="hidden md:block relative">
                    <TooltipMain title={data?.rtamaintitle}>
                    <RiQuestionFill className='l-h3' />
                    </TooltipMain>
                    </div>
                  </div>
                  {data?.rtamainrender?.length > 0 && (<>
                    <article onClick={() => {
                      setstackmainstate({
                        stackmainid: 'rtatd',
                        stackmainindex: 0,
                        stackmaindata: data?.rtamainrender,
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





//  <main className="flex flex-col md:flex-row">
//           {rtamainrender?.map(data => (<>
//             <div className="w-full px-0 md:px-[30px]  md:border">
//             {data?.rtamainrendertwo?.map(dat => (<>

//                 <br /><br />
//                 <section className="grid grid-cols-12 items-center justify-between">
//                   <div className=" col-span-10 flex flex-row items-start gap-1 ">
//                     <h1 className=" m-h5 md:m-h6 font-serif">{dat?.sheetmainsubtitle}</h1>
//                     {/* <h1 className=" m-h5 md:l-h6">{data?.rtamainrenderthree?.length}</h1> */}
//                     <div className="hidden md:block relative">
//                     <TooltipMain title={dat?.sheetmainsubtitle}>
//                     <RiQuestionFill className='l-h3' />
//                     </TooltipMain>
//                     </div>
//                   </div>
//                   {data?.rtamainrenderthree?.length > 0 && (<>
//                     <article onClick={() => {
//                       setstackmainstate({
//                         stackmainid: 'rtatd',
//                         stackmainindex: 0,
//                         stackmaindata: data?.rtamainrenderthree,
//                       })
//                       setappmainstate({
//                               appmainid: 'rtasection',
//                               appmainidtwo: 'modalmain',
//                               appmainidthree: 0,
//                               appmainboolean: true,
//                           })
//                       }} className="col-span-2 text-right  l-h6">→</article>
//                     </>)}
//                   </section>
//                   <br />
//               </>))}
//               <section className="flex flex-col gap-2">
//               {data?.rtamainrenderthree?.slice(0, 2)?.map(da => (<>
//                   <HorizonMain onlick={() => {
//                     navigate(`/${da?.postid}`)
//                   }} key={da?.postid} postid={da?.postid} createdat={da?._createdAt} posticon={da?.posticon} posthero={da?.posthero} posttitle={da?.posttitle} postsubtitle={da?.postsubtitle} categoryid={da?.categoryid} priceid={da?.priceid} param={da?.postid} />
//               </>))}
//               </section>
//               <div className="hidden md:block">
//               <br /><br />
//               </div>
//               </div>
//           </>))}
//         </main>