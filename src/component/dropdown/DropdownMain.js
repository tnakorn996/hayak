import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {motion} from 'framer-motion'

import { crummain } from '../../content/contentmain'
import { ContextMain } from '../../context/contextmain'
import { RiCloseFill } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'
import { categoryui } from '../../content/contentmantwo'

function DropdownMain() {
    const {
        dropdownmainstate, setdropdownmainstate,
        setbreadmainstate,
        setgenreindexstate,

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
            dropdownmainimage: 'https://scontent-akl1-1.xx.fbcdn.net/v/t39.30808-6/272329885_10166020441840367_2664436787088136063_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=HNbzCF-aUKUAX_qNICf&_nc_ht=scontent-akl1-1.xx&oh=00_AT85YlLqZjo9yBOSEzMvSe454c5XjSLUPThTELdKNXoYaw&oe=62A1648C',
            dropdownmainrender: categoryui.filter(data => data.breadmainid === 'post')
        },
        {
            dropdownmainidtwo: 'place',
            dropdownmaintitle: 'Places',
            dropdownmainimage: 'https://scontent-akl1-1.xx.fbcdn.net/v/t39.30808-6/272329871_10166020441835367_2706226399375601580_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=NFoc3c-4qiAAX9kp_np&_nc_ht=scontent-akl1-1.xx&oh=00_AT-ecU1aGr1c_rcU7kQRtfuOsUc8-4SqUupz-94gZ1-MCQ&oe=62A14011',
            dropdownmainrender: categoryui.filter(data => data.breadmainid === 'place')
        },
        {
            dropdownmainidtwo: 'product',
            dropdownmaintitle: 'Products collections',
            dropdownmainimage: 'https://scontent-akl1-1.xx.fbcdn.net/v/t39.30808-6/272206956_10166020441830367_8096047458411988811_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=AGMfBWem09EAX8tGepQ&_nc_ht=scontent-akl1-1.xx&oh=00_AT83IscqQzY4nO_zUjmhrlPFaP9aqsdIp6DsiMJu_AbhUA&oe=62A1240A',
            dropdownmainrender: categoryui.filter(data => data.breadmainid === 'product')
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
        <motion.main layout className={`w-screen h-0 z-30  overflow-hidden border-b border-black bg-black text-white  duration-500 ${dropdownmainheight && dropdownmainheight} `}>
            <section className="h-full relative flex flex-col md:grid md:grid-cols-12">
                <figcaption className="h-[90vh] p-[60px] col-span-7 flex flex-col justify-between">
                    <h1 className="m-h6  text-white">{dropdownmaintitle && dropdownmaintitle}</h1>
                    <br />
                    <div className="flex flex-col">
                        {dropdownmainrender && dropdownmainrender?.map(data => (<>
                        <article

                        onMouseEnter={() => {
                            setdropdownmainimage(data?.crummainimage)
                            setdropdownmaineffect(data?.crummainid)
                        }}
                        
                        onClick={() => {
                            setgenreindexstate('')
                            setbreadmainstate({
                                breadmainid: data?.breadmainid,
                                breadmainidtwo: data?.crummainid,
                            })
                            navigate(`/category/${data?.breadmainid}`)
                        }} className={`text-5xl flex flex-row items-center gap-3  font-serif m-h5 ${data?.crummainid === dropdownmaineffect && 'underline'}`}>
                            {data?.crummaintitle}
                        </article>
                        </>))}
                    </div>
                    <a onClick={() => {
                        // setgenreindexstate('')
                        // setbreadmainstate('')
                        // navigate(`/category/${dropdownmainparam}`)
                    }} href={`https://toifood.co.nz/category/${dropdownmainparam}`} className="text-5xl  font-serif m-h5">
                        See {dropdownmaintitle}
                    </a>
                </figcaption>
                <figure className="hidden md:flex col-span-5  overflow-hidden">
                    <div className="relative w-full h-full flex justify-center items-center">
                    <div className="absolute top-0 left-0 w-full h-full  bg-black opacity-5" />
                    <motion.img  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5}} loading='lazy' src={dropdownmainimage && dropdownmainimage} alt="" className="min-w-[100ch] min-h-full   duration-100 grayscale" />
                    </div>
                </figure>
                <article className='w-[70px] h-[70px] text-5xl absolute flex justify-center items-center top-5 right-5  bg-black' >
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