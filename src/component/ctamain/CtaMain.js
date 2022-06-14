import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiExternalLinkLine, RiShareLine } from 'react-icons/ri'

import { ContextMain } from '../../context/contextmain'

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
            }} className="flex flex-row justify-center gap-3 items-center  m-h3 w-full m-button">Share post <RiShareLine /></button>,
            ctamainrendertwo: <button onClick={() => {
                setappmainstate({
                            appmainid: 'commentdialog',
                            appmainidtwo: 'sideboardmain',
                            appmainboolean: true,
                })
            }} className="m-h3 w-full l-button  border border-black">Give your comment</button>,
        },
        {
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
                // setappmainstate({
                //             appmainid: 'sharesection',
                //             appmainidtwo: 'modalmain',
                //             appmainidthree: 0,
                //             appmainparam: param.id,
                //             appmainboolean: true,
                //         })
            }} className="flex flex-row justify-center gap-3 items-center m-h3 w-full m-button">Share recipes <RiShareLine /></button>,
            ctamainrendertwo: <button onClick={() => {
                setappmainstate({
                            appmainid: 'commentdialog',
                            appmainidtwo: 'sideboardmain',
                            appmainboolean: true,
                })
            }} className="m-h3 w-full l-button  border border-black">Give your comment</button>,
        },
    ]

    const placeembed = [
        {
            ctamainrender: <button onClick={() => {
                window.open(ctamainstate?.ctamainrender?.postplaceurl, '_blank').focus();
            }} className="flex flex-row justify-center gap-3 items-center  m-h3 w-full m-button">Owner website <RiExternalLinkLine /></button>,
            ctamainrendertwo: <button onClick={() => {
                setappmainstate({
                            appmainid: 'commentdialog',
                            appmainidtwo: 'sideboardmain',
                            appmainboolean: true,
                })
            }} className="m-h3 w-full l-button  border border-black">Give your comment</button>,
        },
    ]

    const productembed = [
        {
            ctamainrender: () => {

                return <button onClick={() => {
                    window.open(ctamainstate?.ctamainrender?.placeplaceid[1]?.postplaceurl || ctamainstate?.ctamainrender?.placeplaceid[0]?.postplaceurl, '_blank').focus();
                }} className="flex flex-row justify-center gap-3 items-center m-h3 w-full m-button">Seller website <RiExternalLinkLine /></button>
            },
            ctamainrendertwo: () => {
                return <button onClick={() => {
                    window.open(ctamainstate?.ctamainrender?.postproducturl, '_blank').focus();
                }} className="m-h3 w-full l-button  border border-black">Check avability product</button>
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

    
    useEffect(() => {
        if(ctamainstate) {
            if (ctamainstate.ctamainidtwo === true) {
                const filter = ctamain.filter(data => data.ctamainid === ctamainstate.ctamainid)
                const filtertwo = filter[0].ctamainref.filter(data => filter[0].ctamainref.indexOf(data) === 1)
                setctamainrender(filtertwo[0].ctamainrender)
                setctamainrendertwo(filtertwo[0].ctamainrendertwo)
            } 
            else {
                const filter = ctamain.filter(data => data.ctamainid === ctamainstate.ctamainid)
                const filtertwo = filter[0].ctamainref.filter(data => filter[0].ctamainref.indexOf(data) === 0)
                setctamainrender(filtertwo[0].ctamainrender)
                setctamainrendertwo(filtertwo[0].ctamainrendertwo)
            }
        }
    }, [ctamainstate])

  return (

    
    <div>
        <main className="">
            <section className="flex justify-center items-center gap-1 flex-col md:flex-row">
                        {ctamainrender && ctamainrender}
                        {ctamainrendertwo && ctamainrendertwo}
            </section>
        </main>
    </div>
  )
}

export default CtaMain