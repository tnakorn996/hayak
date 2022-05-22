import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

import { commentui } from '../../content/contentmantwo';
import { ContextMain } from '../../context/contextmain'

function CardMain({
    cardmainid,
    commentindex,

}) {
    const {
        commentlink, 

    } = useContext(ContextMain)
    const [cardmainrender, setcardmainrender] = useState()
    const [cardmainaction, setcardmainaction] = useState()

    const commentimg = [
        {
            cardmainindex: 0,
            cardmainrender: commentui.filter(data => data.crummainid === 'all'),
            cardmainaction: () => {
                const filter = commentlink.filter(data => data.blemainid === 'all');
                return <button onClick={filter[0].blemainaction} className="w-full  border-2 border-black l-button">Leave a review</button>
            } 
        }
    ]
    const cardmain = [
        {
            cardmainid: 'commentimg',
            cardmainref: commentimg,
        }
    ]

    useEffect(() => {
      if(!cardmainid){
          const filter = cardmain.filter(data => data.cardmainid === 'commentimg');
          const filtertwo = filter[0].cardmainref.filter(data => data.cardmainindex === 0);
          setcardmainrender(filtertwo[0].cardmainrender)
          setcardmainaction(filtertwo[0].cardmainaction)
      }
    }, [])

  return (
    <div>
        <main className="p-[20px] flex flex-col  md:grid md:grid-cols-12  border-2 border-black">
            {cardmainrender?.map(data => (<>
            <section className="col-span-9">
                <h1 className="m-h3">{data?.crummaintitle}</h1>
                <h1 className="py-[10px] md:p-0  l-h2">{data?.crummainsubtitle}</h1>
            </section>
            </>))}
            <section className="col-span-3">
                {cardmainaction && cardmainaction}
            </section>
        </main>
    </div>
  )
}

export default CardMain