import React from 'react'
import { useContext } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { ContextMain } from '../../context/contextmain'

function HorizonMain({onlick, posthero, posttitle, postsubtitle,  createdat, param}) {

    const {
        setappmainstate,

    } = useContext(ContextMain)

  return (
    <div>
        <main className="">
            <article className="grid grid-cols-12 items-center">
                <section onClick={onlick} className="col-span-3">
                    <figure className=" h-[100px] flex items-center  overflow-hidden">
                        <img loading='lazy' src={posthero} alt="" className="w-full" />
                    </figure>
                </section>
                <section className="col-span-9">
                    <figcaption onClick={onlick} className=" l-section">
                        <h1 className="m-h5 truncate">{posttitle}</h1>
                        <h1 className="l-h3 truncate">{postsubtitle}</h1>
                    </figcaption>
                    <figure className="flex flex-row justify-between items-center  l-section">
                        <div className="grid grid-flow-col gap-2">
                            <h1 className="l-h3 truncate">{createdat?.slice(0, 10)}</h1>
                            <h1 className="l-h3 truncate">5 min read</h1>
                        </div>
                        <div className="">
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
                        </div>
                    </figure>
                </section>
            </article>
        </main>
    </div>
  )
}

export default HorizonMain