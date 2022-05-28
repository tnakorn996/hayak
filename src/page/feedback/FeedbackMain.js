import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import LandMain from '../../component/land/LandMain'
import ZoomMain from '../../component/zoom/ZoomMain'
import { ContextMain } from '../../context/contextmain'

function FeedbackMain() {
  const {
    setlandmainstate, landmainstate,

    postupdatedat, placeupdatedat, productupdatedat
  } = useContext(ContextMain)

  useEffect(() => {
    setlandmainstate({
      landmainid: 'feedbacktbody',
      landmainidtwo: 'feedback',
      landmainindex: 0,
    })
  }, [])

  return (
    <div>
        <main className="">
          <section className="absolute w-full">
            {landmainstate && <LandMain />}
          </section>
          <br /><br /><br /><br /><br /><br />
            <section className="">
              {(postupdatedat && placeupdatedat && productupdatedat) && (<>
                <ZoomMain zoommainid={'feedbackinput'} zoommainslice={10} />
              </>)} 
            </section>
        </main>
    </div>
  )
}

export default FeedbackMain