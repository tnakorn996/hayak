import React from 'react'
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri'

function SocialMain({param}) {
  console.log('param :>>> ', param);

  return (
    <div>
        <main className="">
          <section className="grid grid-flow-col justify-items-center justify-center gap-3 text-center">
                      <a href={`https://twitter.com/intent/tweet?url=https://hayak.vercel.app${param}&text=${param}`} target="_blank" className="grid justify-items-center gap-3">
                          <RiTwitterFill className='text-xl  m-h6' />
                          {/* <h1 className="l-h1">Twitter</h1> */}
                      </a>
                      <a href={`https://www.facebook.com/sharer.php?u=https://hayak.vercel.app${param}`} target="_blank" className="grid justify-items-center gap-3">
                          <RiFacebookFill className='text-xl  m-h6' />
                          {/* <h1 className="l-h1">Facebook</h1> */}
                      </a>
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://hayak.vercel.app${param}`} target="_blank" className="grid justify-items-center gap-3">
                          <RiLinkedinFill className='text-xl  m-h6' />
                          {/* <h1 className="l-h1">Linkedin</h1> */}
                      </a>
            </section>
        </main>
    </div>
  )
}

export default SocialMain