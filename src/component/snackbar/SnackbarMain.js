import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { BsList } from 'react-icons/bs'
import { RiHeart3Line } from 'react-icons/ri'

import useApp from '../../hook/useApp'
import BadgeMain from '../../layout/badge/BadgeMain'
import BioMain from '../bio/BioMain'

export default function SnackbarMain({
    snackbarmainstatic,

}) {

    const [snackbarboolean, setsnackbarboolean] = useState(false)

    const [snackbarmainrender, setsnackbarmainrender] = useState(false)
    const [snackbarmaintitle, setsnackbarmaintitle] = useState()
    const [snackbarmainnumber, setsnackbarmainnumber] = useState()

    const postfooter = [
        {
            snackbarmainindex: 0,
            snackbarmainrender: <BioMain biomainstatic={{biomainid: 'postaddress', biomainindex: 1}} />,
            snackbarmainnumber: <BadgeMain badgemainstatic={{badgemainid: 'favouritespan', badgemainindex: 0}}  badgemainstyle={`!px-[8px] shadow !bg-white !text-black`} />,
            snackbarmaintitle: 'Your favourite list',
        }
    ]

    const snackbarmain = [
        {
            snackbarmainid: 'postfooter',
            snackbarmainref: postfooter,
        }
    ]

    const [appstatic, setappstatic] = useApp(snackbarmain, snackbarmainstatic.snackbarmainid, snackbarmainstatic.snackbarmainindex)

    useEffect(() => {
      if(appstatic){
        setsnackbarmainrender(appstatic[0].snackbarmainrender)
        setsnackbarmaintitle(appstatic[0].snackbarmaintitle)
        setsnackbarmainnumber(appstatic[0].snackbarmainnumber)
      }
    }, [appstatic])

  return (
    <div>
        <motion.main initial={{y: 100}} animate={{y: 0}} exit={{y: 100}} className={`w-screen fixed z-20 bottom-0 left-0  duration-500 bg-white border `}>
            <section onClick={() => {setsnackbarboolean(!snackbarboolean)}} className="p-[20px] flex flex-row justify-between items-center  hover:cursor-pointer">
                {/* <BsList className='l-h4' /> */}
                <figcaption className="flex flex-row items-center gap-2">
                    <h1 className="h-h3  font-serif">{snackbarmaintitle}</h1>
                    {snackbarmainnumber}
                </figcaption>
                <h1 className='l-h4'>{snackbarboolean ? '↓' : '↑'}</h1>
            </section>
            <section className={`h-0  duration-500 ${snackbarboolean && '!h-[70vh]'}`}>
                {snackbarmainrender && snackbarmainrender}
            </section>
        </motion.main>
    </div>
  )
}
