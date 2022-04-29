import React from 'react'

function HorizonMain({onlick, posthero, posttitle, postsubtitle}) {

  return (
    <div>
        <main className="">
            <article onClick={onlick} className="grid grid-cols-12 items-center  m-section">
                <figure className="col-span-3 h-[80px] flex items-center  overflow-hidden">
                    <img src={posthero} alt="" className="w-full" />
                </figure>
                <figcaption className="col-span-9  l-section">
                    <h1 className="m-h5 truncate">{posttitle}</h1>
                    <h1 className="l-h3 truncate">{postsubtitle}</h1>
                    {/* {ll(data?.categoryid)} */}
                </figcaption>
            </article>
        </main>
    </div>
  )
}

export default HorizonMain