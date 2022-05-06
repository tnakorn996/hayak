import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

import { ContextMain } from '../../context/contextmain'
import MenuDiv from '../../page/menu/MenuDiv'
import ExitMain from '../exit/ExitMain'
import PostDiv from '../../page/post/PostDiv'

function SlideMain() {
    const {
        appmainstate, setappmainstate,
        slidemainpage, setslidemainpage,

    } = useContext(ContextMain)

    const [slidemainrender, setslidemainrender] = useState()

    const menudiv = [
        {
            slidemainindex: 0,
            slidemainrender: <MenuDiv />,
        },
    ]

    const postdiv = [
        {
            slidemainindex: 0,
            slidemainrender: <PostDiv />,
        },
    ]

    const slidemain = [
        {
            slidemainid: 'menudiv',
            slidemainref: menudiv,
        },
        {
            slidemainid: 'postdiv',
            slidemainref: postdiv,
        },
    ]

    useEffect(() => {
        if(appmainstate && appmainstate.appmainredirect === 'slidemain'){
            const filter = slidemain.filter(data => data.slidemainid === appmainstate.appmainid)
            const filtertwo = filter[0].slidemainref.filter(data => data.slidemainindex === 0)
            setslidemainrender(filtertwo[0].slidemainrender)
        }
    }, [appmainstate])

    function ll() {
        const math = Math.floor(Math.random() * (0 - 99 + 1) + 99)
        setslidemainpage(math)
    }
    
  return (
    <div>
        <motion.main   initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}  className="relative w-screen min-h-screen grid grid-cols-12  bg-gray-900 text-white">
                <article onClick={() => {
                    ll()
                }} className="col-span-2 sticky top-0 right-0 h-screen flex justify-center items-center">
                    {/* <h1 className="text-3xl">←</h1> */}
                    <RiArrowLeftSFill className='text-5xl  bg-black rounded-full' />
                </article>
            <section className="col-span-8 max-w-[500px] mx-auto">
                <ExitMain />
                <figcaption className="">
                    {slidemainrender && slidemainrender}
                </figcaption>
            </section>
                <article onClick={() => {
                    ll()
                }} className="col-span-2 sticky top-0 right-0 h-screen flex justify-center items-center">
                    {/* <h1 className="text-3xl">→</h1> */}
                    <RiArrowRightSFill className='text-5xl  bg-black rounded-full' />
                </article>
        </motion.main>
    </div>
  )
}

export default SlideMain