import { RiInformationLine } from "react-icons/ri"

    export const categorydi = [
        {
            spreadmainid: 'success',
            spreadmaintitle: 'Successfully', 
            spreadmainicon: <RiInformationLine />,
            spreadmainimage: 'https://images.blush.design/a1C9qsbVAFkZdJPJN2Ft?w=500&auto=compress&cs=srgb',
            spreadmainstyle: '!bg-emerald-50 !text-emerald-800',
        },
        {
            spreadmainid: 'fail',
            spreadmaintitle: 'Oops 404', 
            spreadmainicon: <RiInformationLine />,
            spreadmainimage: 'https://images.blush.design/a1C9qsbVAFkZdJPJN2Ft?w=500&auto=compress&cs=srgb',
            spreadmainstyle: '!bg-red-50 !text-red-800',
        },
        {
            spreadmainid: 'inform',
            spreadmaintitle: 'This', 
            spreadmainicon: <RiInformationLine />,
            spreadmainimage: 'https://images.blush.design/a1C9qsbVAFkZdJPJN2Ft?w=500&auto=compress&cs=srgb',
            spreadmainstyle: '!bg-gray-50 !text-gray-800',
        },
        {
            spreadmainid: 'disclaim',
            spreadmaintitle: 'This', 
            spreadmainicon: <RiInformationLine />,
            spreadmainimage: 'https://images.blush.design/a1C9qsbVAFkZdJPJN2Ft?w=500&auto=compress&cs=srgb',
            spreadmainstyle: '!bg-gray-50 !text-gray-800 !border-gray-700',
        },
        {
            spreadmainid: 'credit',
            spreadmaintitle: 'This', 
            spreadmainicon: <RiInformationLine />,
            spreadmainimage: 'https://images.blush.design/a1C9qsbVAFkZdJPJN2Ft?w=500&auto=compress&cs=srgb',
            spreadmainstyle: '!bg-gray-50 !text-gray-800 !border-gray-700',
        },
    ]

    export const categorydl = [
        {
            sheetmainid: 'placedi',
            sheetmaintitle: 'Find sellers',
            sheetmainsubtitle: 'Place Location',
            sheetmainaction: `/category/place`,

        },
        {
            sheetmainid: 'pickdi',
            sheetmaintitle: 'Find products',
            sheetmainsubtitle: `What You'll Need`,
            sheetmainaction: `/category/product`,
        },
        {
            sheetmainid: 'postdi',
            sheetmaintitle: 'Find blogs',
            sheetmainsubtitle: 'Related Blog',
            sheetmainaction: `/category/post`,

        },
        {
            sheetmainid: 'productdi',
            sheetmaintitle: 'Find products',
            sheetmainsubtitle: 'Related Products',
            sheetmainaction: `/category/product`,
        },

    ]

    export const searchdl= [
        {
            sheetmaintitle: 'Find more results',
            sheetmainaction: `/search/`,
            sheetmainentitle: 'Filter search',

            spreadmainid: 'success'
        },
        {
            sheetmaintitle: "We couldn't find results",
            sheetmainaction: `/search/searchmain`,
            sheetmainentitle: 'Filter search',

            spreadmainid: 'fail'
        },
        {
            sheetmaintitle: "Can't find result?",
            sheetmainaction: `/search/searchmain`,
            sheetmainentitle: 'See more',

            spreadmainid: 'inform'
        },
    ]

    export const postdl= [
        {
            sheetmaintitle: 'Disclaimer: ',
            sheetmainaction: `/term/termmain`,
            sheetmainentitle: 'Learn more',

            spreadmainid: 'disclaim'
        },
        {
            sheetmaintitle: "Image from ",
            sheetmainaction: `/term/termmain`,
            sheetmainentitle: 'Learn more',

            spreadmainid: 'credit'
        },
    ]

    export const commentdi= [
        {
            sheetmaintitle: `Successfully sent your comments:`,
            sheetmainsubtitle: `It will take upto three days for us to review.`,

            spreadmainid: 'success',
            breadmainid: 'comment'
        },
        {
            sheetmaintitle: `There are some issues:`,
            sheetmainsubtitle: `That's all we know.`,

            spreadmainid: 'fail',
            breadmainid: 'comment'
        },
        {
            sheetmaintitle: `Find this post helpful?`,
            sheetmainsubtitle: `Help improve TOI by sharing a review with others.`,

            spreadmainid: 'inform',
            breadmainid: 'comment'
        },

    ]

    export const termdi= [
        {
            sheetmaintitle: `ddddd`,
            sheetmainsubtitle: `dddddd`,
            sheetmainentitle: `Term of service`,
            sheetmainaction: `/term/termmain`,

            spreadmainid: 'success',
        },
        {
            sheetmaintitle: `fffff`,
            sheetmainsubtitle: `ffffff`,
            sheetmainentitle: `Term of service`,
            sheetmainaction: `/term/termmain`,

            spreadmainid: 'fail',
        },
        {
            sheetmaintitle: `Need support?`,
            sheetmainsubtitle: `Please note we can’t guarantee a response.`,
            sheetmainentitle: `Term of service`,
            sheetmainaction: `/term/termmain`,

            spreadmainid: 'inform',
        },

    ]

