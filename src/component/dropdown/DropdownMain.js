import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {motion} from 'framer-motion'

import { crummain } from '../../content/contentmain'
import { ContextMain } from '../../context/contextmain'
import { RiCloseFill } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'

function DropdownMain() {
    const {
        dropdownmainstate, setdropdownmainstate,
        setbreadmainstate,

    } = useContext(ContextMain)
    const [dropdownmaintitle, setdropdownmaintitle] = useState()
    const [dropdownmainimage, setdropdownmainimage] = useState()
    const [dropdownmainrender, setdropdownmainrender] = useState()
    const [dropdownmainheight, setdropdownmainheight] = useState(null)
    const [dropdownmainparam, setdropdownmainparam] = useState()
    const [dropdownmaineffect, setdropdownmaineffect] = useState()
    const location = useLocation()
    const navigate = useNavigate()
    
    const navoption = [
        {
            dropdownmainidtwo: 'post',
            dropdownmaintitle: 'Blog collections',
            dropdownmainimage: 'https://cdn.pixabay.com/photo/2017/04/05/01/15/food-2203717_1280.jpg',
            dropdownmainrender: crummain.filter(data => data.breadmainid === 'post')
        },
        {
            dropdownmainidtwo: 'place',
            dropdownmaintitle: 'Places',
            dropdownmainimage: 'https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg',
            dropdownmainrender: crummain.filter(data => data.breadmainid === 'place')
        },
        {
            dropdownmainidtwo: 'product',
            dropdownmaintitle: 'Products collections',
            dropdownmainimage: 'https://cdn.pixabay.com/photo/2010/12/16/11/54/cabrales-3499_1280.jpg',
            dropdownmainrender: crummain.filter(data => data.breadmainid === 'product')
        },
    ]

    const dropdownmain = [
        {
            dropdownmainid: 'navoption',
            dropdownmainref: navoption,
        }
    ]

    useEffect(() => {
      if(location){
          setdropdownmainstate('')
      }
    }, [location])

    useEffect(() => {
      if(dropdownmainstate && dropdownmainstate !== ''){
          const filter = dropdownmain.filter(data => data.dropdownmainid === dropdownmainstate.dropdownmainid)
          const filtertwo = filter[0].dropdownmainref.filter(data => data.dropdownmainidtwo === dropdownmainstate.dropdownmainidtwo)
          setdropdownmainrender(filtertwo[0].dropdownmainrender)
          setdropdownmaintitle(filtertwo[0].dropdownmaintitle)
          setdropdownmainimage(filtertwo[0].dropdownmainimage)
          setdropdownmainparam(filtertwo[0].dropdownmainidtwo)
          setdropdownmainheight('!h-[90vh]')
      } else {
          setdropdownmainheight(null)
      }
    }, [dropdownmainstate])

  return (
    <div>
        <motion.main layout className={`w-screen h-0  overflow-hidden border-b border-black bg-black text-white ${dropdownmainheight && dropdownmainheight} `}>
            <section className="h-full relative flex flex-col md:grid md:grid-cols-12">
                <figcaption className="p-[60px] col-span-7 flex flex-col justify-between">
                    <div className="">
                        <h1 className="l-h6 underline text-white">{dropdownmaintitle && dropdownmaintitle}</h1>
                        <br />
                        {dropdownmainrender && dropdownmainrender?.map(data => (<>
                        <article 

                        onMouseEnter={() => {
                            setdropdownmainimage(data?.crummainimage)
                            setdropdownmaineffect(data?.crummainid)
                        }}
                        
                        onClick={() => {
                            setbreadmainstate({
                                breadmainid: data?.breadmainid,
                                breadmainidtwo: data?.crummainid,
                            })
                            navigate(`/category/${data?.breadmainid}`)
                        }} className="">
                            <h1 className={`text-5xl  font-serif m-h6 ${data?.crummainid === dropdownmaineffect && 'underline'}`}>{data?.crummaintitle} <span className="font-sans">→</span></h1>
                        </article>
                        </>))}
                    </div>
                    <article onClick={() => {
                        setbreadmainstate('')
                        navigate(`/category/${dropdownmainparam}`)
                    }} className="">
                        <h1 className="text-5xl  font-serif m-h6">See {dropdownmaintitle}<span className="font-sans">→</span></h1>
                    </article>
                </figcaption>
                <figure className="hidden md:flex col-span-5 items-center justify-center   overflow-hidden">
                    <motion.img  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5}} loading='lazy' src={dropdownmainimage && dropdownmainimage} alt="" className="min-w-fit" />
                </figure>
                <article className='w-[70px] h-[70px] text-5xl absolute flex justify-center items-center top-3 right-3 md:top-16 md:right-16  bg-black' >
                    <RiCloseFill onClick={() => {
                        setdropdownmainstate('')
                    }} />
                </article>
            </section>
        </motion.main>
    </div>
  )
}

export default DropdownMain