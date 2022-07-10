import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { RiArrowDropDownFill } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'
import useApp from '../../hook/useApp'
import CardMain from '../card/CardMain'
import ZoomMain from '../zoom/ZoomMain'

export default function ChooseMain({
    choosemainstatic,
    choosemainref,

}) {
    const {
        ptamainstate,

        feedbackdi,
        contactdi,

    } = useContext(ContextMain)
    const [choosemainindex, setchoosemainindex] = useState(0)
    const [cardmainstatic, setcardmainstatic] = useState()

    const [choosemainrender, setchoosemainrender] = useState()
    const [choosemainrendertwo, setchoosemainrendertwo] = useState()
    const [choosemainplaceholder, setchoosemainplaceholder] = useState()

    const feedbacktextarea = [
        {
            choosemainindex: 0,
            choosemainrender: null,
        },
        {
            choosemainindex: 1,
            choosemainrender: <ZoomMain zoommainid={'feedbackinput'} zoommainslice={3} />,
        },
    ]

    const contacttextarea = [
        {
            choosemainindex: 0,
            choosemainrender: null,
        },
        {
            choosemainindex: 1,
            choosemainrender: <ZoomMain zoommainid={'contactinput'} zoommainslice={3} />,
        },
    ]

    const choosemain = [
        {
            choosemainid: 'feedbacktextarea',
            choosemainref: feedbacktextarea,
            choosemaindata: feedbackdi[0]?.sheetmaindata,
            choosemainnumber: 3,
            choosemainplaceholder: 'posts, places or products',

        },
        {
            choosemainid: 'contacttextarea',
            choosemainref: contacttextarea,
            choosemaindata: contactdi[0]?.sheetmaindata,
            choosemainnumber: 1,
            choosemainplaceholder: 'cities or regions',
        },
    ]

    const [appstatic, setappstatic] = useApp(choosemain, choosemainstatic.choosemainid, choosemainindex)

    useEffect(() => {
        if(appstatic && choosemainstatic){
            const filter = choosemain.filter(data => data.choosemainid === choosemainstatic.choosemainid)
            const object =  filter[0]
            // const filtertwo = object.choosemainref.filter(data => data.choosemainindex === choosemainindex)
            const empty = []
            object.choosemaindata.forEach(data => {
                if(data.posttitle || data?.crummainsubtitle){
                    empty.push({title: data?.posttitle || data?.crummainsubtitle})
                }
            })
            setchoosemainrender(empty)
            // setchoosemainrendertwo(filtertwo[0].choosemainrender)
            setchoosemainrendertwo(appstatic[0].choosemainrender)
            setchoosemainplaceholder(object.choosemainplaceholder)

            if(object.choosemaindata?.length <= object.choosemainnumber){
                setcardmainstatic()
            } else {
                setcardmainstatic({
                    cardmainid: 'commentimg',
                    cardmainidtwo: 'fail',
                    // cardmainidthree: 'feedback',
                    cardmainmessage: [{error: `Require maximum ${filter[0].choosemainnumber} ${choosemainplaceholder}`}],
                    cardmainindex: 0 ,
                })
            }
        }
    }, [appstatic, choosemainindex, ptamainstate])

    function ll() {
        if(choosemainindex === 0){setchoosemainindex(1)}
        if(choosemainindex === 1){setchoosemainindex(0)}
    }

  return (
    <div>
        <main className="">
            <section onClick={() => {ll()}} className="grid grid-cols-12 items-center pr-[10px]  border-[1.5px]">
                <input ref={choosemainref} disabled={true} value={choosemainrender && choosemainrender.map(data => (` ` + data.title))} className="col-span-11 w-full  l-input !border-0 truncate hover:cursor-default" placeholder={`Choose `+ choosemainplaceholder} />
                <figure className="col-span-1 flex justify-center  hover:cursor-pointer">
                    <RiArrowDropDownFill className='l-h6' />
                </figure>
            </section>
            {cardmainstatic && (<>
            <section className="">
                <br />
                <CardMain 
                cardmainid={cardmainstatic?.cardmainid} 
                cardmainidtwo={cardmainstatic?.cardmainidtwo} 
                cardmainindex={cardmainstatic?.cardmainindex} 
                cardmainidthree={cardmainstatic?.cardmainidthree} 
                cardmainmessage={cardmainstatic?.cardmainmessage}
                />
            </section>
            </>)}
            {choosemainindex === 1 && 
            <motion.section initial={{y: -100, scale: 0}} animate={{ y:0, scale: 1}} exit={{y: -100, scale: 0}} className="relative  duration-100">
                <motion.figure className="w-[90%] z-20 absolute top-3 right-0  bg-white shadow-md border duration-100 rounded">
                    {choosemainrendertwo}
                </motion.figure>
            </motion.section>
            }
        </main>
    </div>
  )
}