////////////////////////////////////////////////

    export const categoryul = [
         {
            breadmainid: 'post',
            breadmaintitle: 'Blog',
            breadmainsubtitle: 'The latest stories and updates, direct from Hayak.',
            breadmaindetail: `The blog is a place where we take the liberty to explore our places and products a bit more. Less informative, more in depth and hopefully, more creative, here you'll find recipes,  reviews, interviews from some of our favorite NZ food!`,
            breadmainentitle: 'Find more blogs',
            breadmainaction: `/category/post`,
            breadmainimage: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465',
            // breadmainref: categoryul,
        },
        {
            breadmainid: 'place',
            breadmaintitle: 'Places',
            breadmainsubtitle: 'The latest stories and updates, direct from Hayak.',
            breadmaindetail: `Here you can find where to get some of the best NZ kai. Retailers specialized in great food, great chefs and their restaurants or the manufacturers themselves, they're all here. Have a look at our list to find the right places to get the food you love`,
            breadmainentitle: 'Find more places',
            breadmainaction: `/category/place`,
            breadmainimage: 'https://images.unsplash.com/photo-1612020187640-c1d6bb844ab4?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388',
            // breadmainref: categoryul,
        },
        {
            breadmainid: 'product',
            breadmaintitle: 'Products',
            breadmainsubtitle: 'The latest stories and updates, direct from Hayak.',
            breadmaindetail: `Looking for a specific item? Here you can find anything to quench your thirst or to fill your stomach!`,
            breadmainentitle: 'Find more products',
            breadmainaction: `/category/product`,
            breadmainimage: 'https://images.unsplash.com/photo-1590194360930-4866613967b0?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2034',
            // breadmainref: categoryul,
        },
    ]

    export const categoryui = [
        {
            crummainid: 'recipe',
            crummaintitle: 'Recipes',
            crummainsubtitle: 'Get ideas for great dishes',
            crummainimage: 'https://images.unsplash.com/photo-1611962424660-201a4af8f496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            breadmainid: 'post',
        },
        {
            crummainid: 'review',
            crummaintitle: 'Reviews',
            crummainsubtitle: `Don't know where to go? Check our review!`,
            crummainimage: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
            breadmainid: 'post',
        },
        {
            crummainid: 'interview',
            crummaintitle: 'Interviews',
            crummainsubtitle: `Know more about who's behind NZ's best food`,
            crummainimage: 'https://images.unsplash.com/photo-1470784790053-6c2f15489967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80',
            breadmainid: 'post',

        },

        {
            crummainid: 'meat',
            crummaintitle: 'Meat',
            crummainsubtitle: `Our best lamb, beef, poultry, game, etc`,
            crummainimage: 'https://images.unsplash.com/photo-1560781290-7dc94c0f8f4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            breadmainid: 'product',

        },
        {
            crummainid: 'coffee',
            crummaintitle: 'Coffee',
            crummainsubtitle: `Great beans for your brew`,
            crummainimage: 'https://images.unsplash.com/photo-1623593721974-f39b78528626?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            breadmainid: 'product',

        },
        {
            crummainid: 'alcohol',
            crummaintitle: 'Alcohol',
            crummainsubtitle: `Did you know there is NZ made sake?`,
            crummainimage: 'https://images.unsplash.com/photo-1623593688280-a5aec8ac4ae7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
            breadmainid: 'product',

        },
        {
            crummainid: 'dairy',
            crummaintitle: 'Dairy',
            crummainsubtitle: `Yummy cheese, butter, etc`,
            crummainimage: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            breadmainid: 'product',

        },
        {
            crummainid: 'etc',
            crummaintitle: 'Veggies, fruit, etc',
            crummainsubtitle: `Anything that doesn't fit on the above!`,
            crummainimage: 'https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80',
            breadmainid: 'product',

        },
        
        {
            crummainid: 'retail',
            crummaintitle: 'Retailers',
            crummainsubtitle: `Where to buy great kai`,
            crummainimage: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
            breadmainid: 'place',

        },
        {
            crummainid: 'manufacturer',
            crummaintitle: 'Manufacturers',
            crummainsubtitle: `Who makes great kai`,
            crummainimage: 'https://images.unsplash.com/photo-1522643628976-0a170f6722ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2016&q=80',
            breadmainid: 'place',

        },
        {
            crummainid: 'restaurant',
            crummaintitle: "Chefs / Restaurants",
            crummainsubtitle: `Aoteroa's best cafes and restaurants`,
            crummainimage: 'https://images.unsplash.com/photo-1642158136957-0f43fb43d3cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2098&q=80',
            breadmainid: 'place',
        },
    ]

        //     {
        // name: 'genreid',
        // title: `Blog genre eg: classic, newbie, native, vegean, vegetarian, diary, gluten`,
        // type: 'string',
        // },

    export const genreui = [
        {
            crummainid: 'classic',
            crummaintitle: 'Classic',
            crummainsubtitle: '',
            crummainstyle: '',
            crummainimage: '',

            breadmainid: 'all',
        },
        {
            crummainid: 'newbie',
            crummaintitle: 'Newbie',
            crummainsubtitle: '',
            crummainstyle: '',
            crummainimage: '',

            breadmainid: 'all',
        },
        {
            crummainid: 'native',
            crummaintitle: 'Native',
            crummainsubtitle: '',
            crummainstyle: '',
            crummainimage: '',

            breadmainid: 'all',
        },
        {
            crummainid: 'vegan',
            crummaintitle: 'Vegan',
            crummainsubtitle: '',
            crummainstyle: '',
            crummainimage: '',

            breadmainid: 'all',
        },
        {
            crummainid: 'vegeterian',
            crummaintitle: 'Vegeterian',
            crummainsubtitle: '',
            crummainstyle: '',
            crummainimage: '',

            breadmainid: 'all',
        },
        {
            crummainid: 'dairy',
            crummaintitle: 'Diary Free',
            crummainsubtitle: '',
            crummainstyle: '',
            crummainimage: '',

            breadmainid: 'all',
        },
        {
            crummainid: 'gluten',
            crummaintitle: 'Gluten Free',
            crummainsubtitle: '',
            crummainstyle: '',
            crummainimage: '',

            breadmainid: 'all',
        },
    ]

    export const postul = [
        {
            breadmainid: 'description',
            breadmaintitle: 'Descriptions',
            breadmainsubtitle: 'Find post form TOI',
            breadmaindetail: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, perspiciatis! Nobis sint illo, praesentium tempore, iure obcaecati dicta explicabo tenetur soluta sequi fugiat rem odio exercitationem esse veritatis quo iste?',
            breadmainentitle: 'Explore post',
            breadmainaction: `/category/post`,
            breadmainimage: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465',
        },
        {
            breadmainid: 'comment',
            breadmaintitle: 'Comments',
            breadmainsubtitle: 'The latest stories and updates, direct from Hayak.',
            breadmaindetail: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, perspiciatis! Nobis sint illo, praesentium tempore, iure obcaecati dicta explicabo tenetur soluta sequi fugiat rem odio exercitationem esse veritatis quo iste?',
            breadmainentitle: 'See comments',
            breadmainaction: `/category/post`,
            breadmainimage: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465',
        }
    ]

    export const postui = [
        {
            crummainid: 'name',
            crummaintitle: 'PROUDLY OWNED BY',
            crummainsubtitle: '',
            crummainstyle: '',
            crummainimage: '',

            breadmainid: 'description',
        },
        {
            crummainid: 'type',
            crummaintitle: 'BUSINESS TYPE',
            crummainsubtitle: '',
            crummainstyle: '',
            crummainimage: '',

            breadmainid: 'description',
        },
        {
            crummainid: 'name',
            crummaintitle: 'TIME COOK',
            crummainsubtitle: '',
            crummainstyle: '',
            crummainimage: '',

            breadmainid: 'detail',
        },
        {
            crummainid: 'type',
            crummaintitle: 'RECIPE',
            crummainsubtitle: '',
            crummainstyle: '',
            crummainimage: '',

            breadmainid: 'detail',
        },

        {
            crummainid: 'top',
            crummaintitle: 'top',
            crummainsubtitle: '',
            crummainstyle: '',
            crummainimage: '',

            breadmainid: 'comment',
        },
    ]

    export const commentui = [
        {
            crummainid: 'all',
            crummaintitle: 'Find this post helpful?',
            crummainsubtitle: `Help improve Product Hunt by sharing a review with others.`,
            crummainstyle: '',
            crummainimage: 'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465',

            breadmainid: 'comment',
        },
    ]

    export const commentul = [
        {
            breadmainid: 'comment',
            breadmaintitle: 'Comments',
            breadmainsubtitle: 'The latest stories and updates, direct from Hayak.',
            breadmaindetail: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, perspiciatis! Nobis sint illo, praesentium tempore, iure obcaecati dicta explicabo tenetur soluta sequi fugiat rem odio exercitationem esse veritatis quo iste?',
            breadmainentitle: 'See all comments',
            breadmainaction: `/comment/commentmain`,
            breadmainimage: '',
        },
    ]

    export const searchul = [
        {
            breadmainid: 'search',
            breadmaintitle: 'search on TOI',
            breadmainsubtitle: 'The latest stories and updates, direct from Hayak.',
            breadmaindetail: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, perspiciatis! Nobis sint illo, praesentium tempore, iure obcaecati dicta explicabo tenetur soluta sequi fugiat rem odio exercitationem esse veritatis quo iste?',
            breadmainentitle: 'See all results',
            breadmainimage: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870',
            breadmainaction: `/search/searchmain`,
        },
    ]

    export const feedbackul = [
        {
            breadmainid: 'feedback',
            breadmaintitle: 'Feedback',
            breadmainsubtitle: 'The latest stories and updates, direct from Hayak.',
            breadmaindetail: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, perspiciatis! Nobis sint illo, praesentium tempore, iure obcaecati dicta explicabo tenetur soluta sequi fugiat rem odio exercitationem esse veritatis quo iste?',
            breadmainentitle: 'See all feeedback',
            breadmainimage: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070',
            breadmainaction: `/feedback/feedbackmain`,
        },
    ]

    export const feedbackui = [
        {
            crummainid: 'ask',
            crummaintitle: 'Have question for us',
            crummainsubtitle: `Tell us about your experience, what you love, or what we could improve. Please provide email addresses to keep in contact.`,

            breadmainid: 'feedback',
        },
        {
            crummainid: 'edit',
            crummaintitle: 'Have feedback for us',
            crummainsubtitle: `Tell us about your experience, what you love, or what we could improve. Please provide email addresses to keep in contact.`,

            breadmainid: 'feedback',
        },
        {
            crummainid: 'report',
            crummaintitle: 'Have some issus to report',
            crummainsubtitle: `Tell us about your experience, what you love, or what we could improve. Please provide email addresses to keep in contact.`,

            breadmainid: 'feedback',
        },
    ]

/////////////////////////////////////////////////////


    export const breadmain = [
        {
            breadmainid: 'categoryul',
            breadmainref: categoryul,
        },
    ]

    export const crummain = [
        {
            crummainid: 'categoryui',
            crummainref: categoryui,
        },
    ]

    export const spreadmain = [
        {
            spreadmainid: 'categorydi',
            spreadmainref: categorydi,
        },
        {
            spreadmainid: 'commentdi',
            spreadmainref: commentdi,
        }
    ]

    export const sheetmain = [
        {
            sheetmainid: 'categorydl',
            sheetmainref: searchdl,
        },
        {
            sheetmainid: 'searchdl',
            sheetmainref: searchdl,
        },
        {
            sheetmainid: 'postdl',
            sheetmainref: postdl,
        },
    ]