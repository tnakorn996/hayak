import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import { useNavigate, useParams } from 'react-router-dom'

import VerticleMain from '../../component/post/VerticleMain'
import { categorymain } from '../../content/contentmain'

import { ContextMain } from '../../context/contextmain'
import { client } from '../../lib/sanity'

function CategoryIndex() {
    const {
  
        loadmainstate, setloadmainstate,


    } = useContext(ContextMain)
    const param = useParams()
    const navigate = useNavigate()

    const [categoryindexstate, setcategoryindexstate] = useState()
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

    useEffect(() => {
        if(param){
            ll()
            jj()
        }
    }, [param])

    useEffect(() => {
      if(postcategoryidcreatedat && postcategoryidupdatedat && postcategoryidpostcount){
        setcategoryindexstate(categoryindex)
      }
    }, [postcategoryidcreatedat, postcategoryidupdatedat, postcategoryidpostcount])
    
    const ll = async () => {
              const query = `*[_type == 'user' && userid == 'hayaker']{
                ...,
                'postcategoryidcreatedat': *[_type == 'post' && categoryid == '${param.id}'] | order(_createdAt desc),
                'postcategoryidupdatedat': *[_type == 'post' && categoryid == '${param.id}'] | order(_updatedAt desc),
                
                'postcategoryidpostcount': *[_type == 'post' && categoryid == '${param.id}'] | order(postcount desc),
              }[0]`;
              client.fetch(query) 
              .then((data) => {
                    setpostcategoryidcreatedat(data.postcategoryidcreatedat)
                    setpostcategoryidupdatedat(data.postcategoryidupdatedat)
                    setpostcategoryidpostcount(data.postcategoryidpostcount)
                })
            }
    
    function kk() {
        categoryindexstate.forEach(data => {
            if(categoryindexslicetwo < data.categoryindexmap.length){
                setcategoryindexsliceone(categoryindexsliceone + 1)
                setcategoryindexslicetwo(categoryindexslicetwo + 1)
            }
            if(categoryindexslicetwo > data.categoryindexmap.length ){
                setcategoryindexsliceone(0)
                setcategoryindexslicetwo(4)
            }
        })
    }
    console.log(categoryindexsliceone, categoryindexslicetwo)

    function jj() {
        const filter = categorymain.filter(data => data.categorymainid === param.id)
        setcategoryindextitle(filter[0].categorymaintitle)
    }

  return (
    <div>
        <main className="">
            <section className="max-w-[1200px] mx-auto px-[20px] md:px-[60px] py-[20px]">
                <h1 className="text-4xl  m-h6 first-letter:uppercase">{categoryindextitle} </h1>
            </section>
            <section className="relative">
                <button onClick={() => kk()} className="hidden md:flex md:fixed z-20 bottom-0 right-0 w-[5vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black">
                    <RiArrowRightSLine className='text-5xl' />
                </button>
                <button className="hidden md:flex md:fixed z-10 bottom-0 right-0 w-[5vw] h-full justify-center items-center  bg-gradient-to-r from-transparent to-white text-black" />
                <br />
                {categoryindexstate?.map(data => (<>
                <br />
                <figcaption className="max-w-[1200px] mx-auto  px-[20px] md:px-[60px] flex flex-row justify-between items-center ">
                    <h1 className="m-h5">{data?.categoryindextitle} {categoryindextitle}</h1>
                </figcaption>
                <figure className="max-w-[1200px] mx-auto overflow-y-auto sm:overflow-y-hidden no-scrollbar">
                    <div className="w-[1200px] py-[20px] px-[20px] md:px-[60px] grid grid-cols-4 gap-5">
                    {data?.categoryindexmap?.slice(categoryindexsliceone, categoryindexslicetwo).map(dat => (<>
                        <VerticleMain onlick={() => {
                            navigate(`/${dat?.postid}`)
                        }} key={dat?.postid} createdat={dat?._createdAt} posthero={dat?.posthero} posttitle={dat?.posttitle} postsubtitle={dat?.postsubtitle} categoryid={dat?.categoryid} priceid={dat?.priceid} />
                    </>))}
                    </div>
                </figure>
                </>))}
                <br /><br />
            </section>
        </main>
    </div>
  )
}

export default CategoryIndex