import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { ContextMain } from '../../context/contextmain'
import MailForm from '../../page/mail/MailForm'

function SheetMain() {
    const {
        appmainstate, setappmainstate,

    } = useContext(ContextMain)
    const [sheetmainpage, setsheetmainpage] = useState(0)

    const [sheetmainrender, setsheetmainrender] = useState()
    const [sheetmainimage, setsheetmainimage] = useState()
    const [sheetmainlength, setsheetmainlength] = useState()

    const mailform = [
        {
            sheetmainimage: 'https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
            sheetmainrender: [
                {
                    sheetmaintitle: "First up, what's your name?",
                    
                },
                {
                    sheetmaintitle: "And your surname?",
                    
                },
                // {
                //     mailformtitle: "Great! Now what's your email, _____?",
                // },
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
    }, [])
    // console.log('sheetmainonchange :>> ', sheetmainonchange);

  return (
    <div>
        <main className="w-screen flex flex-col md:grid md:grid-cols-12  bg-gray-900 text-white">
            <section className="relative h-screen md:col-span-7 flex items-center justify-center">
                <div className="">
                <h1 className="m-h6">{sheetmainpage + 1}/{sheetmainlength}</h1>
                <br />
                <h1 className="text-3xl  l-h6 font-serif text-white">{sheetmainrender?.mailformtitle}</h1>
                <br />
                {/* <input onChange={sheetmainonchange} value={sheetmainvalue} className="l-input" /> */}
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