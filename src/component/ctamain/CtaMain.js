import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiExternalLinkLine, RiShareLine } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'
import useApp from '../../hook/useApp'

function CtaMain() {
    const {
        setappmainstate,
        ctamainstate,
        settabmainstate,
        setsharemainstate,

    } = useContext(ContextMain)

    const [ctamainrender, setctamainrender] = useState()
    const [ctamainrendertwo, setctamainrendertwo] = useState()

    const postembed = [
        {
            ctamainindex: 0,
            ctamainrender: <button onClick={() => {
                        settabmainstate({
                          tabmainid: 'postoption',
                          tabmainparam: ctamainstate?.ctamainrender?.postid,
                          // tabmainlocation: location.pathname,
                          tabmainimage: ctamainstate?.ctamainrender?.posthero,
                          tabmaintitle: ctamainstate?.ctamainrender?.posttitle,
                        })
                        setappmainstate({
                          appmainid: 'postoption',
                          appmainidtwo: 'opendeskmain',
                          appmainindex: 1,
                          appmainparam: ctamainstate?.ctamainrender?.postid,
                          appmainboolean: true,
                        })
                        setsharemainstate({
                          sharemainparam: ctamainstate?.ctamainrender?.postid,
                        })
            }} className="m-h3 w-full m-button border-[1.5px] border-black">Share post</button>,
            ctamainrendertwo: <button onClick={() => {
                setappmainstate({
                            appmainid: 'commentdialog',
                            appmainidtwo: 'sideboardmain',
                            appmainboolean: true,
                })
            }} className="m-h3 w-full l-button  border-[1.5px] border-black">Give your comment</button>,
        },
        {
            ctamainindex: 1,
            ctamainrender: <button onClick={() => {
                        settabmainstate({
                          tabmainid: 'postoption',
                          tabmainparam: ctamainstate?.ctamainrender?.postid,
                          // tabmainlocation: location.pathname,
                          tabmainimage: ctamainstate?.ctamainrender?.posthero,
                          tabmaintitle: ctamainstate?.ctamainrender?.posttitle,
                        })
                        setappmainstate({
                          appmainid: 'postoption',
                          appmainidtwo: 'opendeskmain',
                          appmainparam: ctamainstate?.ctamainrender?.postid,
                          appmainboolean: true,
                        })
                        setsharemainstate({
                          sharemainparam: ctamainstate?.ctamainrender?.postid,
                        })
            }} className="m-h3 w-full m-button border-[1.5px] border-black">Share recipes</button>,
            ctamainrendertwo: <button onClick={() => {
                setappmainstate({
                            appmainid: 'commentdialog',
                            appmainidtwo: 'sideboardmain',
                            appmainboolean: true,
                })
            }} className="m-h3 w-full l-button   border-[1.5px] border-black">Give your comment</button>,
        },
    ]

    const placeembed = [
        {
            ctamainindex: 0,
            ctamainrender: <button onClick={() => {
                window.open(ctamainstate?.ctamainrender?.postplaceurl, '_blank').focus();
            }} className="m-h3 w-full m-button border-[1.5px] border-black">Owner website</button>,
            ctamainrendertwo: <button onClick={() => {
                setappmainstate({
                            appmainid: 'commentdialog',
                            appmainidtwo: 'sideboardmain',
                            appmainboolean: true,
                })
            }} className="m-h3 w-full l-button   border-[1.5px] border-black">Give your comment</button>,
        },
    ]

    const productembed = [
        {
            ctamainindex: 0,
            ctamainrender: () => {

                return <button onClick={() => {
                    window.open(ctamainstate?.ctamainrender?.placeplaceid[1]?.postplaceurl || ctamainstate?.ctamainrender?.placeplaceid[0]?.postplaceurl, '_blank').focus();
                }} className="flex flex-row justify-center gap-3 items-center m-h3 w-full m-button border-[1.5px] border-black">Seller website</button>
            },
            ctamainrendertwo: () => {
                return <button onClick={() => {
                    window.open(ctamainstate?.ctamainrender?.postproducturl, '_blank').focus();
                }} className="m-h3 w-full l-button   border-[1.5px] border-black">Check avability product</button>
            },
        },
    ]

    const ctamain = [
        {
            ctamainid: 'post',
            ctamainref: postembed,
        },
        {
            ctamainid: 'place',
            ctamainref: placeembed,
        },
        {
            ctamainid: 'product',
            ctamainref: productembed,
        },
    ]

    const [appstatic, setappstatic] = useApp(ctamain, ctamainstate?.ctamainid, ctamainstate?.ctamainidtwo ? 1 : 0)

    useEffect(() => {
        if(appstatic && ctamainstate) {
                setctamainrender(appstatic[0].ctamainrender)
                setctamainrendertwo(appstatic[0].ctamainrendertwo)
        }
    }, [appstatic, ctamainstate])

  return (
    <div>
        <main className="">
            <section className="flex justify-center items-center gap-1 flex-col md:flex-row ">
                {ctamainrender && ctamainrender}
                {ctamainrendertwo && ctamainrendertwo}
            </section>
        </main>
    </div>
  )
}

export default CtaMain