import { motion } from 'framer-motion'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { ContextMain } from '../../context/contextmain'
import useApp from '../../hook/useApp'
import BioMain from '../bio/BioMain'

import CardMain from '../card/CardMain'
import HorizonMain from '../post/HorizonMain'

function ToasterMain() {
    const {
        setappmainstate,
        toastermainstate,

        postplaceproduct,

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
            cardmainmessage={[{'success': `Successfully added to My Favourite`}]}
            cardmainindex={0}  />
        },
        {
            toastermainindex: 2,
            toastermainrender: <CardMain 
            cardmainid={'favouriteimg'} 
            cardmainidtwo={'success'} 
            cardmainidthree={'review'} 
            cardmainmessage={[{'success': `Remove from My Favourite`}]}
            cardmainindex={0}  />
        },
        {
            toastermainindex: 3,
            toastermainrender: <CardMain 
            cardmainid={'favouriteimg'} 
            cardmainidtwo={'success'} 
            cardmainidthree={'review'} 
            cardmainmessage={[{'success': `Remove from Search history`}]}
            cardmainindex={0}  />
        }
    ]

    const toastermain = [
        {
            toastermainid: 'postheader',
            toastermainref: postheader,
        }
    ]

    const [appstatic, setappstatic] = useApp(toastermain, toastermainstate.toastermainid, toastermainstate.toastermainindex)

    useEffect(() => {
      if(appstatic && toastermainstate){
          settoastermainrender(appstatic[0].toastermainrender)
      }
    }, [appstatic, toastermainstate])

  return (
    <div>
        <main className="">
            <motion.section initial={{y: 100, x: 0}} animate={{ y:0, x: 0}} exit={{y: 100}} className="w-screen md:w-[60vw] mx-auto fixed bottom-0 left-0 md:left-[20%]  bg-white duration-100">
                <figure className="flex flex-col  border shadow-2xl">
                    <section className=" flex items-center justify-end ">
                        <h1 onClick={() => {setappmainstate('')}} className="p-[20px]  l-h1 cursor-pointer font-serif">Close</h1>
                    </section>
                    <section className="max-h-[70vh] overflow-y-auto">
                        <BioMain biomainstatic={{biomainid: 'postaddress', biomainindex: 0}} />
                    </section>
                    <br />
                    <section className="p-[20px] pt-0">
                        {toastermainrender && toastermainrender}
                    </section>
                </figure>
            </motion.section>
        </main>
    </div>
  )
}

export default ToasterMain