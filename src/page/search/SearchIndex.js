import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import HorizonMain from '../../component/post/HorizonMain'
import { motion } from 'framer-motion'

import { ContextMain } from '../../context/contextmain'
import { client } from '../../lib/sanity'

function SearchIndex() {
    const {
        searchinputstate,

    } = useContext(ContextMain)
    const navigate = useNavigate()
    const [searchselectid, setsearchselectid] = useState('_createdAt')
    const [searchselectstate, setsearchselectstate] = useState()

    const [searchindexstate, setsearchindexstate] = useState()

    const searchselect = [
        {
            searchselectid: '_createdAt',
            searchselecttitle: 'Date Created',
        },
        {
            searchselectid: 'postcount',
            searchselecttitle: 'Hottest Blog',
        },
    ]

    useEffect(() => {
        if(searchinputstate !== '' || searchselectstate){
            ll()
        }
    }, [searchinputstate, searchselectstate])

    useEffect(() => {
        if(searchselectid){
            const filter = searchselect.filter(data => data.searchselectid === searchselectid)
            setsearchselectstate(filter[0])
        }
    }, [searchselectid])

    const ll = async () => {
              const query = `*[_type == 'post' &&  postid match'${searchinputstate}*' ||  posttitle match '${searchinputstate}*' || postsubtitle match '${searchinputstate}*'] | order(${searchselectid} desc)`;
              await client.fetch(query) 
              .then((data) => {
                  setsearchindexstate(data);
              })
        }

  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="flex flex-col-reverse md:grid md:grid-cols-12 max-w-[900px] mx-auto">
            <section className="col-span-12 md:col-span-8 flex flex-col ">
                <figcaption className="m-section">
                    <br />
                    <h1 className="m-h6">Results for "{searchinputstate}" Blog</h1>
                    <h1 className="l-h4">{searchindexstate?.length} items found</h1>
                </figcaption>                
                <figure className="">
                {searchindexstate?.map(data => (<>
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
                    <select value={searchselectid} onChange={(p) => setsearchselectid(p.target.value)} className="m-input">
                        {searchselect?.map(data => (<>
                            <option value={data?.searchselectid} className="">{data?.searchselecttitle}</option>
                        </>))}
                    </select> 
                </div>
            </section>
        </motion.main>
    </div>
  )
}

export default SearchIndex