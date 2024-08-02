export const leftSidebarLinks : LeftSidebarLinkInfo[] = [
    {
       id: 1,
       title: "MENU",
       links: [
        {
            id: 1,
            title: "Home",
            href: "/home",
            icon: "hut",
            child: true
        },
        {
            id: 1,
            title: "Discover",
            href: "/discover",
            icon: "discover",
            child: true
        },
        {
            id: 1,
            title: "Albumn",
            href: "/albumn",
            icon: "category",
            child: true
        },
        {
            id: 1,
            title: "Artists",
            href: "/artists",
            icon: "setting",
            child: true
        },
       ]
    },
    {
        id: 2,
        title: "LIBRARY",
        links: [
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