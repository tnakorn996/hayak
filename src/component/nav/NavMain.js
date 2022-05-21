import React from 'react'
import { useContext } from 'react'
import {BiFoodTag} from 'react-icons/bi'
import {RiContrastDropLine, RiSearch2Line, RiCloseFill, RiMenuLine} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { breadmain, categorymain, navmain } from '../../content/contentmain'
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
        <main className="z-20 mx-auto grid grid-cols-11 items-center   bg-white bg-opacity-95 backdrop-blur">
            <section className="hidden p-[20px] md:px-[60px] md:py-[30px] col-span-5 md:flex flex-row justify-start gap-1">
                    <div className="flex flex-row">
                        {breadmain?.map(data => (<>
                        <article 
                        
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
                            <h1 className={` first-letter:uppercase ${dropdownmainstate?.dropdownmainidtwo ===  data?.breadmainid && 'border-b border-black text-black'}`}>{data?.breadmaintitle}</h1>
                        </article>
                        </>))}
                    </div>

            </section>

            <section className="p-[20px] md:hidden col-span-2">
                <article onClick={() => {
                    setappmainstate({
                            appmainid: 'navdialog',
                            appmainidtwo: 'sideboardmain',
                            appmainidthree: 'post',
                            appmainboolean: true,
                        })
                    }} className="">
                <RiMenuLine className='text-3xl ' />
                </article>
            </section>

            <section onClick={() => {
                navigate('/')
            }} className="p-[20px] md:p-0 col-span-7 md:col-span-1 flex flex-row items-center justify-center">
                <article className=" flex flex-row gap-1 items-center">
                    <figure className="">
                        <RiContrastDropLine className='text-3xl' />
                    </figure>
                    <figcaption className="flex flex-row gap-1">
                        <h1 className='m-h6 font-bold font-serif'>HAYAK</h1>
                        {/* <h1 className="l-h3">Blog</h1> */}
                    </figcaption>
                </article>
            </section>
            <section className="md:px-[60px] col-span-2 md:col-span-5 flex justify-end gap-1">
                    
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

                    <article onClick={() => {
                            setappmainstate(
                                {
                                    appmainid: 'searchdialog',
                                    appmainidtwo: 'sideboardmain',
                                    appmainboolean: true,
                                }
                            )
                        }} className="px-[30px] grid grid-flow-col gap-1 items-center">
                        <RiSearch2Line className='m-h6' />
                    </article>

                    <button onClick={() => {
                        setappmainstate({
                            appmainid: navmain[4]?.navmainref,
                            appmainredirect:  navmain[4]?.navmainredirect
                        })
                    }} className="hidden md:block  m-button">{navmain[4].navmaintitle}</button>

            </section>
            <section className="mx-[20px] md:mx-[60px] col-span-12 grid grid-cols-12  ">
                
                
            </section>
            <section className="col-span-12">
                <DropdownMain />
            </section>
        </main>
    </div>
  )
}

export default NavMain