import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function FabMain({
    fabmainid,
    fabmainindex,

}) {

    const [fabmainrender, setfabmainrender] = useState()

    const posttfoot = [
        {
            fabmainindex: 0,
            fabmaintitle: 'Back to top',
            fabmainicon: '↑',
            fabmainaction: () => {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            } 
        }
    ]

    const fabmain = [
        {
            fabmainid: 'posttfoot',
            fabmainref: posttfoot,
        }
    ]

    useEffect(() => {
      if(fabmainid) {
          const filter = fabmain.filter(data => data.fabmainid === fabmainid)
          const filtertwo = filter[0].fabmainref.filter(data => data.fabmainindex === fabmainindex)
          setfabmainrender(filtertwo)
      }
    }, [fabmainid])
    
  return (
    <div>
        <main className="">
            <section className="">
                {fabmainrender?.map(data => (<>
                <article onClick={() => {
                    data?.fabmainaction()
                }} className="flex flex-rowjustify-center items-center l-button shadow border">
                    <h1 className="font-serif">{data?.fabmaintitle}</h1>
                    <h1 className="l-h2 text-black">{data?.fabmainicon}</h1>
                </article>
                </>))}
            </section>
        </main>
    </div>
  )
}

export default FabMain