import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { urlFor } from '../../lib/sanity'
import PtaMain from '../pta/PtaMain'

function HorizonMain({onlick, data, postid, posticon, posthero, posttitle, postsubtitle,  createdat, param}) {

  return (
    <div>
        <main className="">
            <article className="flex flex-row justify-between">
                <section className="grid grid-flow-col items-center gap-3 justify-start">
                    <figure className={`relative w-[70px] h-[70px] flex items-center justify-center  overflow-hidden border ${posticon && 'rounded-full shadow'}`}>
                        <img loading='lazy' src={urlFor(posticon || posthero)} alt="" className="max-w-[10ch] z-10 max-h-[10ch]" />
                        {/* {!posticon && <div className="z-10 w-full h-full absolute top-0 left-0  bg-black opacity-5" />} */}
                    </figure>
                    <figcaption className="grid grid-flow-row l-section">
                        <a href={`/${postid}`} className="m-h3 truncate font-serif">{posttitle}</a>
                        <h1 className="l-h1 truncate">{postsubtitle}</h1>
                    </figcaption>
                </section>
                <section className="py-[10px]">
                <PtaMain ptamainstatic={{ptamainid: 'postiframe', ptamaindata: data}} ptamainstyle={'!text-sm'} />
                </section>
            </article>
        </main>
    </div>
  )
}

export default HorizonMain