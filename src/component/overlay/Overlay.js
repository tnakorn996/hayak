import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { ContextMain } from '../../context/contextmain'
import { useState } from 'react'
import { motion } from 'framer-motion'

import ToasterMain from '../toaster/ToasterMain'
import useApp from '../../hook/useApp'
import SnackbarMain from '../snackbar/SnackbarMain'

export default function Overlay() {
    const {
        appmainstate, setappmainstate,

    } = useContext(ContextMain)
    const [overlayoffset, setoverlayoffset] = useState()

    const [overlayrender, setoverlayrender] = useState()

    const toastermain = [
        {
            overlayindex: 0,
            overlayrender: <ToasterMain />,
        },
    ]

    const snackbarmain = [
        {
            overlayindex: 0,
            overlayrender: <SnackbarMain snackbarmainstatic={{snackbarmainid: 'postfooter', snackbarmainindex: 0}} />,
        },
    ]

    const overlay = [
        {
            overlayid: 'toastermain',
            overlayref: toastermain,
        },
        {
            overlayid: 'snackbarmain',
            overlayref: snackbarmain,
        },
    ]
    
    const [appstatic, setappstatic] = useApp(overlay, appmainstate?.appmainidtwo, 0)
    
    useEffect(() => {
        if(appstatic && appmainstate && appmainstate.appmainid === 'overlay'){
            setoverlayrender(appstatic[0].overlayrender)
        }
    }, [appstatic, appmainstate])
    
    useEffect(() => {
        window.addEventListener('scroll', ll)
        return () => window.removeEventListener('scroll', ll)
    }, [])

    const ll = () => {
        setoverlayoffset(window.pageYOffset)
    }

  return (
    <div>
        <main className="">
            <section className="">
                {overlayrender && overlayrender}
            </section>
        </main>
    </div>
  )
}