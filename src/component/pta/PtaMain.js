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
        ptamainstate, setptamainstate,
        searchinputstate,
        favouritemainstate,
        settoastermainstate,

        // favouritedi,
        
    } = useContext(ContextMain)
    const [ptamainindex, setptamainindex] = useState(0)

    const [ptamainrender, setptamainrender] = useState()

    const postiframe = [
        {
            ptamainindex: 0,
            ptamaintitle: 'Like',
            ptamainicon: <RiHeartFill className='text-gray-200' />,
            ptamainaction: ll,
        },
        {
            ptamainindex: 1,
            ptamaintitle: 'Liked',
            ptamainicon: <motion.div initial={{scale: 0.5}} animate={{ scale:1}} className="duration-100">
                <RiHeartFill className='text-black' />
            </motion.div>,
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
            ptamainaction: ll,
        },
        {
            ptamainindex: 1,
            ptamainicon: <motion.div initial={{scale: 0.5}} animate={{ scale:1}} className="duration-100">
                <RiCheckFill className='text-black' />
                </motion.div>,
            ptamainaction: kk,
        }
    ]

    const feedbackiframe = [
        {
            ptamainindex: 0,
            ptamainicon: <RiCheckboxBlankLine className='text-black' />,
            ptamainaction: ll,
        },
        {
            ptamainindex: 1,
            ptamainicon: <motion.div initial={{scale: 0.5}} animate={{ scale:1}} className="duration-100">
                <RiCheckFill className='text-black' />
                </motion.div>,
            ptamainaction: kk,
        }
    ]

    const ptamain = [
        {
            ptamainid: 'postiframe',
            ptamainref: postiframe,
            ptamaindata: (JSON.parse(window.localStorage.getItem("postiframe"))),
        },
        // {
        //     ptamainid: 'searchiframe',
        //     ptamainref: searchiframe,
        // },
        {
            ptamainid: 'favouriteiframe',
            ptamainref: favouriteiframe,
            ptamaindata: (JSON.parse(window.localStorage.getItem("favouriteiframe"))),
        },
        {
            ptamainid: 'feedbackiframe',
            ptamainref: feedbackiframe,
            ptamaindata: (JSON.parse(window.localStorage.getItem("feedbackiframe"))),
        },
    ]

    useEffect(() => {
        if(ptamainstatic && ptamainstatic.ptamaindata) {
            const parsepost = JSON.parse(window.localStorage.getItem("postiframe"))
            const parsesearch = JSON.parse(window.localStorage.getItem("searchiframe"))
            const parsefavourite = JSON.parse(window.localStorage.getItem("favouriteiframe"))
            const parsefeedback = JSON.parse(window.localStorage.getItem("feedbackiframe"))
            
            // if(!Array.isArray(parsepost) || !parsepost) {
            //     window.localStorage.setItem("postiframe", JSON.stringify([]))
            // }
            // if(!Array.isArray(parsesearch) || !parsesearch) {
            //     window.localStorage.setItem("searchiframe", JSON.stringify([]))
            // }
            // if(!Array.isArray(parsefavourite) || !parsefavourite) {
            //     window.localStorage.setItem("favouriteiframe", JSON.stringify([]))
            // }
            // if(!Array.isArray(parsefeedback) || !parsefeedback) {
            //     window.localStorage.setItem("feedbackiframe", JSON.stringify([]))
            // }
            if(Array.isArray(parsepost)) {
                const filter = ptamain?.filter(data => data?.ptamainid === ptamainstatic?.ptamainid)
                const filtertwo = filter[0]?.ptamainref?.filter(data => data?.ptamainindex === 0)
                const filterthree = filter[0]?.ptamaindata?.filter(data => data?.postid === ptamainstatic?.ptamaindata?.postid)

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
        }
    }, [ptamainindex, ptamainstatic])

    function ll() {
        const parse = (JSON.parse(window.localStorage.getItem(ptamainstatic?.ptamainid)))
        const ref = parse || []
        ref.push(ptamainstatic.ptamaindata)
        window.localStorage.setItem(ptamainstatic?.ptamainid, JSON.stringify(ref))

        setptamainindex(1)
        setptamainstate(!ptamainstate)
        if(ptamainstatic?.ptamainid === 'postiframe'){
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
        }
    }

    function kk() {
        const parse = (JSON.parse(window.localStorage.getItem(ptamainstatic?.ptamainid)))
        const filter = parse.filter(data => data.postid !== ptamainstatic.ptamaindata.postid)
        window.localStorage.removeItem(ptamainstatic?.ptamainid)
        window.localStorage.setItem(ptamainstatic?.ptamainid, JSON.stringify(filter))
        
        setptamainindex(0)
        setptamainstate(!ptamainstate)
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