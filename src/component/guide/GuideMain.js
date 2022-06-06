import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { ContextMain } from '../../context/contextmain'

function GuideMain({
    guidemainid,
    guidemainindex,
    guidemaindata,

}) {
    const {
        postdl, postdi,

        guidemainstate,
        setstackmainstate,
        setappmainstate,

    } = useContext(ContextMain)
    const [guidemaintitle, setguidemaintitle] = useState()
    const [guidemainaction, setguidemainaction] = useState()

    const posttbody = [
        {
            guidemainindex: 0,
            guidemaintitle: '+',
            guidemainaction: () => {
                for(const data of guidemaindata){
                    const empty = []
                    console.log('guidemaindata :>> ', guidemaindata);
                    if(data?.postindextwoid === 'pickdi'){
                        empty.push(data.postindextworender)
                        return () => {
                            setstackmainstate({
                                stackmainid: 'rtatd',
                                stackmainindex: 0,
                                stackmaindata: empty[0],
                            })
                            setappmainstate({
                                appmainid: 'rtasection',
                                appmainidtwo: 'modalmain',
                                appmainidthree: 0,
                                appmainboolean: true,
                            })
                        }
                    }  
                }
                
            }
        }
    ]

    const guidemain = [
        {
            guidemainid: 'posttbody',
            guidemainref: posttbody,
        }
    ]

    useEffect(() => {
      if(guidemainid) {
        const filter = guidemain.filter(data => data.guidemainid === guidemainid)
        const filtertwo = filter[0].guidemainref.filter(data => data.guidemainindex === guidemainindex)
        setguidemaintitle(filtertwo[0].guidemaintitle)
        setguidemainaction(filtertwo[0].guidemainaction)
      }
    }, [guidemainid, guidemaindata])

  return (
    <div>
        <main className="">
            <section className="">
                <article onClick={() => {
                    guidemainaction()
                }} className="">
                <button className="text-2xl w-[70px] h-[70px]  l-button border opacity-100 rounded-full shadow-2xl animate-pulse text-gray-500">{guidemaintitle}</button>
                </article>
            </section>
        </main>
    </div>
  )
}

export default GuideMain