import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

import ImpulseMain from '../../component/inpulse/ImpulseMain'
import VerticleMain from '../../component/post/VerticleMain'
import { breadmain, categorymain, collectionmain, crummain } from '../../content/contentmain'

import { ContextMain } from '../../context/contextmain'
import { client } from '../../lib/sanity'
import BreadMain from '../../component/bread/BreadMain'

function CategoryIndex() {
    const {
        setappmainstate, appmainstate,
        breadmainstate, setbreadmainstate,
        categoryindextrigger, setcategoryindextrigger,

        postplaceproduct,
        // postcreatedat,
        // postupdatedat,
        // postpostcount,

    } = useContext(ContextMain)
    const param = useParams()
    const navigate = useNavigate()

    const [categoryindexrender, setcategoryindexrender] = useState()
    const [categoryindextitle, setcategoryindextitle] = useState()
    const [categoryindexsliceone, setcategoryindexsliceone] = useState(0)
    const [categoryindexslicetwo, setcategoryindexslicetwo] = useState(4)

    const [postcategoryidcreatedat, setpostcategoryidcreatedat] = useState()
    const [postcategoryidupdatedat, setpostcategoryidupdatedat] = useState()
    const [postcategoryidpostcount, setpostcategoryidpostcount] = useState()

    const categoryindex = [
        {
            categoryindexid: 'postcategoryidcreatedat',
            categoryindexmap: postcategoryidcreatedat,
            categoryindextitle: 'New',
        },
        {
            categoryindexid: 'postcategoryidupdatedat',
            categoryindexmap: postcategoryidupdatedat,
            categoryindextitle: 'Trending',
        },
        {
            categoryindexid: 'postcategoryidpostcount',
            categoryindexmap: postcategoryidpostcount,
            categoryindextitle: 'Hottest',
        },
    ]

    // useEffect(() => {
    //   setappmainstate({
    //         appmainidtwo: 'previewmain',
    //         appmainid: 'menuarticle',
    //         appmainboolean: true,
    //     })
    // }, [])

    useEffect(() => {
        if(breadmain && crummain){
            const filter = breadmain.filter(data => data.breadmainid === param.id)
            setcategoryindextitle(filter[0]?.breadmaintitle)
        }
    }, [])
    
    // useEffect(() => {
    //     if(breadmainstate){
    //         const filter = breadmain.filter(data => data.breadmainid === breadmainstate.breadmainid)
    //         const filtertwo = crummain.filter(data => data.crummainid === breadmainstate.breadmainidtwo)
    //         setcategoryindextitle(filter[0]?.breadmaintitle)
    //         setcategoryindextrigger(filtertwo[0]?.crummainid)
    //     }
    // }, [breadmainstate])

    useEffect(() => {
        if(postplaceproduct){
            ll()
        }
    }, [postplaceproduct])

    useEffect(() => {
        if(!breadmainstate) {
            ll()
        } 
        if(breadmainstate){
            kk()
        }
    }, [breadmainstate])

    useEffect(() => {
      if(postcategoryidcreatedat && postcategoryidupdatedat && postcategoryidpostcount){
        setcategoryindexrender(categoryindex)
      }
    }, [postcategoryidcreatedat, postcategoryidupdatedat, postcategoryidpostcount])
    
    const ll = async () => {
            const filter = postplaceproduct.filter(data => data._type === param.id)
            const filtertwo = postplaceproduct.filter(data => data._type === param.id)
            const filterthree = postplaceproduct.filter(data => data._type === param.id)
            setpostcategoryidcreatedat(filter)
            setpostcategoryidupdatedat(filtertwo)
            setpostcategoryidpostcount(filterthree)

            }

    const kk = async () => {
            //   const query = `*[_type == 'user' && userid == 'hayaker']{
            //     ...,
            //     'postcategoryidcreatedat': *[_type != 'user' && _type  == '${param.id}' && categoryid == '${categoryindextrigger}'] | order(_createdAt desc),
            //     'postcategoryidupdatedat': *[_type != 'user' && _type  == '${param.id}' && categoryid == '${categoryindextrigger}'] | order(_updatedAt desc),
                
            //     'postcategoryidpostcount': *[_type != 'user' && _type  == '${param.id}' && categoryid == '${categoryindextrigger}'] | order(postcount desc),
            //   }[0]`;
            //   await client.fetch(query) 
            //   .then((data) => {
            //         setpostcategoryidcreatedat(data.postcategoryidcreatedat)
            //         setpostcategoryidupdatedat(data.postcategoryidupdatedat)
            //         setpostcategoryidpostcount(data.postcategoryidpostcount)
            //     })

            const filter = postplaceproduct.filter(data => data.categoryid === breadmainstate.breadmainidtwo && data._type === param.id)
            const filtertwo = postplaceproduct.filter(data => data.categoryid === breadmainstate.breadmainidtwo && data._type === param.id)
            const filterthree = postplaceproduct.filter(data => data.categoryid === breadmainstate.breadmainidtwo && data._type === param.id)
            setpostcategoryidcreatedat(filter)
            setpostcategoryidupdatedat(filtertwo)
            setpostcategoryidpostcount(filterthree)
            }
    
    function jj() {
        categoryindexrender.forEach(data => {
            if(categoryindexslicetwo < data.categoryindexmap.length){
                setcategoryindexsliceone(categoryindexsliceone + 1)
                setcategoryindexslicetwo(categoryindexslicetwo + 1)
            }
            if(categoryindexslicetwo >= data.categoryindexmap.length ){
                setcategoryindexsliceone(0)
                setcategoryindexslicetwo(4)
            }
        })
    }

  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="overflow-hidden">
            {/* <section className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] py-[20px]">
                <ImpulseMain />
            </section> */}
            {/* <section className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] py-[20px]">
                <h1 className=" m-h6 first-letter:uppercase">{categoryindextitle} </h1>
            </section> */}
            <section className="px-[20px] md:px-[60px] py-[20px] flex justify-end">
                {breadmainstate?.breadmainidtwo && <button onClick={() => setbreadmainstate()} className="flex flex-row items-center gap-3  l-button border border-black"> <span className="m-h2">╳</span>  {breadmainstate?.breadmainidtwo}</button>}
                <button onClick={() => {
                    setappmainstate({
                        appmainid: 'categorysection',
                        appmainidtwo: 'modalmain',
                        appmainparam: param.id,
                        appmainboolean: true,
                    })
                }} className="l-button">Category</button>
            </section>
            <section className="w-[1200px] md:w-full mx-auto relative group">
                <button onClick={() => jj()} className="hidden group-hover:flex fixed z-20 top-0 right-0 w-[10vw] md:w-[5vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black">
                    <RiArrowRightSLine className='text-5xl' />
                </button>
                <button className="hidden md:flex md:fixed z-10 top-0 right-0 w-[5vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black" />
                <br />
                {categoryindexrender?.map(data => (<>
                <br />
                <figcaption className=" px-[20px] md:px-[60px] flex flex-row justify-between items-center ">
                    <h1 className="m-h5">{data?.categoryindextitle} {categoryindextitle}</h1>
                </figcaption>
                <figure className="overflow-y-auto sm:overflow-y-hidden no-scrollbar">
                    <div className="py-[20px] px-[20px] md:px-[60px] grid grid-cols-4 gap-5">
                    {data?.categoryindexmap?.slice(categoryindexsliceone, categoryindexslicetwo).map(dat => (<>
                        <VerticleMain onlick={() => {
                            navigate(`/${dat?.postid}`)
                        }} key={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} categoryid={dat?.categoryid} priceid={dat?.priceid}  param={dat?.postid} />
                    </>))}
                    </div>
                </figure>
                </>))}
                <br /><br />
            </section>
        </motion.main>
    </div>
  )
}

export default CategoryIndex