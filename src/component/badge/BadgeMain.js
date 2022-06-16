import React, { useReducer } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { ContextMain } from '../../context/contextmain'

// const favouritespan = (state, action) => {
//   switch (action.type) {
//     case 0:
//     return state
    
//     default:
//     return state
//   }
// }

function BadgeMain({
  badgemainid,
  badgemainindex,

}) {
  const {
    favouritedi,

  } = useContext(ContextMain)
  // const initialState = {
  //     favouritedi: () => {
  //         const empty = []
  //         favouritedi.forEach(data => {
  //           if(data.sheetmaindata && data.sheetmaindata.length > 0){
  //             empty.push(data.sheetmaindata.length)
  //           } 
  //         })
  //         return empty.reduce(function(a, b) { return a + b; }, 0)
  //     }
  // }
  // const [state, dispatch] = useReducer(favouritespan, initialState.favouritedi());

  const [badgemainrender, setbadgemainrender] = useState()

  // useEffect(() => {
  //     if(badgemainid === 'favouritespan') return dispatch({type: 0})
  // }, [badgemainid, favouritedi])
  
  const favouritespan = [
    {
      badgemainindex: 0,
      badgemainrender: () => {
        const empty = []
        favouritedi.forEach(data => {
          if(data.sheetmaindata && data.sheetmaindata.length > 0){
            empty.push(data.sheetmaindata.length)
          } 
        })
        return empty.reduce(function(a, b) { return a + b; }, 0)
      } 
    }
  ]

  const badgemain = [
    {
      badgemainid: 'favouritespan',
      badgemainref: favouritespan,
    }
  ]

  useEffect(() => {
    if(badgemainid) {
      const filter = badgemain.filter(data => data.badgemainid === badgemainid)
      const filtertwo = filter[0].badgemainref.filter(data => data.badgemainindex === badgemainindex)
      setbadgemainrender(filtertwo[0].badgemainrender)
    }
  }, [badgemainid, favouritedi])
    
  return (
    <div>
        <main className="">
            <section className="">
              <figure className="py-[0.5px] px-[5px]  rounded-full  bg-black">
                <h1 className="text-[9px]  m-h1 text-white">{badgemainrender && badgemainrender}</h1>
              </figure>
            </section>
        </main>
    </div>
  )
}

export default BadgeMain