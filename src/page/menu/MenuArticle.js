import React from 'react'
import { useContext } from 'react'

import { ContextMain } from '../../context/contextmain'

function MenuArticle() {
    const {
        setappmainstate,

    } = useContext(ContextMain)

  return (
    <div>
        <main className="">
            <section className="w-full md:min-w-[900px] p-[30px] text-center  ">
                <h1 className="text-3xl m-h6 font-serif">Get Our Best Menu Evey Night</h1>
                <br />
                <h1 className="l-h5 ">Struggle to find out what to eat? Here are some cool ideas for your dinner!</h1>
                <br />
                <button onClick={() => {
                    setappmainstate({
                        appmainid: 'menudiv',
                        appmainredirect: 'slidemain',
                    })
                }} className="m-button">GET THE MENU</button>
            </section>

        </main>
    </div>
  )
}

export default MenuArticle