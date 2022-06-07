import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import CardMain from '../../component/card/CardMain'
import ZoomMain from '../../component/zoom/ZoomMain'

import { ContextMain } from '../../context/contextmain'

function FavouriteDialog() {

    const {
        favouritedl, favouritedi,

    } = useContext(ContextMain)

  return (
    <div>
        <main className="">
            <section className="px-[50px]">
                <br /><br />
                <h1 className="m-h6 font-serif">Reading List</h1>
            </section>
            <section className="">
                <ZoomMain zoommainid={'favouriteinput'} zoommainslice={3} />
            </section>
        </main>
        {/* <main className="">
            {favouritedl?.map(data => (<>
            <br /><br />
            <h1 className="px-[50px]  m-h6 font-serif">{data?.spreadmaintitle}</h1>
            <section className="px-[50px]">
                {favouritedi?.map(dat => (<>
                    <br /><br />
                    <h1 className="m-h5  font-serif">{dat?.sheetmaintitle}</h1>
                    {dat?.sheetmaindata ? (<>
                    hhh
                    
                    </>): (<>
                        <CardMain      
                        cardmainid={'shareimg'} 
                        cardmainidtwo={'inform'} 
                        // cardmainidthree={'feedback'} 
                        cardmainmessage={
                            [
                                {
                                    'success': 'No added post yet',
                                }
                            ]
                        } 
                        cardmainindex={0} 
                        />
                    </>)}
                </>))}
            </section>
            </>))}
        </main> */}
    </div>
  )
}

export default FavouriteDialog