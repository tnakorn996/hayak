
import React, { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
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
    const [breadmainstate, setbreadmainstate] = useState('')
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
    const [genreindexstate, setgenreindexstate] = useState('')
    const [landmainstate, setlandmainstate] = useState()
    const [barmainstate, setbarmainstate] = useState()
    
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
        setappmainstate('')
        setspreadmainstate('')
        setsharemainstate('')

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
                settabmainstate({
                    tabmainid: 'feedback',
                    tabmainidtwo: 'ask',
                })
                setappmainstate({
                    appmainid: 'feedbacksection',
                    appmainidtwo: 'modalmain',
                    appmainidthree: 0,
                    appmainboolean: true,
                })

            },

            tabmainid: 'feedback',
        },
        {
            blemainid: 'edit',
            blemaintitle: 'Suggest an edit',
            blemainaction:  () => {
                settabmainstate({
                    tabmainid: 'feedback',
                    tabmainidtwo: 'edit',
                })
                setappmainstate({
                    appmainid: 'feedbacksection',
                    appmainidtwo: 'modalmain',
                    appmainidthree: 0,
                    appmainboolean: true,
                })

            },

            tabmainid: 'feedback',
        },
        {
            blemainid: 'report',
            blemaintitle: 'Report an issue',
            blemainaction:  () => {
                settabmainstate({
                    tabmainid: 'feedback',
                    tabmainidtwo: 'report',
                })
                setappmainstate({
                    appmainid: 'feedbacksection',
                    appmainidtwo: 'modalmain',
                    appmainidthree: 0,
                    appmainboolean: true,
                })

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
            blemainid: 'classic',
            blemaintitle: "Classic",
            blemainaction:  () => {
                setgenreindexstate({
                    genreindexid: 'classic',
                })
            },
            
            tabmainid: 'genre',
        },
        {
            blemainid: 'newbie',
            blemaintitle: "Newbie",
            blemainaction:  () => {
                setgenreindexstate({
                    genreindexid: 'newbie',
                })
            },
            
            tabmainid: 'genre',
        },
        {
            blemainid: 'native',
            blemaintitle: "Native",
            blemainaction:  () => {
                setgenreindexstate({
                    genreindexid: 'native',
                })
            },
            
            tabmainid: 'genre',
        },
        {
            blemainid: 'vegan',
            blemaintitle: "Vegan",
            blemainaction:  () => {
                setgenreindexstate({
                    genreindexid: 'vegan',
                })
            },
            
            tabmainid: 'genre',
        },
        {
            blemainid: 'vegeterian',
            blemaintitle: "Vegetarian",
            blemainaction:  () => {
                setgenreindexstate({
                    genreindexid: 'vegeterian',
                })
            },
            
            tabmainid: 'genre',
        },
        {
            blemainid: 'dairy',
            blemaintitle: "Dairy Free",
            blemainaction:  () => {
                setgenreindexstate({
                    genreindexid: 'dairy',
                })
            },
            
            tabmainid: 'genre',
        },
        {
            blemainid: 'gluten',
            blemaintitle: "Gluten Free",
            blemainaction:  () => {
                setgenreindexstate({
                    genreindexid: 'gluten',
                })
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
                window.open(`/feedback/feedbackmain`, '_blank').focus();
            },
            blemainentitle: 'Give a feedback',

            tabmainid: 'feedback',
        },
    ]

    const feedbackselect = [
         {
            tabmainid: 'feedback',
            tabmaintitle: 'Feedback',
            // tabmainaction: `/category/post`,
        },
    ]

    const feedbacklink = [
        {
            blemainid: 'ask',
            blemaintitle: 'Ask question',
            blemainsubtitle: `Please note we can’t guarantee a response.`,
            blemainaction:  () => {
                settabmainstate({
                    tabmainid: 'feedback',
                    tabmainidtwo: 'ask',
                })
                setappmainstate({
                    appmainid: 'feedbacksection',
                    appmainidtwo: 'modalmain',
                    appmainidthree: 0,
                    // appmainparam: param,
                    appmainboolean: true,
                })
            },

            tabmainid: 'feedback',
        },
        {
            blemainid: 'edit',
            blemaintitle: 'Suggest an edit',
            blemainsubtitle: `Please note we can’t guarantee a response.`,
            blemainaction:  () => {
                settabmainstate({
                    tabmainid: 'feedback',
                    tabmainidtwo: 'edit',
                })
                setappmainstate({
                    appmainid: 'feedbacksection',
                    appmainidtwo: 'modalmain',
                    appmainidthree: 0,
                    // appmainparam: param,
                    appmainboolean: true,
                })
            },

            tabmainid: 'feedback',
        },
        {
            blemainid: 'report',
            blemaintitle: 'Report an issue',
            blemainsubtitle: `Please note we can’t guarantee a response.`,
            blemainaction:  () => {
                settabmainstate({
                    tabmainid: 'feedback',
                    tabmainidtwo: 'report',
                })
                setappmainstate({
                    appmainid: 'feedbacksection',
                    appmainidtwo: 'modalmain',
                    appmainidthree: 0,
                    // appmainparam: param,
                    appmainboolean: true,
                })
            },

            tabmainid: 'feedback',
        }
    ]

    const termselect = [
         {
            tabmainid: 'all',
            tabmaintitle: 'All',
        },
    ]

    const termlink = [
        {
            blemainid: 'use',
            blemaintitle: 'Use',
            blemainentitle: 'Term of Service',
            blemainaction:  () => {
                window.open(`/term/termmain`, '_blank').focus();
            },

            tabmainid: 'all',
        },
        {
            blemainid: 'publish',
            blemaintitle: 'Publish',
            blemainentitle: 'Term of Service',
            blemainaction:  () => {
                window.open(`/term/termmain`, '_blank').focus();
            },

            tabmainid: 'all',
        },
    ]


    /////////////////////////////////

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


    // if(!postupdatedat) return <LoadMain />

    return (
      <ContextMain.Provider value={{
          postselect, postlink,
          categoryselect, categorylink,
          searchselect, searchlink,
          commentselect, commentlink,
          feedbackselect, feedbacklink,
          termselect, termlink,

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
          genreindexstate, setgenreindexstate,
          landmainstate, setlandmainstate,
          barmainstate, setbarmainstate,
          
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