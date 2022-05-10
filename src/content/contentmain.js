


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


// export const categoryul = [
//             {
//                 breadmainidtwo: 'recipe',
//                 breadmaintitle: 'Recipes',
//                 collectionmainsubtitle: 'recipe',
//             },
//             {
//                 breadmainidtwo: 'review',
//                 collectionmaintitle: 'Review',
//                 collectionmainsubtitle: 'review',
//             },
//             {
//                 breadmainidtwo: 'interview',
//                 collectionmaintitle: 'Interview',
//                 collectionmainsubtitle: 'interview',
//             },

//             {
//                 breadmainidtwo: 'meat',
//                 collectionmaintitle: 'Meat',
//                 collectionmainsubtitle: 'meat',
//             },
//             {
//                 breadmainidtwo: 'coffee',
//                 collectionmaintitle: 'Coffee',
//                 collectionmainsubtitle: 'coffee',
//             },
//             {
//                 breadmainidtwo: 'alcohol',
//                 collectionmaintitle: 'Acohol',
//                 collectionmainsubtitle: 'alcohol',
//             },
//             {
//                 breadmainidtwo: 'dairy',
//                 collectionmaintitle: 'Dairy',
//                 collectionmainsubtitle: 'dairy',
//             },
//             {
//                 breadmainidtwo: 'vegetable',
//                 collectionmaintitle: 'Vegetable',
//                 collectionmainsubtitle: 'vegetable',
//             },

//             {
//                 breadmainidtwo: 'retail',
//                 collectionmaintitle: 'Retails',
//                 collectionmainsubtitle: 'Coffeeee',

//             },
//             {
//                 breadmainidtwo: 'manufacturer',
//                 collectionmaintitle: 'Manufacturer',
//                 collectionmainsubtitle: 'Coffeeee',

//             },
//             {
//                 breadmainidtwo: 'restaurant',
//                 collectionmaintitle: "Chef's Restaurant",
//                 collectionmainsubtitle: 'Coffeeee',
//             },
// ]


// export const categoryli = [
//             {
//                 breadmainidtwo: 'recipe',
//                 breadmaintitle: 'Recipes',
//                 collectionmainsubtitle: 'recipe',
//             },
//             {
//                 breadmainidtwo: 'review',
//                 collectionmaintitle: 'Review',
//                 collectionmainsubtitle: 'review',
//             },
//             {
//                 breadmainidtwo: 'interview',
//                 collectionmaintitle: 'Interview',
//                 collectionmainsubtitle: 'interview',
//             },

//             {
//                 breadmainidtwo: 'meat',
//                 collectionmaintitle: 'Meat',
//                 collectionmainsubtitle: 'meat',
//             },
//             {
//                 breadmainidtwo: 'coffee',
//                 collectionmaintitle: 'Coffee',
//                 collectionmainsubtitle: 'coffee',
//             },
//             {
//                 breadmainidtwo: 'alcohol',
//                 collectionmaintitle: 'Acohol',
//                 collectionmainsubtitle: 'alcohol',
//             },
//             {
//                 breadmainidtwo: 'dairy',
//                 collectionmaintitle: 'Dairy',
//                 collectionmainsubtitle: 'dairy',
//             },
//             {
//                 breadmainidtwo: 'vegetable',
//                 collectionmaintitle: 'Vegetable',
//                 collectionmainsubtitle: 'vegetable',
//             },

//             {
//                 breadmainidtwo: 'retail',
//                 collectionmaintitle: 'Retails',
//                 collectionmainsubtitle: 'Coffeeee',

//             },
//             {
//                 breadmainidtwo: 'manufacturer',
//                 collectionmaintitle: 'Manufacturer',
//                 collectionmainsubtitle: 'Coffeeee',

//             },
//             {
//                 breadmainidtwo: 'restaurant',
//                 collectionmaintitle: "Chef's Restaurant",
//                 collectionmainsubtitle: 'Coffeeee',
//             },
// ]

export const breadmain = [
    {
        breadmainid: 'post',
        breadmaintitle: 'Blog',
        // breadmainref: categoryul,
    },
    {
        breadmainid: 'place',
        breadmaintitle: 'Locals & Location',
        // breadmainref: categoryul,
    },
    {
        breadmainid: 'product',
        breadmaintitle: 'Products',
        // breadmainref: categoryul,
    },
]

export const crummain = [
    {
        crummainid: 'recipe',
        crummaintitle: 'Recipe',
        // crummainref: categoryli,
        breadmainid: 'post',
    },
    {
        crummainid: 'review',
        crummaintitle: 'Review',
        // crummainref: categoryli,
        breadmainid: 'post',

    },
    {
        crummainid: 'interview',
        crummaintitle: 'Interview',
        // crummainref: categoryli,
        breadmainid: 'post',

    },

    {
        crummainid: 'meat',
        crummaintitle: 'Meat',
        // crummainref: categoryli,
        breadmainid: 'product',

    },
    {
        crummainid: 'coffee',
        crummaintitle: 'Coffee',
        // crummainref: categoryli,
        breadmainid: 'product',

    },
    {
        crummainid: 'alcohol',
        crummaintitle: 'Alcohol',
        // crummainref: categoryli,
        breadmainid: 'product',

    },
    {
        crummainid: 'daily',
        crummaintitle: 'Daily',
        // crummainref: categoryli,
        breadmainid: 'product',

    },
    {
        crummainid: 'vegetable',
        crummaintitle: 'Vegetable',
        // crummainref: categoryli,
        breadmainid: 'product',

    },
    
    {
        crummainid: 'retail',
        crummaintitle: 'Retail',
        // crummainref: categoryli,
        breadmainid: 'place',

    },
    {
        crummainid: 'manufacturer',
        crummaintitle: 'Manufacturer',
        // crummainref: categoryli,
        breadmainid: 'place',

    },
    {
        crummainid: 'restaurant',
        crummaintitle: "Chef's Restaurant",
        // crummainref: categoryli,
        breadmainid: 'place',

    },
]
