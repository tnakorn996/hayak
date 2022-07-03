import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { RiArrowDropDownFill } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'
import ZoomMain from '../zoom/ZoomMain'

export default function ChooseMain({
    choosemainstatic,
    choosemainref,

}) {
    const {
        ptamainstate,

        feedbackdi,

    } = useContext(ContextMain)
    const [choosemainindex, setchoosemainindex] = useState(0)

    const [choosemainrender, setchoosemainrender] = useState()
    const [choosemainrendertwo, setchoosemainrendertwo] = useState()

    const feedbacktextarea = [
        {
            choosemainindex: 0,
            choosemainrender: null,
        },
        {
            choosemainindex: 1,
            choosemainrender: <ZoomMain zoommainid={'feedbackinput'} zoommainslice={1} />,
        },
    ]

    const choosemain = [
        {
            choosemainid: 'feedbacktextarea',
            choosemainref: feedbacktextarea,
            choosemaindata: feedbackdi[0]?.sheetmaindata,
        }
    ]

    useEffect(() => {
      if(choosemainstatic){
        const filter = choosemain.filter(data => data.choosemainid === choosemainstatic.choosemainid)
        const filtertwo = filter[0].choosemainref.filter(data => data.choosemainindex === choosemainindex)
        const empty = []
        filter[0].choosemaindata.forEach(data => {
            empty.push({posttitle: data?.posttitle})
        })
        setchoosemainrender(filter[0].choosemaindata)
        setchoosemainrendertwo(filtertwo[0].choosemainrender)
      }
    }, [choosemainindex, ptamainstate])

    function ll() {
        if(choosemainindex === 0){
            setchoosemainindex(1)
        }
        if(choosemainindex === 1){
            setchoosemainindex(0)
        }
    }

  return (
    <div>
        <main className="">
            <section onClick={() => {ll()}} className="grid grid-cols-12 items-center pr-[10px]  border">
                <input disabled={true} value={choosemainrender && choosemainrender.map(data => (` ` + data.posttitle))} ref={choosemainref} className="col-span-11 w-full  l-input !border-0 truncate hover:cursor-pointer" placeholder='Choose posts' />
                <figure className="col-span-1 flex justify-center">
                    <RiArrowDropDownFill className='l-h6' />
                </figure>
            </section>
            {choosemainrendertwo && 
            <motion.section initial={{y: -100}} animate={{ y:0}} exit={{y: -100}} className="relative">
                <motion.figure initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="w-full z-20 absolute top-3 left-0  bg-white shadow border duration-100">
                    {choosemainrendertwo}
                </motion.figure>
            </motion.section>
            }
        </main>
    </div>
  )
}
