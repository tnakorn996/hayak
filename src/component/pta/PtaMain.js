import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { RiCheckLine, RiCloseLine, RiHeartFill, RiHeartLine } from 'react-icons/ri';

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
        ptamainstate, setptamainstate,
        searchinputstate,
        favouritemainstate,
        settoastermainstate,

        favouritedi,
        
    } = useContext(ContextMain)
    const [ptamainindex, setptamainindex] = useState(0)

    const [ptamainrender, setptamainrender] = useState()
    const [ptamainrendertwo, setptamainrendertwo] = useState()

    const postiframe = [
        {
            ptamainindex: 0,
            ptamainicon: <RiHeartFill className='text-gray-200' />,
            ptamaindata: (JSON.parse(window.localStorage.getItem("postiframe")))?.favouritemaindata,
            ptamainaction: ll,
        },
        {
            ptamainindex: 1,
            ptamainicon: <motion.div initial={{scale: 0.5}} animate={{ scale:1}} className="duration-100">
                <RiHeartFill className='text-black' />
            </motion.div>,
            ptamaindata: (JSON.parse(window.localStorage.getItem("postiframe")))?.favouritemaindata,
            ptamainaction: kk,
        }
    ]

    const searchiframe = [
        {
            ptamainindex: 0,
            ptamainicon: <div className="absolute top-0 left-0 w-full h-full  m-h1 text-black" >→</div>,
            // ptamainicon: <div className="absolute top-0 left-0 w-full h-full" />,
            ptamaindata: (JSON.parse(window.localStorage.getItem("searchiframe")))?.searchmaindata,
            ptamainaction: ll,
        },
        {
            ptamainindex: 1,
            ptamainicon: <motion.div initial={{scale: 0.5}} animate={{ scale:1}} className="duration-100">
                <RiCloseLine className='text-black' />
            </motion.div>,
            ptamaindata: (JSON.parse(window.localStorage.getItem("searchiframe")))?.searchmaindata,
            ptamainaction: kk,
        }
    ]

    const ptamain = [
        {
            ptamainid: 'postiframe',
            ptamainref: postiframe,
        },
        {
            ptamainid: 'searchiframe',
            ptamainref: searchiframe,
        },
    ]

    useEffect(() => {
        if(ptamainstatic && ptamainstatic.ptamaindata) {
            const parsepost = JSON.parse(window.localStorage.getItem("postiframe"))
            const parsesearch = JSON.parse(window.localStorage.getItem("searchiframe"))
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
                    favouritemaindata: favouritemainstate.favouritemaindata,
                }))
            }
            if(!parsesearch) {
                window.localStorage.setItem("searchiframe", JSON.stringify({
                    searchmaindata: searchinputstate.searchmaindata,
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
                    const parsepost = JSON.parse(window.localStorage.getItem("postiframe"))
                    const ref = parsepost?.favouritemaindata || favouritemainstate.favouritemaindata
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
                                toastermaindata: ptamainstatic.ptamaindata.postid,
                        })
                },
            },
            {
                ptamainid: 'searchiframe',
                ptamainindex: 0,
                ptamainaction: () => {
                    const parsesearch = JSON.parse(window.localStorage.getItem("searchiframe"))
                    const ref = parsesearch?.searchmaindata || searchinputstate.searchmaindata
                    ref.push(ptamainstatic.ptamaindata)
                    window.localStorage.setItem("searchiframe", JSON.stringify({
                        searchmaindata: ref.reverse().slice(0, 3),
                    }))

                        // setptamainindex(1)
                        // setappmainstate({
                        //     appmainid:'overlay',
                        //     appmainidtwo:'toastermain',
                        // })
                        // settoastermainstate({
                        //         toastermainid: 'postheader',
                        //         toastermainindex: 1,
                        //         // toastermaindata: [ptamainstatic.ptamaindata],
                        //         toastermaindata: ptamainstatic.ptamaindata.postid,
                        // })
                },
            }
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
                    const parsepost = JSON.parse(window.localStorage.getItem("postiframe"))
                    const filter = parsepost.favouritemaindata.filter(data => data.postid !== ptamainstatic.ptamaindata.postid)
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
                                toastermaindata: ptamainstatic.ptamaindata.postid,
                        })
                },
            },
            {
                ptamainid: 'searchiframe',
                ptamainindex: 1,
                ptamainaction: () => {
                    const parsesearch = JSON.parse(window.localStorage.getItem("searchiframe"))
                    const filter = parsesearch.searchmaindata.filter(data => data.postid !== ptamainstatic.ptamaindata.postid)
                    // window.localStorage.clear()
                    window.localStorage.removeItem("searchiframe")
                    window.localStorage.setItem("searchiframe", JSON.stringify({
                        searchmaindata: filter.reverse().slice(0, 3),
                    }))
                        setptamainindex(0)
                        setappmainstate({
                            appmainid:'overlay',
                            appmainidtwo:'toastermain',
                        })
                        settoastermainstate({
                                toastermainid: 'postheader',
                                toastermainindex: 3,
                                // toastermaindata: [ptamainstatic.ptamaindata],
                                toastermaindata: ptamainstatic.ptamaindata.postid,
                        })
                },
            }
        ]
        const filter = ptamaindata.filter(data => data.ptamainid === ptamainstatic.ptamainid  && data.ptamainindex === 1)
        return filter[0].ptamainaction()
    }

  return (
    <div>
        <main className="">
            <section className="">
                {ptamainrender?.map(data => (<>

                    <article onClick={() => {
                        data?.ptamainaction()

                    }} className="">
                        <h1 className={`text-5xl   m-h6 text-white duration-1000 ${ptamainstyle && ptamainstyle}`}>{data?.ptamainicon}</h1>
                    </article>
                
                </>))}

            </section>
        </main>
    </div>
  )
}

export default PtaMain