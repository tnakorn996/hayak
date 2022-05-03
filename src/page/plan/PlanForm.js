import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

import { ContextMain } from '../../context/contextmain';
import { v4 as uuidv4 } from 'uuid'
import { planform, planmain } from '../../content/contentmain';
import ExitMain from '../../component/exit/ExitMain';

function PlanForm() {
    const {
        appmainstate, setappmainstate,
        planformstate,

    } = useContext(ContextMain)
    const paypal = useRef()
    // console.log('planformstate :>> ', planformstate);

    const [planformboolean, setplanformboolean] = useState(false)
    const [invoiceformid, setinvoiceformid] = useState()
    const [invoicedateexpire, setinvoicedateexpire] = useState()
    const [invoicefullname, setinvoicefullname] = useState()
    const [invoiceemail, setinvoiceemail] = useState()
    const [invoiceaddress, setinvoiceaddress] = useState()
    const [invoicedescription, setinvoicedescription] = useState()
    const [invoiceamount, setinvoiceamount] = useState(15)
    const [invoicecurrency, setinvoicecurrency] = useState()
    const [planmainid, setplanmainid] = useState()
    // console.log('invoiceamount :>>> ', invoiceamount);

    useEffect(() => {
        setinvoiceformid(uuidv4())
        setinvoicedateexpire(new Date(new Date().setFullYear(new Date().getFullYear() + 1)),)
    }, [])

    useEffect(() => {
        if(appmainstate){
            const filter = planmain.filter((data) => data.planmainid === appmainstate.appmainid)
                for(const dat of filter){
                    setinvoicedescription(dat.planmaintitle)
                    setinvoicecurrency(dat.planmaincurrency)

                    setplanmainid(dat.planmainid)
                    ll()
                }
        }
    }, []);

    useEffect(() => {
        if(planformboolean === true && appmainstate.appmainid === 'once'){
            window.paypal.Buttons({

                createOrder: (data, actions, err) => {
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: invoicedescription,
                                amount: {
                                    currency_code: invoicecurrency,
                                    value: parseFloat(invoiceamount),
                                },
                            },
                        ],
                    });
                },

                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                    kk()
                },

                onError: (err) => {
                    console.log('err', err);
                    jj()
                },

            }).render(paypal.current);
        }

        if(planformboolean === true && appmainstate.appmainid === 'month'){
            window.paypal.Buttons({

                createSubscription: (data, actions) => {
                    return actions.subscription.create({
                    // plan_id: 'P-22X716646P872754FMJOH2FY'
                    });
                },
                onApprove: async (data, actions) => {
                    console.log(data);
                    // kk()
                },

                onError: (err) => {
                    console.log('err', err);
                    // jj()
                },

                style: {           
                     shape: 'pill',           
                     color: 'blue',           
                     layout: 'vertical',           
                     label: 'subscribe'       
                },

            }).render(paypal.current);
      
        }
    }, [planformboolean])

    const ll = async () => {
        const script = document.createElement('script');
        script.src = "https://www.paypal.com/sdk/js?client-id=AegZT040zH2JKRO636Hl1Kk30HzU8C0Bnwj-XHGiQoKjTz7ZZiXtUihUU6iCmPRaksj1PpVPfJ5hMMas"
        // script.src = "https://www.paypal.com/sdk/js?client-id=Aas3yf_0CPPcT_Hgv7KB99G2DWGb9ixC7NlrctkJOQ0spV4q5KEsrylTY517OnqjVEWtvmoz7L9Hv_6Z&vault=true&intent=subscription"
        script.type = "text/javascript";
        script.async = true;
        script.onload = () => setplanformboolean(true)
        document.body.appendChild(script);
    }

    function kk() {
        setappmainstate({
              appmainid: 'plansummary',
              appmainboolean: true,

              appmainref: 'once',
              appmainredirect: 'extromain',
            })
    }

    function jj() {
        setappmainstate({
              appmainid: 'plansummary',
              appmainboolean: false,

              appmainref: 'once',
              appmainredirect: 'extromain',
            })
    }

  return (
    <div>
        <motion.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}  className="p-[30px] w-screen min-h-screen  bg-orange-700 text-white">
            <ExitMain appmainid={appmainstate.appmainid} />
            <section className="max-w-[500px] mx-auto">
                <figcaption className="">
                    {/* <ExitMain /> */}
                    <div className="">
                        <br /><br /><br />
                        <h1 className="text-4xl  m-h6 font-serif">Support us with an {invoicedescription} donation</h1>
                    <br />
                    </div>
                </figcaption>
                <figure className="flex justify-center">
                    <img src="https://everybodyeats.nz/assets/elements/coins-white.png" alt="" className="max-h-[200px]" />
                </figure>
                <figcaption className="">
                    <h1 className="">{invoicecurrency}</h1>
                </figcaption>
            </section>
            <section className="max-w-[500px] mx-auto">
                <figure className="flex justify-between text-center">
                {planform?.map(data => (<>
                <article onClick={() => {
                    setinvoiceamount(data?.planformamount)
                }} className="w-[60px] h-[60px] flex justify-center items-center  rounded-full bg-black">
                    <h1 className="">{data?.planformtitle}</h1>
                </article>
                </>))}
                </figure>
                <input disabled={true} value={invoiceamount} className="m-input" />
            </section>
            <section className="p-[30px] max-w-[500px] mx-auto">
                <br />
                <figure className="">
                    <div ref={paypal} />
                </figure>
                <br />
            </section>
        </motion.main>
    </div>
  )
}

export default PlanForm