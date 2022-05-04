import React from 'react'
import { useContext } from 'react'
import {BiFoodTag} from 'react-icons/bi'
import {RiContrastDropLine, RiSearch2Line, RiCloseFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { categorymain, navmain } from '../../content/contentmain'
import { ContextMain } from '../../context/contextmain'

function NavMain() {
    const {
        setappmainstate,
        setontromainstate,
        postindexstate,
        searchinputstate, setsearchinputstate,
        
    } = useContext(ContextMain)

    const navigate = useNavigate()

    function ll(first = this.props.first) {
        if(first === ''){
            setsearchinputstate(first)
            navigate('/search/searchmain')
        }
        if(first !== ''){
            setsearchinputstate(first)
            navigate('/search/searchindex')
        }
    }

  return (
    <div>
        <main className=" max-w-[1200px] mx-auto grid grid-cols-12 items-center  bg-white bg-opacity-95 backdrop-blur">
            <section onClick={() => {
                navigate('/')
            }} className="p-[20px] md:px-[60px] md:py-[30px] col-span-6 flex flex-row items-center">
                <article className=" flex flex-row gap-1 items-center">
                <figure className="">
                    <RiContrastDropLine className='text-3xl' />
                </figure>
                <figcaption className="flex flex-row gap-1">
                    <h1 className='m-h6 font-bold'>HAYAK</h1>
                    <h1 className="l-h3">Blog</h1>
                </figcaption>
                </article>
            </section>
            <section className="p-[20px] md:px-[60px] md:py-[30px] col-span-6 flex justify-end gap-1">
                    <button onClick={() => {
                        setappmainstate({
                            appmainid: navmain[0]?.navmainref,
                            appmainredirect:  navmain[0]?.navmainredirect
                        })
                    }} className="hidden md:block l-button">{navmain[0].navmaintitle}</button>
                    
                    <button onClick={() => {
                        setappmainstate({
                            appmainid: navmain[1]?.navmainref,
                            appmainredirect:  navmain[1]?.navmainredirect
                        })
                    }} className="l-button">{navmain[1].navmaintitle}</button>

                    <button onClick={() => {
                        setappmainstate({
                            appmainid: navmain[2]?.navmainref,
                            appmainredirect:  navmain[2]?.navmainredirect
                        })
                    }} className="hidden md:block m-button ">{navmain[2].navmaintitle}</button>
            </section>
            <section className="mx-[20px] md:mx-[60px] col-span-12 grid grid-cols-12   border-y border-black">
                <figcaption className="p-[5px] col-span-12 md:col-span-7 grid grid-cols-4 justify-items-center text-center">
                {categorymain?.map(data => (<>
                <article onClick={() => {
                    navigate(`/category/${data?.categorymaindirect}`)
                }} className="py-[10px]">
                    <h1 className="l-h2  first-letter:uppercase">{data?.categorymaintitle}</h1>
                </article>
                </>))}
                </figcaption>
                <figure className="p-[5px] hidden md:block col-span-12 md:col-span-5  border-l border-black">
                    <div className="flex flex-row gap-1 items-center">
                        <RiSearch2Line className='m-h6' />
                        <input 
                        value={searchinputstate}

                        onFocus={() => {
                            setsearchinputstate('')
                            setappmainstate({
                                appmainid: 'postupdatedat',
                                appmainstate: '',
                            })
                            navigate('/search/searchmain')
                        }} 

                        onChange={(p) => ll(p.target.value)}
                        placeholder='Search...' className="w-full  m-input focus:outline-none" />
                        <RiCloseFill onClick={() => {
                            setsearchinputstate('')
                            navigate(postindexstate?.postindexid)
                        }} className="m-h6" />
                    </div>
                </figure>
            </section>


        </main>
    </div>
  )
}

export default NavMain