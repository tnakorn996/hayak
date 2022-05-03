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

function HomeMain() {
    const {
        postupdatedat,
        postpostcount,
        postcreatedat,
        postcategoryid,

    } = useContext(ContextMain)
    const navigate = useNavigate()
    const [homemainsliceone, sethomemainsliceone] = useState(0)
    const [homemainslicetwo, sethomemainslicetwo] = useState(4)
    const [homemainslicethree, sethomemainslicethree] = useState(0)
    const [homemainslicefour, sethomemainslicefour] = useState(4)
    const [homemainslicefive, sethomemainslicefive] = useState(0)
    const [homemainslicesix, sethomemainslicesix] = useState(4)
    const [homemainsliceseven, sethomemainsliceseven] = useState(0)
    const [homemainsliceeight, sethomemainsliceeight] = useState(4)

    const [homemainmap, sethomemainmap] = useState()

    const homemain = [
        {
            homemainid: 'postupdatedat',
            homemainmap: postupdatedat,
            homemaintitle: '📈 Trending Blog',
            homemaindirect: '/search/searchmain'
        },
        {
            homemainid: 'postcategoryid',
            homemainmap: postcategoryid,
            homemaintitle: '💡 Blog For You',
            homemaindirect: '/search/searchmain',
        },
        {
            homemainid: 'postpostcount',
            homemainmap: postpostcount,
            homemaintitle: '🔥 Hottest Blog',
            homemaindirect: '/search/searchmain'
        },
        {
            homemainid: 'postcreatedat',
            homemainmap: postcreatedat,
            homemaintitle: '✨ New Blog',
            homemaindirect: '/search/searchmain'
        }
    ]

    useEffect(() => {
        if(postupdatedat && postpostcount && postcategoryid && postcreatedat){
            sethomemainmap(homemain)
        }
    }, [postupdatedat, postpostcount, postcategoryid, postcreatedat])

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
                sethomemainslicefour(4)
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

    function hh(first = this.props.first) {
            if(homemainsliceeight < first){
                sethomemainsliceseven(homemainsliceseven + 1)
                sethomemainsliceeight(homemainsliceeight + 1)
            }
            if(homemainsliceeight >= first){
                sethomemainsliceseven(0)
                sethomemainsliceeight(4)
            }
    }

    // console.log(' :>> ',homemainsliceone, homemainslicetwo);

    return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="">
            <section className="">
                <br />
                {homemainmap?.map(data => (<>
                <br />
                <figcaption className="max-w-[1200px] mx-auto  px-[20px] md:px-[60px] flex flex-row justify-between items-center ">
                    <h1 className="m-h5">{data?.homemaintitle}</h1>
                    <h1 onClick={() => {
                        navigate(data?.homemaindirect)
                    }} className="l-h2">See all</h1>
                </figcaption>
                <figure className="relative max-w-[1200px] mx-auto overflow-hidden no-scrollbar">

                    <div className="group w-[1200px] py-[20px] px-[20px] md:px-[60px] grid grid-cols-4 gap-5">
                    
                    {data?.homemainid === 'postupdatedat' && (<>
                    <button onClick={() => {
                        ll(data?.homemainmap?.length)
                    }} className="hidden group-hover:flex absolute z-10 bottom-0 right-0 w-[10vw] md:w-[5vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black">
                        <RiArrowRightSLine className='text-5xl' />
                    </button>
                        {data?.homemainmap?.slice(homemainsliceone, homemainslicetwo).map(dat => (<>
                                <VerticleMain onlick={() => {
                                    navigate(`/${dat?.postid}`)
                                }} key={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} categoryid={dat?.categoryid} priceid={dat?.priceid} />
                        </>))}
                    </>)}

                    {data?.homemainid === 'postcategoryid' && (<>
                    <button onClick={() => {
                        kk(data?.homemainmap?.length)
                    }} className="hidden group-hover:flex absolute z-10 bottom-0 right-0 w-[10vw] md:w-[5vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black">
                        <RiArrowRightSLine className='text-5xl' />
                    </button>
                        {data?.homemainmap?.slice(homemainslicethree, homemainslicefour).map(dat => (<>
                                <VerticleMain onlick={() => {
                                    navigate(`/${dat?.postid}`)
                                }} key={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} categoryid={dat?.categoryid} priceid={dat?.priceid} />
                        </>))}
                    </>)}

                    {data?.homemainid === 'postpostcount' && (<>
                    <button onClick={() => {
                        jj(data?.homemainmap?.length)
                    }} className="hidden group-hover:flex absolute z-10 bottom-0 right-0 w-[10vw] md:w-[5vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black">
                        <RiArrowRightSLine className='text-5xl' />
                    </button>
                        {data?.homemainmap?.slice(homemainslicefive, homemainslicesix).map(dat => (<>
                                <VerticleMain onlick={() => {
                                    navigate(`/${dat?.postid}`)
                                }} key={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} categoryid={dat?.categoryid} priceid={dat?.priceid} />
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
                                }} key={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} categoryid={dat?.categoryid} priceid={dat?.priceid} />
                        </>))}
                    </>)}

                    </div>
                </figure>
                </>))}
                <br /><br />
            </section>


        </motion.main>
    </div>
  )
}

export default HomeMain