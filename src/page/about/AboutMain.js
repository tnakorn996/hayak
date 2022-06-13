import { motion } from 'framer-motion'
import React from 'react'
import { useContext } from 'react'
import { RiContrastDropLine } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'

function AboutMain() {
  const {
    setappmainstate,

  } = useContext(ContextMain)
  return (
    <div>
        <motion.main className="overflow-hidden">
          

        </motion.main>
    </div>
  )
}

export default AboutMain