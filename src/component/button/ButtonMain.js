import { motion } from 'framer-motion'
import React from 'react'
import LoadingMain from '../load/LoadingMain'

function ButtonMain({
    title, load, onclick,
}) {

  return (
    <div>
        <main className="">
                <section onClick={onclick} disabled={load === true && true} className={`w-full ${load === true && '!cursor-not-allowed'}`}>
                    {load === false && <button className=" w-full  m-button"><motion.div   initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="">{title}</motion.div></button>} 
                    {load === true && <button className=" w-full  m-button"><motion.div   initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="flex justify-center items-center gap-3"><LoadingMain />Loading..</motion.div></button>} 
                </section>
        </main>

    </div>
  )
}

export default ButtonMain