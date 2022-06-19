import React, { useContext } from 'react'
import { ContextMain } from '../../context/contextmain'

function TabMain() {
    const {
        // favouriteselect,

    } = useContext(ContextMain)

    const favouritelegend = [
        {
            tabmainindex: 0,
            // tanmainrender: favouriteselect[]
        }
    ]

    const tabmain = [
        {
            tabmainid: 'favouritelegend',
            tabmainref: favouritelegend,
        }
    ]

  return (
    <div>
        <main className="">
            <section className="">

            </section>
            <section className="">

            </section>
        </main>
    </div>
  )
}

export default TabMain