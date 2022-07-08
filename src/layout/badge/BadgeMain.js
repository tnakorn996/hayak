import React, { useReducer } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { ContextMain } from '../../context/contextmain'
import useApp from '../../hook/useApp'

export default function BadgeMain({
  // badgemainid,
  // badgemainindex,
  badgemainstatic,
  badgemainstyle,
  children,

}) {
  const {
    ptamainstate,

    searchdl,
    postdi,
    rtadi,
    
  } = useContext(ContextMain)
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
  const searchspan = [
    {
      badgemainindex: 0,
      badgemainrender: ll(searchdl)
    }
  ]

  const favouritespan = [
    {
      badgemainindex: 0,
      badgemainrender: ll(postdi)
    }
  ]

  const rtaspan = [
    {
      badgemainindex: 0,
      badgemainrender: ll(rtadi)
    }
  ]

  const badgemain = [
    {
      badgemainid: 'searchspan',
      badgemainref: searchspan,
    },
    {
      badgemainid: 'favouritespan',
      badgemainref: favouritespan,
    },
    {
      badgemainid: 'rtaspan',
      badgemainref: rtaspan,
    },
  ]

  const [appstatic, setappstatic] = useApp(badgemain, badgemainstatic.badgemainid, badgemainstatic.badgemainindex, badgemainstatic)
  
  useEffect(() => {
    if(appstatic && badgemainstatic) {
      setbadgemainrender(appstatic[0].badgemainrender)
    }
  }, [appstatic,badgemainstatic])

  // useEffect(() => {
  //   if(badgemainstatic) {
  //     const filter = badgemain.filter(data => data.badgemainid ===  badgemainstatic.badgemainid)
  //     const filtertwo = filter[0].badgemainref.filter(data => data.badgemainindex === badgemainstatic.badgemainindex)
  //     setbadgemainrender(filtertwo[0].badgemainrender)
  //   }
  // }, [badgemainstatic])

  function ll(first= this.props.first) {
    const empty = []
    first.forEach(data => {
      if(Object.values(data)[2] && Object.values(data)[2].length > 0){
        empty.push(Object.values(data)[2].length)
      } 
    })
    return empty.reduce(function(a, b) { return a + b; }, 0)
  }
    
  return (
    <div>
        <main className="">
            <section className="">
              <figure className={`py-[0.5px] px-[6px]  rounded-full bg-black text-white ${badgemainstyle && badgemainstyle}`}>
                <p className="text-[10px]  m-h1 font-serif">{badgemainrender && badgemainrender}</p>
              </figure>
            </section>
        </main>
    </div>
  )
}