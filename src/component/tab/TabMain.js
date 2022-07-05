import { motion } from 'framer-motion'
import React, { useContext, useEffect, useRef, useState } from 'react'

import '../tab/tabmain.css';
import { ContextMain } from '../../context/contextmain'
import ZoomMain from '../zoom/ZoomMain'

function TabMain({
    reftwo,
    tabmainstatic,

}) {
    const {
        searchmainstate, setsearchmainstate,

    } = useContext(ContextMain)
    const tabmainref = useRef()
    // const [tabmainindex, settabmainindex] = useState(1)
    const [tabmainpagetouchstart, settabmainpagetouchstart] = useState()
    const [tabmainpagetouchend, settabmainpagetouchend] = useState()

    const [tabmainrender, settabmainrender] = useState()
    const [tabmainrendertwo, settabmainrendertwo] = useState()

    // const searchlegend = [
    //     {
    //         tabmainindex: 0,
    //         tabmaintitle: 'Search',
    //         tabmainrender: <section className="w-screen md:w-[55vw]  snap-start">
    //             <ZoomMain zoommainid={'searchinput'} zoommainslice={3} />
    //         </section>
    //     },
    //     {
    //         tabmainindex: 1,
    //         tabmaintitle: 'Reading List',
    //         tabmainrender: <section className="w-screen md:w-[55vw]  snap-start">
    //             <ZoomMain zoommainid={'favouriteinput'} zoommainslice={10} />
    //         </section>
    //     },
    // ]

    const favouritelegend = [
        {
            tabmainindex: 0,
            tabmaintitle: 'Search on TOI',
            tabmainrender: <section className="w-screen md:max-w-full mx-auto min-h-screen  snap-center duration-100">
                <ZoomMain zoommainid={'searchinput'} zoommainslice={3} />
            </section>
        },
        {
            tabmainindex: 1,
            tabmaintitle: 'My Favourite',
            tabmainrender: <section className="w-screen md:max-w-full mx-auto min-h-screen  snap-center duration-100">
                <ZoomMain zoommainid={'favouriteinput'} zoommainslice={10} />
            </section>
        },
    ]


    const rtalegend = [
        {
            tabmainindex: 0,
            tabmaintitle: 'Most Viewed',
            tabmainrender: <section className="w-screen md:max-w-full mx-auto  snap-center duration-100">
                <ZoomMain zoommainid={'rtainput'} zoommainslice={10} />
            </section>
        },
        {
            tabmainindex: 1,
            tabmaintitle: 'Most Recent',
            tabmainrender: <section className="w-screen md:max-w-full mx-auto  snap-center duration-100">
                <ZoomMain zoommainid={'rtainputtwo'} zoommainslice={10} />
            </section>
        },
    ]

    const tabmain = [
        // {
        //     tabmainid: 'searchlegend',
        //     tabmainref: searchlegend,
        // },
        {
            tabmainid: 'favouritelegend',
            tabmainref: favouritelegend,
        },
        {
            tabmainid: 'rtalegend',
            tabmainref: rtalegend,
        }
    ]

    useEffect(() => {
        if(tabmainstatic){

            const filter = tabmain.filter(data => data.tabmainid === tabmainstatic.tabmainid)
            const empty = []
            for(const data of filter[0].tabmainref) {
                empty.push({tabmainindex: data.tabmainindex, tabmaintitle: data.tabmaintitle})
            }
            settabmainrender(empty)

            const filtertwo = tabmain.filter(data => data.tabmainid === tabmainstatic.tabmainid)
            // settabmainrendertwo(filtertwo[0].tabmainref)
            const filterthree = filtertwo[0].tabmainref.filter(data => data.tabmainindex === searchmainstate.tabmainindex)
            settabmainrendertwo(filterthree[0].tabmainrender)
        }
    }, [tabmainstatic, searchmainstate])

    useEffect(() => {
        if(searchmainstate && searchmainstate === null){
            settabmainrender([])
            settabmainrendertwo([])
        }   
        if(searchmainstate && searchmainstate.tabmainindex === 0){
            tabmainref?.current?.scrollTo(0, 0)
        }
        if(searchmainstate && searchmainstate.tabmainindex === 1){
            tabmainref?.current?.scrollTo(3000, 0)
        }
    }, [searchmainstate, tabmainrender])

    function ll(first=this.props.first){
        // console.log('first :>> ', first.targetTouches[0].clientX);
        settabmainpagetouchstart(first.targetTouches[0].clientX)
    }
    function kk(first=this.props.first){
        // console.log('sec :>> ', first.targetTouches[0].clientX);
        settabmainpagetouchend(first.targetTouches[0].clientX)
    }
    function jj(){
        // console.log('thr :>> ');
        if(tabmainpagetouchstart - tabmainpagetouchend > 75){
            setsearchmainstate({tabmainindex: 1})
        }
        if(tabmainpagetouchstart - tabmainpagetouchend < - 75){
            setsearchmainstate({tabmainindex: 0})
        }
        // console.log('ref.current.scrollLeft :>> ', ref.current.scrollLeft);
    }

    // if(tabmainref === undefined) return null
    // if(searchmainstate === null) return null


  return (
    <div className=''>
        <main className="">
            <section className="w-full md:max-w-[55vw] mx-auto px-[20px] sticky z-10 top-0 left-0 flex flex-row  border-b-[1.5px] bg-white">
                {tabmainrender && tabmainrender?.map(data => (<>
                <button onClick={() => {
                    setsearchmainstate({tabmainindex: data?.tabmainindex})
                }} className={`w-full md:w-fit l-button duration-100 ${searchmainstate?.tabmainindex === data?.tabmainindex && '!border-b-[1.5px] !border-black'}`}>{data?.tabmaintitle}</button>
                </>))}
            </section>
            <section className="w-full md:max-w-[55vw] mx-auto">
                <figure ref={tabmainref} onTouchStart={p => ll(p)} onTouchMove={p => kk(p)} onTouchEnd={() => jj()} className="overflow-x-scroll overflow-y-clip no-scrollbar snap-x snap-mandatory scroll-smooth">
                    {tabmainrendertwo && tabmainrendertwo}
                </figure>
            </section>
        </main>
    </div> 
  )
}

export default TabMain