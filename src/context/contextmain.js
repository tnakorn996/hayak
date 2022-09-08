
import React, { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
// import LoadMain from '../component/load/LoadMain'
// import ProgressBar from "@badrap/bar-of-progress";

import { RiFeedbackFill, RiShareFill } from 'react-icons/ri';
import useClient from '../hook/useClient';

export const ContextMain = createContext()

export const Provider = ({ children }) => {
    const location = useLocation()
    // const param = useParams()
   
    const [appmainstate, setappmainstate] = useState('')
    // const [postindexstate, setpostindexstate] = useState()
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
    const [guidemainstate, setguidemainstate] = useState()
    //should be searchmainstate but already taken :(
    const [searchinputstate, setsearchinputstate] = useState({searchmaindata: []})
    const [favouritemainstate, setfavouritemainstate] = useState({favouritemaindata: []})
    const [ptamainstate, setptamainstate] = useState(true)
    const [toastermainstate, settoastermainstate] = useState()
    //should be tabmainstate but already taken :(
    const [searchmainstate, setsearchmainstate] = useState({tabmainindex: 0})

    const [clientpost, setclientpost] = useState()
    const [postplaceproduct, setpostplaceproduct] = useState()
    const [postupdatedat, setpostupdatedat] = useState()
    const [placeupdatedat, setplaceupdatedat] = useState()
    const [productupdatedat, setproductupdatedat] = useState()
    const [productcreatedat, setproductcreatedat] = useState()
    const [placecreatedat, setplacecreatedat] = useState()

    // useEffect(() => {
    //     window.addEventListener('load', pp())
    //     window.addEventListener('load', oo())
    //     pp()
    //     return window.removeEventListener('load', pp())
    // }, [])

    // const progress = new ProgressBar({
    //   size: 4,
    //   color: 'rgb(55 65 81)',
    //   className: 'z-50',
    //   delay: 100,
    // })

    const parsepost = JSON.parse(window.localStorage.getItem("postiframe"));
    const parsesearch = JSON.parse(window.localStorage.getItem("searchiframe"));
    const parsefavourite = JSON.parse(window.localStorage.getItem("favouriteiframe"));
    const parsefeedback = JSON.parse(window.localStorage.getItem("feedbackiframe"));
    const parsecontact = JSON.parse(window.localStorage.getItem("contactiframe"));
    if(!parsepost || Object.getPrototypeOf(parsepost).isPrototypeOf(Object)) {
        window.localStorage.setItem("postiframe", JSON.stringify([]))
    }
    if(!parsesearch || Object.getPrototypeOf(parsesearch).isPrototypeOf(Object)) {
        window.localStorage.setItem("searchiframe", JSON.stringify([]))
    }
    if(!parsefavourite || Object.getPrototypeOf(parsefavourite).isPrototypeOf(Object)) {
        window.localStorage.setItem("favouriteiframe", JSON.stringify([]))
    }
    if(!parsefeedback || Object.getPrototypeOf(parsefeedback).isPrototypeOf(Object)) {
        window.localStorage.setItem("feedbackiframe", JSON.stringify([]))
    }
    if(!parsecontact || Object.getPrototypeOf(parsefeedback).isPrototypeOf(Object)) {
        window.localStorage.setItem("contactiframe", JSON.stringify([]))
    }

    useEffect(() => {
        setappmainstate('')
        setspreadmainstate('')
        setsharemainstate('')
        setrtamainstate('')
        setctamainstate('')
        window.localStorage.setItem("favouriteiframe", JSON.stringify([]))
        window.localStorage.setItem("feedbackiframe", JSON.stringify([]))
        window.localStorage.setItem("contactiframe", JSON.stringify([]))
        
        // progress.start();
        // setTimeout(() => {
            //     progress.finish();
            // }, 5000);
            
        // window.addEventListener('load', oo())
        // return window.removeEventListener('load', oo())
    }, [location])


    const clientquery = `*[_type == 'user' && userid == 'hayaker']{
                ...,
                'postplaceproduct': *[_type == 'post' && postpublish != false || _type == 'place' && postpublish != false || _type == 'product' && postpublish != false] {
                  ...,
                  'postblock': null,

                  'placepostid':  *[_type == 'place' && postid == lower(^.placeid) ][0],
                } | order(_createdAt desc) ,

                'postupdatedat': *[_type == 'post' && postpublish != false] {
                  ...,
                  'postblock': null,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_updatedAt desc) ,
                'placeupdatedat': *[_type == 'place' && postpublish != false] {
                  ...,
                  'postblock': null,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_updatedAt desc) ,
                'productupdatedat': *[_type == 'product' && postpublish != false] {
                  ...,
                  'postblock': null,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_updatedAt desc) ,

                'placecreatedat': *[_type == 'place' && postpublish != false] {
                  ...,
                  'postblock': null,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_createdAt desc),
                'productcreatedat': *[_type == 'product' && postpublish != false] {
                  ...,
                  'postblock': null,
                  'placepostid':  *[_type == 'place' && postid == ^.placeid ][0],
                } | order(_createdAt desc),
                
              }[0]`;
    
    const clientquerytwo = `*[_type != 'comment' && _type != 'feedback' && postid == '${location && location?.pathname?.replace('/', '')}' && postpublish != false]{
        ...,
        'postblock': null,
        'placeplaceid': *[_type == 'place' && postid match ^.placeid || _type == 'place' && postid match ^.placeidtwo] {..., 'postblock': null} | order(_updatedAt desc),
        'postplaceid': *[_type == 'post' && postid != ^.postid && placeid match ^.placeid || _type == 'post' && postid != ^.postid && placeid match ^.placeidtwo || _type == 'post' && postid != ^.postid && productid match ^.postid || _type == 'post' && postid != ^.postid && productidtwo match ^.postid || _type == 'post' && postid != ^.postid && productidthree match ^.postid] {..., 'postblock': null} | order(_updatedAt desc) ,
        'productplaceid': *[_type == 'product' && postid != ^.postid && placeid match ^.placeid || _type == 'product' && postid != ^.postid && placeid match ^.placeidtwo || _type == 'product' && postid != ^.postid && placeidtwo match ^.placeid ] {..., 'postblock': null} | order(_updatedAt desc) ,
        'productpostid': *[_type == 'product' && postid match ^.productid || _type == 'product' && postid match ^.productidtwo || _type == 'product' && postid match ^.productidthree ] {..., 'postblock': null} | order(_updatedAt desc) ,
    }[0]`;         

    const [clientstatic, setclientstatic] = useClient(clientquery)
    const [clientstatictwo, setclientstatictwo] = useClient(clientquerytwo)

    useEffect(() => {
        if(clientstatic){
            const {postplaceproduct, postupdatedat, placeupdatedat, productupdatedat, placecreatedat, productcreatedat} = clientstatic
            setpostplaceproduct(postplaceproduct)
            setpostupdatedat(postupdatedat);
            setplaceupdatedat(placeupdatedat);
            setproductupdatedat(productupdatedat);
            setplacecreatedat(placecreatedat);
            setproductcreatedat(productcreatedat);
        }
        
    }, [clientstatic])

    useEffect(() => {
        if(clientstatictwo) {
            setclientpost(clientstatictwo)
        }
    }, [clientstatictwo])

    useEffect(() => {
        if( (appmainstate === '' || appmainstate.appmainboolean === false) && parsepost && parsepost.length > 0 && window.screen.width < 1000){
            setappmainstate({
                appmainid: 'overlay',
                appmainidtwo: 'snackbarmain',
            })
        }
    }, [appmainstate])
    
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
            blemaintitle: 'Share with other platforms',
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
            blemainid: 'url',
            blemaintitle: 'Share via ...',
            blemainaction:  () => {
                if (navigator.share) {
                navigator.share({url: location.pathname})
                    .then(() => alert('Successful share'))
                    .catch((error) => alert('Error sharing', error));
                } else {
                    alert(`This current device in not supported`)
                }
            },

            tabmainid: 'share',
        },

        {
            blemainid: 'ask',
            blemaintitle: 'Ask us a question',
            blemainaction:  () => {
                settabmainstate({
                    tabmainid: 'feedback',
                    tabmainidtwo: 'ask',
                })
                setappmainstate(
                    {
                        appmainid: 'feedbackdialog',
                        appmainidtwo: 'sideboardmain',
                        appmainboolean: true,
                    }
                )

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
                setappmainstate(
                    {
                        appmainid: 'feedbackdialog',
                        appmainidtwo: 'sideboardmain',
                        appmainboolean: true,
                    }
                )

            },

            tabmainid: 'feedback',
        },
        {
            blemainid: 'request',
            blemaintitle: 'Request a new feature',
            blemainaction:  () => {
                settabmainstate({
                    tabmainid: 'feedback',
                    tabmainidtwo: 'request',
                })
                setappmainstate(
                    {
                        appmainid: 'feedbackdialog',
                        appmainidtwo: 'sideboardmain',
                        appmainboolean: true,
                    }
                )
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
            blemainid: 'vegetarian',
            blemaintitle: "Vegetarian",
            blemainaction:  () => {
                setgenreindexstate({
                    genreindexid: 'vegetarian',
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
            blemaintitle: 'Ask us a question',
            blemainsubtitle: `We'll try to get back to you as soon as possible`,
            blemainaction:  () => {
                settabmainstate({
                    tabmainid: 'feedback',
                    tabmainidtwo: 'ask',
                })
                // setappmainstate({
                //     appmainid: 'feedbacksection',
                //     appmainidtwo: 'modalmain',
                //     appmainidthree: 0,
                //     // appmainparam: param,
                //     appmainboolean: true,
                // })
                setappmainstate(
                    {
                        appmainid: 'feedbackdialog',
                        appmainidtwo: 'sideboardmain',
                        appmainboolean: true,
                    }
                )
            },

            tabmainid: 'feedback',
        },
        {
            blemainid: 'edit',
            blemaintitle: 'Suggest an edit',
            blemainsubtitle: `We'll try to get back to you as soon as possible`,
            blemainaction:  () => {
                settabmainstate({
                    tabmainid: 'feedback',
                    tabmainidtwo: 'edit',
                })
                // setappmainstate({
                //     appmainid: 'feedbacksection',
                //     appmainidtwo: 'modalmain',
                //     appmainidthree: 0,
                //     // appmainparam: param,
                //     appmainboolean: true,
                // })
                setappmainstate(
                    {
                        appmainid: 'feedbackdialog',
                        appmainidtwo: 'sideboardmain',
                        appmainboolean: true,
                    }
                )
            },

            tabmainid: 'feedback',
        },
        {
            blemainid: 'report',
            blemaintitle: 'Report an issue',
            blemainsubtitle: `We'll try to get back to you as soon as possible`,
            blemainaction:  () => {
                settabmainstate({
                    tabmainid: 'feedback',
                    tabmainidtwo: 'report',
                })
                // setappmainstate({
                //     appmainid: 'feedbacksection',
                //     appmainidtwo: 'modalmain',
                //     appmainidthree: 0,
                //     // appmainparam: param,
                //     appmainboolean: true,
                // })
                setappmainstate(
                    {
                        appmainid: 'feedbackdialog',
                        appmainidtwo: 'sideboardmain',
                        appmainboolean: true,
                    }
                )
            },

            tabmainid: 'feedback',
        },
        {
            blemainid: 'request',
            blemaintitle: 'Request a new feature',
            blemainsubtitle: `We'll try to get back to you as soon as possible`,
            blemainaction:  () => {
                settabmainstate({
                    tabmainid: 'feedback',
                    tabmainidtwo: 'request',
                })
                // setappmainstate({
                //     appmainid: 'feedbacksection',
                //     appmainidtwo: 'modalmain',
                //     appmainidthree: 0,
                //     // appmainparam: param,
                //     appmainboolean: true,
                // })
                setappmainstate(
                    {
                        appmainid: 'feedbackdialog',
                        appmainidtwo: 'sideboardmain',
                        appmainboolean: true,
                    }
                )
            },

            tabmainid: 'feedback',
        }
    ]

    const faqselect = [
        {
            tabmainindex: 0,
            tabmaintitle: 'all',
            tabmainaction: 'all',
        }
    ]

    const faqlink = [
        {
            blemainid: 'who',
            blemaintitle: 'Whats toi?',
            blemainentitle: 'FAQs',
            blemainaction: () => {
                window.open(`/faq/faqmain`, '_blank').focus();
            },

            tabmainindex: 0,
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

    const favouritelink = [
        {
            blemainid: 'review',
            blemaintitle: 'review',
            blemainentitle: 'See My Favourite',
            blemainaction:  () => {
                setsearchmainstate({tabmainindex: 1})
                setappmainstate(
                    {
                        appmainid: 'favouritedialog',
                        appmainidtwo: 'sideboardmain',
                        appmainboolean: true,
                    }
                )
            },

            tabmainid: 'reader',
        },
    ]

    const postdl = [
        {
            spreadmainid: 'postupdatedat',
            spreadmaintitle: 'You may also like',
            spreadmaindata: postupdatedat,
            spreadmainaction: '/category/post'
        },
        {
            spreadmainid: 'placeupdatedat',
            spreadmaintitle: 'You may also like',
            spreadmaindata: placeupdatedat,
            spreadmainaction: '/category/place'
        },
        {
            spreadmainid: 'productupdatedat',
            spreadmaintitle: 'You may also like',
            spreadmaindata: productupdatedat,
            spreadmainaction: '/category/product'
        },
    ]

    const homedl = [
        {
            spreadmainid: 'postupdatedat',
            spreadmainmap: postupdatedat,
            spreadmaintitle: 'Trending Blog',
            spreadmaindirect: '/category/post'
        },
        {
            spreadmainid: 'placeupdatedat',
            spreadmainmap: placeupdatedat,
            spreadmaintitle: 'Hot Places',
            spreadmaindirect: '/category/place',
        },
        {
            spreadmainid: 'productupdatedat',
            spreadmainmap: productupdatedat,
            spreadmaintitle: 'New Items',
            spreadmaindirect: '/category/product',
        },
    ]

    const searchdl = [
        {
            spreadmainindex: 0,
            spreadmaintitle: 'Blog',
            spreadmaindata: postupdatedat,
        },
        {
            spreadmainindex: 1,
            spreadmaintitle: 'Places',
            spreadmaindata: placeupdatedat,
        },
        {
            spreadmainindex: 2,
            spreadmaintitle: 'Products',
            spreadmaindata: productupdatedat,
        },
        {
            spreadmainindex: 3,
            spreadmaintitle: 'History',
            spreadmaindata: parsesearch || [],
        },
    ]

    const favouritedl = [
        {
            spreadmainid: 'read',
            spreadmaintitle: 'Readlist',
        }
    ]

    const postdi = [
        {
            sheetmainindex: 0,
            sheetmaintitle: 'Blog',
            // sheetmaindata: favouritemainstate?.favouritemaindata?.filter(data => data?._type === 'post'),
            sheetmaindata: parsepost?.filter(data => data?._type === 'post') || [],

            spreadmainid: 'read',
        },
        {
            sheetmainindex: 1,
            sheetmaintitle: 'Places',
            // sheetmaindata: favouritemainstate?.favouritemaindata?.filter(data => data?._type === 'place'),
            sheetmaindata: parsepost?.filter(data => data?._type === 'place') || [],

            spreadmainid: 'read',
        },
        {
            sheetmainindex: 2,
            sheetmaintitle: 'Products',
            // sheetmaindata: favouritemainstate?.favouritemaindata?.filter(data => data?._type === 'product'),
            sheetmaindata: parsepost?.filter(data => data?._type === 'product') || [],

            spreadmainid: 'read',
        },
    ]

    const favouritedi = [
        {
            sheetmainindex: 0,
            sheetmaindata: parsefavourite || [],

        },
    ]

    const feedbackdi = [
        {
            sheetmainindex: 0,
            sheetmaindata: parsefeedback || [],
        },
    ]

    const contactdi = [
        {
            sheetmainindex: 0,
            sheetmaindata: parsecontact || [],
        },
    ]

    const rtadi = [
        {
            sheetmainindex: 0,
            sheetmaintitle: 'Place Location',
            sheetmaindata:  clientpost?.placeplaceid,

        },
        {
            sheetmainindex: 1,
            sheetmaintitle: 'Related Blogs',
            sheetmaindata:  clientpost?.postplaceid,

        },
        {
            sheetmainindex: 2,
            sheetmaintitle: 'Related Products',
            sheetmaindata:  clientpost?.productplaceid,

        },
        {
            sheetmainindex: 3,
            sheetmaintitle: `What You'll Need`,
            sheetmaindata:  clientpost?.productpostid,

        },
    ]

    const faqdl = [
        {
            spreadmainindex: 0,
            spreadmaintitle: 'What is TOI?',
        },
        {
            spreadmainindex: 2,
            spreadmaintitle: 'Why join?',
        },
        {
            spreadmainindex: 1,
            spreadmaintitle: 'Do I have to pay anything to have my business featured?',
        },


    ]

    const faqdi = [
        {
            sheetmainindex: 0,
            sheetmaintitle: `TOI is an online project to promote some of the best NZ-made kai. Want to find who makes the best eggs, butter or steak? Use our search feature and we'll hopefully help you to have a great meal.`,

            spreadmainindex: 0,
        },
        {
            sheetmainindex: 0,
            sheetmaintitle: `No, TOI is a curated project driven by our love for food. Our idea is to promote great food, free of charge.`,

            spreadmainindex: 1,
        },
        {
            sheetmainindex: 0,
            sheetmaintitle: `To help us to spread the word about great, local products-`,

            spreadmainindex: 2,
        }
    ]

    // if(!postupdatedat) return <LoadMain />

    return (
      <ContextMain.Provider value={{
          parsepost,
          postselect, postlink,
          categoryselect, categorylink,
          searchselect, searchlink,
          commentselect, commentlink,
          feedbackselect, feedbacklink,
          termselect, termlink,
          favouritelink,
          homedl,
          postdl,postdi,
          searchdl,
          faqlink, faqselect,
          faqdl, faqdi, 
          favouritedl, favouritedi,
          rtadi,
          feedbackdi,
          contactdi,

          appmainstate, setappmainstate,
          // postindexstate, setpostindexstate,
          searchmainstate, setsearchmainstate,
          searchinputstate, setsearchinputstate,
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
          guidemainstate, setguidemainstate,
          favouritemainstate, setfavouritemainstate,
          ptamainstate, setptamainstate,
          toastermainstate, settoastermainstate,

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