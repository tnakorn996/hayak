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
            dropdownmainimage: 'https://ouch-cdn2.icons8.com/RgfXTcRmEkFz1A1bcK7_Liv6zqVUey8CXN2NTm5xrdA/rs:fit:256:407/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjcx/L2ZlNDJkMjIwLTU4/OTItNGM0YS1hNGRi/LWRlODlhYjYxNDNk/Ni5wbmc.png',
            dropdownmainrender: categoryui.filter(data => data.breadmainid === 'post')
        },
        {
            dropdownmainidtwo: 'place',
            dropdownmaintitle: 'Places',
            dropdownmainimage: 'https://ouch-cdn2.icons8.com/0DjOrQagS0lAxcnpRnMjs9RySVRvTX8bOwzToHpnA5I/rs:fit:256:169/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjkw/LzI1YWQ3Y2Q2LTFh/OTItNDAwMC05MWMz/LWM0NGUwYjdjYmNl/Zi5wbmc.png',
            dropdownmainrender: categoryui.filter(data => data.breadmainid === 'place')
        },
        {
            dropdownmainidtwo: 'product',
            dropdownmaintitle: 'Products collections',
            dropdownmainimage: 'https://ouch-cdn2.icons8.com/SuK0TW0URpbSMQpBl2TvlPj56MniJvcaEsdKPQeT9fc/rs:fit:256:354/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTU0/LzljOGU5Yjg2LWMy/ZDUtNGZmYi1iNjUy/LTkyOTU3MGZiN2Q3/My5wbmc.png',
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
        <motion.main layout className={`w-screen h-0 z-30  overflow-hidden  bg-white text-black  duration-500 ${dropdownmainheight && dropdownmainheight} `}>
            <section className="h-full relative flex flex-col md:grid md:grid-cols-12">
                <figcaption className="h-[90vh] p-[60px] col-span-7 flex flex-col justify-between">
                    <h1 className="m-h6  text-white">{dropdownmaintitle && dropdownmaintitle}</h1>
                    <br />
                    <div className="flex flex-col">
                        {dropdownmainrender && dropdownmainrender?.map((data, index) => (<>
                        <article
                        key={index}

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
                <figure className="hidden md:flex col-span-5  overflow-hidden bg-white">
                    <div className="relative w-full h-full flex justify-center items-center">
                    <div className="absolute top-0 left-0 w-full h-full  bg-black opacity-5" />
                    {/* <motion.img  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5}} loading='lazy' src={dropdownmainimage && dropdownmainimage} alt="" className="min-w-[100ch] min-h-full   duration-100 grayscale" /> */}
                    <motion.img  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5}} loading='lazy' src={dropdownmainimage && dropdownmainimage} alt="" className="max-w-[100ch] max-h-full   duration-100 grayscale" />
                    </div>
                </figure>
                <article className='w-[70px] h-[70px] text-5xl absolute flex justify-center items-center top-5 right-5  bg-white' >
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