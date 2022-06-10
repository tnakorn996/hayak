import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { RiHeartFill, RiHeartLine } from 'react-icons/ri';

import '../pta/ptamain.css'
import { ContextMain } from '../../context/contextmain';
import { motion } from 'framer-motion';

function PtaMain({
    ptamainstatic,

}) {
    const {
        setappmainstate,
        ptamainstate, setptamainstate,
        setfavouritemainstate, favouritemainstate,
        settoastermainstate,
        
        parsepost,
    } = useContext(ContextMain)
    const [ptamainrender, setptamainrender] = useState()

    const postiframe = [
                {
                    ptamainindex: 0,
                    ptamainicon: <RiHeartFill className='filter-drop-shadow' />,
                    ptamainaction: () => {
                        const ref = parsepost?.favouritemaindata || favouritemainstate.favouritemaindata
                        ref.push(ptamainstate.ptamaindata)
                        window.localStorage.setItem("post", JSON.stringify({
                            favouritemaindata: ref,
                        }))
                        setptamainstate({
                            ptamainid: 'postiframe',
                            ptamainindex: 1,
                            ptamaindata: ptamainstate.ptamaindata,
                        })

                        setappmainstate({
                            appmainid:'overlay',
                            appmainidtwo:'toastermain',
                        })
                        settoastermainstate({
                                toastermainid: 'postheader',
                                toastermainindex: 1,
                                // toastermaindata: [ptamainstate.ptamaindata],
                        })

                        // const ref = favouritemainstate.favouritemaindata
                        // ref.push(ptamainstate.ptamaindata)
                        // setfavouritemainstate({
                        //     favouritemaindata: ref,
                        // })
                    },
                },
                {
                    ptamainindex: 1,
                    ptamainicon: <motion.div initial={{scale: 1.7}} animate={{ scale:1}} className="duration-100">
                        <RiHeartFill className='text-black' />
                    </motion.div>,
                    ptamainaction: () => {
                        const filter = parsepost.favouritemaindata.filter(data => data.postid !== ptamainstate.ptamaindata.postid)
                        window.localStorage.clear()
                        window.localStorage.setItem("post", JSON.stringify({
                            favouritemaindata: filter,
                        }));
                        setptamainstate({
                            ptamainid: 'postiframe',
                            ptamainindex: 0,
                            ptamaindata: ptamainstate.ptamaindata,
                        })

                        setappmainstate({
                            appmainid:'overlay',
                            appmainidtwo:'toastermain',
                        })
                        settoastermainstate({
                                toastermainid: 'postheader',
                                toastermainindex: 2,
                                // toastermaindata: [ptamainstate.ptamaindata],
                        })

                        // const filter = favouritemainstate.favouritemaindata.filter(data => data.postid !== ptamainstate.ptamaindata.postid)
                        // setfavouritemainstate({
                        //     favouritemaindata: filter,
                        // })
                    }
                }
        
    ]

    const ptamain = [
        {
            ptamainid: 'postiframe',
            ptamainref: postiframe,
        }
    ]

    useEffect(() => {
      if(ptamainstate) {
          const filter = ptamain.filter(data => data.ptamainid === ptamainstate.ptamainid);
          const filtertwo = filter[0].ptamainref.filter(data => data.ptamainindex === ptamainstate.ptamainindex);
          setptamainrender(filtertwo)
      }
    }, [ptamainstate])

    useEffect(() => {
        if(ptamainstatic && ptamainstatic.ptamaindata){
            if(parsepost && parsepost.favouritemaindata.length > 0){
                    const filter = parsepost.favouritemaindata.filter(data => data.postid === ptamainstatic.ptamaindata.postid)
                    if(filter.length > 0){
                        setptamainstate({
                            ptamainid: 'postiframe',
                            ptamainindex: 1,
                            ptamaindata: ptamainstatic.ptamaindata,
                        })
                    } else {
                        setptamainstate({
                            ptamainid: 'postiframe',
                            ptamainindex: 0,
                            ptamaindata: ptamainstatic.ptamaindata,
                        })
                    }
            } 
            else {
                setptamainstate({
                    ptamainid: 'postiframe',
                    ptamainindex: 0,
                    ptamaindata: ptamainstatic.ptamaindata,
                })
            }
      }
    }, [ptamainstatic])

  return (
    <div>
        <main className="">
            <section className="">
                {ptamainrender?.map(data => (<>

                    <article onClick={() => {
                        data?.ptamainaction()

                    }} className="">
                        <h1 className="text-5xl   m-h6 text-white">{data?.ptamainicon}</h1>
                    </article>
                
                </>))}
            </section>
        </main>
    </div>
  )
}

export default PtaMain