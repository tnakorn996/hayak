import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { ContextMain } from '../../context/contextmain'

function ToastMain() {
    const {
        appmainstate, setappmainstate,

    } = useContext(ContextMain)
    const [toastmainrender, settoastmainrender] = useState()

    const planfigcaption = [
        {
            toastmaintitle: 'Want to Support HAYAK team?',
            toastmainsubtitle: 'Consider to donate today', 
            toastmainentitle: 'Donate Now', 
            toastmainaction: () => setappmainstate({
                appmainid: 'plansummary',
                appmainredirect: 'ontromain',
            }), 
        }
    ]

    const toastmain = [
        {
            toastmainid: 'planfigcaption',
            toastmainref: planfigcaption,
        }
    ]

    useEffect(() => {
      if(appmainstate && appmainstate.appmainidtwo === 'toastmain'){
          const filter = toastmain.filter(data => data.toastmainid === appmainstate.appmainidthree)
          const filtertwo = filter[0].toastmainref.filter(data => filter[0].toastmainref.indexOf(data) === 0)
          settoastmainrender(filtertwo[0])
        }
    }, [appmainstate])
    
  return (
    <div>
        <main className="w-full fixed bottom-0 left-0 bg-black text-white">
            <div className="px-[60px] max-w-[1200px] mx-auto flex flex-col md:grid md:grid-cols-12 items-center text-center">
            <section className="md:col-span-9">
                <br /><br />
                <h1 className="m-h6 font-semibold">{toastmainrender?.toastmaintitle}</h1>
                <h1 className="l-h3">{toastmainrender?.toastmainsubtitle}</h1>
                <br />
            </section>
            <section className="md:col-span-3">
                <br />
                <button onClick={toastmainrender?.toastmainaction} className="l-button">{toastmainrender?.toastmainentitle}</button>
                <br /><br />
            </section>
            </div>
        </main>
    </div>
  )
}

export default ToastMain