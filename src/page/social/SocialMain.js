import React from 'react'
import { useEffect } from 'react'
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri'

function SocialMain({param}) {

  useEffect(() => {
    ll()
  }, [])

  function ll() {
    // document.title = param;

    const select = document.querySelector('title');
    select.innerText = `TOI FOOD NZ | ${param.toUpperCase().slice(1, param.length)}`;
    const selecttwo = document.querySelector("meta[name='description']");
    selecttwo.setAttribute('content', param.toUpperCase().slice(1, param.length))

    console.log('param[0].toUpperCase() :>> ', param.toUpperCase().slice(1, param.length));

    // document.title ="Welcome | here is your page title to display"; 
    // document.getElementsByName("description").content="dddddddd";
    // document.getElementsByName("image").content="https://scontent-akl1-1.xx.fbcdn.net/v/t1.6435-9/33491873_1678856928878083_330788970864574464_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9267fe&_nc_ohc=aNimj_QEeNMAX-N6eZ8&_nc_ht=scontent-akl1-1.xx&oh=00_AT_wlv3e8_1etjmqWtPNAaZwA3AW00oIuDAS6gmMYcN96A&oe=62B9819D"

  }
  
  return (
    <div>
        <main className="">
          <section className="grid grid-flow-col justify-items-center justify-center gap-3 text-center">
                      <a href={`https://twitter.com/intent/tweet?url=${window.location.origin}${param}&text=${param}`} target="_blank" className="grid justify-items-center gap-3">
                          <RiTwitterFill className='text-xl  m-h6' />
                          {/* <h1 className="l-h1">Twitter</h1> */}
                      </a>
                      <a href={`https://www.facebook.com/sharer.php?u=${window.location.origin}${param}`} target="_blank" className="grid justify-items-center gap-3">
                          <RiFacebookFill className='text-xl  m-h6' />
                          {/* <h1 className="l-h1">Facebook</h1> */}
                      </a>
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.origin}${param}`} target="_blank" className="grid justify-items-center gap-3">
                          <RiLinkedinFill className='text-xl  m-h6' />
                          {/* <h1 className="l-h1">Linkedin</h1> */}
                      </a>
            </section>
        </main>
    </div>
  )
}

export default SocialMain