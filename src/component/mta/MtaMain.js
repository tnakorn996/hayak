import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'

import { RiCheckboxFill, RiCheckboxLine, RiCloseLine, RiDeleteBin7Fill, RiFilter3Fill } from 'react-icons/ri'
import { ContextMain } from '../../context/contextmain'

export default function MtaMain({mtamainstatic, mtamainstyle}) {
    const {
        setappmainstate,
        settoastermainstate,
        ptamainstate, setptamainstate,

        parsepost,
        favouritedi,
        feedbackdi,

    } = useContext(ContextMain)
    const [mtamainkey, setmtamainkey] = useState()
    const [mtamainkeytwo, setmtamainkeytwo] = useState()

    const [mtamaindata, setmtamaindata] = useState()
    const [mtamaindatatwo, setmtamaindatatwo] = useState()
    const [mtamainrender, setmtamainrender] = useState()

    const favouritetable = [
        {
            mtamainindex: 0,
            mtamainrender: <button onClick={() => jj()} className="flex flex-row items-center gap-1  l-button">Clear</button>,
        },
        {
            mtamainindex: 1,
            mtamainrender: <button onClick={() => kk()} className="flex flex-row items-center gap-1  m-button"><RiDeleteBin7Fill /> Remove</button>,
        },
    ]

    const feedbacktable = [
        {
            mtamainindex: 0,
            mtamainrender: <button onClick={() => jj()} className="flex flex-row items-center gap-1  l-button">Clear</button>,
        },
    ]

    const mtamain = [
        {
            mtamainid: 'favouritetable',
            mtamainref: favouritetable,
            mtamainkey: 'favouriteiframe',
            mtamainkeytwo: 'postiframe',
            mtamaindata: parsepost,
            mtamaindatatwo: favouritedi[0]?.sheetmaindata,
        },
        {
            mtamainid: 'feedbacktable',
            mtamainref: feedbacktable,
            mtamainkey: 'feedbackiframe',
            mtamainkeytwo: 'feedbackiframe',
            mtamaindata: parsepost,
            mtamaindatatwo: feedbackdi[0]?.sheetmaindata,
        }
    ]

    useEffect(() => {
            const filter = mtamain.filter(data => data.mtamainid === mtamainstatic.mtamainid)
            // const filtertwo = filter[0].mtamainref.filter(data => data.mtamainindex === 0)
            setmtamainkey(filter[0].mtamainkey)
            setmtamainkeytwo(filter[0].mtamainkeytwo)
            setmtamaindata(filter[0].mtamaindata)
            setmtamaindatatwo(filter[0].mtamaindatatwo)
            setmtamainrender(filter[0].mtamainref)
    }, [mtamainstatic, ptamainstate])

    function kk() {
        if (window.confirm('Are you sure you want to remove these posts?') && mtamaindata && mtamaindatatwo) {
            const parse = JSON.parse(window.localStorage.getItem(mtamainkey))
            const filter = mtamaindata.filter(data => parse.every(dat => dat.postid !== data.postid))
            // const filter = mtamaindata.filter(data => mtamaindatatwo.some(dat => dat.postid !== data.postid))
            window.localStorage.removeItem(mtamainkeytwo)
            window.localStorage.setItem(mtamainkeytwo, JSON.stringify(filter))
            window.localStorage.removeItem(mtamainkey)

            setptamainstate(!ptamainstate)
            if(mtamainstatic.mtamainid === 'favouritetable') {
                setappmainstate({
                        appmainid:'overlay',
                        appmainidtwo:'toastermain',
                })
                settoastermainstate({
                        toastermainid: 'postheader',
                        toastermainindex: 2,
                        toastermaindata: parse,
                })
            }
        } 
    }

    function jj() {
        window.localStorage.setItem(mtamainkey, JSON.stringify([]))
        setptamainstate(!ptamainstate)
    }

    if(mtamaindatatwo && mtamaindatatwo?.length === 0) return null
    
  return (
    <div>
        <main className="">
            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={`w-full flex items-center justify-between  m-h2 duration-100 ${mtamainstyle && mtamainstyle}`}>
                <figcaption className="">
                <h1 className="text-[10px]">{mtamaindatatwo && mtamaindatatwo.length} selected posts</h1>
                </figcaption>
                <figure className="">
                    <div className="flex flex-row items-center">
                    {mtamainrender && mtamainrender?.map(data => (<>
                        {data?.mtamainrender}
                    </>))}
                    </div>
                </figure>
            </motion.section>
        </main>
    </div>
  )
}
