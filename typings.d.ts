
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
    id: number,
    title: string,
    href: string,
    icon: typeof iconsName[number],
    child: boolean,
}

interface RightSidebarLinkInfo {
    id: number,
    title: string,
    links: SidebarLink[]
}