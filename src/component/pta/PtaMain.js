import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';

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
        favouritemainstate,
        settoastermainstate,

        favouritedi,
        
    } = useContext(ContextMain)
    const [ptamainindex, setptamainindex] = useState(0)

    const [ptamainrender, setptamainrender] = useState()

    const postiframe = [
                {
                    ptamainindex: 0,
                    ptamainicon: <RiHeartFill className='text-gray-300' />,
                    ptamainaction: ll,
                },
                {
                    ptamainindex: 1,
                    ptamainicon: <motion.div initial={{scale: 0.5}} animate={{ scale:1}} className="duration-100">
                        <RiHeartFill className='text-black' />
                    </motion.div>,
                    ptamainaction: kk,
                }
        
    ]

    const ptamain = [
        {
            ptamainid: 'postiframe',
            ptamainref: postiframe,
        },
    ]

    useEffect(() => {
        if(ptamainstatic && ptamainstatic.ptamaindata) {
            // const empty = []
            const parsepost = JSON.parse(window.localStorage.getItem("post"))
                // for(let i = 0; i < parsepost.favouritemaindata.length; i++){
                //     if(ptamainstatic.ptamaindata.postid !== parsepost.favouritemaindata[i].postid){
                //         setptamainindex(0)
                //     }
                //     if(ptamainstatic.ptamaindata.postid === parsepost.favouritemaindata[i].postid){
                //         setptamainindex(1)
                //     }
                // }

                // parsepost.favouritemaindata.forEach(data => {
                //     if(ptamainstatic.ptamaindata.postid !== data.postid){
                //         setptamainindex(0)
                //     }
                //     if(ptamainstatic.ptamaindata.postid === data.postid){
                //         setptamainindex(1)
                //     }
                // })

                // for(const data of parsepost.favouritemaindata) {
                //     if(ptamainstatic.ptamaindata.postid !== data.postid){
                //         empty.push({ptamainindex: 0})
                //         // setptamainindex(0)
                //     }
                //     if(ptamainstatic.ptamaindata.postid === data.postid){
                //         empty.push({ptamainindex: 1})
                //         // setptamainindex(1)
                //     }
                // }

                const filter = parsepost.favouritemaindata.filter(data => data.postid === ptamainstatic.ptamaindata.postid)
                if(filter.length === 0){
                    const filtertwo = ptamain.filter(data => data.ptamainid === ptamainstatic.ptamainid);
                    const filterthree = filtertwo[0].ptamainref.filter(data => data.ptamainindex === 0);
                    setptamainrender(filterthree)
                }
                if(filter.length !== 0){
                    const filtertwo = ptamain.filter(data => data.ptamainid === ptamainstatic.ptamainid);
                    const filterthree = filtertwo[0].ptamainref.filter(data => data.ptamainindex === 1);
                    setptamainrender(filterthree)
                }
        }
    }, [ptamainindex, favouritedi])

    // useEffect(() => {
    //   if(ptamainstatic && ptamainstatic.ptamaindata) {
    //     const parsepost = JSON.parse(window.localStorage.getItem("post"))
    //     const empty = []
    //         for(const data of parsepost.favouritemaindata) {
    //             if(ptamainstatic.ptamaindata.postid !== data.postid){
    //                 empty.push({ptamainindex: 0})
    //             }
    //             if(ptamainstatic.ptamaindata.postid === data.postid){
    //                 empty.push({ptamainindex: 1})
    //             }
    //         }
    //     if(empty.length !== 0){
    //             const filter = ptamain.filter(data => data.ptamainid === ptamainstatic.ptamainid);
    //             const filtertwo = filter[0].ptamainref.filter(data => data.ptamainindex === ptamainindex);
                
    //             setptamainrender(filtertwo)
    //     }
    //   }
    // }, [])

    function ll() {
        const ptamaindata = [
            {
                ptamainid: 'postiframe',
                ptamainindex: 0,
                ptamainaction: () => {
                    const parsepost = JSON.parse(window.localStorage.getItem("post"))
                    const ref = parsepost?.favouritemaindata || favouritemainstate.favouritemaindata
                    ref.push(ptamainstatic.ptamaindata)
                    window.localStorage.setItem("post", JSON.stringify({
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
            }
        ]
        const filter = ptamaindata.filter(data => data.ptamainid === ptamainstatic.ptamainid && data.ptamainindex === 0)
        return filter[0].ptamainaction()
    }

    function kk() {
        const ptamaindata = [
            {
                ptamainid: 'postiframe',
                ptamainindex: 1,
                ptamainaction: () => {
                    const parsepost = JSON.parse(window.localStorage.getItem("post"))
                    const filter = parsepost.favouritemaindata.filter(data => data.postid !== ptamainstatic.ptamaindata.postid)
                    window.localStorage.clear()
                    window.localStorage.setItem("post", JSON.stringify({
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
                        <h1 className={`text-5xl   m-h6 text-white ${ptamainstyle && ptamainstyle}`}>{data?.ptamainicon}</h1>
                    </article>
                
                </>))}
            </section>
        </main>
    </div>
  )
}

export default PtaMain