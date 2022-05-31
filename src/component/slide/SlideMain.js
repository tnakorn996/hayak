import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import VerticleMain from '../post/VerticleMain'

function SlideMain({
    slidemainid,
    slidemainindex,
    slidemaindata,
    slidemainref,
}) {
    const navigate = useNavigate()

    const [slidemainrender, setslidemainrender] = useState()

    const homemainth = [
        {
            slidemainindex: 0,
            slidemainrender: () => {

                return  slidemaindata?.slice(0, 12).map(data => (<>
                    <div className="w-[250px] md:w-fit snap-center">
                        <VerticleMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} postid={data?.postid} type={data?._type} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} genreid={data?.genreid} priceid={data?.priceid}  param={data?.postid} />
                    </div>
                    </>))
            },
        }
    ]

    const categoryindexth = [
        {
            slidemainindex: 0,
            slidemainrender: () => {

                return  slidemaindata?.slice(0, 12).map(data => (<>
                    <div className="w-[250px] md:w-[300px] snap-center">
                        <VerticleMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} postid={data?.postid} type={data?._type} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} genreid={data?.genreid} priceid={data?.priceid}  param={data?.postid} />
                    </div>
                    </>))
            },
        },
        {
            slidemainindex: 1,
            slidemainrender: () => {

                return  slidemaindata?.slice(0, 12).map(data => (<>
                    {/* <div className="w-[250px] md:w-[300px] snap-center"> */}
                    <div className="w-[250px] md:w-fit snap-center">
                        <VerticleMain onlick={() => {
                            navigate(`/${data?.postid}`)
                        }} key={data?.postid} postid={data?.postid} type={data?._type} createdat={data?._createdAt} posticon={data?.posticon} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} genreid={data?.genreid} priceid={data?.priceid}  param={data?.postid} />
                    </div>
                    </>))
            },
        }
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
            first.current.scrollTo(scrollleft + 400 * second, 0)
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
            <section className="w-[1200px] md:w-full mx-auto relative group">
                <figure ref={slidemainref} className="relative px-[20px] md:px-[60px] w-screen md:w-full grid grid-flow-col gap-5 justify-start  overflow-x-scroll no-scrollbar snap-x snap-mandatory scroll-smooth">
                   {slidemainrender && slidemainrender}
                    <button onClick={() => ll(slidemainref, 1)} className="hidden group-hover:flex sticky z-20 top-0 -right-[60px] w-[7vw] h-full justify-center items-center !opacity-100">
                    <RiArrowRightSLine className='text-7xl p-[10px]  l-h6 bg-white shadow-2xl rounded-full' />
                    </button>
                </figure>
            </section>
        </main>
    </div>
  )
}

export default SlideMain