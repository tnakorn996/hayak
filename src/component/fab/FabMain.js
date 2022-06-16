import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { RiArrowUpCircleLine, RiSurveyLine } from 'react-icons/ri';

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
            fabmaintitle: '',
            fabmainicon: <RiArrowUpCircleLine />,
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
            fabmaintitle: '',
            fabmainicon: <RiSurveyLine />,
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
                }} className="p-[10px] w-fit flex flex-row justify-center items-center  bg-white shadow">
                    <h1 className="font-serif">{data?.fabmaintitle}</h1>
                    <h1 className="m-h5">{data?.fabmainicon}</h1>
                </article>
                </>))}
            </section>
        </main>
    </div>
  )
}

export default FabMain