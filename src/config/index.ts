export const PRODUCT_CATEGORIES = [
    {
        label:"UI Kits",
        value:"ui_kits" as const,
        featured:[
            {
                name:"Editor picks",
                href:'#',
                imageSrc: '/public/nav/ui-kits/mixed.jpg'

            },
            {
                name:"New Arrivals",
                href:'#',
                imageSrc: '/public/nav/ui-kits/blue.jpg'

            },
            {
                name:"BestSellers",
                href:'#',
                imageSrc: '/public/nav/ui-kits/purple.jpg'

            },

        ]
    },
    {
        label:"Icons",
        value:"icons" as const,
        featured:[
            {
                name:"Favorite Icon picks",
                href:'#',
                imageSrc: '/public/nav/icons/picks.jpg'

            },
            {
                name:"New Arrivals",
                href:'#',
                imageSrc: '/public/nav/icons/new.jpg'

            },
            {
                name:"BestSelling Icons",
                href:'#',
                imageSrc: '/public/nav/icons/bestSellers.jpg'

            },

        ]
    }
]