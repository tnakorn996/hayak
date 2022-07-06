import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { ContextMain } from '../../context/contextmain'
import useApp from '../../hook/useApp'

import '../list/listmain.css'

function ListMain({
    listmainstatic,

}) {
    const {
        
        faqdl, 
        faqdi,

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

    const liststatic = {
        listmain: listmain,
        listmainid: listmainstatic.listmainid,
        listmainindex: listmainstatic.listmainindex,
    }
    const appstatic = useApp({liststatic})

    useEffect(() => {
      if(appstatic) {
        setlistmainrender(appstatic[0].listmainrender)
        setlistmainrendertwo(appstatic[0].listmainrendertwo)
      }
    }, [appstatic])
    
  return (
    <div>
        <main className="">
            <section className="">
                {listmainrender?.map(data => (<>
                    <details className="cursor-pointer border">
                        {listmainrendertwo?.map(dat => (<>
                            <h1 className="px-[40px] md:px-[60px]  l-h5">{data?.spreadmainindex === dat?.spreadmainindex && dat?.sheetmaintitle}</h1>
                        </>))}
                        <br />
                        <summary className="p-[20px] md:px-[60px]">
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