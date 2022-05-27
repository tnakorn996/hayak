import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiContrastDropLine, RiFileCopyLine } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'
import CategorySection from '../../page/catagory/CategorySection'
import StackMain from '../Stack/StackMain'
import StateMain from '../state/StateMain'
import OpendeskMain from '../opendesk/OpendeskMain'
import SocialMain from '../../page/social/SocialMain'
import FeedbackSection from '../../page/feedback/FeedbackSection'
import { useLocation } from 'react-router-dom'

function ModalMain() {
    const {
        appmainstate, setappmainstate,
        setstatemainstate,
        setspreadmainstate,
        setsnackbarmainstate,

    } = useContext(ContextMain)
    const location = useLocation()
    const [modalmainindex, setmodalmainindex] = useState(0)
    const [modalmaintitle, setmodalmaintitle] = useState()
    const [modalmainrender, setmodalmainrender] = useState()
    const [modalmainaction, setmodalmainaction] = useState()
    const [modalmainentitle, setmodalmainentitle] = useState()
    
    const sharesection = [
        {
            modalmainindex: 0,
            modalmaintitle: 'Share Post',
            modalmainrender: () => {
                return (<>
                <section className="flex justify-center ">
                    <figure className="h-[250px] w-[250px] flex justify-center items-center ">
                        <RiContrastDropLine className='absolute text-3xl w-[50px] h-[50px]  bg-white rounded-full' />
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://hayak.vercel.app/${appmainstate?.appmainparam}`} alt="" />
                    </figure>
                </section>
                 <br />
                <section className="">
                    <article className="grid grid-cols-12 ">
                        <figcaption className="col-span-10">
                            <h1 className="m-h3">Blog Address</h1>
                            <h1 className="l-h2">https://hayak.vercel.app/{appmainstate?.appmainparam}</h1>
                        </figcaption>
                        <figure className="col-span-2 flex justify-center items-center ">
                            <RiFileCopyLine className='m-h3' />
                        </figure>
                    </article>
                </section>
                </>)
            },
            modalmainaction: <button onClick={() => {
                    navigator.clipboard.writeText(`https://hayak.vercel.app/${appmainstate?.appmainparam}`) 
                    setsnackbarmainstate({
                        snackbarmainid: 'sharefooter',
                        snackbarmainidtwo: 'success',
                        snackbarmainidthree: 'sharedi',
                    })
                    setappmainstate({
                        appmainid: 'overlay',
                        appmainidtwo: 'snackbarmain',
                    })
                }} className="m-button">Copy to clipboard</button>,

        },
        {
            modalmainindex: 1,
            modalmaintitle: 'Share Post',
            modalmainrender: <SocialMain param={appmainstate.appmainparam} />,
            modalmainaction: '',
        },
    ]

    const categorysection = [
        {
            modalmainindex: 0,
            modalmaintitle: 'Choose Category',
            modalmainrender: <CategorySection />,
            modalmainaction: () => {
                // setcategoryindextrigger()
            },
        },
    ]

    const statesection = [
        {
            modalmainindex: 0,
            modalmaintitle: '',
            modalmainrender: <StateMain />,
            modalmainaction: <button onClick={() => {
                    setappmainstate('')
                }} className="m-button">Continue</button>,
        }
    ]

    const rtasection = [
        {
            modalmainindex: 0,
            modalmaintitle: '',
            modalmainrender: () => {
                return <section className="">
                    <StackMain />
                </section>
            },
            modalmainaction: <button onClick={() => {
                    setappmainstate('')
                }} className="m-button">Continue</button>,
        }
    ]

    const postsection = [
        {
            modalmainindex: 0,
            modalmaintitle: '',
            modalmainrender: () => {
                return <OpendeskMain />
            }
        }
    ]

    const feedbacksection = [
        {
            modalmainindex: 0,
            modalmaintitle: '',
            modalmainrender: () => {
                return <FeedbackSection />
            },
        }
    ]

    const modalmain = [
        {
            modalmainid: 'sharesection',
            modalmaindata: sharesection,
        },
        {
            modalmainid: 'categorysection',
            modalmaindata: categorysection,
        },
        {
            modalmainid: 'statesection',
            modalmaindata: statesection,
        },
        {
            modalmainid: 'rtasection',
            modalmaindata: rtasection,
        },
        {
            modalmainid: 'postsection',
            modalmaindata: postsection,
        },
        {
            modalmainid: 'feedbacksection',
            modalmaindata: feedbacksection,
        },
    ]

    useEffect(() => {
        if(appmainstate && appmainstate.appmainidtwo === 'modalmain'){
            const filter = modalmain.filter(data => data.modalmainid === appmainstate.appmainid)
            const filtertwo = filter[0].modalmaindata.filter(data => data.modalmainindex === appmainstate.appmainidthree)
            setmodalmaintitle(filtertwo[0].modalmaintitle)
            setmodalmainrender(filtertwo[0].modalmainrender)
            setmodalmainaction(filtertwo[0].modalmainaction)
            setmodalmainentitle(filtertwo[0].modalmainentitle)
        }
      
    }, [appmainstate])

  return (
    <div>
        <br />
        <motion.main initial={{y: 200}} animate={{ y:0}} exit={{y: 200}} className="w-screen md:max-w-[700px] bg-white border-2 border-black">
            <section className="p-[20px] text-center">
                <h1 className="m-h4 font-serif">{modalmaintitle && modalmaintitle}</h1>
            </section>
            <hr />
            <section className="p-[20px]">
                <h1 className="">{modalmainrender}</h1>
            </section>
            <hr />
            <section className="p-[20px] grid grid-flow-col">
                <button onClick={() => {
                    setappmainstate({
                        appmainboolean: false,
                    })
                }} className="l-button">Cancel</button>
                {modalmainaction && modalmainaction}
            </section>
        </motion.main>
    </div>
  )
}

export default ModalMain