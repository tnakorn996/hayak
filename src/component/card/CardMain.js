import { motion } from 'framer-motion';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

import { categorydi, categorydl, categoryui, commentdi, commentui, spreadmain, termdi } from '../../content/contentmantwo';
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
        termlink,

    } = useContext(ContextMain)

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
                    return <button onClick={filter[0].blemainaction} className="w-full  underline">{filter[0].blemainentitle}</button>
                }
            } 
        },
    ]

    const termimg = [
        {
            cardmainindex: 0,
            cardmainrender: termdi.filter(data => data.spreadmainid === cardmainidtwo),
            cardmainaction: () => {
                if(cardmainidthree) {
                    const filter = termlink.filter(data => data.blemainid === cardmainidthree);
                    return <button onClick={filter[0].blemainaction} className="w-full  underline">{filter[0].blemainentitle}</button>
                }
            } 
        },
    ]

    const cardmain = [
        {
            cardmainid: 'commentimg',
            cardmainref: commentimg,
        },
        {
            cardmainid: 'termimg',
            cardmainref: termimg,
        }
    ]

    useEffect(() => {
        if(cardmainid){
            const filter = categorydi.filter(data => data.spreadmainid === cardmainidtwo);
            const filtertwo = cardmain.filter(data => data.cardmainid === cardmainid);
            const filterthree = filtertwo[0].cardmainref.filter(data => data.cardmainindex === cardmainindex);
            setcardmainrender(filter)
            setcardmainrendertwo(filterthree[0].cardmainrender)
            setcardmainaction(filterthree[0].cardmainaction)

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
                        <h1 className="hidden md:flex  l-h3">{data?.spreadmainicon}</h1>
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
            </>))}
        </motion.main>
    </div>
  )
}

export default CardMain