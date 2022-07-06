import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RiArrowRightSLine , RiFilter3Fill} from 'react-icons/ri'
import { BsLayoutSplit, BsLayoutThreeColumns } from 'react-icons/bs'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import { ContextMain } from '../../context/contextmain'
import { breadmain, categoryul, crummain } from '../../content/contentmantwo'
import ChipMain from '../../component/chip/ChipMain'
import { useRef } from 'react'
import SlideMain from '../../component/slide/SlideMain'

function CategoryIndex() {
    const {
        setappmainstate, appmainstate,
        breadmainstate, setbreadmainstate,
        settabmainstate,
        genreindexstate, setgenreindexstate,

        postplaceproduct,

    } = useContext(ContextMain)
    const param = useParams()
    const location = useLocation()
    // const navigate = useNavigate()
    const ref = useRef(null)
    const reftwo = useRef(null)
    const refthree = useRef(null)

    const [categoryindexrender, setcategoryindexrender] = useState()
    const [categoryindextitle, setcategoryindextitle] = useState()
    const [categoryindexdetail, setcategoryindexdetail] = useState()
    const [categoryindeximage, setcategoryindeximage] = useState()
    const [categoryindexaction, setcategoryindexaction] = useState()
    const [slidemainstate, setslidemainstate] = useState({slidemainindex: 0, slidemainscroll: 250})

    const [postcategoryidcreatedat, setpostcategoryidcreatedat] = useState()
    const [postcategoryidupdatedat, setpostcategoryidupdatedat] = useState()
    const [postcategoryidpostcount, setpostcategoryidpostcount] = useState()

    ///////////////////////

    const categoryindex = [
        {
            categoryindexid: 'postcategoryidupdatedat',
            categoryindexmap: postcategoryidupdatedat?.sort((a, b) => new Date(b._updatedAt) - new Date(a._updatedAt)),
            categoryindextitle: 'Trending',
        },
        {
            categoryindexid: 'postcategoryidcreatedat',
            categoryindexmap: postcategoryidcreatedat?.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt)),
            categoryindextitle: 'New',
        },
        {
            categoryindexid: 'postcategoryidpostcount',
            categoryindexmap: postcategoryidpostcount?.sort((a, b) => b.postcount - a.postcount),
            categoryindextitle: 'Hottest',
        },
    ]

    useEffect(() => {
        if(breadmain && crummain){
            const filter = breadmain.filter(data => data.breadmainid === 'categoryul')
            const filtertwo = filter[0].breadmainref.filter(data => data.breadmainid === param.id)
            setcategoryindextitle(filtertwo[0]?.breadmaintitle)
            setcategoryindexdetail(filtertwo[0]?.breadmaindetail)
            setcategoryindeximage(filtertwo[0]?.breadmainimage)
            setcategoryindexaction(filtertwo[0]?.breadmainaction)
        }
    }, [])
    
    useEffect(() => {
        if(postplaceproduct || breadmainstate || genreindexstate){
            // ll()
            kk()
        }
    }, [postplaceproduct, breadmainstate, genreindexstate])

    useEffect(() => {
      if(postcategoryidcreatedat && postcategoryidupdatedat && postcategoryidpostcount){
        setcategoryindexrender(categoryindex)
      }
    }, [postcategoryidcreatedat, postcategoryidupdatedat, postcategoryidpostcount])
    
    const kk = () => {
        const empty = []
        const emptytwo = []
        const emptythree = []
        postplaceproduct?.forEach(data => {
            
            if(breadmainstate !== '' && genreindexstate !== '' && data._type === param.id && data.categoryid === breadmainstate.breadmainidtwo && data.genreid === genreindexstate.genreindexid){
                empty.push(data)
                emptytwo.push(data)
                emptythree.push(data)
            }
            if(breadmainstate !== '' && genreindexstate === '' && data._type === param.id && data.categoryid === breadmainstate.breadmainidtwo){
                empty.push(data)
                emptytwo.push(data)
                emptythree.push(data)
            }
            if(breadmainstate === '' && genreindexstate !== '' && data._type === param.id && data.genreid === genreindexstate.genreindexid){
                empty.push(data)
                emptytwo.push(data)
                emptythree.push(data)
            }
            if(breadmainstate === '' && genreindexstate === '' && data._type === param.id) {
                empty.push(data)
                emptytwo.push(data)
                emptythree.push(data)
            }
            setpostcategoryidcreatedat(empty)
            setpostcategoryidupdatedat(emptytwo)
            setpostcategoryidpostcount(emptythree)

        })
    }

    function hh() {
        if(slidemainstate && slidemainstate.slidemainindex === 0)
        setslidemainstate({
            slidemainindex: 1,
            slidemainscroll: 600,
        })
        if(slidemainstate && slidemainstate.slidemainindex === 1)
        setslidemainstate({
            slidemainindex: 0,
            slidemainscroll: 250,
        })
    }

  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="overflow-hidden duration-100">
            <section className="px-[20px] md:px-[60px] w-full mx-auto h-[35vh] flex items-center">
                <div className="">
                <br />
                <br />
                <br />
                
                <h1 className="text-3xl font-serif m-h6 first-letter:uppercase">{categoryindextitle} </h1>
                <br />
                <h1 className="md:max-w-[900px] l-h2 md:l-h3 first-letter:uppercase leading-relaxed">{categoryindexdetail} </h1>
                </div>
            </section>
            <hr />
            <section className="px-[20px] md:px-[60px] h-[10vh] flex justify-end items-center">
                {/* {breadmainstate?.breadmainidtwo && <button onClick={() => setbreadmainstate('')} className="flex flex-row items-center gap-3  l-button border border-black"> <span className="m-h2">╳</span>  {breadmainstate?.breadmainidtwo}</button>} */}
                <ChipMain />
                
                <button onClick={() => {
                        settabmainstate({
                            tabmainid: 'categoryoption',
                            tabmainlocation: location.pathname,
                            tabmainparam: param.id,
                            tabmainimage: categoryindeximage,
                            tabmainaction: categoryindexaction,
                        })
                        setappmainstate({
                            appmainid: 'categoryoption',
                            appmainidtwo: 'opendeskmain',
                            tabmainlocation: location.pathname,
                            appmainparam: param.id,
                            appmainboolean: true,
                        })
                }} className="flex flex-row items-center gap-2  l-button"><RiFilter3Fill /> Filter</button>

                <button onClick={() => {
                    hh()
                }} className="hidden md:flex flex-row items-center gap-2  l-button">
                    {slidemainstate?.slidemainindex === 0 && (<>
                    <BsLayoutSplit /><h1 className="">Split</h1>
                    </>)}
                    {slidemainstate?.slidemainindex === 1 && (<>
                    <BsLayoutThreeColumns /><h1 className="">Columns</h1>
                    </>)}
                </button>

            </section>
            <hr />
            <section className="">
                {categoryindexrender?.map(data => (<>
                <br />
                <figcaption className="mx-[20px] md:mx-[60px] flex flex-row justify-between items-center ">
                    <h1 className="m-h5 font-serif">{data?.categoryindextitle} {categoryindextitle && categoryindextitle}</h1>
                </figcaption>
                <br />

                {data?.categoryindexid === 'postcategoryidupdatedat' && (<>
                <SlideMain slidemainid={'categoryindexth'} slidemainindex={slidemainstate?.slidemainindex} slidemaindata={data?.categoryindexmap} slidemainref={reftwo} slidemainscroll={slidemainstate?.slidemainscroll} slidemainslice={12} />
                </>)}

                {data?.categoryindexid === 'postcategoryidcreatedat' && (<>
                <SlideMain slidemainid={'categoryindexth'} slidemainindex={slidemainstate?.slidemainindex} slidemaindata={data?.categoryindexmap} slidemainref={ref} slidemainscroll={slidemainstate?.slidemainscroll} slidemainslice={12} />
                </>)}

                {data?.categoryindexid === 'postcategoryidpostcount' && (<>
                <SlideMain slidemainid={'categoryindexth'} slidemainindex={slidemainstate?.slidemainindex} slidemaindata={data?.categoryindexmap} slidemainref={refthree} slidemainscroll={slidemainstate?.slidemainscroll} slidemainslice={12} />
                </>)}

                </>))}
            </section>
        </motion.main>
    </div>
  )
}

export default CategoryIndex