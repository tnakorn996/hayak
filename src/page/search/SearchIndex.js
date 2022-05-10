import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import { ContextMain } from '../../context/contextmain'

function SearchIndex() {
    const {

    } = useContext(ContextMain)
    const navigate = useNavigate()

  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="flex flex-col-reverse md:grid md:grid-cols-12 max-w-[900px] mx-auto">
            
        </motion.main>
    </div>
  )
}

export default SearchIndex