import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import VerticleMain from '../../component/post/VerticleMain'

import { ContextMain } from '../../context/contextmain'
import { client } from '../../lib/sanity'

function SearchIndex() {
    const {
        searchinputstate,

    } = useContext(ContextMain)
    const navigate = useNavigate()

    const [searchindexmap, setsearchindexmap] = useState()

    useEffect(() => {
        if(searchinputstate !== ''){
            ll()
        }
    }, [searchinputstate])
    
    const ll = async () => {
              const query = `*[_type == 'post' &&  postid match'${searchinputstate}*' ||  posttitle match '${searchinputstate}*' || postsubtitle match '${searchinputstate}*']`;
              client.fetch(query) 
              .then((data) => {
                  setsearchindexmap(data);
              })
        }

  return (
    <div>
        <main className="">
            <section className="p-[60px] max-w-[900px] mx-auto flex flex-col md:grid md:grid-cols-3 justify-items-center gap-1">
                {searchindexmap?.map(data => (<>
                    <VerticleMain onlick={() => {
                        navigate(`/${data?.postid}`)
                    }} key={data?.postid} createdat={data?._createdAt} posthero={data?.posthero} posttitle={data?.posttitle} postsubtitle={data?.postsubtitle} categoryid={data?.categoryid} />
                </>))}
            </section>
        </main>
    </div>
  )
}

export default SearchIndex