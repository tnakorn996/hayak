import React from 'react'
import { useContext } from 'react';
import { RiContrastDropLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'
import { categoryul, contactul, faqul, feedbackul, searchul } from '../../content/contentmantwo';
import { ContextMain } from '../../context/contextmain';
import BreadMain from '../bread/BreadMain'

function FooterMain() {
    const {
        setappmainstate,
        spreadmainstate,
        setbreadmainstate,
        setgenreindexstate,

    } = useContext(ContextMain)
    // const location = useLocation()
    const navigate = useNavigate()

  return (
    <div>
        <main className="h-[50vh] md:h-[30vh] w-screen md:px-[50px] grid grid-flow-row bg-gray-900">
            <section className="p-[20px] md:p-0 flex flex-col md:flex-row justify-center md:justify-between items-center text-white border-b border-gray-700">
                <div className="flex flex-col md:flex-row items-center gap-5  ">
                    <figure onClick={() => {
                        navigate(`/`)
                    }} className="flex flex-row items-center gap-1">
                        <RiContrastDropLine className='m-h4' />
                        <h1 className="l-h4  font-serif"><span className="text-white font-bold">TOI</span> New Zealand</h1>
                    </figure>
                    {spreadmainstate && (<>
                    <figcaption className="l-h3 font-extralight text-white">
                        <BreadMain />
                    </figcaption>
                    </>)}
                </div>
                <button className="hidden md:block">You may also be interested in</button>
            </section>
            <section className="p-[20px] md:p-0 flex items-center text-white">
                <div className="w-full flex flex-row flex-wrap justify-between gap-7">
                
                {categoryul?.map(data => (<>
                <a href={data?.breadmainaction} className="m-h2  font-normal font-serif first-letter:uppercase">{data?.breadmaintitle}</a>
                </>
                ))}

                {faqul?.map(data => (<>
                <a href={data?.breadmainaction} className="m-h2  font-normal font-serif first-letter:uppercase">{data?.breadmaintitle}</a>
                </>
                ))}

                {searchul?.map(data => (<>
                <a href={data?.breadmainaction} className="m-h2  font-normal font-serif first-letter:uppercase">{data?.breadmaintitle}</a>
                </>
                ))}
                
                {feedbackul?.map(data => (<>
                <a href={data?.breadmainaction} className="m-h2  font-normal font-serif first-letter:uppercase">{data?.breadmaintitle}</a>
                </>
                ))}

                {contactul?.map(data => (<>
                <a href={data?.breadmainaction} className="m-h2  font-normal font-serif first-letter:uppercase">{data?.breadmaintitle}</a>
                </>
                ))}

                </div>

            </section>
        </main>
    </div>
  )
}

export default FooterMain