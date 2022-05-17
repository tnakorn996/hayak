import React from 'react'
import { useContext } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { ContextMain } from '../../context/contextmain'

function HorizonMain({onlick, posticon, posthero, posttitle, postsubtitle,  createdat, param}) {

    const {
        setappmainstate,

    } = useContext(ContextMain)

  return (
    <div>
        <main className="">
            <article className="grid grid-flow-col items-center gap-3 justify-start">
                <section onClick={onlick} className="">
                    <figure className={`relative w-[70px] h-[70px] flex items-center justify-center  overflow-hidden border border-black ${posticon && 'rounded-full '}`}>
                        <img loading='lazy' src={posticon || posthero} alt="" className="max-w-[100ch] z-10 h-full" />
                    </figure>
                </section>
                <section className="">
                    <figcaption onClick={onlick} className="grid grid-flow-row l-section">
                        <h1 className="m-h4 truncate">{posttitle}</h1>
                        <h1 className="l-h2 truncate">{postsubtitle}</h1>
                    </figcaption>
                    <figure className="flex flex-row justify-between items-center  l-section">
                        {/* <div className="grid grid-flow-col gap-2">
                            <h1 className="l-h3 truncate">{createdat?.slice(0, 10)}</h1>
                            <h1 className="l-h3 truncate">5 min read</h1>
                        </div> */}
                        {/* <div className="">
                            <figure onClick={() => {
                            setappmainstate({
                                appmainid: 'postarticle',
                                appmainidtwo: 'previewmain',
                                appmainparam: param,
                                appmainboolean: true,
                            })
                            }} className="">
                            <RiArrowDownSLine className='m-h6 text-gray-300  !opacity-100' />
                            </figure>
                        </div> */}
                    </figure>
                </section>
            </article>
        </main>
    </div>
  )
}

export default HorizonMain