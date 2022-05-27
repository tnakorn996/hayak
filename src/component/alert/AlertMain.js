import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiInformationLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { breadmain, categorydi, categorydl, categoryui, postui, postul, sheetmain, spreadmain } from '../../content/contentmantwo'
import CardMain from '../card/CardMain'

function AlertMain({
    alertmainid,
    alertmainidtwo,

    alertmainmessage,
}) {
    const [alertmainrender, setalertmainrender] = useState()
    const [alertmainrendertwo, setalertmainrendertwo] = useState()

    const navigate = useNavigate()

    const postcaption = [
        {
            alertmainindex: 0,
            alertmainrender: categorydi.filter(data => data.spreadmainid === 'fail'),
            alertmainrendertwo: postul.filter(data => data.breadmainid === 'description')
        }
    ]

    const alertmain = [
        {
            alertmainid: 'postcaption',
            alertmainref: postcaption,
        },
    ]

    useEffect(() => {
      if(!alertmainid){
            const filter = alertmain.filter(data => data.alertmainid === 'postcaption');
            const filtertwo = filter[0].alertmainref.filter(data => data.alertmainindex === 0);
            setalertmainrender(filtertwo[0].alertmainrender)
            setalertmainrendertwo(filtertwo[0].alertmainrendertwo)
      }
    }, [alertmainid])

  return (
    <div>
        <main className="">
            {alertmainrender?.map(data => (<>
                {alertmainrendertwo?.map(dat => (<>
                <div className="m-[20px] max-w-[450px]">
                <br />
                <section className="">
                    <figure className="">
                        <img src={data?.spreadmainimage} className="" />
                    </figure>
                </section>
                <br />
                <section className="">
                    <div className="text-center">
                        <br />
                        <h1 className="m-h6  font-serif">{data?.spreadmaintitle}</h1>
                        <h1 className="l-h3">{alertmainmessage && '· ' + alertmainmessage}</h1>
                    </div>
                    <CardMain 
                    cardmainid={'feedbackimg'}
                    cardmainidtwo={'inform'}
                    cardmainidthree={'ask'}
                    cardmainindex={0} 
                />
                </section>
                <br />
                <section className="">
                    <button onClick={() => {
                        navigate(dat?.breadmainaction) || dat?.blemainaction()
                    }} className="w-full  m-button">{dat?.breadmainentitle || dat?.blemainentitle}</button>
                </section>
                </div>
                </>))}
            </>))}
        </main>
    </div>
  )
}

export default AlertMain