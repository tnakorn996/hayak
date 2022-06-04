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
    cardmainmessage,
    cardmainindex,

}) {
    const {
        commentlink, 
        termlink,
        feedbacklink,

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
                    return <button onClick={filter[0].blemainaction} className="w-full  l-button">{filter[0].blemainentitle}</button>
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
                    return <button onClick={filter[0].blemainaction} className="w-full  l-button">{filter[0].blemainentitle}</button>
                }
            } 
        },
    ]

    const feedbackimg = [
        {
            cardmainindex: 0,
            cardmainrender: feedbacklink.filter(data => data.blemainid === cardmainidthree),
            cardmainaction: () => {
                if(cardmainidthree) {
                    const filter = feedbacklink.filter(data => data.blemainid === cardmainidthree);
                    return <button onClick={filter[0].blemainaction} className="w-full  l-button">{filter[0].blemaintitle}</button>
                }
            } 
        },
    ]

    const shareimg = [
        {
            cardmainindex: 0,
            cardmainrender: '',
            cardmainaction: () => {
                if(cardmainidthree) {
                    const filter = commentlink.filter(data => data.blemainid === cardmainidthree);
                    return <button onClick={filter[0].blemainaction} className="w-full  l-button">{filter[0].blemainentitle}</button>
                }
            },
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
        },
        {
            cardmainid: 'feedbackimg',
            cardmainref: feedbackimg,
        },
        {
            cardmainid: 'shareimg',
            cardmainref: shareimg,
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
        }
    }, [cardmainid, cardmainidtwo])

  return (
    <div>
        <br />
        <motion.main initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative  duration-100">
            {cardmainrender?.map(data => (<>
                <figure className={`w-full p-[20px] flex flex-col  md:flex-row justify-between ${data?.spreadmainstyle}`}>
                    <div className="flex flex-row items-start gap-3">
                    <section className="col-span-1 ">
                        <h1 className={`hidden md:flex justify-start  l-h3 ${data?.spreadmainstyle}`}>{data?.spreadmainicon}</h1>
                    </section>
                    <section className="col-span-8">
                        {cardmainrendertwo !== '' && cardmainrendertwo?.map(dat => (<>
                        <h1 className="m-h2">{dat?.sheetmaintitle || dat?.blemaintitle}</h1>
                        <h1 className="py-[10px] md:p-0  l-h1">{dat?.sheetmainsubtitle || dat?.blemainsubtitle}</h1>
                        <br />
                        </>))}
                        <div className="flex flex-col">
                        {cardmainmessage && cardmainmessage?.map(da => (<>
                         {da?.error && <span className="m-h1">∙ {da?.error}</span>}
                         {da?.success && <span className="m-h1">∙ {da?.success}</span>}
                        </>))}
                        </div>
                        <br />
                    </section>
                    </div>
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