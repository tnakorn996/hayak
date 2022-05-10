import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ContextMain } from '../../context/contextmain'
import CategoryPicture from '../../page/catagory/CategoryPicture'

function LandMain() {
  const {
    appmainstate, setappmainstate,

  } = useContext(ContextMain)
  const navigate = useNavigate()
  const [promomainrender, setpromomainrender] = useState()
  const [promomainentitle, setpromomainentitle] = useState()

  const categoryinpicture = [
    {
      promomainrender: <CategoryPicture />,
      // promomainaction: () => {
      //   navigate(`/category/`)
      //   setappmainstate({
      //     appmainredirect: 'appmain'
      //   })
      // },
      promomainentitle: 'Explore All Category',
    },

  ]

  const promomain = [
    {
      promomainid: 'categorypicture',
      promomainref: categoryinpicture,
    }
  ]

  useEffect(() => {
    if(appmainstate && appmainstate.appmainredirect === 'promomain'){
      const filter = promomain.filter(data => data.promomainid === appmainstate.appmainid)
      const filtertwo = filter[0].promomainref.filter(data => filter[0].promomainref.indexOf(data) === 0)
      setpromomainrender(filtertwo[0].promomainrender)
      setpromomainentitle(filtertwo[0].promomainentitle)
    }
  }, [appmainstate])
    
  return (
    <div>
        <main className="">
            <section className="">
              {promomainrender && promomainrender}
            </section>
            <section className="h-[20vh] w-full sticky bottom-0 left-0 flex items-center flex-col justify-evenly  bg-black">
              <h1 className="l-h2">Or</h1>
              <button className="l-button">{promomainentitle && promomainentitle}</button>
            </section>
        </main>
    </div>
  )
}

export default LandMain