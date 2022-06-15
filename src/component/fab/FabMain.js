import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { ContextMain } from '../../context/contextmain';

function FabMain({
    fabmainid,
    fabmainindex,

}) {
    const {
        setappmainstate,

    } = useContext(ContextMain)

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
        },
        {
            fabmainindex: 1,
            fabmaintitle: 'Survey',
            fabmainicon: '',
            fabmainaction: () => {
                setappmainstate(
                    {
                        appmainid: 'userarticle',
                        appmainidtwo: 'previewmain',
                        appmainpage: 0,
                        appmainboolean: true,
                    }
                )
            } 
        },
    ]

    const fabmain = [
        {
            fabmainid: 'posttfoot',
            fabmainref: posttfoot,
        },
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