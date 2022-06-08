import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

import VerticleMain from '../../component/post/VerticleMain'
import { ContextMain } from '../../context/contextmain'
import '../home/homemain.css'
import WireMain from '../../component/wire/WireMain'
import { useRef } from 'react'
import SlideMain from '../../component/slide/SlideMain'
// import LandscapeMain from '../../component/place/LandscapeMain'

function HomeMain() {
    const {
        homedl,

        setappmainstate,
        setwiremainstate,
        setbreadmainstate,
        setgenreindexstate,

        postplaceproduct,
        postupdatedat,
        placeupdatedat,
        productupdatedat,

    } = useContext(ContextMain)
    const navigate = useNavigate()
    const [homemainsliceone, sethomemainsliceone] = useState(0)
    const [homemainslicetwo, sethomemainslicetwo] = useState(12)
    const [homemainslicethree, sethomemainslicethree] = useState(0)
    const [homemainslicefour, sethomemainslicefour] = useState(9)
    const [homemainslicefive, sethomemainslicefive] = useState(0)
    const [homemainslicesix, sethomemainslicesix] = useState(12)
    const [homemainsliceseven, sethomemainsliceseven] = useState(0)
    const [homemainsliceeight, sethomemainsliceeight] = useState(4)
    const [homemainslicenine, sethomemainslicenine] = useState(0)
    const [homemainsliceten, sethomemainsliceten] = useState(4)

    const [homemainrender, sethomemainrender] = useState()
    const ref = useRef(null)
    const reftwo = useRef(null)
    const refthree = useRef(null)
    const reffour = useRef(null)

    // const homemain = [
    //     {
    //         homemainid: 'postupdatedat',
    //         homemainmap: postupdatedat,
    //         homemaintitle: 'Trending Blog',
    //         homemaindirect: '/category/post'
    //     },
    //     {
    //         homemainid: 'placeupdatedat',
    //         homemainmap: placeupdatedat,
    //         homemaintitle: 'Hot Places',
    //         homemaindirect: '/category/place',
    //     },
    //             {
    //         homemainid: 'productupdatedat',
    //         homemainmap: productupdatedat,
    //         homemaintitle: 'New Items',
    //         homemaindirect: '/category/product',
    //     },
    // ]

    useEffect(() => {
        setwiremainstate({
            wiremainid: 'hometr',
            wiremainindex: 0,
        })
    }, [])

    useEffect(() => {
        if(postupdatedat && placeupdatedat && productupdatedat){
            sethomemainrender(homedl)
        }
    }, [postupdatedat, placeupdatedat, productupdatedat])

    const ll = (first= this.props.first, second= this.props.second) => {
        first.current.scrollTo(first.current.scrollLeft + 250 * second, 0)
    
    }

    // window.onscroll = function (){
    //     if ((window.innerHeight + document.documentElement.scrollTop) > (document.documentElement.offsetHeight) * 50 /100) {
    //         setappmainstate({
    //             appmainid: 'overlay',
    //             appmainidtwo: 'toastmain',
    //             appmainidthree: 'planfigcaption',
    //         })


    //     } else {
    //         setappmainstate('')
    //     }
    // }

    return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="w-screen  overflow-hidden duration-100">
            <br />
            <br />
            <br />
            <section className="">
            <SlideMain 
            slidemainid={'homemainth'} 
            slidemainindex={1} 
            slidemaindata={postplaceproduct} 
            slidemainref={reffour} 
            slidemainscroll={1200}
            slidemainstyle={'!p-0'}
            slidemainslice={12} />
            </section>
            {/* <section onClick={() => {
                    // window.history.replaceState(null, "" , postupdatedat[0]?.postid)
                      setappmainstate({
                        appmainid: 'postarticle',
                        appmainidtwo: 'previewmain',
                        appmainpage: 0,
                        appmainparam: postplaceproduct && postplaceproduct[0]?.postid,
                        appmainboolean: true,
                      })
                    }} className="py-[20px] px-[20px] md:px-[60px] h-[85vh] flex flex-col justify-evenly gap-3">
                <figcaption className="flex flex-col justify-between items-center  border-b border-black">
                    <h1 className="text-6xl font-serif m-h6">{postplaceproduct && postplaceproduct[0]?.posttitle}</h1>
                    <button className="m-h3">Read more →</button>
                </figcaption>
                <figure className="h-[70vh] flex items-center justify-center  overflow-hidden border border-black">
                    <img src={postplaceproduct && postplaceproduct[0]?.posthero} alt="" className="max-h-[200ch] w-full" />
                </figure>
                <div className="w-full  border-b border-black" />
            </section> */}
            <br />
            <br />
            <section className=" w-[1200px] md:w-full group">
                {homemainrender?.map(data => (<>
                {/* <div className="px-[60px]">
                <div className="w-full  border-b border-black" />
                </div> */}
                <br />
                <figcaption className="px-[20px] md:px-[60px] w-screen md:w-full flex flex-row justify-between items-center">
                    <h1 className="m-h6  font-serif">{data?.spreadmaintitle}</h1>
                    <button onClick={() => {
                        setbreadmainstate('')
                        setgenreindexstate('')
                        navigate(data?.spreadmaindirect)
                    }} className="l-h6">→</button>
                </figcaption>
                <br />

                        {data?.spreadmainid === 'postupdatedat' && (<>
                        <SlideMain slidemainid={'homemainth'} slidemainindex={0} slidemaindata={data?.spreadmainmap} slidemainref={ref} slidemainscroll={500} slidemainslice={12} />
                        </>)}

                        {data?.spreadmainid === 'placeupdatedat' && (<>
                        <SlideMain slidemainid={'homemainth'} slidemainindex={0} slidemaindata={data?.spreadmainmap} slidemainref={reftwo} slidemainscroll={500} slidemainslice={12} />
                        </>)}

                        {data?.spreadmainid === 'productupdatedat' && (<>
                        <SlideMain slidemainid={'homemainth'} slidemainindex={0} slidemaindata={data?.spreadmainmap} slidemainref={refthree} slidemainscroll={500} slidemainslice={12} />
                        </>)}
                </>))}
                <br />
            </section>
            <br />
            <br />
            <section className="px-[20px] md:px-[60px]">
                <WireMain />
            </ section>
            <br />
            <br />


        </motion.main>
    </div>
  )
}

export default HomeMain