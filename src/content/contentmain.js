


export const navmain = [
    {
        navmainid: 'postdiv',
        navmaintitle: "Pick for me",
        navmainsubtitle: ``,
        navmainimage: '',
        navmainredirect: 'slidemain' ,
        navmaindirect: '' ,
        navmainref: 'postdiv' ,
    },
    {
        navmainid: 'menudiv',
        navmaintitle: "Tonight's Menu",
        navmainsubtitle: ``,
        navmainimage: '',
        navmainredirect: 'slidemain' ,
        navmaindirect: '' ,
        navmainref: 'menudiv' ,
    },
    {
        navmainid: 'about',
        navmaintitle: 'Our story',
        navmainsubtitle: `If you find our articles helpful, please consider to support us ❤️ in paying for web hosting and CDN to keep the site running.`,
        navmainimage: '',
        navmainredirect: 'aboutmain' ,
        navmaindirect: '' ,
        navmainref: '' ,
    },
    {
        navmainid: 'donate',
        navmaintitle: 'Donate',
        navmainsubtitle: `If you find our articles helpful, please consider to support us ❤️ in paying for web hosting and CDN to keep the site running.`,
        navmainimage: '',
        navmainredirect: 'ontromain' ,
        navmaindirect: '',
        navmainref: 'plansummary' ,
    },
    {
        navmainid: 'contact',
        navmaintitle: 'List my business',
        navmainsubtitle: 'Hayak Blog is a rare and unique experience site for readers. Any enquiries, please contact us.',
        navmainimage: 'https://everybodyeats.nz/assets/elements/forks-spoons.png',
        navmainredirect: 'contactmain' ,
        navmaindirect: '',
        navmainref: '' ,
    }
]


export const planmain = [
    {
        planmainid: 'once',
        planmaintitle: 'One-off',
        planmaincurrency: 'USD',
    },
    {
        planmainid: 'month',
        planmaintitle: 'Monthly',
        planmaincurrency: 'USD',
    },
]

//form

export const planform = [
    {
        planformid: 'ten',
        planformtitle: '$10',
        planformamount: 10,
    },
    {
        planformid: 'twenty',
        planformtitle: '$20',
        planformamount: 20,
    },
    {
        planformid: 'fifty',
        planformtitle: '$50',
        planformamount: 50,
    },
    {
        planformid: 'hundred',
        planformtitle: '$100',
        planformamount: 100,
    },
    {
        planformid: 'twohundredfifty',
        planformtitle: '$250',
        planformamount: 250,
    },
]

//summary

export const plansummary = [
                {
                    ontromainindex: 0,
                    ontromainid: 'once',
                    ontromaintitle: 'Would you like to donate on a monthly basis, or a one-off?',
                    ontromainimage: 'https://everybodyeats.nz/assets/elements/coins-white.png',
                    ontromainheader: 'One-off donation',
                    ontromainsubheader: `Big or small, your donations help us to feed homeless, elderly, single parents and other struggling kiwis that can't afford to contribute towards their meal with us.`,
                    ontromainredirect: 'planmain',
                },
                {
                    ontromainindex: 1,
                    ontromainid: 'month',
                    ontromaintitle: 'Would you like to donate on a monthly basis, or a one-off?',
                    ontromainimage: 'https://everybodyeats.nz/assets/elements/coins-white.png',
                    ontromainheader: 'Monthly donation',
                    ontromainsubheader: 'A nutritious, freshly prepared meal, served with love and shared amongst friends has the ability to turn someones day around. An ongoing donation is your commitment to help us put an end to food poverty, food waste and social isolation in New Zealand.',
                    ontromainredirect: 'planmain',
                },
    ]


export const extromain = [
    {
        extromainid: 'plansummary',
        extromainref: plansummary,
    },
]




export const collectionmain = [
    {
        collectionmainref: [
            {
                collectionmainid: 'recipe',
                collectionmaintitle: 'Recipes',
                collectionmainsubtitle: 'recipe',
            },
            {
                collectionmainid: 'review',
                collectionmaintitle: 'Review',
                collectionmainsubtitle: 'review',
            },
            {
                collectionmainid: 'interview',
                collectionmaintitle: 'Interview',
                collectionmainsubtitle: 'interview',
            },
        ],

        categorymainid: 'post',
    },
    {
        collectionmainref: [
            {
                collectionmainid: 'meat',
                collectionmaintitle: 'Meat',
                collectionmainsubtitle: 'meat',
            },
            {
                collectionmainid: 'coffee',
                collectionmaintitle: 'Coffee',
                collectionmainsubtitle: 'coffee',
            },
            {
                collectionmainid: 'alcohol',
                collectionmaintitle: 'Acohol',
                collectionmainsubtitle: 'alcohol',
            },
            {
                collectionmainid: 'dairy',
                collectionmaintitle: 'Dairy',
                collectionmainsubtitle: 'dairy',
            },
            {
                collectionmainid: 'vegetable',
                collectionmaintitle: 'Vegetable',
                collectionmainsubtitle: 'vegetable',
            },
        ],
        categorymainid: 'product',
    },
    {
        collectionmainref: [
            {
                collectionmainid: 'retail',
                collectionmaintitle: 'Retails',
                collectionmainsubtitle: 'Coffeeee',

            },
            {
                collectionmainid: 'manufacturer',
                collectionmaintitle: 'Manufacturer',
                collectionmainsubtitle: 'Coffeeee',

            },
            {
                collectionmainid: 'restaurant',
                collectionmaintitle: "Chef's Restaurant",
                collectionmainsubtitle: 'Coffeeee',

            },
        ],

        categorymainid: 'place',
    },
  ]


