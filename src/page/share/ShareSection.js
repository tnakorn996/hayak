import React from 'react'
import { useState } from 'react'
import { RiContrastDropLine, RiFileCopyLine } from 'react-icons/ri'
import CardMain from '../../component/card/CardMain'

function ShareSection({
    param
}) {
    const [sharesectionstate, setsharesectionstate] = useState()

    function ll() {
        const empty = []
        navigator.clipboard.writeText(`https://toifood.co.nz/${param}`).catch(error => {
            empty.push({
                error: 'Something wrong'
            })
        })
        empty.push({
                error: 'Coppied to clipboard'
            })
        setsharesectionstate({
            sharesectionid: 'shareimg',
            sharesectionidtwo: 'success',
            sharesectionmessage: empty,
            // cardmainidthree: 'feedback',
            sharesectionindex: 0,
        })

    }

  return (
    <div>
        <main className="">
            <section className="flex justify-center ">
                    <figure className="h-[250px] w-[250px] flex justify-center items-center ">
                        <RiContrastDropLine className='absolute text-3xl w-[50px] h-[50px]  bg-white rounded-full' />
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://toifood.co.nz/${param}`} alt="" />
                    </figure>
                </section>
                 <br />
                <section className="">
                    <article className="grid grid-cols-12 ">
                        <figcaption className="col-span-10">
                            <h1 className="m-h3">Blog Address</h1>
                            <h1 className="l-h2">https://toifood.co.nz/{param}</h1>
                        </figcaption>
                        <figure onClick={() => {
                            ll()
                        }} className="col-span-2 flex justify-center items-center ">
                            <RiFileCopyLine className='m-h3' />
                        </figure>
                    </article>
                </section>
                <section className="">
                    <CardMain 
                    cardmainid={sharesectionstate?.sharesectionid} 
                    cardmainidtwo={sharesectionstate?.sharesectionidtwo} 
                    cardmainmessage={sharesectionstate?.sharesectionmessage} 
                    cardmainindex={sharesectionstate?.sharesectionindex} />
                </section>
        </main>
    </div>
  )
}

export default ShareSection