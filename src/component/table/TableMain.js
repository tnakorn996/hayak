import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { ContextMain } from '../../context/contextmain'

function TableMain() {
    const {
        // postselect, postlink,
        blockselect, blocklink,

        tabmainstate, settabmainstate,

    } = useContext(ContextMain)
    const [tablemainrender, settablemainrender] = useState()
    const [tablemainrendertwo, settablemainrendertwo] = useState()

    const tabmain = [
        // {
        //     tabmainid: 'postselect',
        //     tabmainref: postselect,
        // },
        {
            tabmainid: 'blockselect',
            tabmainref: blockselect,
        },
    ]

    const blemain = [
        {
            blemainid: 'blocklink',
            blemainref: blocklink,
        },
    ]

    useEffect(() => {
        // console.log('tabmainstate :>> ', tabmainstate);
      if(tabmainstate){
          const filter = tabmain.filter(data => data?.tabmainid === tabmainstate.tabmainid)
          const filtertwo = blemain.filter(data => data?.blemainid === tabmainstate.tabmainidtwo)
          const filterthree = filtertwo[0].blemainref.filter(data => data?.tabmainid === tabmainstate.tabmainidthree)
            settablemainrender(filter[0].tabmainref)
            settablemainrendertwo(filterthree)
            // settablemainrenderthree(filterthree)
      }
    }, [tabmainstate])

  return (
    <div>
        <main className="">
            <section className="">
                <div className="flex flex-row gap-10">
                {tablemainrender?.map(data => (<>
                <article onClick={() => {
                    settabmainstate({
                        tabmainid: tabmainstate.tabmainid,
                        tabmainidtwo: tabmainstate.tabmainidtwo,
                        tabmainidthree: data?.tabmainid,
                    })
                }} className="">
                    <br />
                    <h1 className="l-h3">{data?.tabmaintitle}</h1>
                    <br />
                </article>
                </>))}
                </div>
            </section>

            <section className="">
                {tablemainrendertwo?.map(data => (<>
                <article className="">
                    <br />
                    <h1 className="l-h3">{data?.blemaintitle}</h1>
                    <br />
                </article>
                <article className="">
                    {data?.blemainrender}

                </article>
                </>))}
            </section>

        </main>
    </div>
  )
}

export default TableMain