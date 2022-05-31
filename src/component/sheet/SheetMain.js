import React from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ContextMain } from '../../context/contextmain'
import { client } from '../../lib/sanity'
// import MailForm from '../../page/mail/MailForm'
import ExitMain from '../exit/ExitMain'

function SheetMain() {
    const {
        appmainstate, setappmainstate,

    } = useContext(ContextMain)
    const ref = useRef(null)
    const reftwo = useRef(null)

    const [sheetmainpage, setsheetmainpage] = useState(0)
    const [sheetmainrender, setsheetmainrender] = useState()
    const [sheetmainimage, setsheetmainimage] = useState()
    const [sheetmainlength, setsheetmainlength] = useState()

    const [sheetmainvalue, setsheetmainvalue] = useState()
    const [sheetmainvalueone, setsheetmainvalueone] = useState()
    const [sheetmainvaluetwo, setsheetmainvaluetwo] = useState()
    const [sheetmainvaluethree, setsheetmainvaluethree] = useState()
    const [sheetmainvaluefour, setsheetmainvaluefour] = useState()

    const mailform = [
        {
            sheetmainimage: 'https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
            sheetmainrender: [
                {
                    sheetmaintitle: "First up, what's your name?",
                    sheetmainvalue: <input ref={ref} className="l-input" />,
                },
                {
                    sheetmaintitle: "And your surname?",
                    sheetmainvalue: <input ref={reftwo} className="l-input" />,
                },
                {
                    sheetmaintitle: "Great! Now what's your email, _____?",
                    sheetmainvalue: <input ref={ref} className="l-input" />,
                    sheetmainentitle: 'Get weekly mail',
                    sheetmainaction: async () => {
                        setsheetmainvalue(uuidv4())
                        const doc = {
                            _id: sheetmainvalue,
                            _type: 'mail',
                            mailid: sheetmainvalue,
                            mailfullname: sheetmainvalueone,
                            mailemail: sheetmainvaluetwo,
                        }
                        await client.createOrReplace(doc).then(() => {
                        });
                    }
                },
                // {
                //     mailformtitle: "Finally, do you accept our Privacy Policy?",
                // },
            ],
            sheetmainaction: () => {

            },
        }
    ]

    const sheetmain = [
        {
            sheetmainid: 'mailform',
            sheetmainref: mailform,
        }
    ]

    useEffect(() => {
        if(appmainstate && appmainstate.appmainredirect === 'sheetmain'){
            const filter = sheetmain.filter(data => data.sheetmainid === appmainstate.appmainid)
            const filtertwo = filter[0].sheetmainref.filter(data => filter[0].sheetmainref.indexOf(data) === 0)
            const filterthree = filtertwo[0].sheetmainrender.filter(data => filtertwo[0].sheetmainrender.indexOf(data) === sheetmainpage)
            setsheetmainrender(filterthree[0])
            setsheetmainimage(filtertwo[0].sheetmainimage)
            setsheetmainlength(filtertwo[0].sheetmainrender.length)
        }
    }, [appmainstate, sheetmainpage])

  return (
    <div>
        <main className="w-screen flex flex-col md:grid md:grid-cols-12  bg-gray-900 text-white">
            <section className="relative h-screen md:col-span-7 ">
                <ExitMain />
                <div className="h-full flex flex-col items-center justify-center">
                    <figcaption className="">
                        <h1 className="m-h6">{sheetmainpage + 1}/{sheetmainlength}</h1>
                        <br />
                        <h1 className="text-3xl  l-h6 font-serif text-white">{sheetmainrender?.sheetmaintitle}</h1>
                        <br />
                        <article className="">
                        {sheetmainrender?.sheetmainvalue}
                        </article>
                    </figcaption>
                    <figure className="">
                        {sheetmainpage < sheetmainlength ? (<>
                            <button className="w-full  m-button">Next</button>
                        </>) : (<>
                            <button onClick={sheetmainrender?.sheetmainaction} className="w-full  l-button">{sheetmainrender?.sheetmainentitle}</button>
                        </>)}
                    </figure>
                </div>
                <div className="absolute bottom-0 right-0">
                    <button onClick={() => setsheetmainpage(sheetmainpage - 1)} className="m-button">-</button>                    
                    <button onClick={() => setsheetmainpage(sheetmainpage + 1)} className="m-button">+</button>                    
                </div>
            </section>
            <section className="md:col-span-5">
                <img src={sheetmainimage && sheetmainimage} alt="" className="" />
            </section>
        </main>
    </div>
  )
}

export default SheetMain