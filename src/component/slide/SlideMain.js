import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { ContextMain } from '../../context/contextmain'
import LoadingMain from '../load/LoadingMain'
import VerticleMain from '../post/VerticleMain'

function SlideMain({
    slidemainid,
    slidemainindex,
    slidemaindata,
    slidemainref,
    slidemainscroll,
    slidemainstyle,
}) {
    const navigate = useNavigate()
    const {
        setappmainstate,

    } = useContext(ContextMain)

    const [slidemainrender, setslidemainrender] = useState()

    const homemainth = [
        {
            slidemainindex: 0,
            slidemainrender: () => {

                return  slidemaindata?.slice(0, 12).map(data => (<>
                    <div className="w-[250px] md:w-fit snap-center">
                        <VerticleMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} postid={data?.postid} type={data?._type} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} genreid={data?.genreid} priceid={data?.priceid} param={data?.postid} placepostid={data?.placepostid} />
                    </div>
                    </>))
            },
        }
    ]

    const categoryindexth = [
        {
            slidemainindex: 0,
            slidemainrender: () => {

                return  slidemaindata?.slice(0, 12)?.map(data => (<>
                    <div className="w-[250px] md:w-[300px] snap-center">
                        <VerticleMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} postid={data?.postid} type={data?._type} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} genreid={data?.genreid} priceid={data?.priceid}  param={data?.postid} placepostid={data?.placepostid} />
                    </div>
                    </>))
            },
        },
        {
            slidemainindex: 1,
            slidemainrender: () => {

                return  slidemaindata?.slice(0, 12)?.map(data => (<>
                    {/* <div className="w-[250px] md:w-[300px] snap-center"> */}
                    <div className="w-[250px] md:w-fit snap-center">
                        <VerticleMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} postid={data?.postid} type={data?._type} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} genreid={data?.genreid} priceid={data?.priceid}  param={data?.postid} placepostid={data?.placepostid} />
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
                return empty?.slice(0, 12)?.map(data => (<>
                    <div className="w-screen  snap-center overflow-hidden">
                        <figure className="h-[40vh] md:h-[55vh] relative flex justify-center items-center ">
                            <img loading='lazy' src={data?.posthero} alt="" className="z-10 min-h-full min-w-[70ch] md:min-h-[100ch] md:w-full" />
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

    const ll = (first= this.props.first, second= this.props.second) => {
        const scrollleft = first.current.scrollLeft;
        const offsetwidth = first.current.offsetWidth;

        if(scrollleft <= offsetwidth){
            first.current.scrollTo(scrollleft + slidemainscroll * second, 0)
        } 
        if(scrollleft > offsetwidth) {
            first.current.scrollTo(0, 0)
        }

            // const offset = ref.current.offsetWidth;
            // ref.current.scrollTo(ref.current.scrollLeft + offset * delta, 0)
            // ref.current.scrollLeft = 1500;
            // ref.current.scrollLeft += 20;
    }

  return (
    <div>
        <main className="">
            <section className="w-[1200px] md:w-full relative group">
                <figure ref={slidemainref} className={`relative px-[20px] md:px-[60px] w-screen md:w-full grid grid-flow-col gap-5 justify-start  overflow-x-scroll overflow-y-clip no-scrollbar snap-x snap-mandatory scroll-smooth ${slidemainstyle && slidemainstyle}`}>
                   {slidemainrender && slidemainrender}
                </figure>
                    <button onClick={() => ll(slidemainref, 1)} className="hidden group-hover:flex absolute z-20 top-0 right-0 w-fit h-full justify-center items-center !opacity-100">
                    <RiArrowRightSLine className='text-7xl p-[10px]  l-h6 bg-white shadow-2xl' />
                    </button>
            </section>
        </main>
    </div>
  )
}

export default SlideMain