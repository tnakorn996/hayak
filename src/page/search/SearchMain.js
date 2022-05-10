import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import BadgeMain from '../../component/badge/BadgeMain'
import HorizonMain from '../../component/post/HorizonMain'
import { categorymain } from '../../content/contentmain'

import { ContextMain } from '../../context/contextmain'

function SearchMain() {
    const {
        appmainstate, setappmainstate,

        postupdatedat,
        postpostcount,
    } = useContext(ContextMain)
    const navigate = useNavigate()


    useEffect(() => {

    }, [appmainstate, postupdatedat, postpostcount])

  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="">
            <section className="">
                <figcaption className="">
                </figcaption>                
                <figure className="">
                
                </figure>
            </section>
        </motion.main>
    </div>
  )
}

export default SearchMain