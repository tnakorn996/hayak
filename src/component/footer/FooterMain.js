import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { RiContrastDropLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'

import { categoryul, contactul, faqul, feedbackul, searchul } from '../../content/contentmantwo';
import { ContextMain } from '../../context/contextmain';
import BreadMain from '../bread/BreadMain'
import SnackbarMain from '../snackbar/SnackbarMain';

function FooterMain() {
    const {
        setappmainstate,
        spreadmainstate,
        setbreadmainstate,
        setgenreindexstate,

        postupdatedat,
        placeupdatedat,
        productupdatedat,

    } = useContext(ContextMain)
    // const location = useLocation()
    const navigate = useNavigate()

    const footerdi = [
        {
            sheetmainindex: 0,
            // sheetmainid: 'postcategoryidcreatedat',
            sheetmainrender: postupdatedat?.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt)),
            sheetmaintitle: 'New',
        },
        {
            sheetmainindex: 1,
            // sheetmainid: 'postcategoryidupdatedat',
            sheetmainrender: placeupdatedat?.sort((a, b) => new Date(b._updatedAt) - new Date(a._updatedAt)),
            sheetmaintitle: 'Trending',
        },
        {
            sheetmainindex: 2,
            // sheetmainid: 'postcategoryidpostcount',
            sheetmainrender: productupdatedat?.sort((a, b) => b.postcount - a.postcount),
            sheetmaintitle: 'Hottest',
        },
    ]

    // useEffect(() => {
    //   if(snackbarmainid){
    //         const filter = snackbarmain.filter(data => data.snackbarmainid === snackbarmainid)
    //         // const filtertwo = filter[0].snackbarmainref.filter(data => data.snackbarindex === 0)
    //         setsnackbarmainrender(filter[0].snackbarmainref)
    //   }
    // }, [snackbarmainid])

  return (
    <div>
        <main className="w-screen text-center   bg-gray-900">
            <section className="relative w-full border-b border-gray-700  ">
                <br />
                <h1 className="m-h4 font-serif text-white">You may also be interested in</h1>
                <br />
            </section>
            <br />
            <section className="px-[50px] flex flex-col md:grid md:grid-cols-3 items-center gap-10">
                {(postupdatedat && placeupdatedat && productupdatedat) && footerdi?.map(data => (<>
                <figcaption className="flex flex-col gap-3">
                    {data?.sheetmainrender?.slice(0, 6)?.map(dat => (<>
                    <article onClick={() => {
                    navigate(`/${dat?.postid}`)
                    }} className="l-h2 font-extralight text-white">{dat?.posttitle}</article>
                    </>))}
                </figcaption>
                </>))}
            </section>
        </main>
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

                {/* {searchul?.map(data => (<>
                <a href={data?.breadmainaction} className="m-h2  font-normal font-serif first-letter:uppercase">{data?.breadmaintitle}</a>
                </>
                ))} */}
                
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