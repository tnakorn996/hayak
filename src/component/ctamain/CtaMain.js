import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ContextMain } from '../../context/contextmain'

function CtaMain() {
    const {
        setappmainstate,
        ctamainstate,

    } = useContext(ContextMain)
    const param = useParams()

    const [ctamainrender, setctamainrender] = useState()
    const [ctamainrendertwo, setctamainrendertwo] = useState()

    const postembed = [
        {
            ctamainrender: <button onClick={() => {
                setappmainstate({
                            appmainid: 'sharesection',
                            appmainidtwo: 'modalmain',
                            appmainidthree: 0,
                            appmainparam: param.id,
                            appmainboolean: true,
                        })
            }} className="m-h3 w-full m-button">Share post</button>,
            ctamainrendertwo: <button onClick={() => {
                setappmainstate({
                            appmainid: 'commentdialog',
                            appmainidtwo: 'sideboardmain',
                            appmainboolean: true,
                })
            }} className="m-h3 w-full l-button  border border-black">Check avability comments</button>,
        },
        {
            ctamainrender: <button onClick={() => {
                setappmainstate({
                            appmainid: 'sharesection',
                            appmainidtwo: 'modalmain',
                            appmainidthree: 0,
                            appmainparam: param.id,
                            appmainboolean: true,
                        })
            }} className="m-h3 w-full m-button">Share recipes</button>,
            ctamainrendertwo: <button onClick={() => {
                setappmainstate({
                            appmainid: 'commentdialog',
                            appmainidtwo: 'sideboardmain',
                            appmainboolean: true,
                })
            }} className="m-h3 w-full l-button  border border-black">Check avability comments</button>,
        },
    ]

    const placeembed = [
        {
            ctamainrender: <button onClick={() => {
                window.open(ctamainstate?.ctamainrender?.postplaceurl, '_blank').focus();
            }} className="m-h3 w-full m-button">Seller website</button>,
            ctamainrendertwo: <button onClick={() => {
                setappmainstate({
                            appmainid: 'commentdialog',
                            appmainidtwo: 'sideboardmain',
                            appmainboolean: true,
                })
            }} className="m-h3 w-full l-button  border border-black">Check avability reviews</button>,
        },
    ]

    const productembed = [
        {
            ctamainrender: <button onClick={() => {
                window.open(ctamainstate?.ctamainrender?.placeplaceid[0]?.postplaceurl, '_blank').focus();
            }} className="m-h3 w-full m-button">Seller website</button>,
            ctamainrendertwo: <button onClick={() => {
                window.open(ctamainstate?.ctamainrender?.postproducturl, '_blank').focus();
            }} className="m-h3 w-full l-button  border border-black">Check avability product</button>,
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
            <section className="">
                        <br />
                        {ctamainrender && ctamainrender}
                        <br /><br />
                        {ctamainrendertwo && ctamainrendertwo}
            </section>
        </main>
    </div>
  )
}

export default CtaMain