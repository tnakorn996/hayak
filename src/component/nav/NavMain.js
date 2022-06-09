import React from 'react'
import { useContext } from 'react'
import {BiFoodTag} from 'react-icons/bi'
import {RiContrastDropLine, RiSearch2Line, RiCloseFill, RiMenuLine, RiMenu5Line, RiHeartLine} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { breadmain, categorymain, navmain } from '../../content/contentmain'
import { ContextMain } from '../../context/contextmain'
import BadgeMain from '../badge/BadgeMain'
import DropdownMain from '../dropdown/DropdownMain'

function NavMain() {
    const {
        setappmainstate,
        setdropdownmainstate, dropdownmainstate,
        setbreadmainstate,

        postupdatedat,

        
    } = useContext(ContextMain)
    const navigate = useNavigate()

  return (
    <div>
        <main className="z-20 mx-auto grid grid-cols-11 items-center   bg-white bg-opacity-95 backdrop-blur">
            <section className="hidden p-[20px] md:px-[60px] md:py-[20px] col-span-5 md:flex flex-row justify-start gap-1">
                    <div className="flex flex-row">
                        {breadmain?.map(data => (<>
                        <button 
                        
                        onMouseEnter={() => {
                            setdropdownmainstate({
                                dropdownmainid: 'navoption',
                                dropdownmainidtwo: data?.breadmainid,
                            })
                        }} 
                        
                        // onClick={() => {
                        //     setbreadmainstate('')
                        //     navigate(`/category/${data?.categorymaindirect}`)
                        // }} 
                        
                        className='l-button' >
                            <h1 className={`first-letter:uppercase ${dropdownmainstate?.dropdownmainidtwo ===  data?.breadmainid && 'underline'}`}>{data?.breadmaintitle}</h1>
                        </button>
                        </>))}
                    </div>

            </section>

            <section className="p-[20px] md:hidden col-span-3">
                <article onClick={() => {
                    setappmainstate({
                            appmainid: 'navdialog',
                            appmainidtwo: 'sideboardmain',
                            appmainidthree: 'post',
                            appmainboolean: true,
                        })
                    }} className="">
                <RiMenu5Line className='text-3xl ' />
                </article>
            </section>

            <section className="p-[20px] md:p-0 col-span-5 md:col-span-1 flex flex-row items-center justify-center">
                <button onClick={() => {
                    navigate('/')
                }} className="opacity-100">
                <article className=" flex flex-row gap-1 items-center">
                    <figure className="">
                        {/* <div className="w-[20px] h-[20px]  rounded-full bg-black" /> */}
                        <RiContrastDropLine className='m-h6' />
                    </figure>
                    <figcaption className="flex flex-row gap-1">
                        <h1 className='m-h6 font-bold font-serif'>TOI</h1>
                        {/* <h1 className="l-h3">Blog</h1> */}
                    </figcaption>
                </article>
                </button>
            </section>

            <section className="p-[20px] md:px-[60px] text-xs col-span-3 md:col-span-5 flex justify-end gap-5 md:gap-7">
                    
                    {/* <button onClick={() => {
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
                    }} className="hidden md:block l-button">{navmain[1].navmaintitle}</button> */}

                    {/* <button onClick={() => {
                        setappmainstate({
                            appmainid: navmain[2]?.navmainref,
                            appmainredirect:  navmain[2]?.navmainredirect
                        })
                    }} className="hidden md:block l-button">{navmain[2].navmaintitle}</button> */}
                    
                    {/* <button onClick={() => {
                        setappmainstate({
                            appmainid: navmain[3]?.navmainref,
                            appmainredirect:  navmain[3]?.navmainredirect
                        })
                    }} className="hidden md:block l-button ">{navmain[3].navmaintitle}</button> */}

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
                    </article>

                    <article onClick={() => {
                            setappmainstate(
                                {
                                    appmainid: 'favouritedialog',
                                    appmainidtwo: 'sideboardmain',
                                    appmainboolean: true,
                                }
                            )
                        }} className="relative grid grid-flow-col gap-1 items-center">
                        <RiHeartLine className='m-h6' />
                        <div className="absolute -right-2 -top-2 md:top-0">
                            <BadgeMain badgemainid={'favouritespan'} badgemainindex={0} />
                        </div>
                    </article>

                    <a href='/contact/contactmain' onClick={() => {
                        // setappmainstate({
                        //     appmainid: navmain[4]?.navmainref,
                        //     appmainredirect:  navmain[4]?.navmainredirect
                        // })
                    }} className="hidden md:block  m-button font-serif">List my business</a>

            </section>
            <section className="col-span-12">
                <DropdownMain />
            </section>
        </main>
    </div>
  )
}

export default NavMain