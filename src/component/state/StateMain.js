import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { statemain } from '../../content/contentmain'

import { ContextMain } from '../../context/contextmain'

function StateMain() {
    const {
        statemainstate,

    } = useContext(ContextMain)

    const [statemainrender, setstatemainrender] = useState()

    useEffect(() => {
      if(statemainstate){
          const filter = statemain.filter(data => data.statemainid === statemainstate.statemainid)
          const filtertwo = filter[0].statemainref.filter(data => data.statemainidtwo === statemainstate.statemainidtwo)
          setstatemainrender(filtertwo)

      }
    }, [statemainstate])

  return (
    <div>
        <main className="">
            {statemainrender?.map(data => (<>
            <section className="max-w-[350px] mx-auto  text-center">
                <div className="">
                  <br />
                  <img src={data?.statemainimage} alt="" className="max-w-[200px] mx-auto" />
                  <br />
                  <br />
                  <h1 className="m-h5  font-serif">{data?.statemaintitle}</h1>
                </div>
            </section>
            </>))}
        </main>
    </div>
  )
}

export default StateMain