import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { RiCheckboxBlankLine, RiCheckboxLine, RiCheckFill, RiCheckLine, RiCloseLine, RiHeartFill, RiHeartLine } from 'react-icons/ri';

import '../pta/ptamain.css'
import { ContextMain } from '../../context/contextmain';
import { motion } from 'framer-motion';
import { VscHeart } from 'react-icons/vsc';

function PtaMain({
    ptamainstatic,
    ptamainstyle,

}) {
    const {
        setappmainstate,
        // ptamainstate, setptamainstate,
        searchinputstate,
        favouritemainstate,
        settoastermainstate,

        // favouritedi,
        
    } = useContext(ContextMain)
    const [ptamainindex, setptamainindex] = useState(0)

    const [ptamainrender, setptamainrender] = useState()
    const [ptamainrendertwo, setptamainrendertwo] = useState()

    const postiframe = [
        {
            ptamainindex: 0,
            ptamaintitle: 'Like',
            ptamainicon: <RiHeartFill className='text-gray-200' />,
            ptamaindata: (JSON.parse(window.localStorage.getItem("postiframe")))?.favouritemaindata,
            ptamainaction: ll,
        },
        {
            ptamainindex: 1,
            ptamaintitle: 'Liked',
            ptamainicon: <motion.div initial={{scale: 0.5}} animate={{ scale:1}} className="duration-100">
                <RiHeartFill className='text-black' />
            </motion.div>,
            ptamaindata: (JSON.parse(window.localStorage.getItem("postiframe")))?.favouritemaindata,
            ptamainaction: kk,
        }
    ]

    // const searchiframe = [
    //     {
    //         ptamainindex: 0,
    //         ptamainicon: <div className="absolute top-0 left-0 w-full h-full  m-h1 text-black" >→</div>,
    //         // ptamainicon: <div className="absolute top-0 left-0 w-full h-full" />,
    //         ptamaindata: (JSON.parse(window.localStorage.getItem("searchiframe")))?.searchmaindata,
    //         ptamainaction: ll,
    //     },
    //     {
    //         ptamainindex: 1,
    //         ptamainicon: <motion.div initial={{scale: 0.5}} animate={{ scale:1}} className="duration-100">
    //             <RiCloseLine className='text-black' />
    //         </motion.div>,
    //         ptamaindata: (JSON.parse(window.localStorage.getItem("searchiframe")))?.searchmaindata,
    //         ptamainaction: kk,
    //     }
    // ]

    const favouriteiframe = [
        {
            ptamainindex: 0,
            ptamainicon: <RiCheckboxBlankLine className='text-black' />,
            ptamaindata: (JSON.parse(window.localStorage.getItem("favouriteiframe")))?.favouritemaindata,
            ptamainaction: ll,
        },
        {
            ptamainindex: 1,
            ptamainicon: <motion.div initial={{scale: 0.5}} animate={{ scale:1}} className="duration-100">
                <RiCheckFill className='text-black' />
                </motion.div>,
            ptamaindata: (JSON.parse(window.localStorage.getItem("favouriteiframe")))?.favouritemaindata,
            ptamainaction: kk,
        }
    ]

    const ptamain = [
        {
            ptamainid: 'postiframe',
            ptamainref: postiframe,
        },
        // {
        //     ptamainid: 'searchiframe',
        //     ptamainref: searchiframe,
        // },
        {
            ptamainid: 'favouriteiframe',
            ptamainref: favouriteiframe,
        },
    ]

    useEffect(() => {
        if(ptamainstatic && ptamainstatic.ptamaindata) {
            const parsepost = JSON.parse(window.localStorage.getItem("postiframe"))
            const parsesearch = JSON.parse(window.localStorage.getItem("searchiframe"))
            const parsefavourite = JSON.parse(window.localStorage.getItem("favouriteiframe"))
            if(parsepost) {
                // const filter = parsepost?.favouritemaindata?.filter(data => data?.postid === ptamainstatic?.ptamaindata?.postid)
                const filter = ptamain?.filter(data => data?.ptamainid === ptamainstatic?.ptamainid)
                const filtertwo = filter[0]?.ptamainref?.filter(data => data?.ptamainindex === 0)
                const filterthree = filtertwo[0].ptamaindata?.filter(data => data?.postid === ptamainstatic?.ptamaindata?.postid)

                if(filterthree && filterthree.length === 0){
                    const filterfour = ptamain.filter(data => data.ptamainid === ptamainstatic.ptamainid);
                    const filterfive = filterfour[0].ptamainref.filter(data => data.ptamainindex === 0);
                    setptamainrender(filterfive)
                }
                if(filterthree && filterthree.length !== 0){
                    const filterfour = ptamain.filter(data => data.ptamainid === ptamainstatic.ptamainid);
                    const filterfive = filterfour[0].ptamainref.filter(data => data.ptamainindex === 1);
                    setptamainrender(filterfive)
                }

            } 
            if(!parsepost) {
                window.localStorage.setItem("postiframe", JSON.stringify({
                    //should be postmainstate instead
                    favouritemaindata: favouritemainstate.favouritemaindata,
                }))
            }
            if(!parsesearch) {
                window.localStorage.setItem("searchiframe", JSON.stringify({
                    searchmaindata: searchinputstate.searchmaindata,
                }))
            }
            if(!parsefavourite) {
                window.localStorage.setItem("favouriteiframe", JSON.stringify({
                    //favourutemainstate alrady taken
                    favouritemaindata: favouritemainstate.favouritemaindata,
                }))
            }
        }
    }, [ptamainindex, ptamainstatic])

    function ll() {
        // console.log('ptamainstatic.ptamaindata.postid', ptamainstatic.ptamaindata.postid)
        const ptamaindata = [
            {
                ptamainid: 'postiframe',
                ptamainindex: 0,
                ptamainaction: () => {
                    const parsepost = (JSON.parse(window.localStorage.getItem("postiframe"))).favouritemaindata
                    const ref = parsepost || []
                    ref.push(ptamainstatic.ptamaindata)
                    window.localStorage.setItem("postiframe", JSON.stringify({
                        favouritemaindata: ref,
                    }))

                        setptamainindex(1)
                        setappmainstate({
                            appmainid:'overlay',
                            appmainidtwo:'toastermain',
                        })
                        settoastermainstate({
                                toastermainid: 'postheader',
                                toastermainindex: 1,
                                // toastermaindata: [ptamainstatic.ptamaindata],
                                toastermaindata: [{postid: ptamainstatic.ptamaindata.postid}],
                        })
                },
            },
            {
                ptamainid: 'favouriteiframe',
                ptamainindex: 0,
                ptamainaction: () => {
                    const parsefavourite = (JSON.parse(window.localStorage.getItem("favouriteiframe"))).favouritemaindata
                    const ref = parsefavourite || []
                    ref.push(ptamainstatic.ptamaindata)
                    window.localStorage.setItem("favouriteiframe", JSON.stringify({
                        favouritemaindata: ref,
                    }))

                        setptamainindex(1)
                },
            },
            // {
            //     ptamainid: 'searchiframe',
            //     ptamainindex: 0,
            //     ptamainaction: () => {
            //         const parsesearch = JSON.parse(window.localStorage.getItem("searchiframe"))
            //         const ref = parsesearch?.searchmaindata || searchinputstate.searchmaindata
            //         ref.push(ptamainstatic.ptamaindata)
            //         window.localStorage.setItem("searchiframe", JSON.stringify({
            //             searchmaindata: ref.reverse().slice(0, 3),
            //         }))
            //     },
            // }
        ]
        const filter = ptamaindata.filter(data => data.ptamainid === ptamainstatic.ptamainid && data.ptamainindex === 0)
        return filter[0].ptamainaction()
    }

    function kk() {
        // console.log('ptamainstatic.ptamaindata', ptamainstatic.ptamaindata)
        const ptamaindata = [
            {
                ptamainid: 'postiframe',
                ptamainindex: 1,
                ptamainaction: () => {
                    const parsepost = (JSON.parse(window.localStorage.getItem("postiframe"))).favouritemaindata
                    const filter = parsepost.filter(data => data.postid !== ptamainstatic.ptamaindata.postid)
                    // window.localStorage.clear()
                    window.localStorage.removeItem("postiframe")
                    window.localStorage.setItem("postiframe", JSON.stringify({
                        favouritemaindata: filter,
                    }))
                        setptamainindex(0)
                        setappmainstate({
                            appmainid:'overlay',
                            appmainidtwo:'toastermain',
                        })
                        settoastermainstate({
                                toastermainid: 'postheader',
                                toastermainindex: 2,
                                // toastermaindata: [ptamainstatic.ptamaindata],
                                toastermaindata: [{postid: ptamainstatic.ptamaindata.postid}],
                        })
                },
            },
            {
                ptamainid: 'favouriteiframe',
                ptamainindex: 1,
                ptamainaction: () => {
                    const parsefavourite = (JSON.parse(window.localStorage.getItem("favouriteiframe"))).favouritemaindata
                    const filter = parsefavourite.filter(data => data.postid !== ptamainstatic.ptamaindata.postid)
                    // window.localStorage.clear()
                    window.localStorage.removeItem("favouriteiframe")
                    window.localStorage.setItem("favouriteiframe", JSON.stringify({
                        favouritemaindata: filter,
                    }))
                        setptamainindex(0)
                },
            },
            // {
            //     ptamainid: 'searchiframe',
            //     ptamainindex: 1,
            //     ptamainaction: () => {
            //         const parsesearch = JSON.parse(window.localStorage.getItem("searchiframe"))
            //         const filter = parsesearch.searchmaindata.filter(data => data.postid !== ptamainstatic.ptamaindata.postid)
            //         // window.localStorage.clear()
            //         window.localStorage.removeItem("searchiframe")
            //         window.localStorage.setItem("searchiframe", JSON.stringify({
            //             searchmaindata: filter.reverse().slice(0, 3),
            //         }))
            //             setptamainindex(0)
            //             setappmainstate({
            //                 appmainid:'overlay',
            //                 appmainidtwo:'toastermain',
            //             })
            //             settoastermainstate({
            //                     toastermainid: 'postheader',
            //                     toastermainindex: 3,
            //                     // toastermaindata: [ptamainstatic.ptamaindata],
            //                     toastermaindata: ptamainstatic.ptamaindata.postid,
            //             })
            //     },
            // }
        ]
        const filter = ptamaindata.filter(data => data.ptamainid === ptamainstatic.ptamainid  && data.ptamainindex === 1)
        return filter[0].ptamainaction()
    }


    // function jj() {
    //     if(favouritedi){
    //         const empty = []
    //         const emptytwo = []
    //         for(const data of favouritedi){
    //             empty.push(data.sheetmaindata.length)
    //             emptytwo.push(data.sheetmaindata)
    //         }
    //         const reduce = empty.reduce(function(a, b) { return a + b; }, 0)
    //         const filter = emptytwo.filter(data => data.)
    //         if(reduce !== 0){
    //             return <PtaMain ptamainstatic={{ptamainid: 'favouriteiframe', ptamaindata: }} />
    //         } else {
    //             return null
    //         }
    //     }
    // }

  return (
    <div>
        <main className="">
            <section className="">
                {ptamainrender?.map(data => (<>

                    <article onClick={() => {
                        data?.ptamainaction()

                    }} className="flex flex-row items-center gap-2">
                        <h1 className={`text-5xl   m-h6 text-white duration-1000 ${ptamainstyle && ptamainstyle}`}>{data?.ptamainicon}</h1>
                        {/* <h1 className={`font-serif ${ptamainstyle && ptamainstyle}`}>{data?.ptamaintitle}</h1> */}
                    </article>
                
                </>))}

            </section>
        </main>
    </div>
  )
}

export default PtaMain