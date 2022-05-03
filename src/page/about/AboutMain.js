import { motion } from 'framer-motion'
import React from 'react'
import { useContext } from 'react'
import { RiContrastDropLine } from 'react-icons/ri'
import ExitMain from '../../component/exit/ExitMain'

import { ContextMain } from '../../context/contextmain'

function AboutMain() {
  const {
    setappmainstate,

  } = useContext(ContextMain)
  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}  className="w-screen min-w-screen  overflow-hidden">
          {/* <ExitMain /> */}
            <section className=" bg-black text-white">
              <div className="min-h-screen max-w-[900px] mx-auto flex flex-col md:grid md:grid-cols-12 items-center">
              <figcaption className="p-[30px] min-h-[30vh] md:col-span-8 flex items-center">
                <h1 className="text-5xl md:text-8xl  m-h6 font-serif">New Zealand  <span className="text-orange-700">New Story</span></h1>
              </figcaption>
              <figure className="w-[300px] h-[300px] min-h-[40vh] md:col-span-4 flex flex-row justify-center items-center gap-5  overflow-hidden bg-orange-700 rounded-full">
                {/* <h1 className="text-3xl">→</h1> */}
                {/* <img src="https://static.wixstatic.com/media/0e0314_0a37b8770f5342f58fbad16bf83bc330~mv2.png" alt="" className="" /> */}
                <RiContrastDropLine className='text-9xl' />
              </figure>
              <figure className="col-span-12 flex justify-center">
                <div className="text-center">
                  <br />
                  <h1 className="text-3xl  animate-bounce">↓</h1> 
                </div>
              </figure>
              </div>
            </section>
            <section className=" bg-orange-100">
              <div className="min-h-screen max-w-[900px] mx-auto flex flex-col md:grid md:grid-cols-12 items-center justify-items-center ">
              <figcaption className="p-[30px] min-h-[50vh] md:col-span-12 flex items-center text-center">
                <div className="">
                <br />
                <h1 className="text-6xl  m-h6 font-serif">A living story of 🥝 Kiwi's mind </h1>
                <br /><br />
                <h1 className="l-h3">Welcome to Hayak, a project born out of my love of food and New Zealand. The idea here is to review some of my favourite chefs, products, manufacturers and ingredients you can find in the beautiful Aoteora. I hope you enjoy it. And remember, this is only my opinion!</h1>
                <br />
                <div className="w-full flex flex-col md:flex-row gap-2 justify-center">
                <button onClick={() => setappmainstate({
                  appmainredirect: 'contactmain'
                })} className="l-button">Talk to Writer</button>
                <button onClick={() => setappmainstate({
                  appmainredirect: 'appmain'
                })} className="m-button">Read on Hayak</button>
                </div>
                <br />
                </div>
              </figcaption>
              <figure className="md:p-[30px] min-h-[50vh] md:col-span-12 flex flex-row items-center gap-5  overflow-hidden">
                <h1 className="hidden md:block text-3xl">→</h1>
                <img src="https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="" />
              </figure>
              </div>
            </section>
            <section className=" bg-orange-700 text-white">
              <div className="min-h-screen max-w-[900px] mx-auto flex flex-col md:grid md:grid-cols-12 items-center">
              <figure className="p-[30px] min-h-[50vh] md:col-span-5 flex flex-col items-center gap-5  overflow-hidden">
                <img src="https://images.unsplash.com/photo-1628919350249-eb45d8829629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" alt="" className="shadow-2xl" />
                <h1 className="text-3xl">→</h1>
              </figure>
              <figcaption className="p-[30px] min-h-[50vh] md:col-span-7 flex justify-center items-center  ">
                <div className="">
                <br /><br />
                <h1 className=" m-h6 font-serif">Hayak's Agenda</h1>
                <br /><br />
                <h1 className="l-h3 text-white">1. Lorem ipsum dolor sit amet consectetur, </h1>
                <br /><hr /><br />
                <h1 className="l-h3 text-white">1. Lorem ipsum dolor sit amet.</h1>
                <br /><hr /><br />
                <h1 className="l-h3 text-white">1. Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                <br /><hr /><br />
                <h1 className="l-h3 text-white">1. Lorem ipsum dolor sit.</h1>
                <br /><hr /><br />
                <h1 className="l-h3 text-white">1. Lorem ipsum dolor sit amet consectetur.</h1>
                <br /><hr />
                <br /><br />
                </div>
              </figcaption>
              </div>
            </section>
            <section className="min-h-screen max-w-[900px] mx-auto flex flex-col md:grid md:grid-cols-12 items-center md:gap-20">
              <figure className="p-[30px] min-h-[50vh] md:col-span-6 flex flex-col items-center justify-center gap-5  overflow-hidden ">
                <div className="w-full flex flex-row justify-between">
                <h1 className="text-6xl  m-h6 font-serif">Objectives</h1>
                <h1 className="text-3xl">→</h1>
                </div>
                <div className="p-[20px]  bg-orange-200">
                  <h1 className="l-h3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, temporibus explicabo! Exercitationem commodi quia labore sit consectetur ducimus nostrum explicabo.</h1>
                </div>
              </figure>
              <figcaption className="p-[30px] min-h-[50vh] md:col-span-6 flex justify-center items-center  ">
                <div className="">
                <h1 className="m-h6 font-serif">☕️ GIVE DONATION</h1>
                <br /><hr /><br />
                <h1 className="l-h2 ">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, saepe?</h1>
                <br />
                <button onClick={() => setappmainstate({
                  appmainid: 'plansummary',
                  appmainredirect: 'ontromain',
                })} className="m-button">Buy writer a coffee !</button>
                </div>
              </figcaption>
            </section>
            <section className="  bg-orange-100">
              <div className="min-h-screen max-w-[900px] mx-auto flex flex-col md:grid md:grid-cols-12 items-center">
              <figcaption className="p-[30px] min-h-[50vh] md:col-span-6 flex flex-col justify-center items-center">
                <div className="">
                <h1 className="text-5xl  m-h6 font-serif">WATCH THIS VIDEO</h1>
                <br />
                <h1 className="l-h2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos similique laudantium autem eaque possimus ut quidem hic repellendus velit at?</h1>
                </div>
                <div className="">
                  {/* <iframe src="https://player.vimeo.com/video/221086549?h=f191fcacf8" width="400" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
                </div>
              </figcaption>
              <figure className="p-[30px] min-h-[50vh] md:col-span-6 flex flex-row items-center gap-5  overflow-hidden">
                <img src="https://images.unsplash.com/photo-1593584785033-9c7604d0863f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGZvb2R8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="" />
              </figure>
              </div>
            </section>
            <section className="bg-orange-700 text-white">
              <div className="min-h-screen max-w-[900px] mx-auto flex flex-col md:grid md:grid-cols-12 items-center text-center">
              <figcaption className="p-[30px] min-h-[50vh] md:col-span-4 flex flex-col justify-center items-center">
                <div className="">
                <h1 className="text-5xl  m-h6 font-serif">Thank you Hayaker!</h1>
                </div>
              </figcaption>
              <figure className="md:col-span-4 flex justify-center">
                {/* <img src="https://static.wixstatic.com/media/0e0314_0a37b8770f5342f58fbad16bf83bc330~mv2.png" alt="" className="" /> */}
                <RiContrastDropLine className='text-9xl' />
              </figure>
              <figcaption className="p-[30px] min-h-[50vh] md:col-span-4 flex flex-row items-center gap-5  overflow-hidden">
                <h1 className="l-h4 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, assumenda!</h1>
              </figcaption>
              </div>
            </section>

        </motion.main>
    </div>
  )
}

export default AboutMain