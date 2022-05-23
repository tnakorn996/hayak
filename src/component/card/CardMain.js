import { motion } from 'framer-motion';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

import { categorydi, categorydl, categoryui, commentdi, commentui, spreadmain } from '../../content/contentmantwo';
import { ContextMain } from '../../context/contextmain'
import LoadingMain from '../load/LoadingMain';

function CardMain({
    cardmainid,
    cardmainidtwo,
    cardmainidthree,
    cardmainindex,

    cardmainuuid,
}) {
    const {
        commentlink, 

    } = useContext(ContextMain)
    const [cardmainload, setcardmainload] = useState(false)

    const [cardmainrender, setcardmainrender] = useState()
    const [cardmainrendertwo, setcardmainrendertwo] = useState()
    const [cardmainaction, setcardmainaction] = useState()

    const commentimg = [
        {
            cardmainindex: 0,
            cardmainrender: commentdi.filter(data => data.spreadmainid === cardmainidtwo),
            cardmainaction: () => {
                if(cardmainidthree) {
                    const filter = commentlink.filter(data => data.blemainid === cardmainidthree);
                    return <button onClick={filter[0].blemainaction} className="w-full  border-2 border-black l-button">{filter[0].blemainentitle}</button>
                }
            } 
        },
    ]

    const cardmain = [
        {
            cardmainid: 'commentimg',
            cardmainref: commentimg,
        }
    ]

    useEffect(() => {
        if(cardmainid){
            setcardmainload(true)
            const filter = categorydi.filter(data => data.spreadmainid === cardmainidtwo);
            const filtertwo = cardmain.filter(data => data.cardmainid === cardmainid);
            const filterthree = filtertwo[0].cardmainref.filter(data => data.cardmainindex === cardmainindex);
            setcardmainrender(filter)
            setcardmainrendertwo(filterthree[0].cardmainrender)
            setcardmainaction(filterthree[0].cardmainaction)
            setcardmainload(false)

            // const filter = spreadmain.filter(data => data.spreadmainid === cardmainid)
            // const filtertwo = filter[0].spreadmainref.filter(data => data.spreadmainid === cardmainidtwo)
            // const filterthree = commentlink.filter(data => data.spreadmainid === cardmainidthree);
            // setcardmainrender(filtertwo)
            // setcardmainaction(filterthree)
        }
    }, [cardmainid, cardmainidtwo, cardmainuuid])

  return (
    <div>
        <br />
        <motion.main initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative">
            {cardmainrender?.map(data => (<>
                <figure className={`w-full p-[20px] flex flex-col  md:grid md:grid-cols-12  border-2 border-black ${data?.spreadmainstyle}`}>
                    <section className="col-span-1">
                        <h1 className="l-h3">{data?.spreadmainicon}</h1>
                    </section>
                    {cardmainrendertwo?.map(dat => (<>
                    <section className="col-span-8">
                        <h1 className="m-h3">{dat?.sheetmaintitle}</h1>
                        <h1 className="py-[10px] md:p-0  l-h2">{dat?.sheetmainsubtitle}</h1>
                    </section>
                    </>))}
                    <section className="col-span-3">
                        {cardmainaction && cardmainaction}
                    </section>
                </figure>
                {cardmainload && (<>
                <figure className="absolute top-0 left-0 w-full h-full flex justify-center items-center  bg-white">
                    <LoadingMain />
                </figure>
                </>)}
            </>))}
        </motion.main>
    </div>
  )
}

export default CardMain