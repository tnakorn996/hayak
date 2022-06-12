import React from 'react'
import { RiContrastDropLine } from 'react-icons/ri'
import LoadingMain from './LoadingMain'

function LoadMain({title}) {
  return (
    <div>
        <main className="w-screen h-screen flex flex-col justify-center items-center  bg-white">
            {/* <div className="h-[15vh]">
                <figure className="">
                    <RiContrastDropLine className='m-h6' />
                </figure>
                <figcaption className="">
                    <h1 className="l-h3">{title}</h1>
                </figcaption>
            </div> */}
            <figure className="">
                <LoadingMain />
            </figure>
        </main>
    </div>
  )
}

export default LoadMain