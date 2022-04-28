import React from 'react'
import {BiFoodTag} from 'react-icons/bi'
import {RiContrastDropLine} from 'react-icons/ri'

function NavMain() {
  return (
    <div>
        <main className="grid grid-cols-12 items-center  ">
            <section className="col-span-6 flex flex-row gap-1 items-center m-section">
                <figure className="">
                    <RiContrastDropLine className='text-3xl' />
                </figure>
                <figcaption className="">
                    <h1 className='m-h6 font-bold'>HAYAK</h1>
                </figcaption>
            </section>
            <section className="col-span-6 flex justify-end gap-2  m-section ">
                <button className="l-button">About</button>
                <button className="m-button">Contact</button>
            </section>
            <section className="col-span-12 border-y-2 border-black m-section">
                <article className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, harum.
                </article>
            </section>


        </main>
    </div>
  )
}

export default NavMain