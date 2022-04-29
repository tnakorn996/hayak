import React from 'react'
import { RiContrastDropLine } from 'react-icons/ri'

function LoadMain({title}) {
  return (
    <div>
        <main className="w-screen h-screen flex justify-center items-center">
            <div className="">
                <figure className="">
                    <RiContrastDropLine className='text-3xl  animate-bounce' />
                </figure>
                <figcaption className="">
                    <h1 className="l-h3">{title}</h1>
                </figcaption>
            </div>
        </main>
    </div>
  )
}

export default LoadMain