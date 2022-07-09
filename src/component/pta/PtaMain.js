import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { RiCheckboxBlankLine, RiCheckboxLine, RiCheckFill, RiCheckLine, RiCloseLine, RiHeart2Line, RiHeart3Fill, RiHeart3Line, RiHeartFill, RiHeartLine } from 'react-icons/ri';
import { VscHeart } from 'react-icons/vsc';

import '../pta/ptamain.css'
import { ContextMain } from '../../context/contextmain';
import { motion } from 'framer-motion';

function PtaMain({
    ptamainstatic,
    ptamainstyle,
    children,

}) {
    const {
        setappmainstate,
        ptamainstate, setptamainstate,
        searchinputstate,
        favouritemainstate,
        settoastermainstate,
        toastermainstate,

        // favouritedi,
        
    } = useContext(ContextMain)
    const [ptamainindex, setptamainindex] = useState(0)

    const [ptamainrender, setptamainrender] = useState()

    const postiframe = [
        {
            ptamainindex: 0,
            ptamaintitle: 'Like',
            ptamainicon: <RiHeart3Line className='text-gray-400' />,
            ptamainaction: ll,
        },
        {
            ptamainindex: 1,
            ptamaintitle: 'Liked',
            ptamainicon: <motion.div initial={{scale: 0.5}} animate={{ scale:1}} className="duration-100">
                <RiHeart3Fill className='text-black' />
            </motion.div>,
            ptamainaction: kk,
        }
    ]

    const searchiframe = [
        {
            ptamainindex: 0,
            ptamainicon: '',
            ptamainaction: ll,
        },
        {
            ptamainindex: 1,
            ptamainicon: <motion.div initial={{scale: 0.5}} animate={{ scale:1}} className="duration-100">
                <RiCloseLine className='text-black' />
            </motion.div>,
            ptamainaction: kk,
        }
    ]

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

    const contactiframe = [
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
            ptamaindata: (JSON.parse(window.localStorage.getItem("postiframe"))).filter(data => data?.postid === ptamainstatic?.ptamaindata?.postid),
        },
        {
            ptamainid: 'searchiframe',
            ptamainref: searchiframe,
            ptamaindata: (JSON.parse(window.localStorage.getItem("searchiframe"))).filter(data => data?.postid === ptamainstatic?.ptamaindata?.postid),
        },
        {
            ptamainid: 'favouriteiframe',
            ptamainref: favouriteiframe,
            ptamaindata: (JSON.parse(window.localStorage.getItem("favouriteiframe"))).filter(data => data?.postid === ptamainstatic?.ptamaindata?.postid),
        },
        {
            ptamainid: 'feedbackiframe',
            ptamainref: feedbackiframe,
            ptamaindata: (JSON.parse(window.localStorage.getItem("feedbackiframe"))).filter(data => data?.postid === ptamainstatic?.ptamaindata?.postid),
        },
        {
            ptamainid: 'contactiframe',
            ptamainref: contactiframe,
            ptamaindata: (JSON.parse(window.localStorage.getItem("contactiframe"))).filter(data => data?.crummainid === ptamainstatic?.ptamaindata?.crummainid),
        },
    ]

    useEffect(() => {
        if(ptamainstatic && ptamainstatic.ptamaindata) {
                const filter = ptamain?.filter(data => data?.ptamainid === ptamainstatic?.ptamainid)
                const filtertwo = filter[0]?.ptamaindata

                if(filtertwo && filtertwo.length === 0){
                    const filterfour = ptamain.filter(data => data.ptamainid === ptamainstatic.ptamainid);
                    const filterfive = filterfour[0].ptamainref.filter(data => data.ptamainindex === 0);
                    setptamainrender(filterfive)
                }
                if(filtertwo && filtertwo.length !== 0){
                    const filterfour = ptamain.filter(data => data.ptamainid === ptamainstatic.ptamainid);
                    const filterfive = filterfour[0].ptamainref.filter(data => data.ptamainindex === 1);
                    setptamainrender(filterfive)
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
        const filter = parse.filter(data => 
            data.postid !== ptamainstatic.ptamaindata.postid
            || data.crummainid !== ptamainstatic.ptamaindata.crummainid
            )
        window.localStorage.removeItem(ptamainstatic?.ptamainid)
        window.localStorage.setItem(ptamainstatic?.ptamainid, JSON.stringify(filter))
        
        setptamainindex(0)
        setptamainstate(!ptamainstate)
        if(ptamainstatic?.ptamainid === 'postiframe'){
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
    }

  return (
    <div>
        <main className="">
            <section className="">
                {ptamainrender?.map(data => (<>
                    <article onClick={() => {
                        data?.ptamainaction()

                    }} className="flex flex-row items-center gap-2">
                        {!children && <h1 className={`text-5xl   m-h6 text-white duration-1000 ${ptamainstyle && ptamainstyle}`}>{data?.ptamainicon}</h1>}
                        {children}
                    </article>
                
                </>))}
            </section>
        </main>
    </div>
  )
}

export default PtaMain