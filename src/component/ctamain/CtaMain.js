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
            ctamainrender: <button className="m-h3 w-full m-button">Seller website</button>,
            ctamainrendertwo: <button className="m-h3 w-full l-button  border border-black">Check avability product</button>,
        },
        {
            ctamainrender: <button onClick={() => {
                setappmainstate({
                            appmainid: 'sharesection',
                            appmainidtwo: 'modalmain',
                            appmainparam: param.id,
                            appmainboolean: true,
                        })
            }} className="m-h3 w-full m-button">Share recipes</button>,
            ctamainrendertwo: <button className="m-h3 w-full l-button  border border-black">Check avability reviews</button>,
        },
    ]

    const placeembed = [
        {
            ctamainrender: <button className="m-h3 w-full m-button">Seller website</button>,
            ctamainrendertwo: <button className="m-h3 w-full l-button  border border-black">Check avability product</button>,
        },
    ]

    const productembed = [
        {
            ctamainrender: <button className="m-h3 w-full m-button">Seller website</button>,
            ctamainrendertwo: <button className="m-h3 w-full l-button  border border-black">Check avability product</button>,
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
            console.log('ctamainstate :>> ', ctamainstate);
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