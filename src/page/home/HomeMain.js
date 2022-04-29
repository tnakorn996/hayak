import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

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

    const [homemainmap, sethomemainmap] = useState()

    const homemain = [
        {
            homemainid: 'postupdatedat',
            homemainmap: postupdatedat,
            homemaintitle: '📈 Trending Blog',
            homemainredirect: '/category/train'
        },
        {
            homemainid: 'postcategoryid',
            homemainmap: postcategoryid,
            homemaintitle: '💡 For You',
            homemainredirect: '/category/train'
        },
        {
            homemainid: 'postpostcount',
            homemainmap: postpostcount,
            homemaintitle: '🔥 Hottest Blog',
            homemainredirect: '/category/train'
        },
        {
            homemainid: 'postcreatedat',
            homemainmap: postcreatedat,
            homemaintitle: '✨ New Blog',
            homemainredirect: '/category/train'
        }
    ]

   
    useEffect(() => {
      if(postupdatedat && postpostcount && postcategoryid && postcreatedat){
        sethomemainmap(homemain)
      }
    }, [postupdatedat, postpostcount, postcategoryid, postcreatedat])

    function ll() {
        homemainmap.forEach(data => {
            if(homemainslicetwo < data.homemainmap.length){
                sethomemainsliceone(homemainsliceone + 1)
                sethomemainslicetwo(homemainslicetwo + 1)
            }
            if(homemainslicetwo > data.homemainmap.length ){
                sethomemainsliceone(homemainsliceone - 1)
                sethomemainslicetwo(homemainslicetwo - 1)
            }
            console.log( homemainsliceone, homemainslicetwo)
        })
    }
  return (
    <div>
        <main className="">
            <section className="relative">
                <button onClick={() => ll()} className="hidden md:flex md:fixed z-20 bottom-0 right-0 w-[5vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black">
                    <RiArrowRightSLine className='text-5xl' />
                </button>
                <button className="hidden md:flex md:fixed z-10 bottom-0 right-0 w-[5vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black" />
                <br />
                {homemainmap?.map(data => (<>
                <br />
                <figcaption className="max-w-[1200px] mx-auto  px-[20px] md:px-[60px] flex flex-row justify-between items-center ">
                    <h1 className="m-h5">{data?.homemaintitle}</h1>
                    <h1 className="l-h2">See all</h1>
                </figcaption>
                <figure className="max-w-[1200px] mx-auto overflow-y-auto sm:overflow-y-hidden no-scrollbar">
                    <div className="w-[1200px] py-[20px] px-[20px] md:px-[60px] grid grid-cols-4 gap-1">
                    {data?.homemainmap?.slice(homemainsliceone, homemainslicetwo).map(dat => (<>
                        <VerticleMain onlick={() => {
                            navigate(`/${dat?.postid}`)
                        }} key={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} />
                    </>))}
                    </div>
                </figure>
                </>))}
                <br /><br />
            </section>


        </main>
    </div>
  )
}

export default HomeMain