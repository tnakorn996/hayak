import { motion } from 'framer-motion'
import React from 'react'
import LoadMain from '../load/LoadMain'

function ButtonMain({
  buttonmainstatic,
  children,
}) {

  return (
    <div>
        <main className="flex flex-row justify-end">
                <section onClick={buttonmainstatic.buttonmainonclick} disabled={buttonmainstatic.buttonmainload === true && true} className={`w-full md:w-[40%] ${buttonmainstatic.buttonmainload === true && '!cursor-not-allowed'}`}>
                    {buttonmainstatic.buttonmainload === false && <button className=" w-full  m-button"><motion.div   initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="">{children}</motion.div></button>} 
                    {buttonmainstatic.buttonmainload === true && <button className=" w-full  m-button"><motion.div   initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="flex justify-center items-center gap-3"><LoadMain /></motion.div></button>} 
                </section>
        </main>

    </div>
  )
}

export default ButtonMain