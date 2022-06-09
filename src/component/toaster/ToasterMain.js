import { motion } from 'framer-motion'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ContextMain } from '../../context/contextmain'

import CardMain from '../card/CardMain'

function ToasterMain() {
    const {
        setappmainstate,
        toastermainstate, settoastermainstate,

    } = useContext(ContextMain)
    const [toastermainrender, settoastermainrender] = useState()

    const postheader = [
        {
            toastermainindex: 0,
            toastermainrender: <CardMain 
            cardmainid={'favouriteimg'} 
            cardmainidtwo={'inform'} 
            cardmainidthree={'review'} 
            cardmainmessage={[{'success': `Saving...`}]}
            cardmainindex={0}  />
        },
        {
            toastermainindex: 1,
            toastermainrender: <CardMain 
            cardmainid={'favouriteimg'} 
            cardmainidtwo={'success'} 
            cardmainidthree={'review'} 
            cardmainmessage={[{'success': `Successfully added to Reading list`}]}
            cardmainindex={0}  />
        },
        {
            toastermainindex: 2,
            toastermainrender: <CardMain 
            cardmainid={'favouriteimg'} 
            cardmainidtwo={'success'} 
            cardmainidthree={'review'} 
            cardmainmessage={[{'error': `Remove from Reading list`}]}
            cardmainindex={0}  />
        }
    ]

    const toastermain = [
        {
            toastermainid: 'postheader',
            toastermainref: postheader,
        }
    ]

    useEffect(() => {
      if(toastermainstate){
        const filter = toastermain.filter(data => data.toastermainid === toastermainstate.toastermainid)
        const filtertwo = filter[0].toastermainref.filter(data => data.toastermainindex === toastermainstate.toastermainindex)
        settoastermainrender(filtertwo[0].toastermainrender)
      }
    }, [toastermainstate])
    
  return (
    <div>
        <main className="flex justify-center items-center  duration-100">
            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}  className="fixed md:top-5 w-full md:max-w-[40vw] mx-auto  bg-white duration-100">
                    <figure className="flex flex-col  border shadow-2xl">
                        <article onClick={() => {
                            setappmainstate('')
                        }} className="h-[5vh] flex items-start justify-end  border border-gray-200">
                            <h1 className="px-[10px]  l-h6">╳</h1>
                        </article>
                        <figcaption className="">
                            {toastermainrender && toastermainrender}
                        </figcaption>
                    </figure>
            </motion.section>
        </main>
    </div>
  )
}

export default ToasterMain