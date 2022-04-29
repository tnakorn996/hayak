import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import BadgeMain from '../../component/badge/BadgeMain'
import HorizonMain from '../../component/post/HorizonMain'
import { categorymain } from '../../content/contentmain'

import { ContextMain } from '../../context/contextmain'

function SearchMain() {
    const {
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
      if(searchmainstate && postupdatedat && postpostcount){
          const filter = searchselect.filter(data => data.searchselectid === searchmainstate)
          setsearchselectmap({
                searchselecttitle: filter[0].searchselecttitle,
                searchselectmap: filter[0].searchselectmap
          });
      }
    }, [searchmainstate, postupdatedat, postpostcount])

    // function ll(first= this.props.first) {
    //     if(first && categorymain) {
    //         const filter = categorymain.filter(data => data.categorymainid === first)
    //         return <BadgeMain title={filter[0].categorymaintitle} />
    //     }
    // }
    
  return (
    <div>
        <main className="flex flex-col-reverse md:grid md:grid-cols-12 max-w-[900px] mx-auto">
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
                    <select value={searchmainstate} onChange={(p) => setsearchmainstate(p.target.value)} className="m-input">
                        {searchselect?.map(data => (<>
                            <option value={data?.searchselectid} className="">{data?.searchselecttitle}</option>
                        </>))}
                    </select> 
                </div>
            </section>
        </main>
    </div>
  )
}

export default SearchMain