import { MotionConfig } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { ContextMain } from '../../context/contextmain'
import useApp from '../../hook/useApp'
import { urlFor } from '../../lib/sanity'
import VerticleMain from '../post/VerticleMain'
import ScrollMain from '../scroll/ScrollMain'

function SlideMain({
    slidemainid,
    slidemainindex,
    slidemaindata,
    slidemainref,
    slidemainscroll,
    slidemainslice,
    slidemainstyle,
}) {
    const navigate = useNavigate()
    const {
        setappmainstate,
        setstackmainstate,
        rtamainstate,

    } = useContext(ContextMain)
    const [slidemainindextwo, setslidemainindextwo] = useState(0)
    const [slidemainpageyoffset, setslidemainpageyoffset] = useState(0)
    const [slidemainpageyoffsetstyle, setslidemainpageyoffsetstyle] = useState()

    const [slidemainrender, setslidemainrender] = useState()

    const homemainth = [
        {
            slidemainindex: 0,
            slidemainrender: () => {

                return  slidemaindata?.slice(0, slidemainslice)?.map((data, index) => (<>
                    <div key={index} className="w-[250px] md:min-w-fit snap-center">
                        <VerticleMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} data={data} postid={data?.postid} type={data?._type} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} genreid={data?.genreid} priceid={data?.priceid} param={data?.postid} placepostid={data?.placepostid} />
                    </div>
                    </>))
            },
        },
        {
            slidemainindex: 1,
            slidemainrender: () => {

                return slidemaindata?.slice(0, slidemainslice)?.map(data => (<>
                    {/* <section onClick={() => {
                        // window.history.replaceState(null, "" , postupdatedat[0]?.postid)
                          setappmainstate({
                            appmainid: 'postarticle',
                            appmainidtwo: 'previewmain',
                            appmainpage: 0,
                            appmainparam: data.postid,
                            appmainboolean: true,
                          })
                        }} className="w-screen px-[20px] md:px-[60px] h-[80vh] flex flex-col justify-evenly gap-3   snap-center">
                        <figcaption className="flex flex-col justify-between items-center  border-b border-black">
                            <h1 className="text-6xl font-serif m-h6">{data.posttitle}</h1>
                            <button className="m-h3">Read more →</button>
                        </figcaption>
                        <figure className="relative h-[60vh] flex items-center justify-center  overflow-hidden border border-black">
                            <div className="z-10 w-full h-full absolute top-0 left-0  bg-black opacity-5" />
                            <ScrollMain scrollmainstatic={{scrollmaintransform: 0.3}} >
                                <img src={urlFor(data.posthero)} alt="" className="min-w-[100ch] h-fit md:min-w-full md:min-h-fit" />
                            </ScrollMain>
                            
                        </figure>
                        <div className="w-full  border-b border-black" />
                    </section> */}
                </>))
            }
        }
    ]

    const categoryindexth = [
        {
            slidemainindex: 0,
            slidemainrender: () => {

                return  slidemaindata?.slice(0, slidemainslice)?.map((data, index) => (<>
                    <div key={index} className="w-[250px] md:w-[300px] snap-center">
                        <VerticleMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} data={data} postid={data?.postid} type={data?._type} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} postherotwo={data?.postherotwo} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} genreid={data?.genreid} priceid={data?.priceid}  param={data?.postid} placepostid={data?.placepostid} />
                    </div>
                    </>))
            },
        },
        {
            slidemainindex: 1,
            slidemainrender: () => {

                return  slidemaindata?.slice(0, slidemainslice)?.map((data, index) => (<>
                    {/* <div className="w-[250px] md:w-[300px] snap-center"> */}
                    <div key={index} className="w-[250px] md:min-w-fit snap-center">
                        <VerticleMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} data={data} postid={data?.postid} type={data?._type} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} postherotwo={data?.postherotwo} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} genreid={data?.genreid} priceid={data?.priceid}  param={data?.postid} placepostid={data?.placepostid} />
                    </div>
                    </>))
            },
        }
    ]

    const postindexth = [
        {
            slidemainindex: 0,
            slidemainrender: () => {
                // const empty = []
                const empty = [
                    {
                        posthero: slidemaindata?.posthero,
                        postherosource: slidemaindata?.postherosource,
                    },
                    {
                        posthero: slidemaindata?.postherotwo,
                        postherosource: slidemaindata?.postherosourcetwo,
                    },
                ]
                return empty?.map((data, index) => (<>
                    <div key={index} className="w-screen  snap-center overflow-hidden">
                        <figure className="w-full h-[75vh] relative flex justify-center items-center  ">                            
                            <ScrollMain 
                                scrollmainstatic={{
                                    scrollmaintransform: 0.5,
                                }}
                                >
                            <img src={urlFor(data?.posthero)} alt="" className={`z-10 max-w-[150ch] max-h-full md:min-w-full md:min-h-fit`} />
                            </ScrollMain>
                            
                            {/* <div className="absolute z-10">
                            <LoadingMain />
                            </div> */}
                            <div className="z-10 w-full h-full absolute top-0 left-0  bg-white opacity-10" />
                            <div onClick={() => {
                                setappmainstate({
                                    appmainidtwo: 'previewmain',
                                    appmainid: 'postarticle',
                                    appmainpage: 1,
                                    appmainimage: data?.posthero,
                                    appmainsource: data?.postherosource,
                                    appmainboolean: true,
                                })
                            }}  className="hidden group-hover:block absolute top-[10vh] left-3 z-30 p-[10px]  ">
                            <button className="l-button opacity-100 border border-black">View image</button>
                            </div>               
  
                        </figure>
                    </div>
                    </>))
            },
        },
    ]

    const slidemain = [
        {
            slidemainid: 'homemainth',
            slidemainref: homemainth,
        },
        {
            slidemainid: 'categoryindexth',
            slidemainref: categoryindexth,
        },
        {
            slidemainid: 'postindexth',
            slidemainref: postindexth,
        },
    ]

    // useEffect(() => {
    //   if(slidemainpageyoffset){
    //     setslidemainpageyoffsetstyle(`hidden translate-y-[${Math.floor(slidemainpageyoffset * 0.5)}px]`)
    //   }
    // }, [slidemainpageyoffset])

  const [appstatic, setappstatic] = useApp(slidemain, slidemainid, slidemainindex, slidemaindata)
    
    useEffect(() => {
      if(appstatic && slidemainid) {
        // const filter = slidemain.filter(data => data.slidemainid === slidemainid)
        // const filtertwo = filter[0].slidemainref.filter(data => data.slidemainindex === slidemainindex)
        // setslidemainrender(filtertwo[0].slidemainrender)

        setslidemainrender(appstatic[0].slidemainrender)
      }
    }, [appstatic, slidemainid, slidemaindata, slidemainindex])

    // const scrollleft = slidemainref.current.scrollLeft;
    // const offsetwidth = slidemainref.current.offsetWidth;
    // console.log('scrollleft, offsetwidth :>> ', scrollleft, offsetwidth);
    const ll = (first= this.props.first, second= this.props.second, third = this.props.third) => {
        setslidemainindextwo((slidemainscroll) * third)
        first.current.scrollTo((slidemainscroll) * second * third, 0)

        // const offset = ref.current.offsetWidth;
        // ref.current.scrollTo(ref.current.scrollLeft + offset * delta, 0)
        // ref.current.scrollLeft = 1500;
        // ref.current.scrollLeft += 20;
    }

    const kk = (first= this.props.first, second= this.props.second) => {
        const scrollleft = first.current.scrollLeft;
        const offsetwidth = first.current.offsetWidth;
        if(scrollleft < offsetwidth) {
            first.current.scrollTo((scrollleft + slidemainscroll) * second, 0)
        } 
        if(scrollleft >= offsetwidth) {
            first.current.scrollTo(0, 0)
        }
    }

  return (
    <div>
        <main className="">
            <section className="w-screen md:w-full relative group">
                
                {/* <figure style={{transform: `translateY(${slidemaintransform && slidemainpageyoffset * (slidemaintransform || 0.5)}px)`}} ref={slidemainref} className={`relative px-[20px] md:px-[60px] w-screen md:w-full grid grid-flow-col justify-start  overflow-x-scroll overflow-y-clip no-scrollbar snap-x snap-mandatory scroll-smooth duration-100 md:duration-[0ms] ${slidemainstyle && slidemainstyle}`}> */}

                <figure ref={slidemainref} className={`relative px-[20px] md:px-[60px] w-screen md:w-full grid grid-flow-col justify-start  overflow-x-scroll overflow-y-clip no-scrollbar snap-x snap-mandatory scroll-smooth duration-100 md:duration-[0ms] ${slidemainstyle && slidemainstyle}`}>
                    {slidemainrender && slidemainrender}
                </figure>

                {(!slidemainslice)  && (<>
                <button className="opacity-0 group-hover:opacity-100 absolute z-20 top-0 right-0 w-fit h-full justify-center items-center  duration-100">
                    <RiArrowRightSLine onClick={() => {
                        // setslidemainindextwo(slidemaindata?.length - slidemainslice)
                        kk(slidemainref, 1)
                    }} className='hidden md:block text-7xl p-[10px]  l-h6 bg-white shadow-2xl' />
                </button>
                </>)}
                
                <div className="hidden md:flex flex-row z-10 absolute -top-10 w-full justify-center items-center ">
                    {/* <figure className="flex flex-row justify-center items-center   border "> */}
                    {(slidemainslice && slidemaindata?.length > 5) && slidemaindata?.slice(0, slidemainslice)?.map((data, index) => (<>
                    <article onClick={() => {
                        ll(slidemainref, 1, index)
                    }} className={`p-[10px] w-[7px] h-[7px]  bg-gray-200 duration-100 ${slidemainindextwo === slidemainscroll * index && '!w-[100px] !cursor-default !bg-gray-900'} `}>
                    </article>
                    </>))}
                    {/* </figure> */}
                </div>
            </section>
        </main>
    </div>
  )
}

export default SlideMain