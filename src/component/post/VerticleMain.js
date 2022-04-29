import React from 'react'

function VerticleMain({onlick, createdat, posthero, posttitle, postsubtitle}) {
  return (
    <div>
        <main className="">
          <article onClick={onlick} className=" flex flex-col justify-center  ">
                <figure className="row-span-3 overflow-hidden max-h-[120px]">
                    <img src={posthero} alt="" className="w-full h-full" />
                </figure>
                <figcaption className="row-span-3">
                    <br /><br />
                    <div className="flex flex-row gap-2">
                      <h1 className="l-h1 truncate">{createdat?.slice(0, 10)}</h1>
                      <h1 className="l-h1 truncate">|</h1>
                      <h1 className="l-h1 truncate">5 min</h1>
                    </div>
                    <br />
                    <h1 className="m-h3">{posttitle}</h1>
                    {/* <h1 className="l-h2">{postsubtitle}</h1> */}
                    {/* {ll(data?.categoryid)} */}
                </figcaption>
            </article>
        </main>
    </div>
  )
}

export default VerticleMain