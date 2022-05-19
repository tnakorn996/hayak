import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiInformationLine } from 'react-icons/ri'

function AlertMain({
    alertmainid,
    alertmainpage,
    alertmainfullname,

}) {
    const [alertmainicon, setalertmainicon] = useState()
    const [alertmaintitle, setalertmaintitle] = useState()

    const postcaption = [
        {
            alertmainicon: <RiInformationLine />,
            alertmaintitle: `DISCLAIMER: The views and opinions expressed in this presentation are those of the author and do not represent the perspectives of any organization.`,
        },
        {
            alertmainicon: <RiInformationLine />,
            alertmaintitle: `DISCLAIMER: The photos owned by ${alertmainfullname}`,
        },
    ]

    const alertmain = [
        {
            alertmainid: 'postcaption',
            alertmainref: postcaption,
        }
    ]

    useEffect(() => {
      if(alertmainid){
          const filter = alertmain.filter(data => data.alertmainid === alertmainid)
          const filtertwo = filter[0].alertmainref.filter(data => filter[0].alertmainref.indexOf(data) === alertmainpage)
            setalertmainicon(filtertwo[0].alertmainicon)
            setalertmaintitle(filtertwo[0].alertmaintitle)
      }
    }, [alertmainid, alertmainpage])

  return (
    <div>
        <main className="">
            <section className="">
                <article className="p-[20px] flex flex-row gap-1 items-start  bg-gray-50">
                    <div className="">
                    <h1 className="">{alertmainicon && alertmainicon}</h1>
                    </div>
                    <div className="">
                    <h1 className="">{alertmaintitle && alertmaintitle}</h1>
                    </div>
                </article>
            </section>
        </main>
    </div>
  )
}

export default AlertMain