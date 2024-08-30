export const leftSidebarLinks : LeftSidebarLinkInfo[] = [
    {
       id: 1,
       title: "MENU",
       links: [
        {
            id: 1,
            title: "Home",
            href: "/",
            icon: "hut",
            child: true
        },
        {
            id: 1,
            title: "Music",
            href: "/Music",
            icon: "music",
            child: true
        },
        {
            id: 1,
            title: "Artists",
            href: "/artists",
            icon: "artist",
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
                icon: "favourite",
                child: false,
            },
            {
                id: 506,
                title: "Playlists",
                href: "/playlists",
                icon: "playlist",
                child: true,
            },
            {
                id: 507,
                title: "Profile",
                href: "/profile",
                icon: "profile",
                child: true,
            },
        ]
    }
]