import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

import BadgeMain from '../../component/badge/BadgeMain'
import HorizonMain from '../../component/post/HorizonMain'
import { categorymain } from '../../content/contentmain'

import { ContextMain } from '../../context/contextmain'

function SearchMain() {
    const {
        appmainstate, setappmainstate,
        searchmainstate, setsearchmainstate,

        postupdatedat,
        postpostcount,
    } = useContext(ContextMain)
    const navigate = useNavigate()

    const [searchselectmap, setsearchselectmap] = useState()

    const searchselect = [
        {
            searchselectid: 'postupdatedat',
            searchselecttitle: 'Trending',
            searchselectmap: postupdatedat,
        },
        {
            searchselectid: 'postpostcount',
            searchselecttitle: 'Top',
            searchselectmap: postpostcount,
        },
    ]

    useEffect(() => {
      if(appmainstate){
          const filter = searchselect.filter(data => data.searchselectid === appmainstate.appmainid ? appmainstate.appmainid : 'postupdatedat')
          setsearchselectmap({
                searchselecttitle: filter[0].searchselecttitle,
                searchselectmap: filter[0].searchselectmap
          });
      }
    }, [appmainstate, postupdatedat, postpostcount])

    // function ll(first= this.props.first) {
    //     if(first && categorymain) {
    //         const filter = categorymain.filter(data => data.categorymainid === first)
    //         return <BadgeMain title={filter[0].categorymaintitle} />
    //     }
    // }
    
  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="flex flex-col-reverse md:grid md:grid-cols-12 max-w-[900px] mx-auto">
            <section className="col-span-12 md:col-span-8 flex flex-col ">
                <figcaption className="m-section">
                    <br />
                    <h1 className="m-h6">{searchselectmap?.searchselecttitle} Blog</h1>
                    <h1 className="l-h4">{postupdatedat?.length} items found</h1>
                </figcaption>                
                <figure className="">
                {searchselectmap?.searchselectmap?.map(data => (<>
                    <HorizonMain onlick={() => {
                        navigate(`/${data?.postid}`)
                    }} key={data?.postid} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} />
                </>))}
                </figure>
            </section>
            <section className="col-span-12 md:col-span-4  m-section">
                <br />
                <div className="grid grid-flow-col gap-1 items-center">
                    <h1 className="">Sorted By:</h1>
                    <select value={appmainstate.appmainid} 
                        onChange={(p) => setappmainstate(
                        {
                            appmainid: p.target.value
                        })}
                        className="m-input">
                        {searchselect?.map(data => (<>
                            <option value={data?.searchselectid} className="">{data?.searchselecttitle}</option>
                        </>))}
                    </select> 
                </div>
                <figure className="hidden md:block">
                    <br />
                    <img src="https://static.wixstatic.com/media/72c0b2_78011f70f85b49c495e470da8932279c~mv2.png/v1/fill/w_251,h_451,al_c,lg_1,q_85,enc_auto/Make_an_Impact_Online.png" alt="" className="" />
                </figure>
            </section>
        </motion.main>
    </div>
  )
}

export default SearchMain