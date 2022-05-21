import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiInformationLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { breadmain, categoryui, sheetmain, spreadmain } from '../../content/contentmantwo'

function AlertMain({
    alertmainid,
    alertmainidtwo,
    // alertmainpage,
    // alertmainfullname,

}) {
    const [alertmainicon, setalertmainicon] = useState()
    const [alertmainstyle, setalertmainstyle] = useState()
    const [alertmainaction, setalertmainaction] = useState()
    const [alertmainentitle, setalertmainentitle] = useState()
    const [alertmaintitle, setalertmaintitle] = useState()
    const navigate = useNavigate()

    // const searchcaption = [
    //     {
    //         alertmainindex: 0,
    //         alertmainrender: () => {
    //             return 'dd';
    //         },
    //         alertmainrendertwo: () => {
    //             return 'dd';
    //         }
    //     }
    // ]

    // const alertmain = [
    //     {
    //         alertmainid: 'postcaption',
    //         alertmainref: postcaption,
    //     },
    //     {
    //         alertmainid: 'searchcaption',
    //         alertmainref: searchcaption,
    //     },
    // ]

    useEffect(() => {
      if(alertmainid){
            const filter = spreadmain.filter(data => data.spreadmainid === 'categorydi');
            const filtertwo = filter[0].spreadmainref.filter(data => data.spreadmainid === alertmainid);

            const filterthree = sheetmain.filter(data => data.sheetmainid === alertmainidtwo);
            const filterfour = filterthree[0].sheetmainref.filter(data => data.spreadmainid === alertmainid);
            setalertmainicon(filtertwo[0].spreadmainicon)
            setalertmainstyle(filtertwo[0].spreadmainstyle)
            setalertmaintitle(filterfour[0].sheetmaintitle)
            setalertmainentitle(filterfour[0].sheetmainentitle)
            setalertmainaction(filterfour[0].sheetmainaction)
      }
    }, [alertmainid])

  return (
    <div>
        <main className="">
            <br />
            <section className="">
                <article className={`p-[20px] flex flex-row gap-1 justify-between items-start  ${alertmainstyle && alertmainstyle}` }>
                    <figure className="flex flex-row gap-3 justify-between items-start ">
                    <h1 className="m-h3">{alertmainicon && alertmainicon}</h1>
                    <h1 className="m-h3">{alertmaintitle && alertmaintitle}</h1>
                    </figure>
                    <figcaption className="">
                        {alertmainaction && (<>
                        <button onClick={() => {
                            navigate(alertmainaction)
                        }} className="l-button">{alertmainentitle && alertmainentitle}</button>
                        </>)}
                    </figcaption>
                </article>
            </section>
            <br />
        </main>
    </div>
  )
}

export default AlertMain