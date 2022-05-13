import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiContrastDropLine, RiFileCopyLine } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'
import CategorySection from '../../page/catagory/CategorySection'
import StateMain from '../state/StateMain'

function ModalMain() {
    const {
        appmainstate, setappmainstate,
        setstatemainstate,
        setcategoryindextrigger,

    } = useContext(ContextMain)
    const [modalmainstate, setmodalmainstate] = useState()
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
                    <figure className="h-[250px] w-[250px] flex justify-center items-center  m-article">
                        <RiContrastDropLine className='absolute text-3xl w-[50px] h-[50px]  bg-white rounded-full' />
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://hayak.vercel.app/${appmainstate?.appmainparam}`} alt="" />
                    </figure>
                </section>
                 <br />
                <section className="">
                    <article className="grid grid-cols-12  m-article">
                        <figcaption className="col-span-10">
                            <h1 className="m-h3">Blog Address</h1>
                            <h1 className="l-h2">https://hayak.vercel.app/{appmainstate?.appmainparam}</h1>
                        </figcaption>
                        <figure className="col-span-2 flex justify-center items-center  l-article">
                            <RiFileCopyLine className='m-h3' />
                        </figure>
                    </article>
                </section>
                </>)
            },
            modalmainaction: <button onClick={() => {
                    navigator.clipboard.writeText(`https://hayak.vercel.app/${appmainstate?.appmainparam}`) 
                    setstatemainstate({
                        statemainid: 'sharedl',
                        statemainidtwo: 'success',
                    })
                    setappmainstate({
                        appmainid: 'sharesection',
                        appmainidtwo: 'modalmain',
                        appmainidthree: 1,
                        appmainboolean: true,

                    })
                }} className="m-button">Copy to clipboard</button>,

        },
        {
            modalmainindex: 1,
            modalmaintitle: 'Share Post',
            modalmainrender: <StateMain />,
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

    const commentsection = [
        {
            modalmainindex: 0,
            modalmaintitle: 'Comment Status',
            modalmainrender: <StateMain />,
            modalmainaction: '',
        },
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
            modalmainid: 'commentsection',
            modalmaindata: commentsection,
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
        <motion.main initial={{y: 100}} animate={{ y: 0}} exit={{y: 100}} className="w-screen md:max-w-[500px] bg-white border shadow-2xl">
            <section className="p-[20px] text-center">
                <h1 className="m-h4">{modalmaintitle}</h1>
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