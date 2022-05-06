import { motion } from 'framer-motion'
import React from 'react'
import ExitMain from '../../component/exit/ExitMain'

function ContactMain() {
  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}  className="w-screen min-h-screen flex flex-col md:grid md:grid-cols-12 items-center  bg-black text-white">
            <section className="col-span-7 p-[40px] max-w-[500px] mx-auto  ">
                <ExitMain />
                <br /><br />
                <h1 className="text-5xl  m-h6 font-serif">Contact us by sending an enquiry below.</h1>
                <br />
                <input className="w-full  l-input focus:outline-none" placeholder='Name' />
                <br /><br />
                <input className="w-full  l-input focus:outline-none" placeholder='Email' />
                 <br /><br />
                <input className="w-full  l-input focus:outline-none" placeholder='City' />
                 <br /><br />
                <input className="w-full  l-input focus:outline-none" placeholder='Enquiry Type' />
                 <br /><br />
                <textarea rows={3} className="w-full  l-input focus:outline-none" placeholder='Message' />
                <br /><br />
                <div className="grid grid-flow-col gap-1">
                <button className="m-button">Cancel</button>
                <button className="l-button">Submit</button>
                </div>
                <br />
            </section>
            <section className="relative col-span-5 hidden md:block h-full">
                <figure className="relative h-full w-full flex justify-center items-center  overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" className="fixed top-0 right-0 h-full" />
                </figure>
            </section>

        </motion.main>
    </div>
  )
}

export default ContactMain