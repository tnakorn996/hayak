import { motion } from 'framer-motion'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { ContextMain } from '../../context/contextmain'

import CardMain from '../card/CardMain'
import HorizonMain from '../post/HorizonMain'

function ToasterMain() {
    const {
        setappmainstate,
        toastermainstate, settoastermainstate,

        postplaceproduct,

    } = useContext(ContextMain)
    const [toastermainrender, settoastermainrender] = useState()
    const [toastermainrendertwo, settoastermainrendertwo] = useState()

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
        const filterthree = postplaceproduct.filter(data => data.postid === toastermainstate.toastermaindata)
        settoastermainrender(filtertwo[0].toastermainrender)
        settoastermainrendertwo(filterthree)

      }
    }, [toastermainstate])
    
  return (
    <div>
        <main className="">
            <motion.section initial={{y: 100, x: 0}} animate={{ y:0, x: 0}} exit={{y: 100}} className="w-screen md:w-[60vw] mx-auto fixed bottom-0 left-0 md:left-[20%]  bg-white duration-100">
                    <figure className="flex flex-col  border shadow-2xl">
                        <section className=" flex items-center justify-end ">
                            <h1 onClick={() => {
                                setappmainstate('')
                            }} className="p-[20px]  l-h1 cursor-pointer font-serif">Close</h1>
                            {/* <RiCloseFill onClick={() => {
                                setappmainstate('')
                            }} className='p-[10px] text-5xl  l-h6' /> */}
                        </section>
                        {toastermainrendertwo?.length > 0 && toastermainrendertwo?.map(data => (<>
                        <section className="p-[20px]">
                            <HorizonMain 
                            key={data.postid} 
                            postid={data.postid} 
                            posthero={data.posthero} 
                            posttitle={data.posttitle} 
                            postsubtitle={data.postsubtitle}  
                            createdat={data._createdAt} 
                            param={data.postid} />
                        </section>
                        </>))}
              
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