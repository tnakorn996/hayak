import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'

import { ContextMain } from '../../context/contextmain'

function AlertMain() {
    const {
        alertmainstate

    } = useContext(ContextMain)
    const [alertmaintitle, setalertmaintitle] = useState()
    const [alertmainsubtitle, setalertmainsubtitle] = useState()

    const postcaption = [
        {
            alertmaintitle: 'DISCLAIMER: ',
            alertmainsubtitle: `The views and opinions expressed in this presentation are those of the author and do not represent the perspectives of any organization.`,
        }
    ]
    const alertmain = [
        {
            alertmainid: 'postcaption',
            alertmainref: postcaption,
        }
    ]

    useEffect(() => {
      if(alertmainstate){
          const filter = alertmain.filter(data => data.alertmainid === alertmainstate.alertmainid)
          const filtertwo = filter[0].alertmainref.filter(data => filter[0].alertmainref.indexOf(data) === 0)
            setalertmaintitle(filtertwo[0].alertmaintitle)
            setalertmainsubtitle(filtertwo[0].alertmainsubtitle)
      }
    }, [alertmainstate])

  return (
    <div>
        <main className="">
            <section className="">
                <br />
                <article className="p-[20px] flex flex-row gap-1  bg-gray-50">
                    <h1 className="">{alertmaintitle && alertmaintitle}</h1>
                    <h1 className="">{alertmainsubtitle && alertmainsubtitle}</h1>
                </article>
                <br />
            </section>
        </main>
    </div>
  )
}

export default AlertMain