import { motion } from 'framer-motion'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RiCloseCircleFill, RiCloseFill, RiContrastDropLine, RiEyeFill, RiEyeLine, RiMore2Fill, RiShareFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { ContextMain } from '../../context/contextmain'
import { urlFor } from '../../lib/sanity'
import ContactArticle from '../../page/contact/ContactArticle'
// import MenuArticle from '../../page/menu/MenuArticle'
import PostArticle from '../../page/post/PostArticle'
import PostIndex from '../../page/post/PostIndex'
import CardMain from '../card/CardMain'
import ChoiceMain from '../choice/ChoiceMain'

function PreviewMain() {
    const {
        appmainstate, setappmainstate,

    } = useContext(ContextMain)
    // const navigate = useNavigate()
    const [previewmainpage, setpreviewmainpage] = useState(0)

    const [previewmainrender, setpreviewmainrender] = useState()

    const postarticle = [
        {
            previewmainindex: 0,
            previewmainrender: <PostArticle />,
        },
        {
            previewmainindex: 1,
            previewmainrender: () => {
                return <section className="">
                    <figure className="p-[20px] flex flex-col justify-center">
                        <img src={urlFor(appmainstate?.appmainimage)} alt="" className="" />
                        <CardMain     
                            cardmainid={'shareimg'}
                            cardmainidtwo={'inform'}
                            cardmainidthree={'feedback'}
                            cardmainmessage={[
                                {
                                    'success': `Photo by ` + appmainstate?.appmainsource,
                                }
                            ]} 
                            cardmainindex={0} 
                            />
                    </figure>
                </section>
            },
        },
        {
            previewmainindex: 2,
            previewmainrender: <PostIndex />,
        },
    ]

    const contactarticle = [
        {
            previewmainindex: 0,
            previewmainrender: <ContactArticle />,
        }
    ]

    // const menuarticle = [
    //     {
    //         previewmainindex: 0,
    //         previewmainrender: <MenuArticle />,
    //     }
    // ]

    const userarticle = [
        {
            previewmainindex: 0,
            previewmainrender: <section className="flex flex-col md:grid md:grid-cols-12">
                <figcaption className="md:col-span-7">
                <ChoiceMain choicemainid={'userlabel'} choicemainindex={0} />
                <br />
                </figcaption>
                <figure className="relative hidden md:flex md:col-span-5 h-full items-start">
                    <div className="absolute top-0 left-0 w-full h-full  bg-black opacity-5" />
                    <div className="w-full h-[90vh] flex justify-center items-center overflow-hidden">
                    <img src="https://ouch-cdn2.icons8.com/kXjxMSrtriPzK2Nzo4zcsd0RjyrD3MHBbNLIJFEQJtM/rs:fit:256:186/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTkw/LzhhNGM1MzllLWJi/MDItNDkwNS05MmQz/LTVhMDRmY2FmMWVh/OC5wbmc.png" alt="" className=" grayscale" />
                    </div>
                </figure>
            </section>
        }
    ]

    const previewmain = [
        {
            previewmainid: 'postarticle',
            previewmaindata: postarticle, 
        },
        {
            previewmainid: 'contactarticle',
            previewmaindata: contactarticle, 
        },
        // {
        //     previewmainid: 'menuarticle',
        //     previewmaindata: menuarticle, 
        // },
        {
            previewmainid: 'userarticle',
            previewmaindata: userarticle, 
        },

    ]

    useEffect(() => {
        if(appmainstate.appmainidtwo === 'previewmain' || appmainstate.appmainredirect === 'previewmain'){
        const filter = previewmain.filter(data => data.previewmainid === appmainstate.appmainid)
        const filtertwo = filter[0].previewmaindata.filter(data => data.previewmainindex === appmainstate.appmainpage)
        setpreviewmainrender(filtertwo[0].previewmainrender)
      }
    }, [appmainstate])

  return (
    <div>
        <br />
        <motion.main initial={{y: 100}} animate={{ y: 0}} exit={{y: 0}}  className="relative w-screen md:w-[1000px] h-screen md:h-full  mx-auto border bg-white overflow-hidden shadow-2xl duration-100">
            <RiCloseFill onClick={() => {
                setappmainstate({
                    appmainboolean: false
                })
            }} className="z-30 absolute top-5 right-5 text-4xl  text-white bg-black cursor-pointer" />
            {previewmainrender && previewmainrender}
        </motion.main>
    </div>
  )
}

export default PreviewMain