export const categorymain = [
    {
        categorymainid: 'post',
        categorymaintitle: 'Blog',
        categorymaindirect: 'post',
    },
    {
        categorymainid: 'place',
        categorymaintitle: 'Locals & Location',
        categorymaindirect: 'place',
    },
    {
        categorymainid: 'product',
        categorymaintitle: 'Products',
        categorymaindirect: 'product',
    },
]

export const breadmain = [
    {
        breadmainid: 'post',
        breadmaintitle: 'Blog',
        breadmainsubtitle: 'The latest stories and updates, direct from Hayak.',
        breadmainentitle: 'Find more blogs',
        breadmainaction: `/category/post`,
        // breadmainref: categoryul,
    },
    {
        breadmainid: 'place',
        breadmaintitle: 'Locals & Location',
        breadmainsubtitle: 'The latest stories and updates, direct from Hayak.',
        breadmainentitle: 'Find more places',
        breadmainaction: `/category/place`,
        // breadmainref: categoryul,
    },
    {
        breadmainid: 'product',
        breadmaintitle: 'Products',
        breadmainsubtitle: 'The latest stories and updates, direct from Hayak.',
        breadmainentitle: 'Find more products',
        breadmainaction: `/category/product`,
        // breadmainref: categoryul,
    },
    
]

export const statemain = [
    {
        statemainid: 'commentdl',
        statemainref: [
            {
                statemainidtwo: 'success',
                statemainimage: '✅',
                statemaintitle: 'Successfully Post',
            },
            {
                statemainidtwo: 'fail',
                statemainimage: 'https://images.blush.design/a1C9qsbVAFkZdJPJN2Ft?w=500&auto=compress&cs=srgb',
                statemaintitle: 'Fail to Post at the moment.',
            },
            {
                statemainidtwo: 'break',
                statemainimage: 'https://images.blush.design/s2yr8bhiPi8Of7hQIWvR?w=500&auto=compress&cs=srgb',
                statemaintitle: 'Apologies for the inconvenience! We’ll be back within the hour.',
            },
        ],
    },
    {
        statemainid: 'sharedl',
        statemainref: [
            {
                statemainidtwo: 'success',
                statemainimage: 'https://images.blush.design/dmXzODu_CVTPyqip6i-s?w=500&auto=compress&cs=srgb',
                statemaintitle: 'Successfully Copy to clipboard',
            },
            {
                statemainidtwo: 'fail',
                statemainimage: 'https://images.blush.design/a1C9qsbVAFkZdJPJN2Ft?w=500&auto=compress&cs=srgb',
                statemaintitle: 'Fail to Post at the moment.',
            },
        ],
    },
]

export const crummain = [
    {
        crummainid: 'recipe',
        crummaintitle: 'Recipe',
        crummainimage: 'https://images.unsplash.com/photo-1506368083636-6defb67639a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        // crummainref: categoryli,
        breadmainid: 'post',
    },
    {
        crummainid: 'review',
        crummaintitle: 'Review',
        crummainimage: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        // crummainref: categoryli,
        breadmainid: 'post',

    },
    {
        crummainid: 'interview',
        crummaintitle: 'Interview',
        crummainimage: 'https://images.unsplash.com/photo-1529395045262-dc9665365b0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1978&q=80',
        // crummainref: categoryli,
        breadmainid: 'post',

    },

    {
        crummainid: 'meat',
        crummaintitle: 'Meat',
        crummainimage: 'https://images.unsplash.com/photo-1513615147033-3ed2afaaae8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        // crummainref: categoryli,
        breadmainid: 'product',

    },
    {
        crummainid: 'coffee',
        crummaintitle: 'Coffee',
        crummainimage: 'https://images.unsplash.com/photo-1623593721974-f39b78528626?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        // crummainref: categoryli,
        breadmainid: 'product',

    },
    {
        crummainid: 'alcohol',
        crummaintitle: 'Alcohol',
        crummainimage: 'https://images.unsplash.com/photo-1623593688280-a5aec8ac4ae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        // crummainref: categoryli,
        breadmainid: 'product',

    },
    {
        crummainid: 'daily',
        crummaintitle: 'Daily',
        crummainimage: 'https://images.unsplash.com/photo-1600379097298-0217be1203c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        // crummainref: categoryli,
        breadmainid: 'product',

    },
    {
        crummainid: 'vegetable',
        crummaintitle: 'Vegetable',
        crummainimage: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80',
        // crummainref: categoryli,
        breadmainid: 'product',

    },
    
    {
        crummainid: 'retail',
        crummaintitle: 'Retail',
        crummainimage: 'https://images.unsplash.com/photo-1616715320643-b6d9214b9946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        // crummainref: categoryli,
        breadmainid: 'place',

    },
    {
        crummainid: 'manufacturer',
        crummaintitle: 'Manufacturer',
        crummainimage: 'https://images.unsplash.com/photo-1522643628976-0a170f6722ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2016&q=80',
        // crummainref: categoryli,
        breadmainid: 'place',

    },
    {
        crummainid: 'restaurant',
        crummaintitle: "Chef's Restaurant",
        crummainimage: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        // crummainref: categoryli,
        breadmainid: 'place',

    },
]
