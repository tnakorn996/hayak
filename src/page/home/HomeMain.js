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
        setappmainstate,
        setwiremainstate,
        setbreadmainstate,
        setgenreindexstate,

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

    const [homemainmap, sethomemainmap] = useState()
    const ref = useRef(null)
    const reftwo = useRef(null)
    const refthree = useRef(null)

    const homemain = [
        {
            homemainid: 'postupdatedat',
            homemainmap: postupdatedat,
            homemaintitle: 'Trending Blog',
            homemaindirect: '/category/post'
        },
        {
            homemainid: 'placeupdatedat',
            homemainmap: placeupdatedat,
            homemaintitle: 'Hot Places',
            homemaindirect: '/category/place',
        },
                {
            homemainid: 'productupdatedat',
            homemainmap: productupdatedat,
            homemaintitle: 'New Items',
            homemaindirect: '/category/product',
        },

        // {
        //     homemainid: 'postcategoryid',
        //     homemainmap: postcategoryid,
        //     homemaintitle: '💡 Blog For You',
        //     homemaindirect: '/search/searchmain',
        // },
        // {
        //     homemainid: 'postpostcount',
        //     homemainmap: postpostcount,
        //     homemaintitle: '🔥 Hottest Blog',
        //     homemaindirect: '/search/searchmain'
        // },
        // {
        //     homemainid: 'postcreatedat',
        //     homemainmap: postcreatedat,
        //     homemaintitle: '✨ New Blog',
        //     homemaindirect: '/search/searchmain'
        // },
        // {
        //     homemainid: 'postpriceid',
        //     homemainmap: postpriceid,
        //     homemaintitle: 'We Just Love These',
        //     homemaindirect: '/search/searchmain'
        // }
    ]

    useEffect(() => {
        // setappmainstate({
        //     appmainidtwo: 'previewmain',
        //     appmainid: 'menuarticle',
        //     appmainboolean: true,
        // })
        
        setwiremainstate({
            wiremainid: 'hometr',
            wiremainindex: 0,
        })
    }, [])

    useEffect(() => {
        if(postupdatedat && placeupdatedat && productupdatedat){
            sethomemainmap(homemain)
        }
    }, [postupdatedat, placeupdatedat, productupdatedat])

    // function ll(first = this.props.first) {
    //         if(homemainslicetwo < first){
    //             sethomemainsliceone(homemainsliceone + 1)
    //             sethomemainslicetwo(homemainslicetwo + 1)
    //         }
    //         if(homemainslicetwo >= first){
    //             sethomemainsliceone(0)
    //             sethomemainslicetwo(4)
    //         }
    // }

    // function kk(first = this.props.first) {
    //         if(homemainslicefour < first){
    //             sethomemainslicethree(homemainslicethree + 1)
    //             sethomemainslicefour(homemainslicefour + 1)
    //         }
    //         if(homemainslicefour >= first){
    //             sethomemainslicethree(0)
    //             sethomemainslicefour(3)
    //         }
    // }

    // function jj(first = this.props.first) {
    //         if(homemainslicesix < first){
    //             sethomemainslicefive(homemainslicefive + 1)
    //             sethomemainslicesix(homemainslicesix + 1)
    //         }
    //         if(homemainslicesix >= first){
    //             sethomemainslicefive(0)
    //             sethomemainslicesix(4)
    //         }
    // }

    // function hh(first = this.props.first) {
    //         if(homemainsliceeight < first){
    //             sethomemainsliceseven(homemainsliceseven + 1)
    //             sethomemainsliceeight(homemainsliceeight + 1)
    //         }
    //         if(homemainsliceeight >= first){
    //             sethomemainsliceseven(0)
    //             sethomemainsliceeight(4)
    //         }
    // }

    // function gg(first = this.props.first) {
    //         if(homemainsliceten < first){
    //             sethomemainslicenine(homemainslicenine + 1)
    //             sethomemainsliceten(homemainsliceten + 1)
    //         }
    //         if(homemainsliceten >= first){
    //             sethomemainslicenine(0)
    //             sethomemainsliceten(4)
    //         }
    // }

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
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="w-screen  overflow-hidden">
            <br />
            <section onClick={() => {
                    // window.history.replaceState(null, "" , postupdatedat[0]?.postid)
                      setappmainstate({
                        appmainid: 'postarticle',
                        appmainidtwo: 'previewmain',
                        appmainpage: 0,
                        appmainparam: postupdatedat && postupdatedat[0]?.postid,
                        appmainboolean: true,
                      })
                    }} className="py-[20px] px-[20px] md:px-[60px] h-[90vh] flex flex-col justify-evenly gap-3">
                <figcaption className="flex flex-col justify-between items-center  border-b border-black">
                    <h1 className="text-6xl font-serif m-h6">{postupdatedat && postupdatedat[0]?.posttitle}</h1>
                    <button className="m-h3">Read more →</button>
                </figcaption>
                <figure className="min-h-[70vh] flex items-center justify-center  overflow-hidden border border-black">
                    <img src={postupdatedat && postupdatedat[0]?.posthero} alt="" className="max-h-[200ch] w-full" />
                </figure>
                <div className="w-full  border-b border-black" />
            </section>
            <br />
            <br />
            <section className=" w-[1200px] md:w-full group">
                {homemainmap?.map(data => (<>
                {/* <div className="px-[60px]">
                <div className="w-full  border-b border-black" />
                </div> */}
                <br />
                <figcaption className="px-[20px] md:px-[60px] w-screen md:w-full flex flex-row justify-between items-center">
                    <h1 className="m-h6  font-serif">{data?.homemaintitle}</h1>
                    <button onClick={() => {
                        setbreadmainstate('')
                        setgenreindexstate('')
                        navigate(data?.homemaindirect)
                    }} className="l-h6">→</button>
                </figcaption>
                <br />

                        {data?.homemainid === 'postupdatedat' && (<>
                        <SlideMain slidemainid={'homemainth'} slidemainindex={0} slidemaindata={homemainmap[0]?.homemainmap} slidemainref={ref} slidemainscroll={350} />
                        </>)}

                        {data?.homemainid === 'placeupdatedat' && (<>
                        <SlideMain slidemainid={'homemainth'} slidemainindex={0} slidemaindata={homemainmap[1]?.homemainmap} slidemainref={reftwo} slidemainscroll={350} />
                        </>)}

                        {data?.homemainid === 'productupdatedat' && (<>
                        <SlideMain slidemainid={'homemainth'} slidemainindex={0} slidemaindata={homemainmap[2]?.homemainmap} slidemainref={refthree} slidemainscroll={350} />
                        </>)}
                </>))}
                <br />
            </section>
            <br />
            <div className="w-full  border-b-2 border-black" />
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