import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import {MdShowChart} from 'react-icons/md'
import { RiMapPin3Line, RiNewspaperLine, RiSearch2Line, RiShoppingBag2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import LoadingMain from '../../component/load/LoadingMain';

import { ContextMain } from '../../context/contextmain';
import { client } from '../../lib/sanity';

function SearchDialog() {
    const {
        postupdatedat,
        placeupdatedat,
        productupdatedat,

    } = useContext(ContextMain)
    const navigate = useNavigate()
    const [searchdialogrender, setsearchdialogrender] = useState()
    const [searchdialogvalue, setsearchdialogvalue] = useState('')
    const [searchdialogload, setsearchdialogload] = useState(false)

    // const [postplaceproductlength, setpostplaceproductlength] = useState()
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
                    searchdialogrender: postupdatedat,
                },
                {
                    searchdialogtitle: 'Local trends',
                    searchdialogicon: <MdShowChart />,
                    searchdialogrender: placeupdatedat,
                },
                {
                    searchdialogtitle: 'Product trends',
                    searchdialogicon: <MdShowChart />,
                    searchdialogrender: productupdatedat,
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
        if(searchdialogvalue !== '') {
            ll()
        } 
        if(searchdialogvalue === '') {
            setsearchdialogrender(searchdialog[0].searchdialogref)
            setsearchdialogload(false)
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
                // setsearchdialogload(true)
                  if(data.postplaceproduct){
                      const filter = data.postplaceproduct.filter(data => data._type === 'post')
                      const filtertwo = data.postplaceproduct.filter(data => data._type === 'place')
                      const filterthree = data.postplaceproduct.filter(data => data._type === 'product')
                    //   setpostplaceproductlength(data.postplaceproduct.length)
                      setpost(filter)
                      setplace(filtertwo)
                      setproduct(filterthree)
                      setsearchdialogload(false)
                  }
              })
    }

    if(!postupdatedat) return <LoadingMain />
    
  return (
    <div>
        <main className="">
            <section className="h-[20vh] px-[50px] grid grid-flow-row items-center">
                <div className="w-full relative flex items-center">
                    {searchdialogload === true ? <div className="absolute"><LoadingMain /></div>  : <RiSearch2Line className='absolute  m-h6' />}
                    <input onChange={(p) => setsearchdialogvalue(p.target.value)} value={searchdialogvalue} className="w-full pl-[40px]  l-input" placeholder='Search...' />
                </div>
                <h1 className="l-h2 italic">Try coffee, kitchen, gift card..</h1>
            </section>
            <section className="h-[70vh] px-[50px]  overflow-y-scroll">
                {/* {searchdialogvalue !== '' && (<>
                <figure className="">
                <br />
                <h1 className="m-h6">{postplaceproductlength && postplaceproductlength} SEARCH RESULTS "{searchdialogvalue}"</h1>
                <br />
                </figure>
                </>)} */}
                {searchdialogrender?.map(data => (<>
                <figcaption className="">
                <br /><br />
                <h1 className="m-h4">{data?.searchdialogtitle} ({data?.searchdialogrender?.length})</h1>
                <br />
                    {data?.searchdialogrender?.slice(0, 3)?.map(dat => (<>
                        <article onClick={() => {
                            navigate(`/${dat?.postid}`)
                        }} className="p-[10px] flex flex-row gap-3 items-center">
                            <span className="l-h2 h-[30px] w-[30px] flex justify-center items-center  bg-gray-700 rounded-full text-white">{data.searchdialogicon}</span>
                            <h1 className="md:text-4xl  l-h6 text-white truncate font-serif">{dat?.posttitle}</h1>
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