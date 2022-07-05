import React, { useReducer } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { ContextMain } from '../../context/contextmain'

export default function BadgeMain({
  // badgemainid,
  // badgemainindex,
  badgemainstatic,
  children,

}) {
  // const {
  //   postdi,
    
  // } = useContext(ContextMain)
  const [badgemainrender, setbadgemainrender] = useState()
  
  // const [favouritespanrender, favouritespan] = useReducer((state, action) => {
  //   switch (action.type) {
  //     case 0:
  //     return [
  //       {
  //         badgemainrender: () => {
  //           const empty = []
  //             favouritedi.forEach(data => {
  //               if(data.sheetmaindata && data.sheetmaindata.length > 0){
  //                 empty.push(data.sheetmaindata.length)
  //               } 
  //             })
  //             return empty.reduce(function(a, b) { return a + b; }, 0)
  //         }
  //       }
  //     ]
  
  //     default:
  //     return [
  //       {
  //         badgemainrender: () => {
  //           return 0
  //         }
  //       }
  //     ]
  //   }
  // }
    
  // , []);

  // useEffect(() => {
  //     if(badgemainid === 'favouritespan') return favouritespan({type: badgemainindex})
  // }, [badgemainid, favouritedi])

  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  // const favouritespan = [
  //   {
  //     badgemainindex: 0,
  //     badgemainrender: () => {
  //       const empty = []
  //       postdi.forEach(data => {
  //         if(data.sheetmaindata && data.sheetmaindata.length > 0){
  //           empty.push(data.sheetmaindata.length)
  //         } 
  //       })
  //       return empty.reduce(function(a, b) { return a + b; }, 0)
  //     } 
  //   }
  // ]

  // const badgemain = [
  //   {
  //     badgemainid: 'favouritespan',
  //     badgemainref: favouritespan,
  //   }
  // ]

  // useEffect(() => {
  //   if(badgemainid) {
  //     const filter = badgemain.filter(data => data.badgemainid === badgemainid)
  //     const filtertwo = filter[0].badgemainref.filter(data => data.badgemainindex === badgemainindex)
  //     setbadgemainrender(filtertwo[0].badgemainrender)
  //   }
  // }, [badgemainid, postdi])

  function ll(first= this.props.first) {
    const empty = []
    first.forEach(data => {
      if(data.sheetmaindata && data.sheetmaindata.length > 0){
        empty.push(data.sheetmaindata.length)
      } 
    })
    return empty.reduce(function(a, b) { return a + b; }, 0)
  }
    
  return (
    <div>
        <main className="">
            <section className="">
              <figure className="py-[0.5px] px-[5px]  rounded-full  bg-black">
                {/* <h1 className="text-[9px]  m-h1 text-white">{favouritespanrender && favouritespanrender[0]?.badgemainrender()}</h1> */}
                {/* <h1 className="text-[9px]  m-h1 text-white">{badgemainrender && badgemainrender}</h1> */}
                <h1 className="text-[9px]  m-h1 text-white">{ll(children)}</h1>
              </figure>
            </section>
        </main>
    </div>
  )
}