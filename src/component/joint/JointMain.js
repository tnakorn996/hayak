import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import useApp from '../../hook/useApp'

function JointMain({
  jointmainid,
  jointmainindex,

}) {
  const [jointmainrender, setjointmainrender] = useState()
  const posttemplate = [
    {
      jointmainindex: 0,
      jointmainrender: <main className="">
        <section className="w-screen h-[85vh] md:h-[75vh]  m-section" />
        <section className="flex flex-col md:grid md:grid-cols-3">
          <article className="p-[20px]  border border-gray-200">
            <figure className="w-[60%] h-[50px]  m-section" />
            <br />
            <figure className="my-[5px] w-[70px] h-[70px]  m-section" />
          </article>
          <article className="p-[20px]  border border-gray-200">
            <figure className="w-[60%] h-[50px]  m-section" />
            <br />
            <figure className="my-[5px] w-[70px] h-[70px]  m-section" />
          </article>
          <article className="p-[20px]  border border-gray-200">
            <figure className="w-[60%] h-[50px]  m-section" />
            <br />
            <figure className="my-[5px] w-[70px] h-[70px]  m-section" />
          </article>

        </section>

      </main>,
    }
  ]

  const hometemplate = [
    {
      jointmainindex: 0,
      jointmainrender: <main className="">
        <section className="relative h-[90vh] md:h-screen w-screen">
          <div className="p-[20px] md:p-[50px] absolute bottom-0 left-0">
          <figure className="w-[60vw] md:w-[40vh] h-[7vh]  m-section" />
          <br />
          <figure className="w-[40vw] md:w-[20vh] h-[7vh]  m-section" />
          </div>
        </section>
      </main>,
    },
    {
      jointmainindex: 1,
      jointmainrender: <main className="">
        <section className="px-[20px] md:px-[50px]">
          <figcaption className="">
            <br />
            <br />
            <br />
            <br />
            <br />
            <figure className="w-[30%] h-[20px] mx-auto  m-section" />
            <br />
            <figure className="w-[60%] h-[60px] mx-auto  m-section" />
            <br />
            <br />
          </figcaption>
          <figure className=" w-full h-[60vh]  m-section" />
        </section>
      </main>,
    }
  ]

  const jointmain = [
    {
      jointmainid: 'posttemplate',
      jointmainref: posttemplate,
    },
    {
      jointmainid: 'hometemplate',
      jointmainref: hometemplate,
    },
  ]
  
  const [appstatic, setappstatic] = useApp(jointmain, jointmainid, jointmainindex)

  return (
    <div>
        <main className="duration-100">
            <section className="">
              {appstatic && appstatic[0].jointmainrender}
            </section>
        </main>
    </div>
  )
}

export default JointMain