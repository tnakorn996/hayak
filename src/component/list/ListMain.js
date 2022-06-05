import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { ContextMain } from '../../context/contextmain'

import '../list/listmain.css'

function ListMain({
    listmainid,
    listmainindex,

}) {
    const {
        faqdl, faqdi,

    } = useContext(ContextMain)
    const [listmainrender, setlistmainrender] = useState()
    const [listmainrendertwo, setlistmainrendertwo] = useState()

    const faqsummary = [
        {
            listmainindex: 0,
            listmainrender: faqdl,
            listmainrendertwo: faqdi,
        }
    ]

    const listmain = [
        {
            listmainid: 'faqsummary',
            listmainref: faqsummary,
        }
    ]

    useEffect(() => {
      if(listmainid) {
          const filter = listmain.filter(data => data.listmainid === listmainid)
          const filtertwo = filter[0].listmainref.filter(data => data.listmainindex === listmainindex)
        setlistmainrender(filtertwo[0].listmainrender)
        setlistmainrendertwo(filtertwo[0].listmainrendertwo)

      }
    }, [listmainid])
    
  return (
    <div>
        <main className="">
            <section className="">
                {listmainrender?.map(data => (<>
                    <details className="cursor-pointer border">
                        {listmainrendertwo?.map(dat => (<>
                            <h1 className="px-[40px]  l-h5">{data?.spreadmainindex === dat?.spreadmainindex && dat?.sheetmaintitle}</h1>
                        </>))}
                        <br />
                        <summary className="p-[20px]">
                            <h1 className="m-h6 font-serif">{data?.spreadmaintitle}</h1>
                        </summary>
                    </details>
                </>))}
            </section>
        </main>
    </div>
  )
}

export default ListMain