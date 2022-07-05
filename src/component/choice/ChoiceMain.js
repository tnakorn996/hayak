// import { motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { userui } from '../../content/contentmantwo'
import { client } from '../../lib/sanity'
import ButtonMain from '../../layout/button/ButtonMain'
// import ButtonMain from '../../layout/button/ButtonMain'
import CardMain from '../card/CardMain'

function ChoiceMain({
    choicemainid,
    choicemainindex,

}) {
    const [choicemainpage, setchoicemainpage] = useState(0)
    const [choicemainvalue, setchoicemainvalue] = useState('')
    const [choicemainvaluetwo, setchoicemainvaluetwo] = useState('')
    const [choicemainvaluethree, setchoicemainvaluethree] = useState('')
    const [choicemainvaluefour, setchoicemainvaluefour] = useState('')
    const [cardmainstatic, setcardmainstatic] = useState()
    const [buttonmainstatic, setbuttonmainstatic] = useState(false)
    
    const [choicemainuuid, setchoicemainuuid] = useState(uuidv4())
    const [choicemainrender, setchoicemainrender] = useState()
    const [choicemainlength, setchoicemainlength] = useState()

    // function ll(first= this.props.first) {
    //         setchoicemainpage(first + 1)
    // }

    // function kk(first= this.props.first) {
    //         setchoicemainpage(first - 1)
    // }

    function jj(first= this.props.first, second= this.props.second) {
        if(first === 0){
            setchoicemainvalue(second)
        }
        if(first === 1){
            setchoicemainvaluetwo(second)
        }
        if(first === 2){
            setchoicemainvaluethree(second)
        }
        if(first === 3){
            setchoicemainvaluefour(second)
        }
    }
    
    const hh = () => {
        setbuttonmainstatic(true);

        const docmain = [
            {
                docmainid: 'userlabel',
                docmainindex: 0,
                docmaindata: [
                    {
                        _id: choicemainuuid,
                        _type: 'user',
                        userid: choicemainuuid,
                        userpurpose: choicemainvalue,
                        userage: choicemainvaluetwo,
                        usersource: choicemainvaluethree,
                        userregion: choicemainvaluefour,
                    }
                ]
            }
        ]

        const empty = []
        const filter = docmain.filter(data => data.docmainid === choicemainid && data.docmainindex === choicemainindex)
        const filtertwo = filter[0].docmaindata[0]
        if(filtertwo){
            if(Object.values(filtertwo).some(props => props === '')){
                empty.push({'error': 'Select one answer for each question'})
            } 
            if(empty.length !== 0){
                setbuttonmainstatic(false);
                setcardmainstatic({
                    cardmainid: 'commentimg',
                    cardmainidtwo: 'fail',
                    cardmainidthree: 'feedback',
                    cardmainmessage: empty,
                    cardmainindex: 0 ,
                })
            }
            if(empty.length === 0){
                gg(filter[0].docmaindata[0])
            }
        }
    }


    const gg = async (first = this.props.first) => {
         await client.createOrReplace(first).then(() => {
            setcardmainstatic({
                    cardmainid: 'shareimg',
                    cardmainidtwo: 'success',
                    cardmainidthree: 'feedback',
                    cardmainmessage: [{'success': 'Successfully sent your survey'}],
                    cardmainindex: 0 ,
            })
            setbuttonmainstatic(false);
        });
    }

    const userlabel = [
        {
            choicemainindex:0 ,
            choicemaindata: [
                {
                    choicemaintitle: 'What brings you to TOI?',
                    choicemainpage: 0,
                    choicemainrender: userui.filter(data => data.crummainid === 'purpose'),
                    // choicemainaction: setchoicemainvalue(),
                },
                {
                    choicemaintitle: 'How old are you?',
                    choicemainpage: 1,
                    choicemainrender: userui.filter(data => data.crummainid === 'age'),
                    // choicemainaction: setchoicemainvaluetwo(),
                },
                {
                    choicemaintitle: 'How did you hear about TOI?',
                    choicemainpage: 2,
                    choicemainrender: userui.filter(data => data.crummainid === 'source'),
                    // choicemainaction: setchoicemainvaluethree(),
                },
                {
                    choicemaintitle: 'Where in NZ you are from?',
                    choicemainpage: 3,
                    choicemainrender: userui.filter(data => data.crummainid === 'region'),
                    // choicemainaction: setchoicemainvaluethree(),
                },
            ]
        }
    ]

    const choicemain = [
        {
            choicemainid: 'userlabel',
            choicemainref: userlabel,
        }
    ]

    useEffect(() => {
      if(choicemainid){
          const filter = choicemain.filter(data => data.choicemainid === choicemainid)
          const filtertwo = filter[0].choicemainref.filter(data => data.choicemainindex === choicemainindex)
          const filterthree = filtertwo[0].choicemaindata.filter(data => data.choicemainpage === choicemainpage)
          setchoicemainrender(filterthree)
          setchoicemainlength(filtertwo[0].choicemaindata.length)
      }
    }, [choicemainid, choicemainpage])

  return (
    <div>
        <main className="">
            {choicemainrender?.map((data, index) => (<>
            <section className='px-[20px] md:px-[60px]'>
                <figure className="h-[10vh] md:h-[15vh] flex flex-row justify-start items-start">
                    {data?.choicemainpage !== 0 && (<>
                    <div className="">
                        <br />
                        <button onClick={() => {
                            // kk(data?.choicemainpage)
                            setchoicemainpage(data?.choicemainpage - 1)
                        }} className="pt-[20px]  l-h6 font-serif l-button">←</button>
                    </div>
                    </>)}
                    <div className="">
                        <br />
                        <br />
                        <h1 className="m-h5 md:m-h6 max-w-[70vw] font-serif">{data?.choicemaintitle}</h1>
                        <br />
                        <br />
                    </div>
                </figure>
                <div className="flex flex-col justify-between items-stretch h-[75vh] md:h-[60vh]">
                <figcaption className={`grid grid-flow-row ${data?.choicemainrender[0]?.crummaindata?.length > 7 && '!flex !flex-wrap !gap-1'}`}>
                    {data?.choicemainrender[0]?.crummaindata?.map(dat => (<>
                        <button onClick={() => {
                            jj(data?.choicemainpage, dat?.crummainsubtitle)
                        }} className={`p-[15px] flex flex-row justify-center items-center gap-2  m-h1 l-button duration-1000 ${(
                            dat?.crummainsubtitle === choicemainvalue || 
                            dat?.crummainsubtitle === choicemainvaluetwo || 
                            dat?.crummainsubtitle === choicemainvaluethree ||
                            dat?.crummainsubtitle === choicemainvaluefour) && 'bg-gray-900 text-white'}`}>
                            {dat?.crummainicon && <h1 className="">{dat?.crummainicon}</h1>}
                            <h1 className="first-letter:uppercase font-serif">{dat?.crummainsubtitle}</h1>
                        </button>
                    </>))}
                </figcaption>
                <figcaption className="">
                    <br />
                    <CardMain 
                    cardmainid={cardmainstatic?.cardmainid} 
                    cardmainidtwo={cardmainstatic?.cardmainidtwo} 
                    cardmainidthree={cardmainstatic?.cardmainidthree} 
                    cardmainmessage={cardmainstatic?.cardmainmessage} 
                    cardmainindex={cardmainstatic?.cardmainindex} />
                </figcaption>
                </div>
                <br />
                <figure className="h-[15vh] md:h-[10vh] flex items-center justify-end">
                    {data?.choicemainpage < choicemainlength - 1 ? (<>
                        <button onClick={() => {
                            // ll(data?.choicemainpage)
                            setchoicemainpage(data?.choicemainpage + 1)
                        }} className="w-full  l-button border border-black">
                            Continue ({(data?.choicemainpage + 1) + `/` + (choicemainlength)})
                        </button>
                        <br />
                    </>) : (<>
                    <div className="w-full">
                        <ButtonMain buttonmainstatic={{buttonmainonclick: () => {hh()}, buttonmainload: buttonmainstatic}}>
                            {'Submit'}
                        </ButtonMain>
                    </div>
                    </>) }
                </figure>
            </section>
            </>))}
        </main>
    </div>
  )
}

export default ChoiceMain