import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { ContextMain } from '../../context/contextmain'
import HomeHr from '../../page/home/HomeHr'

function WireMain() {
    const {
        wiremainstate,

    } = useContext(ContextMain)
    const [wiremainrender, setwiremainrender] = useState()

    const hometr = [
      {
        wiremainidtwo: 'homehr',
        wiremainrender: <HomeHr />,
      }
    ]

    const wiremain = [
        {
            wiremain: 'hometr',
            wireref: hometr,
        }
    ]
    useEffect(() => {
      if(wiremainstate) {
            const filter = wiremain.filter(data => data.wiremain === wiremainstate.wiremainid)
            const filtertwo = filter[0].wireref.filter(data => data.wiremainidtwo === wiremainstate.wiremainidtwo)
            setwiremainrender(filtertwo[0].wiremainrender)
      }
    }, [wiremainstate])
    
  return (
    <div>
        <main className="">
            <section className="flex flex-col md:grid md:grid-cols-2 gap-5">
              {wiremainrender && wiremainrender}
            </section>
        </main>
    </div>
  )
}

export default WireMain