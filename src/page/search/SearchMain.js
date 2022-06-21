import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { RiFilter3Fill } from 'react-icons/ri'
import ChipMain from '../../component/chip/ChipMain'
import LandMain from '../../component/land/LandMain'
import TabMain from '../../component/tab/TabMain'

import ZoomMain from '../../component/zoom/ZoomMain'
import { ContextMain } from '../../context/contextmain'

function SearchMain() {
  const {
    settabmainstate, setappmainstate,
    setlandmainstate, landmainstate,

    postupdatedat, placeupdatedat, productupdatedat,

  } = useContext(ContextMain)

  useEffect(() => {
    setlandmainstate({
      landmainid: 'searchtbody',
      landmainindex: 0,
      landmainidtwo: 'search'

    })
  }, [])

  return (
    <div>
        <main className="">
          <section className="absolute w-full">
            {landmainstate && <LandMain />}
          <br /><br /><br /><br />
          </section>
          <section className="p-[20px] md:px-[50px] flex justify-end gap-1 items-center">
            <ChipMain />
                
              <button onClick={() => {
                      settabmainstate({
                          tabmainid: 'searchoption',
                          // tabmainlocation: location.pathname,
                          // tabmainparam: param.id,
                          // tabmainimage: categoryindeximage,
                          // tabmainaction: categoryindexaction,
                      })
                      setappmainstate({
                          appmainid: 'searchoption',
                          appmainidtwo: 'opendeskmain',
                          // tabmainlocation: location.pathname,
                          // appmainparam: param.id,
                          appmainboolean: true,
                      })
              }} className="flex flex-row items-center gap-2  l-button"><RiFilter3Fill /> Filter</button>

          </section>
          <br /><br />
            <section className="">
              {/* <TabMain tabmainstatic={{tabmainid: 'searchinput'}} /> */}
              {postupdatedat && placeupdatedat && productupdatedat && (<>
                <ZoomMain zoommainid={'searchinput'} zoommainslice={3} />
              </>)}
            </section>
            <br /><br />
        </main>
    </div>
  )
}

export default SearchMain