import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RiCloseCircleFill, RiCloseFill, RiContrastDropLine, RiEyeFill, RiEyeLine, RiMore2Fill, RiShareFill } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { ContextMain } from '../../context/contextmain'
import ContactArticle from '../../page/contact/ContactArticle'
import PostArticle from '../../page/post/PostArticle'
import HorizonMain from '../post/HorizonMain'

function PreviewMain() {
    const {
        appmainstate, setappmainstate,

        postupdatedat,

    } = useContext(ContextMain)
    const navigate = useNavigate()

    const [previewmainrender, setpreviewmainrender] = useState()

    const postarticle = [
        {
            previewmainindex: 0,
            previewmainrender: <PostArticle />,
        }
    ]

    const contactarticle = [
        {
            previewmainindex: 0,
            previewmainrender: <ContactArticle />,
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
    ]

    useEffect(() => {
        if(appmainstate && appmainstate.appmainidtwo === 'previewmain'){
        const filter = previewmain.filter(data => data.previewmainid === appmainstate.appmainid)
        const filtertwo = filter[0].previewmaindata.filter(data => data.previewmainindex === 0)
        setpreviewmainrender(filtertwo[0].previewmainrender)
      }
    }, [appmainstate])

  return (
    <div>
        <br />
        <main className="relative max-w-[900px] mx-auto bg-white overflow-hidden shadow-2xl">
            <RiCloseFill onClick={() => {
                setappmainstate({
                    appmainboolean: false
                })
            }} className="z-10 absolute top-3 right-3 text-4xl  text-white bg-black rounded-full" />
            {previewmainrender && previewmainrender}
        </main>
    </div>
  )
}

export default PreviewMain