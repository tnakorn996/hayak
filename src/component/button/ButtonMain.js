import React from 'react'
import LoadingMain from '../load/LoadingMain'

function ButtonMain({
    title, load, onclick,
}) {

  return (
    <div>
        <main className="">
                <section onClick={onclick} disabled={load === true && true} className={`w-full ${load === true && '!cursor-not-allowed'}`}>
                    {load === false && <button className=" w-full  m-button">{title}</button>} 
                    {load === true && <button className=" w-full flex justify-center items-center gap-3  m-button"><LoadingMain />Loading..</button>} 
                </section>
        </main>

    </div>
  )
}

export default ButtonMain