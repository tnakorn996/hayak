import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { ContextMain } from '../../context/contextmain'

function BadgeMain({
  badgemainid,
  badgemainindex,

}) {
  const {
    favouritedi,

  } = useContext(ContextMain)
  const [badgemainrender, setbadgemainrender] = useState()

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
        // favouritedi?.sheetmaindata?.length?.reduce(function(a, b) { return a + b; }, 0),
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
              <figure className="py-[1px] px-[5px]  rounded-full  bg-black">
                <h1 className="m-h1 text-white">{badgemainrender && badgemainrender}</h1>
              </figure>
            </section>
        </main>
    </div>
  )
}

export default BadgeMain