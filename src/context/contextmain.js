
import React, { createContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import LoadMain from '../component/load/LoadMain'
import ProgressBar from "@badrap/bar-of-progress";

import { client } from '../lib/sanity'
import { RiFeedbackFill, RiShareFill } from 'react-icons/ri';
import StackMain from '../component/Stack/StackMain';
import WireMain from '../component/wire/WireMain';

export const ContextMain = createContext()

export const Provider = ({ children }) => {
    const location = useLocation()
    // const param = useParams()
    // console.log('location :>> ', location);

    const [appmainstate, setappmainstate] = useState('appmain')
    // const [postindexstate, setpostindexstate] = useState()
    const [searchmainstate, setsearchmainstate] = useState('postupdatedat')
    const [searchinputstate, setsearchinputstate] = useState('')
    const [planformstate, setplanformstate] = useState()
    const [ontromainstate, setontromainstate] = useState()
    const [extromainstate, setextromainstate] = useState()
    const [slidemainpage, setslidemainpage] = useState(Math.random() * (0 - 99 + 1) + 99)
    const [sheetmainpage, setsheetmainpage] = useState(0)
    const [categorypicturestate, setcategorypicturestate] = useState()
    const [categoryindextrigger, setcategoryindextrigger] = useState('')
    const [breadmainstate, setbreadmainstate] = useState()
    const [alertmainstate, setalertmainstate] = useState()
    const [dropdownmainstate, setdropdownmainstate] = useState()
    const [ctamainstate, setctamainstate] = useState()
    const [rtamainstate, setrtamainstate] = useState()
    const [portmainstate, setportmainstate] = useState()
    const [statemainstate, setstatemainstate] = useState()
    const [spreadmainstate, setspreadmainstate] = useState()
    const [wiremainstate, setwiremainstate] = useState()
    const [snackbarmainstate, setsnackbarmainstate] = useState()
    const [stackmainstate, setstackmainstate] = useState()
    const [tabmainstate, settabmainstate] = useState()
    const [opendeskmainstate, setopendeskmainstate] = useState()
    const [stepmainstate, setstepmainstate] = useState()
    const [sharemainstate, setsharemainstate] = useState()
    
    const [userindex, setuserindex] = useState()
    const [postplaceproduct, setpostplaceproduct] = useState()
    const [postupdatedat, setpostupdatedat] = useState()
    const [placeupdatedat, setplaceupdatedat] = useState()
    const [productupdatedat, setproductupdatedat] = useState()
    const [productcreatedat, setproductcreatedat] = useState()
    const [placecreatedat, setplacecreatedat] = useState()

    useEffect(() => {
        pp()
    }, [])

    const progress = new ProgressBar({
      size: 4,
      color: 'rgb(55 65 81)',
      className: 'z-50',
      delay: 100,
    })

    useEffect(() => {
      if (location) {
        setappmainstate('')
        setspreadmainstate('')
      }

      progress.start();

      setTimeout(() => {
        progress.finish();
      }, 5000);

    }, [location])
    
    const postselect = [
        {
            tabmainid: 'share',
            tabmaintitle: 'Share',
            tabmainicon: <RiShareFill />,
        },
        {
            tabmainid: 'feedback',
            tabmaintitle: 'Feedback',
            tabmainicon: <RiFeedbackFill />,
        },
    ]

    const postlink = [
        {
            blemainid: 'url',
            blemaintitle: 'Scan with QR code',
            blemainaction:  () => {
                setappmainstate({
                    appmainid: 'sharesection',
                    appmainidtwo: 'modalmain',
                    appmainidthree: 0,
                    appmainparam: sharemainstate.sharemainparam,
                    appmainboolean: true,
                })
            },

            tabmainid: 'share',
            spreadmainid: 'new',
        },
        {
            blemainid: 'url',
            blemaintitle: 'Scan with other platforms',
            blemainaction:  () => {
                setappmainstate({
                    appmainid: 'sharesection',
                    appmainidtwo: 'modalmain',
                    appmainidthree: 1,
                    appmainparam: `/` + sharemainstate.sharemainparam,
                    appmainboolean: true,
                })
            },

            tabmainid: 'share',
        },


        {
            blemainid: 'ask',
            blemaintitle: 'Ask question',
            blemainaction:  () => {
            },

            tabmainid: 'feedback',
        },
        {
            blemainid: 'edit',
            blemaintitle: 'Suggest an edit',
            blemainaction:  () => {
            },

            tabmainid: 'feedback',
        },
        {
            blemainid: 'report',
            blemaintitle: 'Report an issue',
            blemainaction:  () => {
            },

            tabmainid: 'feedback',
        }
    ]

    const categoryselect = [
        {
            tabmainid: appmainstate?.appmainparam,
            tabmaintitle: 'category',
        },
        {
            tabmainid: 'genre',
            tabmaintitle: 'Genres',
        },
    ]

    const categorylink = [
         {
            blemainid: 'recipe',
            blemaintitle: 'Recipes',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'recipe',
                })
            },

            tabmainid: 'post',
        },
        {
            blemainid: 'review',
            blemaintitle: 'Reviews',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'review',
                })
            },

            tabmainid: 'post',
        },
        {
            blemainid: 'interview',
            blemaintitle: 'Interviews',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'interview',
                })
            },

            tabmainid: 'post',

        },

        {
            blemainid: 'meat',
            blemaintitle: 'Meat',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'meat',
                })
            },

            tabmainid: 'product',

        },
        {
            blemainid: 'coffee',
            blemaintitle: 'Coffee',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'coffee',
                })
            },

            tabmainid: 'product',

        },
        {
            blemainid: 'alcohol',
            blemaintitle: 'Alcohol',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'alcohol',
                })
            },

            tabmainid: 'product',

        },
        {
            blemainid: 'dairy',
            blemaintitle: 'Dairy',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'dairy',
                })
            },

            tabmainid: 'product',

        },
        {
            blemainid: 'etc',
            blemaintitle: 'Veggies, fruit, etc',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'etc',
                })
            },

            tabmainid: 'product',

        },
        
        {
            blemainid: 'retail',
            blemaintitle: 'Retailers',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'retail',
                })
            },

            tabmainid: 'place',

        },
        {
            blemainid: 'manufacturer',
            blemaintitle: 'Manufacturers',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'manufacturer',
                })
            },

            tabmainid: 'place',

        },
        {
            blemainid: 'restaurant',
            blemaintitle: "Chefs / Restaurants",
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'restaurant',
                })
            },
            
            tabmainid: 'place',
        },

        {
            blemainid: 'excite',
            blemaintitle: "Exciting",
            blemainaction:  () => {
                // setbreadmainstate({
                //     breadmainidtwo: 'restaurant',
                // })
            },
            
            tabmainid: 'genre',
        },
        {
            blemainid: 'recommend',
            blemaintitle: "Recommended",
            blemainaction:  () => {
                // setbreadmainstate({
                //     breadmainidtwo: 'restaurant',
                // })
            },
            
            tabmainid: 'genre',
        },
    ]

    const searchselect = [
         {
            tabmainid: 'post',
            tabmaintitle: 'Blog',
            // tabmainaction: `/category/post`,
        },
        {
            tabmainid: 'place',
            tabmaintitle: 'Places',
            // tabmainaction: `/category/place`,
        },
        {
            tabmainid: 'product',
            tabmaintitle: 'Products',
            // tabmainaction: `/category/product`,
        },
    ]

    const searchlink = [
         {
            blemainid: 'recipe',
            blemaintitle: 'Recipes',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'recipe',
                })
            },

            tabmainid: 'post',
        },
        {
            blemainid: 'review',
            blemaintitle: 'Reviews',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'review',
                })
            },

            tabmainid: 'post',
        },
        {
            blemainid: 'interview',
            blemaintitle: 'Interviews',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'interview',
                })
            },

            tabmainid: 'post',

        },

        {
            blemainid: 'meat',
            blemaintitle: 'Meat',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'meat',
                })
            },

            tabmainid: 'product',

        },
        {
            blemainid: 'coffee',
            blemaintitle: 'Coffee',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'coffee',
                })
            },

            tabmainid: 'product',

        },
        {
            blemainid: 'alcohol',
            blemaintitle: 'Alcohol',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'alcohol',
                })
            },

            tabmainid: 'product',

        },
        {
            blemainid: 'dairy',
            blemaintitle: 'Dairy',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'dairy',
                })
            },

            tabmainid: 'product',

        },
        {
            blemainid: 'etc',
            blemaintitle: 'Veggies, fruit, etc',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'etc',
                })
            },

            tabmainid: 'product',

        },
        
        {
            blemainid: 'retail',
            blemaintitle: 'Retailers',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'retail',
                })
            },

            tabmainid: 'place',

        },
        {
            blemainid: 'manufacturer',
            blemaintitle: 'Manufacturers',
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'manufacturer',
                })
            },

            tabmainid: 'place',

        },
        {
            blemainid: 'restaurant',
            blemaintitle: "Chefs / Restaurants",
            blemainaction:  () => {
                setbreadmainstate({
                    breadmainidtwo: 'restaurant',
                })
            },
            
            tabmainid: 'place',
        },

        {
            blemainid: 'excite',
            blemaintitle: "Exciting",
            blemainaction:  () => {
                // setbreadmainstate({
                //     breadmainidtwo: 'restaurant',
                // })
            },
            
            tabmainid: 'genre',
        },
        {
            blemainid: 'recommend',
            blemaintitle: "Recommended",
            blemainaction:  () => {
                // setbreadmainstate({
                //     breadmainidtwo: 'restaurant',
                // })
            },
            
            tabmainid: 'genre',
        },
    ]

    const commentselect = [
         {
            tabmainid: 'comment',
            tabmaintitle: 'comment',
            // tabmainaction: `/category/post`,
        },
    ]

    const commentlink = [
         {
            blemainid: 'all',
            blemainaction:  () => {
                setappmainstate({
                    appmainid: 'commentdialog',
                    appmainidtwo: 'sideboardmain',
                    appmainboolean: true,
                })
            },
            blemainentitle: 'Leave a review',

            tabmainid: 'comment',
        },

        {
            blemainid: 'feedback',
            blemainaction:  () => {
                setappmainstate({
                    appmainid: 'commentdialog',
                    appmainidtwo: 'sideboardmain',
                    appmainboolean: true,
                })
            },
            blemainentitle: 'Give a feedback',

            tabmainid: 'feedback',
        },
    ]

    const feedbackselect = [
         {
            tabmainid: 'complain',
            tabmaintitle: 'complain',
            // tabmainaction: `/category/post`,
        },
    ]

    const feedbacklink = [
         {
            blemainid: 'design',
            blemainaction:  () => {

            },
            blemainentitle: 'Give a feedback',

            tabmainid: 'complain',
        },
    ]

    const tabmain = [
        // {
        //     tabmainid: 'blockselect',
        //     tabmainref: blockselect,
        // },
    ]

    const blemain = [
        // {
        //     blemainid: 'blocklink',
        //     blemainref: blocklink,
        // },
    ]

    const pp = async () => {
              const query = `*[_type == 'user' && userid == 'hayaker']{
                ...,

                'postplaceproduct': *[_type == 'post' || _type == 'place' || _type == 'product'] {
                  ...,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_createdAt desc) ,

                'postupdatedat': *[_type == 'post'] {
                  ...,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_updatedAt desc) ,
                'placeupdatedat': *[_type == 'place'] {
                  ...,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_updatedAt desc) ,
                'productupdatedat': *[_type == 'product'] {
                  ...,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_updatedAt desc) ,

                'placecreatedat': *[_type == 'place'] {
                  ...,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_createdAt desc),
                'productcreatedat': *[_type == 'product'] {
                  ...,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_createdAt desc),
                
              }[0]`;
              await client.fetch(query) 
              .then((data) => {
                  setuserindex(data)
                  setpostplaceproduct(data.postplaceproduct)

                  setpostupdatedat(data.postupdatedat);
                  setplaceupdatedat(data.placeupdatedat);
                  setproductupdatedat(data.productupdatedat);
                  setplacecreatedat(data.placecreatedat);
                  setproductcreatedat(data.productcreatedat);
              })
        }


    if(!postupdatedat) return <LoadMain />

    return (
      <ContextMain.Provider value={{
          postselect, postlink,
          categoryselect, categorylink,
          searchselect, searchlink,
          commentselect, commentlink,
          feedbackselect, feedbacklink,

          appmainstate, setappmainstate,
          // postindexstate, setpostindexstate,
          searchmainstate, setsearchmainstate,
          searchinputstate, setsearchinputstate,
          planformstate, setplanformstate,
          ontromainstate, setontromainstate,
          extromainstate, setextromainstate,
          slidemainpage, setslidemainpage,
          sheetmainpage, setsheetmainpage,
          categorypicturestate, setcategorypicturestate,
          categoryindextrigger, setcategoryindextrigger,
          breadmainstate, setbreadmainstate,
          alertmainstate, setalertmainstate,
          dropdownmainstate, setdropdownmainstate,
          ctamainstate, setctamainstate,
          rtamainstate, setrtamainstate,
          portmainstate, setportmainstate,
          statemainstate, setstatemainstate,
          spreadmainstate, setspreadmainstate,
          wiremainstate, setwiremainstate,
          snackbarmainstate, setsnackbarmainstate,
          stackmainstate, setstackmainstate,
          tabmainstate, settabmainstate,
          opendeskmainstate, setopendeskmainstate,
          stepmainstate, setstepmainstate,
          sharemainstate, setsharemainstate,
          
          userindex,
          postplaceproduct,
          postupdatedat,
          placeupdatedat,
          productupdatedat,
          placecreatedat,
          productcreatedat, 
        }} >
        {children}
      </ContextMain.Provider>
    )
}