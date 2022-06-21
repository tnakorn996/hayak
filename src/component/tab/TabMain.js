import React, { useContext, useEffect, useState } from 'react'
import { ContextMain } from '../../context/contextmain'
import ZoomMain from '../zoom/ZoomMain'

function TabMain({
    tabmainstatic,

}) {
    const {
        searchmainstate, setsearchmainstate,

    } = useContext(ContextMain)
    // const [tabmainindex, settabmainindex] = useState(1)

    const [tabmainrender, settabmainrender] = useState()
    const [tabmainrendertwo, settabmainrendertwo] = useState()


    const searchlegend = [
        {
            tabmainindex: 0,
            tabmaintitle: 'Search',
            tabmainrender: <ZoomMain zoommainid={'searchinput'} zoommainslice={3} />
        },
        {
            tabmainindex: 1,
            tabmaintitle: 'Reading List',
            tabmainrender: <ZoomMain zoommainid={'favouriteinput'} zoommainslice={10} />
        },
    ]

    const favouritelegend = [
        {
            tabmainindex: 0,
            tabmaintitle: 'Search',
            tabmainrender: <ZoomMain zoommainid={'searchinput'} zoommainslice={3} />
        },
        {
            tabmainindex: 1,
            tabmaintitle: 'Reading List',
            tabmainrender: <ZoomMain zoommainid={'favouriteinput'} zoommainslice={10} />
        },
    ]

    const tabmain = [
        {
            tabmainid: 'searchlegend',
            tabmainref: searchlegend,
        },
        {
            tabmainid: 'favouritelegend',
            tabmainref: favouritelegend,
        }
    ]

    useEffect(() => {
        if(tabmainstatic && searchmainstate){

            const filter = tabmain.filter(data => data.tabmainid === tabmainstatic.tabmainid)
            const empty = []
            for(const data of filter[0].tabmainref) {
                empty.push({tabmainindex: data.tabmainindex, tabmaintitle: data.tabmaintitle})
            }
            settabmainrender(empty)

            const filtertwo = tabmain.filter(data => data.tabmainid === tabmainstatic.tabmainid)
            const filterthree = filtertwo[0].tabmainref.filter(data => data.tabmainindex === searchmainstate.tabmainindex)
            settabmainrendertwo(filterthree[0].tabmainrender)

        }
    }, [tabmainstatic, searchmainstate])
    
  return (
    <div>
        <main className="">
            <section className="flex flex-row  border-b">
                {tabmainrender && tabmainrender?.map(data => (<>
                <button onClick={() => {
                    setsearchmainstate({tabmainindex: data?.tabmainindex})
                }} className={`w-full md:w-fit l-button duration-75 ${searchmainstate?.tabmainindex === data?.tabmainindex && '!border-b-2 !border-black'}`}>{data?.tabmaintitle}</button>
                </>))}
            </section>
            <section className="">
                {tabmainrendertwo}
            </section>
        </main>
    </div> 
  )
}

export default TabMain