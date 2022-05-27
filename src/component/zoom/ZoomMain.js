import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { MdShowChart } from 'react-icons/md'
import { RiChat4Fill, RiChat4Line, RiMapPin3Fill, RiMapPin3Line, RiNewspaperFill, RiNewspaperLine, RiShoppingBag2Fill, RiShoppingBag2Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { categoryul } from '../../content/contentmantwo'

import { ContextMain } from '../../context/contextmain'

function ZoomMain({
    zoommainid, zoommainslice,

}) {
    const {
        feedbacklink,

        breadmainstate,

        postupdatedat,
        placeupdatedat,
        productupdatedat,

    } = useContext(ContextMain)
    const navigate = useNavigate()
    const [zoommainkey, setzoommainkey] = useState('')
    const [zoommainindex, setzoommainindex] = useState(0)

    const [zoommaintitle, setzoommaintitle] = useState()
    const [zoommainicon, setzoommainicon] = useState()
    const [zoommaindata, setzoommaindata] = useState()

    const searchinput = [
        {
            zoommainindex: 0,
            zoommaindata: [
                {
                    zoommaintitle: 'Trending blog',
                    zoommainrender: postupdatedat,
                    zoommainicon: <MdShowChart />,
                },
                {
                    zoommaintitle: 'Trending places',
                    zoommainrender: placeupdatedat,
                    zoommainicon: <MdShowChart />,

                },
                {
                    zoommaintitle: 'Trending products',
                    zoommainrender: productupdatedat,
                    zoommainicon: <MdShowChart />,

                },
            ],
        },
        {
            zoommainindex: 1,
            zoommaindata: [
                {
                    zoommaintitle: 'Blog',
                    zoommainrender: (postupdatedat.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey))),
                    zoommainicon: <RiNewspaperFill />,
                    // .filter(data => data._type === breadmainstate.breadmainidtwo),

                },
                {
                    zoommaintitle: 'Places',
                    zoommainrender: (placeupdatedat.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey))),
                    zoommainicon: <RiMapPin3Fill />,

                },
                {
                    zoommaintitle: 'Products',
                    zoommainrender: (productupdatedat.filter(data => data.posttitle.toLowerCase().includes(zoommainkey) || data.postsubtitle.toLowerCase().includes(zoommainkey))),
                    zoommainicon: <RiShoppingBag2Fill />,

                },
            ],
        },
    ]

    const feedbackinput = [
        {
            zoommainindex: 0,
            zoommaindata: [
                {
                    zoommaintitle: 'Give us feedback',
                    zoommainrender: feedbacklink,
                    zoommainicon: <RiChat4Fill />,
                },
            ]
        },
        {
            zoommainindex: 1,
            zoommaindata: [
                {
                    zoommaintitle: 'Give us feedback',
                    zoommainrender: (feedbacklink.filter(data => data.blemaintitle.toLowerCase().includes(zoommainkey) || data.blemainid.toLowerCase().includes(zoommainkey))),
                    zoommainicon: <RiChat4Fill />,
                },
            ]
        },
    ]

    const zoommain = [
        {
            zoommainid: 'searchinput',
            zoommainref: searchinput,
        },
        {
            zoommainid: 'feedbackinput',
            zoommainref: feedbackinput,
        },
    ]

    useEffect(() => {
        if(zoommainkey !== ''){
            setzoommainindex(1)
        } 
        if(zoommainkey === '') {
            setzoommainindex(0)
        }
    }, [zoommainkey])

    useEffect(() => {
        if(zoommainid){
            const filter = zoommain.filter(data => data.zoommainid === zoommainid)
            const filtertwo = filter[0].zoommainref.filter(data => data.zoommainindex === zoommainindex)
                const empty = []
                for(const data of filtertwo[0].zoommaindata){
                    if(data.zoommainrender.length !== 0){
                            empty.push(data)
                            setzoommaindata(empty)
                    } 
                }
            setzoommaintitle(filtertwo[0].zoommaintitle)
            setzoommainicon(filtertwo[0].zoommainicon)
        }
    }, [zoommainid, zoommainindex, zoommainkey])

  return (
    <div>
        <main className="">
            <section autoFocus className="h-[20vh] px-[20px] md:px-[50px] grid grid-flow-row items-center">
                <div className="w-full relative flex items-center">
                    {/* {searchdialogload === true ? <div className="absolute"><LoadingMain /></div>  : <RiSearch2Line className='absolute  m-h6' />} */}
                    <input autoFocus onChange={(p) => setzoommainkey(p.target.value)} value={zoommainkey} className="w-full pl-[40px]  l-input border-2 border-gray-600 bg-white text-black" placeholder='Search...' />
                </div>
                {/* <h1 className="l-h2 italic">Try coffee, kitchen, gift card..</h1> */}
            </section>
            <section className="px-[20px] md:px-[50px]">
                {zoommaindata?.map(data => (<>
                <figcaption className="">
                <br /><br />
                <h1 className="m-h2">{data?.zoommaintitle} ({data?.zoommainrender?.length})</h1>
                <br />
                    {data?.zoommainrender?.slice(0, zoommainslice)?.map(dat => (<>
                        <motion.figure initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="p-[10px] grid grid-flow-col md:flex md:flex-row items-center justify-start gap-3">
                            <span className="l-h2 h-[30px] w-[30px] flex justify-center items-center  bg-gray-700 rounded-full text-white">{data.zoommainicon}</span>
                            <figcaption className="">
                                <div className=" hover:cursor-pointer">
                                <h1 onClick={() => {
                                    navigate(`/${dat?.postid}`)
                                }} className=" leading-loose !text-gray-400 truncate font-serif">{dat?.posttitle}</h1>
                                <h1 onClick={dat?.blemainaction} className=" leading-loose !text-gray-400 truncate font-serif">{dat?.blemaintitle}</h1>
                                {/* <h1 className="l-h3 truncate">{dat?.postsubtitle}</h1> */}
                                </div>
                            </figcaption>
                            {/* <figure className="hidden md:flex col-span-3 justify-end">
                                <img src={dat?.posticon || dat?.posthero} alt="" className="w-[80px] h-[80px]  border-2 border-black" />
                            </figure> */}
                        </motion.figure>
                        <div className="w-full  border-b border-gray-600" />
                    </>))}
                </figcaption>
                </>))}
            </section>
        </main>
    </div>
  )
}

export default ZoomMain