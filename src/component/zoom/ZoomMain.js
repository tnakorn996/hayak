import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { MdShowChart } from 'react-icons/md'
import { RiMapPin3Line, RiNewspaperLine, RiShoppingBag2Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { categoryul } from '../../content/contentmantwo'

import { ContextMain } from '../../context/contextmain'

function ZoomMain({
    zoommainid, zoommainslice,

}) {
    const {
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
                    zoommainrender: (postupdatedat.filter(data => data.posttitle.toLowerCase().match(zoommainkey) || data.postsubtitle.toLowerCase().match(zoommainkey))),
                    zoommainicon: <RiNewspaperLine />,
                    // .filter(data => data._type === breadmainstate.breadmainidtwo),

                },
                {
                    zoommaintitle: 'Places',
                    zoommainrender: (placeupdatedat.filter(data => data.posttitle.toLowerCase().match(zoommainkey) || data.postsubtitle.toLowerCase().match(zoommainkey))),
                    zoommainicon: <RiMapPin3Line />,

                },
                {
                    zoommaintitle: 'Products',
                    zoommainrender: (productupdatedat.filter(data => data.posttitle.toLowerCase().match(zoommainkey) || data.postsubtitle.toLowerCase().match(zoommainkey))),
                    zoommainicon: <RiShoppingBag2Line />,

                },
            ],
        },
    ]

    const zoommain = [
        {
            zoommainid: 'searchinput',
            zoommainref: searchinput,
        },
        {
            zoommainid: 'postinput',
            zoommainref: searchinput,
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
                    <input autoFocus onChange={(p) => setzoommainkey(p.target.value)} value={zoommainkey} className="md:text-4xl w-full pl-[40px]  l-input border-2 border-gray-600" placeholder='Search...' />
                </div>
                <h1 className="l-h2 italic">Try coffee, kitchen, gift card..</h1>
            </section>
            <section className="px-[20px] md:px-[50px]">
                {zoommaindata?.map(data => (<>
                <figcaption className="">
                <br /><br />
                <h1 className="m-h2">{data?.zoommaintitle} ({data?.zoommainrender?.length})</h1>
                <br />
                    {data?.zoommainrender?.slice(0, zoommainslice)?.map(dat => (<>
                        <motion.article initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} onClick={() => {
                            navigate(`/${dat?.postid}`)
                        }} className="p-[10px] grid grid-cols-12 items-center justify-between">
                            <span className="col-span-1  l-h2 h-[30px] w-[30px] flex justify-center items-center  bg-gray-700 rounded-full text-white">{data.zoommainicon}</span>
                            <figcaption className="col-span-8 md:col-span-8">
                            <div className="">
                            <h1 className="md:l-h6 leading-loose !text-gray-400 truncate font-serif">{dat?.posttitle}</h1>
                            <h1 className="l-h3 truncate">{dat?.postsubtitle}</h1>
                            </div>
                            </figcaption>
                            <figure className="hidden col-span-3 justify-end">
                                <img src={dat?.posticon || dat?.posthero} alt="" className="w-[80px] h-[80px]  border-2 border-black" />
                            </figure>
                        </motion.article>
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