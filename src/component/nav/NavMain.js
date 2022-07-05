import React from 'react'
import { useContext } from 'react'
import {BiFoodTag} from 'react-icons/bi'
import {RiContrastDropLine, RiSearch2Line, RiCloseFill, RiMenuLine, RiMenu5Line, RiHeartLine} from 'react-icons/ri'
import {VscHeart, VscMenu, VscSearch} from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'

import { breadmain, categorymain, navmain } from '../../content/contentmain'
import { contactul } from '../../content/contentmantwo'
import { ContextMain } from '../../context/contextmain'
import BadgeMain from '../../layout/badge/BadgeMain'
import DropdownMain from '../dropdown/DropdownMain'

function NavMain() {
    const {
        setappmainstate,
        setdropdownmainstate, dropdownmainstate,
        setbreadmainstate,
        setsearchmainstate,

        postupdatedat,
        postdi,

        
    } = useContext(ContextMain)
    const navigate = useNavigate()

  return (
    <div>
        <main className={`z-20 mx-auto grid grid-cols-11 items-center  duration-500 ${dropdownmainstate && '!bg-white'}`}>
            <section className="hidden p-[20px] md:px-[60px] md:py-[20px] col-span-5 md:flex flex-row justify-start gap-1">
                    <div className="flex flex-row gap-10">
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
                        
                        className='' >
                            <a href={`/category/${data?.breadmainid}`} className={`first-letter:uppercase ${dropdownmainstate?.dropdownmainidtwo ===  data?.breadmainid && 'underline'}`}>{data?.breadmaintitle}</a>
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
                <VscMenu className='m-h4' />
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
                        {/* <BrandMain /> */}
                    </figure>
                    <figcaption className="flex flex-row gap-1">
                        <h1 className='m-h6 font-bold font-serif'>TOI</h1>
                        {/* <h1 className="l-h3">Blog</h1> */}
                    </figcaption>
                </article>
                </button>
            </section>

            <section className="p-[20px] md:px-[60px] text-xs col-span-3 md:col-span-5 flex justify-end gap-5 md:gap-7">
                 
                    <article onClick={() => {
                            setsearchmainstate({tabmainindex: 0})
                            setappmainstate(
                                {
                                    appmainid: 'searchdialog',
                                    appmainidtwo: 'sideboardmain',
                                    appmainboolean: true,
                                }
                            )
                        }} className="grid grid-flow-col gap-1 items-center">
                        <VscSearch className='m-h4' />
                    </article>

                    <article onClick={() => {
                            setsearchmainstate({tabmainindex: 1})
                            setappmainstate(
                                {
                                    appmainid: 'favouritedialog',
                                    appmainidtwo: 'sideboardmain',
                                    appmainboolean: true,
                                }
                            )
                        }} className="relative grid grid-flow-col gap-1 items-center">
                        <VscHeart className='m-h5' />
                        <div className="absolute -right-2 -top-2 md:top-0">
                            {/* <BadgeMain badgemainid={'favouritespan'} badgemainindex={0} /> */}
                            <BadgeMain>
                                {postdi}
                            </BadgeMain>
                        </div>
                    </article>

                    <a href={contactul[1]?.breadmainaction} className="hidden md:block  m-button font-serif">{contactul[1]?.breadmainentitle}</a>

            </section>
            <section className="col-span-12">
                <DropdownMain />
            </section>
        </main>
    </div>
  )
}

export default NavMain