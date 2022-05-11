import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { ContextMain } from '../../context/contextmain'

function ToastMain() {
    const {
        appmainstate, setappmainstate,

    } = useContext(ContextMain)
    const [toastmainrender, settoastmainrender] = useState()

    const planfigcaption = [
        {
            toastmaintitle: 'Want to Support HAYAK team?',
            toastmainsubtitle: 'Consider to donate today', 
            toastmainentitle: 'Donate Now', 
            toastmainaction: () => {
                setappmainstate({
                    appmainid: 'plansummary',
                    appmainredirect: 'ontromain',
                })  
            }, 
        },
        {
            toastmaintitle: 'Successfully Coppied to Clipboard',
            toastmainsubtitle: '', 
            toastmainentitle: 'OK', 
            toastmainaction: () => {
                setappmainstate('')
            }
        }
    ]

     const postfigcaption = [
        {
            toastmaintitle: 'Want to chat with seller?',
            toastmainsubtitle: 'Check thier product on their website', 
            toastmainentitle: 'Check seller website', 
            toastmainaction: () => {
                window.open(`/www.google.com`, '_blank').focus()
            }
        }
    ]

    const toastmain = [
        {
            toastmainid: 'planfigcaption',
            toastmainref: planfigcaption,
        },
        {
            toastmainid: 'postfigcaption',
            toastmainref: postfigcaption,
        }
    ]

    useEffect(() => {
      if(appmainstate && appmainstate.appmainidtwo === 'toastmain'){
          const filter = toastmain.filter(data => data.toastmainid === appmainstate.appmainidthree)
          const filtertwo = filter[0].toastmainref.filter(data => filter[0].toastmainref.indexOf(data) === appmainstate.appmainidfour)
          settoastmainrender(filtertwo[0])
        }
    }, [appmainstate])
    
  return (
    <div>
        <motion.main  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}  className="z-10 w-full h-[20vh] fixed bottom-0 left-0 flex items-center  bg-black text-white">
            <div className="md:min-w-[1500px] mx-auto flex flex-col md:grid md:grid-cols-12 items-center text-center">
                <section className="md:col-span-8">
                    <br />
                    <h1 className="m-h6 font-semibold">{toastmainrender?.toastmaintitle}</h1>
                    {/* <h1 className="l-h3">{toastmainrender?.toastmainsubtitle}</h1> */}
                    <br />
                </section>
                <section className="md:col-span-4">
                    <br />
                    <button onClick={toastmainrender?.toastmainaction} className="w-full  l-button">{toastmainrender?.toastmainentitle}</button>
                    <br /><br />
                </section>
            </div>
        </motion.main>
    </div>
  )
}

export default ToastMain