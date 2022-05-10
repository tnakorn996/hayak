import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import {MdShowChart} from 'react-icons/md'
import { RiMapPin3Line, RiNewspaperLine, RiShoppingBag2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import LoadingMain from '../../component/load/LoadingMain';

import { ContextMain } from '../../context/contextmain';
import { client } from '../../lib/sanity';

function SearchDialog() {
    const {
        postplaceproduct,

    } = useContext(ContextMain)
    const navigate = useNavigate()
    const [searchdialogrender, setsearchdialogrender] = useState()
    const [searchdialogvalue, setsearchdialogvalue] = useState('')

    const [postplaceproductlength, setpostplaceproductlength] = useState()
    const [post, setpost] = useState()
    const [place, setplace] = useState()
    const [product, setproduct] = useState()

    const searchdialog = [
        {
            searchdialogid: 'one',
            searchdialogref: [
                {
                    searchdialogtitle: 'Blog trends',
                    searchdialogicon: <MdShowChart />,
                    searchdialogrender: postplaceproduct,
                },
                {
                    searchdialogtitle: 'Local trends',
                    searchdialogicon: <MdShowChart />,
                    searchdialogrender: postplaceproduct,
                },
                {
                    searchdialogtitle: 'Product trends',
                    searchdialogicon: <MdShowChart />,
                    searchdialogrender: postplaceproduct,
                },
            ],
        },
        {
            searchdialogid: 'two',
            searchdialogref: [
                {
                    searchdialogtitle: 'Blogs',
                    searchdialogicon: <RiNewspaperLine />,
                    searchdialogrender: post,
                },
                {
                    searchdialogtitle: 'Locals',
                    searchdialogicon: <RiMapPin3Line />,
                    searchdialogrender: place,
                },
                {
                    searchdialogtitle: 'Products',
                    searchdialogicon: <RiShoppingBag2Line />,
                    searchdialogrender: product,
                },
            ],
        }

    ]

    useEffect(() => {
        setsearchdialogrender(searchdialog[0].searchdialogref)
    }, [])

    useEffect(() => {
        console.log('searchdialogvalue :>> ', searchdialogvalue);
      if(searchdialogvalue !== '') {
        ll()
      } 
      if(searchdialogvalue === '') {
        setsearchdialogrender(searchdialog[0].searchdialogref)
      } 
    }, [searchdialogvalue])

    useEffect(() => {
      if(post || place || product){
        setsearchdialogrender(searchdialog[1].searchdialogref)
      }
    }, [post, place, product])
    
    const ll = async () => {
        const query = `*[_type == 'user' && userid == 'hayaker']{
                'postplaceproduct': *[posttitle match '${searchdialogvalue}*' || postsubtitle match '${searchdialogvalue}*']{
                    _type,
                    postid,
                    posttitle,
                } | order(_createdAt desc) ,
              }[0]`;
              await client.fetch(query) 
              .then((data) => {
                  if(data.postplaceproduct){
                      const filter = data.postplaceproduct.filter(data => data._type === 'post')
                      const filtertwo = data.postplaceproduct.filter(data => data._type === 'place')
                      const filterthree = data.postplaceproduct.filter(data => data._type === 'product')
                      setpostplaceproductlength(data.postplaceproduct.length)
                      setpost(filter)
                      setplace(filtertwo)
                      setproduct(filterthree)
                  }
              })
    }

    if(!postplaceproduct) return <LoadingMain />
    
  return (
    <div>
        <main className="">
            <section className="h-[20vh]">
                <input onChange={(p) => setsearchdialogvalue(p.target.value)} value={searchdialogvalue} className="w-full  l-input" placeholder='Search...' />
                <br /><br />
                <h1 className="l-h2 italic">Try coffee, kitchen, gift card..</h1>
            </section>
            <section className="h-[60vh]  overflow-y-scroll">
                {/* {searchdialogvalue !== '' && (<>
                <figure className="">
                <br />
                <h1 className="m-h6">{postplaceproductlength && postplaceproductlength} SEARCH RESULTS "{searchdialogvalue}"</h1>
                <br />
                </figure>
                </>)} */}
                {searchdialogrender?.map(data => (<>
                <figcaption className="">
                <br />
                <h1 className="m-h4">{data?.searchdialogtitle} ({data?.searchdialogrender?.length})</h1>
                    {data?.searchdialogrender?.slice(0, 3)?.map(dat => (<>
                        <article onClick={() => {
                            navigate(`/${dat?.postid}`)
                        }} className="p-[10px] flex flex-row gap-3 items-center">
                            <span className="l-h2 h-[30px] w-[30px] flex justify-center items-center  bg-gray-700 rounded-full text-white">{data.searchdialogicon}</span>
                            <h1 className="l-h6 text-white truncate">{dat?.posttitle}</h1>
                        </article>
                    </>))}
                </figcaption>
                </>))}
            </section>
        </main>
    </div>
  )
}

export default SearchDialog