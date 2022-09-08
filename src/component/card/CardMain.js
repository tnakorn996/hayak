import { motion } from 'framer-motion';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { RiCheckboxCircleLine, RiCloseCircleLine, RiInformationLine } from 'react-icons/ri';

import { categorydi, categorydl, categoryui, commentdi, commentui, spreadmain, termdi } from '../../content/contentmantwo';
import { ContextMain } from '../../context/contextmain'
import useApp from '../../hook/useApp';

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
        favouritelink,
        faqlink,

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
                    return <p onClick={filter[0].blemainaction} className=" w-full">{filter[0].blemainentitle} →</p>
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
                    return <p onClick={filter[0].blemainaction} className=" w-full">{filter[0].blemainentitle} →</p>
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
                    return <p onClick={filter[0].blemainaction} className=" w-full">{filter[0].blemaintitle} →</p>
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
                    return <p onClick={filter[0].blemainaction} className=" w-full">{filter[0].blemainentitle} →</p>
                }
            },
        },
    ]

    const favouriteimg = [
        {
            cardmainindex: 0,
            cardmainrender: '',
            cardmainaction: () => {
                if(cardmainidthree) {
                    const filter = favouritelink.filter(data => data.blemainid === cardmainidthree);
                    return <p onClick={filter[0].blemainaction} className=" w-full">{filter[0].blemainentitle} →</p>
                }
            },
        },
    ]

    const faqimg = [
        {
            cardmainindex: 0,
            cardmainrender: '',
            cardmainaction: () => {
                if(cardmainidthree) {
                    const filter = faqlink.filter(data => data.blemainid === cardmainidthree);
                    return <p onClick={filter[0].blemainaction} className=" w-full">{filter[0].blemainentitle} →</p>
                }
            },
        },
    ]

    const categoryimg = [
        {
            cardmainindex: 0,
            cardmainrender: '',
            cardmainaction: () => {
                if(cardmainidthree) {
                    const filter = faqlink.filter(data => data.blemainid === cardmainidthree);
                    return <p onClick={filter[0].blemainaction} className=" w-full">{filter[0].blemainentitle} →</p>
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
        },
        {
            cardmainid: 'favouriteimg',
            cardmainref: favouriteimg,
        },
        {
            cardmainid: 'faqimg',
            cardmainref: faqimg,
        }
    ]

    const [appstatic, setappstatic] = useApp(cardmain, cardmainid, cardmainindex)

    useEffect(() => {
        if(appstatic && cardmainid){
            const filter = categorydi.filter(data => data.spreadmainid === cardmainidtwo);
            setcardmainrender(filter)

            setcardmainrendertwo(appstatic[0].cardmainrender)
            setcardmainaction(appstatic[0].cardmainaction)

            // const filter = categorydi.filter(data => data.spreadmainid === cardmainidtwo);
            // const filtertwo = cardmain.filter(data => data.cardmainid === cardmainid);
            // const filterthree = filtertwo[0].cardmainref.filter(data => data.cardmainindex === cardmainindex);
            // setcardmainrender(filter)
            // setcardmainrendertwo(filterthree[0].cardmainrender)
            // setcardmainaction(filterthree[0].cardmainaction)
        }
    }, [appstatic, cardmainid, cardmainidtwo])

  return (
    <div className='h-full'>
        <main className="relative h-full">
            {cardmainrender?.map((data, index) => (<>
                <motion.figure key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={`w-full h-full flex flex-col md:grid md:grid-flow-col gap-3 justify-between   duration-100 ${data?.spreadmainstyle} !bg-opacity-0`}>
                    <div className="flex flex-row items-start gap-3">
                    {/* <section className="col-span-1 pt-[1px]">
                        <h1 className={`hidden md:flex justify-start  l-h3 ${data?.spreadmainstyle}`}>{data?.spreadmainicon}</h1>
                    </section> */}
                    <section className="col-span-8">
                        {/* {cardmainrendertwo !== '' && cardmainrendertwo?.map(dat => (<>
                        <h1 className="m-h2">{dat?.sheetmaintitle || dat?.blemaintitle}</h1>
                        <div className="h-[10px]" />
                        <h1 className="py-[10px] md:p-0  l-h1">{dat?.sheetmainsubtitle || dat?.blemainsubtitle}</h1>
                        </>))} */}
                        <div className="flex flex-col">
                        {cardmainmessage && cardmainmessage?.map(da => (<>
                        {da?.inform && <span className="flex flex-row items-center gap-2  text-[11px]"><RiInformationLine />{da?.inform}</span>}
                        {da?.error && <span className="flex flex-row items-center gap-2  text-[11px]"><RiCloseCircleLine />{da?.error}</span>}  
                        {da?.success && <span className="flex flex-row items-center gap-2  text-[11px]"><RiCheckboxCircleLine />{da?.success}</span>}
                        </>))}
                        </div>
                    </section>
                    </div>
                    <section className="px-[10px] text-xs w-fit h-fit font-serif cursor-pointer">
                        {cardmainaction && cardmainaction}
                    </section>
                </motion.figure>
            </>))}
        </main>
    </div>
  )
}

export default CardMain