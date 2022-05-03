
export const categorymain = [
    {
        categorymainid: 'food',
        categorymaintitle: '🥘 Food & Drink',
        categorymaindirect: 'food',

    },
    {
        categorymainid: 'travel',
        categorymaintitle: '✈️ Travel',
        categorymaindirect: 'travel',

    },
    {
        categorymainid: 'inspiration',
        categorymaintitle: '💚 Inspiration',
        categorymaindirect: 'inspiration',

    },
    {
        categorymainid: 'resource',
        categorymaintitle: '📣 Resources',
        categorymaindirect: 'resource',

    },
    
]

export const navmain = [
    {
        navmainid: 'about',
        navmaintitle: 'Our story',
        navmainsubtitle: `If you find our articles helpful, please consider to support us ❤️ in paying for web hosting and CDN to keep the site running.`,
        navmainimage: 'https://images.blush.design/oLHVefn9K8jLUStysdPq?w=500&auto=compress&cs=srgb',
        navmainredirect: 'aboutmain' ,
        navmaindirect: '' ,
        navmainref: '' ,
    },
    {
        navmainid: 'donate',
        navmaintitle: 'Donate',
        navmainsubtitle: `If you find our articles helpful, please consider to support us ❤️ in paying for web hosting and CDN to keep the site running.`,
        navmainimage: 'https://images.blush.design/oLHVefn9K8jLUStysdPq?w=500&auto=compress&cs=srgb',
        navmainredirect: 'ontromain' ,
        navmaindirect: '',
        navmainref: 'plansummary' ,
    },
    {
        navmainid: 'contact',
        navmaintitle: 'Chat with Us',
        navmainsubtitle: 'Hayak Blog is a rare and unique experience site for readers. Any enquiries, please contact us.',
        navmainimage: 'https://images.blush.design/fyO_0ZfvRfK3W6OyPVMf?w=500&auto=compress&cs=srgb',
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