import React from 'react'
import { useContext } from 'react'
import {BiFoodTag} from 'react-icons/bi'
import {RiContrastDropLine, RiSearch2Line, RiCloseFill} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { categorymain, navmain } from '../../content/contentmain'
import { ContextMain } from '../../context/contextmain'
import DropdownMain from '../dropdown/DropdownMain'

function NavMain() {
    const {
        setappmainstate,
        setdropdownmainstate, dropdownmainstate,
        setbreadmainstate,

        
    } = useContext(ContextMain)
    const navigate = useNavigate()

  return (
    <div>
        <main className="mx-auto grid grid-cols-12 items-center  bg-white bg-opacity-95 backdrop-blur">
            <section onClick={() => {
                navigate('/')
            }} className="p-[20px] md:px-[60px] md:py-[30px] col-span-4 flex flex-row items-center">
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
            <section className="p-[20px] md:px-[60px] md:py-[30px] col-span-8 flex justify-end gap-1">
                    <button onClick={() => {
                        setappmainstate({
                            appmainid: navmain[0]?.navmainid,
                            appmainredirect: navmain[0]?.navmainredirect
                        })
                    }} className="hidden md:block l-button">{navmain[0].navmaintitle}</button>
                    
                    <button onClick={() => {
                        setappmainstate({
                            appmainid: navmain[1]?.navmainid,
                            appmainredirect: navmain[1]?.navmainredirect
                        })
                    }} className="hidden md:block l-button">{navmain[1].navmaintitle}</button>

                    <button onClick={() => {
                        setappmainstate({
                            appmainid: navmain[2]?.navmainref,
                            appmainredirect:  navmain[2]?.navmainredirect
                        })
                    }} className="hidden md:block l-button">{navmain[2].navmaintitle}</button>
                    
                    <button onClick={() => {
                        setappmainstate({
                            appmainid: navmain[3]?.navmainref,
                            appmainredirect:  navmain[3]?.navmainredirect
                        })
                    }} className="hidden md:block l-button ">{navmain[3].navmaintitle}</button>

                    <button 
                    onClick={() => {
                        setappmainstate({
                            appmainid: navmain[4]?.navmainref,
                            appmainredirect:  navmain[4]?.navmainredirect
                        })
                    }} className="m-button">{navmain[4].navmaintitle}</button>
            </section>
            <section className="mx-[20px] md:mx-[60px] col-span-12 grid grid-cols-12   border-y border-black">
                <figcaption className="p-[5px] col-span-10 md:col-span-7 flex flex-row justify-around">
                    {categorymain?.map(data => (<>
                    <article 
                    
                    onMouseEnter={() => {
                            setdropdownmainstate({
                                dropdownmainid: 'navoption',
                                dropdownmainidtwo: data?.categorymainid,
                            })
                        }} 
                    
                    onClick={() => {
                        setbreadmainstate('')
                        navigate(`/category/${data?.categorymaindirect}`)
                    }} 
                    
                    className='' >
                        <h1 className={`p-[10px] flex justify-around  first-letter:uppercase text-[10px] md:m-h3 ${dropdownmainstate?.dropdownmainidtwo ===  data?.categorymainid && 'border-b border-black text-black'}`}>{data?.categorymaintitle}</h1>
                    </article>
                    </>))}
                </figcaption>
                <figure className="p-[5px] col-span-2 md:col-span-5 flex items-center justify-center md:justify-start  border-l border-black">
                    <article onClick={() => {
                            setappmainstate(
                                {
                                    appmainid: 'searchdialog',
                                    appmainidtwo: 'sideboardmain',
                                    appmainboolean: true,
                                }
                            )
                        }} className="grid grid-flow-col gap-1 items-center">
                        <RiSearch2Line className='m-h6' />
                        <input placeholder='Search...' className="w-full hidden md:block  m-input focus:outline-none" />
                    </article>
                </figure>
            </section>
            <section className="col-span-12">
                <DropdownMain />
            </section>
        </main>
    </div>
  )
}

export default NavMain