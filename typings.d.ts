
interface LeftSidebarLink {
    id: number,
    title: string,
    href: string,
    icon: typeof iconsName[number],
    child: boolean,
}

interface LeftSidebarLinkInfo {
    id: number,
    title: string,
    links: SidebarLink[]
}


interface RightSidebarLink {
    currentIndex: React.Key | null | undefined
    info: any
    isActive: any
    id: number,
    image: string,
    name: string,
}

interface TopRightSidebarInfo {
    id: number,
    title: string,
    info: TopRightSidebarData[]
}

interface BottomRightSidebarInfo {
    id: number,
    title: string,
    info: BottomRightSidebarData[]
}
