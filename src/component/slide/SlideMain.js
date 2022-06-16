import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { ContextMain } from '../../context/contextmain'
import { urlFor } from '../../lib/sanity'
import GuideMain from '../guide/GuideMain'
import LoadingMain from '../load/LoadingMain'
import VerticleMain from '../post/VerticleMain'

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

    const [slidemainrender, setslidemainrender] = useState()

    const homemainth = [
        {
            slidemainindex: 0,
            slidemainrender: () => {

                return  slidemaindata?.slice(0, slidemainslice)?.map(data => (<>
                    <div className="w-[250px] md:min-w-fit snap-center">
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
                    <section onClick={() => {
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
                            <img src={urlFor(data.posthero)} alt="" className="min-w-[100ch] h-fit md:w-full md:h-fit" />
                        </figure>
                        <div className="w-full  border-b border-black" />
                    </section>
                </>))
            }
        }
    ]

    const categoryindexth = [
        {
            slidemainindex: 0,
            slidemainrender: () => {

                return  slidemaindata?.slice(0, slidemainslice)?.map(data => (<>
                    <div className="w-[250px] md:w-[300px] snap-center">
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

                return  slidemaindata?.slice(0, slidemainslice)?.map(data => (<>
                    {/* <div className="w-[250px] md:w-[300px] snap-center"> */}
                    <div className="w-[250px] md:min-w-fit snap-center">
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
                return empty?.map(data => (<>
                    <div className="w-screen  snap-center overflow-hidden">
                        <figure className="h-[40vh] md:h-[55vh] relative flex justify-center items-center ">
                            <img loading='lazy' src={urlFor(data?.posthero)} alt="" className="z-10 min-w-[100ch] min-h-full md:h-fit md:min-w-full" />
                            <div className="absolute">
                            <LoadingMain />
                            </div>
                            <div className="z-10 w-full h-full absolute top-0 left-0  bg-black opacity-5" />
                            <div onClick={() => {
                                setappmainstate({
                                    appmainidtwo: 'previewmain',
                                    appmainid: 'postarticle',
                                    appmainpage: 1,
                                    appmainimage: data?.posthero,
                                    appmainsource: data?.postherosource,
                                    appmainboolean: true,
                                })
                            }}  className="hidden group-hover:block absolute top-3 left-3 z-30 p-[10px]  ">
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

    useEffect(() => {
      if(slidemainid) {
          const filter = slidemain.filter(data => data.slidemainid === slidemainid)
          const filtertwo = filter[0].slidemainref.filter(data => data.slidemainindex === slidemainindex)
          setslidemainrender(filtertwo[0].slidemainrender)
      }
    }, [slidemainid, slidemaindata, slidemainindex])

    const ll = (first= this.props.first, second= this.props.second, third = this.props.third) => {
        const scrollleft = first.current.scrollLeft;
        const offsetwidth = first.current.offsetWidth;
        
        setslidemainindextwo((slidemainscroll) * third)
        first.current.scrollTo((slidemainscroll) * second * third, 0)

        // if(scrollleft <= offsetwidth) {
        //     first.current.scrollTo((scrollleft + slidemainscroll) * second, 0)
        // } 
        // if(scrollleft > offsetwidth) {
        //     first.current.scrollTo(0, 0)
        // }

        // const offset = ref.current.offsetWidth;
        // ref.current.scrollTo(ref.current.scrollLeft + offset * delta, 0)
        // ref.current.scrollLeft = 1500;
        // ref.current.scrollLeft += 20;
    }

    const kk = (first= this.props.first, second= this.props.second) => {
        const scrollleft = first.current.scrollLeft;
        const offsetwidth = first.current.offsetWidth;

        if(scrollleft <= offsetwidth) {
            first.current.scrollTo((scrollleft + slidemainscroll) * second, 0)
        } 
        if(scrollleft > offsetwidth) {
            first.current.scrollTo(0, 0)
        }
    }

  return (
    <div>
        <main className="">
            <section className="w-screen md:w-full relative group">
                <figure ref={slidemainref} className={`relative px-[20px] md:px-[60px] w-screen md:w-full grid grid-flow-col gap-5 justify-start  overflow-x-scroll overflow-y-clip no-scrollbar snap-x snap-mandatory scroll-smooth ${slidemainstyle && slidemainstyle}`}>
                   {slidemainrender && slidemainrender}
                </figure>
                    {!slidemainslice && (<>
                    <button className="opacity-0 group-hover:opacity-100 absolute z-20 top-0 right-0 w-fit h-full justify-center items-center  duration-100">
                    <RiArrowRightSLine onClick={() => {
                        // setslidemainindextwo(slidemaindata?.length - slidemainslice)
                        kk(slidemainref, 1)
                    }} className='text-7xl p-[10px]  l-h6 bg-white shadow-2xl' />
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