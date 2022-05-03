import { motion } from 'framer-motion'
import React from 'react'
import ExitMain from '../../component/exit/ExitMain'

function ContactMain() {
  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}  className="w-screen min-h-screen flex flex-col md:grid md:grid-cols-12 items-center  bg-orange-700 text-white">
            <section className="col-span-7 p-[20px] max-w-[500px] mx-auto  ">
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
                <button className="l-button">Cancel</button>
                <button className="m-button">Submit</button>
                </div>
                <br />
            </section>
            <section className="relative col-span-5 hidden md:block h-full  bg-green-500">
                <figure className="sticky top-0 right-0">
                    <img src="https://everybodyeats.nz/assets/img/temp%20journal/journal10.jpg" alt="" className="h-screen  " />
                </figure>
            </section>

        </motion.main>
    </div>
  )
}

export default ContactMain