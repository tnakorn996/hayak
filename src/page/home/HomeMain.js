import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import { useRef } from 'react'

import VerticleMain from '../../component/post/VerticleMain'
import { ContextMain } from '../../context/contextmain'
import '../home/homemain.css'
import SlideMain from '../../component/slide/SlideMain'
import JointMain from '../../component/joint/JointMain'
import ListMain from '../../component/list/ListMain'
import FabMain from '../../component/fab/FabMain'
import ScrollMain from '../../component/scroll/ScrollMain'
import { urlFor } from '../../lib/sanity'
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

    const [homemainrender, sethomemainrender] = useState()
    const ref = useRef(null)
    const reftwo = useRef(null)
    const refthree = useRef(null)
    const reffour = useRef(null)

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

    if(!postplaceproduct) return <JointMain jointmainid={'hometemplate'} jointmainindex={0} />

    return (
    <div>
        <main className="relative w-screen  overflow-hidden">
            {/* <section className="">
            <SlideMain 
            slidemainid={'homemainth'} 
            slidemainindex={1} 
            slidemaindata={postplaceproduct} 
            slidemainref={reffour} 
            slidemainscroll={1200}
            slidemainstyle={'!p-0'}
            slidemainslice={12} />
            </section> */}

            <section className="">
                {postplaceproduct?.slice(0, 3)?.map((data, index) => (<>
                <section key={index} className="relative w-screen h-[90vh] md:h-screen flex flex-col justify-evenly gap-3   snap-center">
                        <figure className="relative h-full flex items-center justify-center  overflow-hidden">
                            <div className="z-10 w-full h-full absolute top-0 left-0  bg-black opacity-5" />
                            <ScrollMain scrollmainstatic={{scrollmaintransform: 0.1}} >
                            <img src={urlFor(data.posthero)} alt="" className="min-w-[150ch] min-h-[100ch]  md:min-w-full md:min-h-fit" />
                            </ScrollMain>
                        </figure>
                        <figcaption className="p-[20px] md:p-[60px] w-full absolute bottom-0 left-0 grid grid-flow-row justify-items-start items-center  bg-gradient-to-b from-transparent to-gray-900">
                            <div className="">
                                <h1 className="text-3xl md:text-5xl font-serif m-h6 text-white">{data.posttitle}</h1>
                                <br />
                            </div>
                            <button onClick={() => {
                                navigate(`/${data?.postid}`)
                            }} className="z-20 l-button">Read more →</button>
                        </figcaption>
                    </section>
                </>))}
            </section>

            <section className="h-fit w-[1200px] md:w-full group">
                <br /><br /><br /><br />
                {homemainrender?.map((data, index) => (<>
                <div key={index} className="">
                <br />
                <figcaption className="px-[20px] md:px-[60px] w-screen md:w-full flex flex-row justify-between items-center">
                    <h1 className="m-h6  font-serif">{data?.spreadmaintitle}</h1>
                    <button onClick={() => {
                        setbreadmainstate('')
                        setgenreindexstate('')
                        navigate(data?.spreadmaindirect)
                    }} className="m-h6">→</button>
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
                </div>
                </>))}
                <br />
            </section>
            
            {/* <br />
            <section className="px-[20px] md:px-[60px]">
                <WireMain />
            </ section>
            <br /> */}
            <br />
            <section className="">
                <ListMain listmainstatic={{listmainid: 'faqsummary', listmainindex: 0}} />
            </section>
            <br />

            <figure className="z-20 fixed bottom-5 right-5 flex flex-col items-end gap-3  duration-100">
                <FabMain fabmainid={'posttfoot'} fabmainindex={1} />
            </figure>
            
        </main>
    </div>
  )
}

export default HomeMain