import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'

import { ContextMain } from '../../context/contextmain'

function MenuDiv() {
    const {
        appmainstate, 
        slidemainpage, setslidemainpage,

    } = useContext(ContextMain)

    const [menudivrender, setmenudivrender] = useState()

    const menudiv = [
        {
            menudivid: 0,
            menudivrender: [
                {
                    menutitle: 'Starter',
                    menusubtitle: 'slow roast marrow, lemon, cream cheese & chive bruschetta ',
                    menumoretitle: ''
                },
                {
                    menutitle: 'Mains',
                    menusubtitle: 'bacon & basil arrabiata with hand made nz durum wheat maltagliati (df)',
                    menumoretitle: '(or) oregano & lemon passata with with hand made nz durum wheat maltagliati (df)'
                },
                {
                    menutitle: 'Dessert',
                    menusubtitle: 'sicilian apple & currant cake with cappuccino ice cream',
                    menumoretitle: ''
                },
                {
                    menutitle: 'Vegan Options',
                    menusubtitle: '2 courses tonight'
                },
            ],
        },
        {
            menudivid: 1,
            menudivrender: [
                {
                    menutitle: 'Starter',
                    menusubtitle: 'carrot, dukkah, date, labneh & lime (gfi)',
                    menumoretitle: ''
                },
                {
                    menutitle: 'Mains',
                    menusubtitle: 'bbq bacon cheeseburger pie, mashed potatoes, tomato, butter lettuce & dill pickle salad',
                    menumoretitle: '(or) bbq jackfruit pie, mashed potatoes, tomato, butter lettuce, & dill pickle salad (df)',
                },
                {
                    menutitle: 'Dessert',
                    menusubtitle: 'fruit salad with feijoa, plum, grapes & orange (gf/dfi)',
                    menumoretitle: ''
                },
                {
                    menutitle: 'Vegan Options',
                    menusubtitle: '3 courses tonight'
                },
            ],
        },
        {
            menudivid: 2,
            menudivrender: [
                {
                    menutitle: 'Starter',
                    menusubtitle: 'butter lettuce, garlic bread crumbs, caesar dressing, egg',
                    menumoretitle: ''
                },
                {
                    menutitle: 'Mains',
                    menusubtitle: 'pork thai yellow curry, coconut rice, lime pickles (gfi/df) ',
                    menumoretitle: '(or) pumpkin thai yellow curry, coconut rice, lime pickles (gfi/df)',
                },
                {
                    menutitle: 'Dessert',
                    menusubtitle: 'chai bread and butter pudding with condensed milk ',
                    menumoretitle: ''
                },
                {
                    menutitle: 'Vegan Options',
                    menusubtitle: '1 course tonight'
                },
            ],
        },
        {
            menudivid: 3,
            menudivrender: [
                {
                    menutitle: 'Starter',
                    menusubtitle: 'creamy beetroot soup with dill cream & dailybread sourdough',
                    menumoretitle: ''
                },
                {
                    menutitle: 'Mains',
                    menusubtitle: 'beef & bacon meatloaf with smokey ketchup, minted potatoes & braised cabbage (gfi/df)',
                    menumoretitle: '(or) roast pumpkin & marrow with dukkah & coriander crema (gfi)',
                },
                {
                    menutitle: 'Dessert',
                    menusubtitle: 'honey, thyme & brie pie with macadamias & burnt grapes',
                    menumoretitle: ''
                },
                {
                    menutitle: 'Vegan Options',
                    menusubtitle: '1 course tonight'
                },
            ],
        },
        {
            menudivid: 4,
            menudivrender: [
                {
                    menutitle: 'Starter',
                    menusubtitle: 'chipotle, tomato & corn tortilla soup with queso fresco',
                    menumoretitle: ''
                },
                {
                    menutitle: 'Mains',
                    menusubtitle: 'beef barbacoa, cheese grits, tomato & lime salsa, coriander',
                    menumoretitle: '(or) pulled jackfruit, cheese grits, tomato & lime salsa, coriander',
                },
                {
                    menutitle: 'Dessert',
                    menusubtitle: 'cinnamon baked feijoas with lime & condensed milk baked rice, cookie crumble',
                    menumoretitle: ''
                },
                {
                    menutitle: 'Vegan Options',
                    menusubtitle: '3 course tonight'
                },
            ],
        }
    ]

    useEffect(() => {
      if(appmainstate && appmainstate.appmainid === 'menudiv' && slidemainpage !== null){
            if(slidemainpage >= menudiv.length){
                const math = Math.floor(Math.random() * (0 - menudiv.length) + menudiv.length)
                const filter = menudiv.filter(data => menudiv.indexOf(data) === math)
                setmenudivrender(filter[0].menudivrender)
            } else {
                const filter = menudiv.filter(data => menudiv.indexOf(data) === slidemainpage)
                setmenudivrender(filter[0].menudivrender)
            }
        }
    }, [appmainstate, slidemainpage])

  return (
    <div>
        <main className="max-w-[1200px]">
            <section className="p-[10px]">
                <br /><br /><br /><br />
                <h1 className="text-5xl  m-h6 font-serif">Tonight’s Menu</h1>
            </section>
            <section className="p-[10px]">
                {menudivrender?.map(data => (<>
                    <article className="">
                        <br /><br />
                        <h1 className="l-h1 text-white">{data?.menutitle}</h1>
                        <br />
                        <h1 className="text-3xl  m-h6  font-serif first-letter:uppercase">{data?.menusubtitle}</h1>
                        <br />
                        <h1 className="text-3xl  m-h6  font-serif">{data?.menumoretitle}</h1>
                    </article>
                </>))}
            </section>
        </main>
    </div>
  )
}

export default MenuDiv