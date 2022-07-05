import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'

import { RiCheckboxFill, RiCheckboxLine, RiCloseLine, RiDeleteBin7Fill, RiFilter3Fill } from 'react-icons/ri'
import { userui } from '../../content/contentmantwo'
import { ContextMain } from '../../context/contextmain'
import CardMain from '../card/CardMain'

export default function MtaMain({mtamainstatic, mtamainstyle}) {
    const {
        setappmainstate,
        settoastermainstate,
        ptamainstate, setptamainstate,

        parsepost,
        favouritedi,
        feedbackdi,
        contactdi,

    } = useContext(ContextMain)
    const [mtamainkey, setmtamainkey] = useState()
    const [mtamainkeytwo, setmtamainkeytwo] = useState()
    const [cardmainstatic, setcardmainstatic] = useState()

    const [mtamaindata, setmtamaindata] = useState()
    const [mtamaindatatwo, setmtamaindatatwo] = useState()
    const [mtamainrender, setmtamainrender] = useState()
    const [mtamainnumber, setmtamainnumber] = useState()
    const [mtamainplaceholder, setmtamainplaceholder] = useState()

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

    const contacttable = [
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
            mtamainnumber: 10,
            mtamainplaceholder: 'posts',
        },
        {
            mtamainid: 'feedbacktable',
            mtamainref: feedbacktable,
            mtamainkey: 'feedbackiframe',
            mtamainkeytwo: 'feedbackiframe',
            mtamaindata: parsepost,
            mtamaindatatwo: feedbackdi[0]?.sheetmaindata,
            mtamainnumber: 3,
            mtamainplaceholder: 'posts',
        },
        {
            mtamainid: 'contacttable',
            mtamainref: contacttable,
            mtamainkey: 'contactiframe',
            mtamainkeytwo: 'contactiframe',
            mtamaindata: userui[3].crummaindata,
            mtamaindatatwo: contactdi[0]?.sheetmaindata,
            mtamainnumber: 3,
            mtamainplaceholder: 'cities or regions',
        },
    ]

    useEffect(() => {
            const filter = mtamain.filter(data => data.mtamainid === mtamainstatic.mtamainid)
            const object = filter[0]
            setmtamainkey(object.mtamainkey)
            setmtamainkeytwo(object.mtamainkeytwo)
            setmtamaindata(object.mtamaindata)
            setmtamaindatatwo(object.mtamaindatatwo)
            setmtamainrender(object.mtamainref)
            setmtamainnumber(object.mtamainnumber)
            setmtamainplaceholder(object.mtamainplaceholder)

    }, [mtamainstatic, ptamainstate])

    function kk() {
        if (window.confirm('Are you sure you want to remove these posts?') && mtamaindata && mtamaindatatwo) {
            const parse = JSON.parse(window.localStorage.getItem(mtamainkey))
            const filter = mtamaindata.filter(data => parse.every(dat => dat.postid !== data.postid || dat.crummmainid !== data.crummmainid))
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
        <motion.main initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className={` duration-100 ${mtamainstyle && mtamainstyle}`}>
            <section className={`w-full flex items-center justify-between  m-h2`}>
                <figcaption className="">
                <h1 className="text-[10px]">{mtamaindatatwo && mtamaindatatwo.length} selected {mtamainplaceholder}</h1>
                </figcaption>
                <figure className="">
                    <div className="flex flex-row items-center">
                    {mtamainrender && mtamainrender?.map(data => (<>
                        {data?.mtamainrender}
                    </>))}
                    </div>
                </figure>
            </section>
        </motion.main>
    </div>
  )
}
