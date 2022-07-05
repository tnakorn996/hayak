import React, { useContext, useEffect } from 'react'

import { ContextMain } from '../../context/contextmain'

export default function  BioMain({
  biomainstatic,

}) {
  const {

  } = useContext(ContextMain)

  // const postaddress = [
  //   {
  //     biomainindex: 0,
  //     biomainindex: 0,
  //   }
  // ]

  // const biomain = [
  //   {
  //     biomainid: 'postaddress',
  //     biomaindata: postaddress,
  //   }
  // ]

  // useEffect(() => {
  //   if(biomainstatic){
  //     const filter  =biomain.filter(data => data.biomainid === biomainstatic.biomainid)
  //     const filtertwo  =filter[0].biomainref.filter(data => data.biomainindex === biomainstatic.biomainindex)
  //   }
  // }, [biomainstatic])
    
  return (
    <div>
        <main className="">
            <section className="">

            </section>
        </main>
    </div>
  )
}
