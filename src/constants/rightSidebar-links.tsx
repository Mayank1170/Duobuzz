const image = "/images/artist/JamesArthur.png";

export const TopRightSidebar: TopRightSidebarInfo[] = [
    {
       id: 1,
       title: "Fans Also Like",
       info: [
        {
            id: 1,
            image: image,
            name: "James Arthur"
        },
        {
            id: 2,
            image: image,
            name: "James Mathur"
        },
       ]
    },
];

export const BottomRightSidebar : BottomRightSidebarInfo[] = [
    {
        id: 2,
        title: "Recently Played",
        info: [
            {
                id: 504,
                title: "Recents",
                href: "/recents",
                icon: "recent",
                child: false,
            },
            {
                id: 505,
                title: "Favorites",
                href: "/favorites",
                icon: "heart",
                child: false,
            },
            {
                id: 506,
                title: "Playlists",
                href: "/playlists",
                icon: "playlist",
                child: true,
            },
        ]
    }
]