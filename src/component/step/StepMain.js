import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { postui, postul } from '../../content/contentmantwo'
import { ContextMain } from '../../context/contextmain'

function StepMain() {
    const {
        stepmainstate,

    } = useContext(ContextMain)
    const [stepmainrender, setstepmainrender] = useState()
    const [stepmainrendertwo, setstepmainrendertwo] = useState()

    const postdatalist = [
        {
            stepmaintitle: 'Description',
            stepmainrender: postui.filter(data => data.breadmainid === stepmainstate.stepmainid),
            stepmainboolean: true,
        },
        {
            stepmaintitle: 'Overview',
            stepmainrender: postui.filter(data => data.breadmainid === stepmainstate.stepmainid),
            stepmainboolean: false,

        },

        {
            stepmaintitle: 'Comments',
            stepmainrender: postui.filter(data => data.breadmainid === 'comment'),
            stepmainboolean: null,

        },
    ]

    const stepmain = [
        {
            stepmainid: 'postdatalist',
            stepmainref: postdatalist,
        },
        // {
        //     stepmainid: 'categorydatalist',
        //     stepmainref: categorydatalist,
        // },
    ]

    useEffect(() => {
      if(stepmainstate) {
            const filter = stepmain.filter(data => data.stepmainid === stepmainstate.stepmainid)
            const empty = []
            filter[0].stepmainref.forEach(data => {
                if(stepmainstate.stepmainboolean === true){

                }
                if(stepmainstate.stepmainboolean !== false){

                }
            })
            // setstepmainrender(filter[0].stepmainref)
            // setstepmainrendertwo(filtertwo[0].stepmainrender)

      }
    }, [stepmainstate])

  return (
    <div>
        <main className="">
            <br />
            {/* <section className="flex flex-row gap-20  border-b">
                {stepmainrender?.map(data => (<>
                <button className="">
                    <br />
                    <h1 className="l-h3">{data?.stepmaintitle}</h1>
                    <br />
                </button>
                </>))}
            </section>
            <section className="">
                {stepmainrendertwo && stepmainrendertwo}
            </section> */}
        </main>
    </div>
  )
}

export default StepMain