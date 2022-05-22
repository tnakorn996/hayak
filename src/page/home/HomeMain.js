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
// import LandscapeMain from '../../component/place/LandscapeMain'

function HomeMain() {
    const {
        setappmainstate,
        setwiremainstate,

        postupdatedat,
        placeupdatedat,
        productupdatedat,

    } = useContext(ContextMain)
    const navigate = useNavigate()
    const [homemainsliceone, sethomemainsliceone] = useState(0)
    const [homemainslicetwo, sethomemainslicetwo] = useState(4)
    const [homemainslicethree, sethomemainslicethree] = useState(0)
    const [homemainslicefour, sethomemainslicefour] = useState(3)
    const [homemainslicefive, sethomemainslicefive] = useState(0)
    const [homemainslicesix, sethomemainslicesix] = useState(4)
    const [homemainsliceseven, sethomemainsliceseven] = useState(0)
    const [homemainsliceeight, sethomemainsliceeight] = useState(4)
    const [homemainslicenine, sethomemainslicenine] = useState(0)
    const [homemainsliceten, sethomemainsliceten] = useState(4)

    const [homemainmap, sethomemainmap] = useState()

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

    function ll(first = this.props.first) {
            if(homemainslicetwo < first){
                sethomemainsliceone(homemainsliceone + 1)
                sethomemainslicetwo(homemainslicetwo + 1)
            }
            if(homemainslicetwo >= first){
                sethomemainsliceone(0)
                sethomemainslicetwo(4)
            }
    }

    function kk(first = this.props.first) {
            if(homemainslicefour < first){
                sethomemainslicethree(homemainslicethree + 1)
                sethomemainslicefour(homemainslicefour + 1)
            }
            if(homemainslicefour >= first){
                sethomemainslicethree(0)
                sethomemainslicefour(3)
            }
    }

    function jj(first = this.props.first) {
            if(homemainslicesix < first){
                sethomemainslicefive(homemainslicefive + 1)
                sethomemainslicesix(homemainslicesix + 1)
            }
            if(homemainslicesix >= first){
                sethomemainslicefive(0)
                sethomemainslicesix(4)
            }
    }

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
                    window.history.replaceState(null, "" , postupdatedat[0]?.postid)
                      setappmainstate({
                        appmainid: 'postarticle',
                        appmainidtwo: 'previewmain',
                        appmainpage: 0,
                        appmainparam: postupdatedat && postupdatedat[0]?.postid,
                        appmainboolean: true,
                      })
                    }} className="py-[20px] px-[20px] md:px-[60px] h-[80vh] flex flex-col gap-3">
                <figcaption className="flex flex-col justify-between items-center  border-b border-black">
                    <h1 className="text-6xl font-serif m-h6">{postupdatedat && postupdatedat[0]?.posttitle}</h1>
                    <button className="m-h3">Read more →</button>
                </figcaption>
                <figure className="flex items-center justify-center  overflow-hidden border border-black">
                    <img src={postupdatedat && postupdatedat[0]?.posthero} alt="" className="max-h-[200ch] w-full" />
                </figure>
            </section>

            <section className="w-[1200px] md:w-full">
                {homemainmap?.map(data => (<>
                <br />
                <figcaption className="md:h-[10vh] px-[20px] md:px-[60px] w-screen md:w-full flex flex-row justify-between items-center">
                    <h1 className="m-h5  font-serif">{data?.homemaintitle}</h1>
                    <button onClick={() => {
                        navigate(data?.homemaindirect)
                    }} className="l-h2">See all</button>
                </figcaption>
                <br />
                <figure className="px-[20px] md:px-[60px] w-screen relative  overflow-y-scroll no-scrollbar">

                    <div className="w-[1200px] md:w-full group grid grid-cols-4 gap-5">
                        {data?.homemainid === 'postupdatedat' && (<>
                        <button onClick={() => {
                            ll(data?.homemainmap?.length)
                        }} className="hidden md:flex absolute z-10 bottom-0 right-0 w-[20vw] md:w-[10vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black">
                            {/* <h1 className="w-[50px] h-[50px] flex items-center justify-center  m-h6 bg-white rounded-full border border-gray-400">→</h1> */}
                            <RiArrowRightSLine className='text-6xl  bg-white rounded-full border border-black' />
                        </button>
                            {data?.homemainmap?.slice(homemainsliceone, homemainslicetwo).map(dat => (<>
                                    <VerticleMain onlick={() => {
                                        navigate(`/${dat?.postid}`)
                                    }} key={dat?.postid} postid={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} categoryid={dat?.categoryid} priceid={dat?.priceid} param={dat?.postid} />
                            </>))}
                        </>)}

                        {/* {data?.homemainid === 'postcategoryid' && (<>
                        <button onClick={() => {
                            kk(data?.homemainmap?.length)
                        }} className="hidden group-hover:flex absolute z-10 bottom-0 right-0 w-[10vw] md:w-[5vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black">
                            <RiArrowRightSLine className='text-5xl  bg-white rounded-full border' />
                        </button>
                            {data?.homemainmap?.slice(homemainslicethree, homemainslicefour).map(dat => (<>
                                    <VerticleMain onlick={() => {
                                        navigate(`/${dat?.postid}`)
                                    }} key={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} categoryid={dat?.categoryid} priceid={dat?.priceid} param={dat?.postid} />
                            </>))}
                        </>)}

                        {data?.homemainid === 'postpostcount' && (<>
                        <button onClick={() => {
                            jj(data?.homemainmap?.length)
                        }} className="hidden group-hover:flex absolute z-10 bottom-0 right-0 w-[10vw] md:w-[5vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black">
                            <RiArrowRightSLine className='text-5xl  bg-white rounded-full border' />
                        </button>
                            {data?.homemainmap?.slice(homemainslicefive, homemainslicesix).map(dat => (<>
                                    <VerticleMain onlick={() => {
                                        navigate(`/${dat?.postid}`)
                                    }} key={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} categoryid={dat?.categoryid} priceid={dat?.priceid} param={dat?.postid} />
                            </>))}
                        </>)}

                        {data?.homemainid === 'postcreatedat' && (<>
                        <button onClick={() => {
                            hh(data?.homemainmap?.length)
                        }} className="hidden group-hover:flex absolute z-10 bottom-0 right-0 w-[10vw] md:w-[5vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black">
                            <RiArrowRightSLine className='text-5xl' />
                        </button>
                            {data?.homemainmap?.slice(homemainsliceseven, homemainsliceeight).map(dat => (<>
                                    <VerticleMain onlick={() => {
                                        navigate(`/${dat?.postid}`)
                                    }} key={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} categoryid={dat?.categoryid} priceid={dat?.priceid} param={dat?.postid} />
                            </>))}
                        </>)}

                        {data?.homemainid === 'postpriceid' && (<>
                        <button onClick={() => {
                            gg(data?.homemainmap?.length)
                        }} className="hidden group-hover:flex absolute z-10 bottom-0 right-0 w-[10vw] md:w-[5vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black">
                            <RiArrowRightSLine className='text-5xl' />
                        </button>
                            {data?.homemainmap?.slice(homemainslicenine, homemainsliceten).map(dat => (<>
                                    <VerticleMain onlick={() => {
                                        navigate(`/${dat?.postid}`)
                                    }} key={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} categoryid={dat?.categoryid} priceid={dat?.priceid} param={dat?.postid} />
                            </>))}
                        </>)} */}
                    </div>

                    <div className="w-[700px] md:w-full group grid grid-cols-3 gap-5">
                        {data?.homemainid === 'placeupdatedat' && (<>
                        <button onClick={() => {
                            kk(data?.homemainmap?.length)
                        }} className="hidden md:flex absolute z-10 bottom-0 right-0 w-[20vw] md:w-[10vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black">
                            {/* <h1 className="w-[50px] h-[50px] flex items-center justify-center  m-h6 bg-white rounded-full border border-gray-400">→</h1> */}
                            <RiArrowRightSLine className='text-6xl  bg-white rounded-full border border-black' />
                        </button>
                            {data?.homemainmap?.slice(homemainslicethree, homemainslicefour).map(dat => (<>
                                    <VerticleMain onlick={() => {
                                        navigate(`/${dat?.postid}`)
                                    }} key={dat?.postid} postid={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posticon={dat?.posticon} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} categoryid={dat?.categoryid} priceid={dat?.priceid} param={dat?.postid} />
                            </>))}
                        </>)}
                    </div>

                    <div className="w-[1200px] md:w-full group grid grid-cols-4 gap-5">
                        {data?.homemainid === 'productupdatedat' && (<>
                        <button onClick={() => {
                            jj(data?.homemainmap?.length)
                        }} className="hidden md:flex absolute z-10 bottom-0 right-0 w-[20vw] md:w-[10vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black">
                            {/* <h1 className="w-[50px] h-[50px] flex items-center justify-center  m-h6 bg-white rounded-full border border-gray-400">→</h1> */}
                            <RiArrowRightSLine className='text-6xl  bg-white rounded-full border border-black' />
                        </button>
                            {data?.homemainmap?.slice(homemainslicefive, homemainslicesix).map(dat => (<>
                                    <VerticleMain onlick={() => {
                                        navigate(`/${dat?.postid}`)
                                    }} key={dat?.postid} postid={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posticon={dat?.posticon} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} categoryid={dat?.categoryid} priceid={dat?.priceid} param={dat?.postid} placepostid={dat?.placepostid} />
                            </>))}
                        </>)}
                    </div>

                </figure>
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