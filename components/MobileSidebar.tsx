'use client'
import { Button } from "./ui/button";
import group from '../public/Group.png'

const items = [
    {
        id: 1,
        title: "Home",
        href: "#",
    },
    {
        id: 2,
        title: "Stages & Checklist",
        href: "#"
    },
    {
        id: 3,
        title: "Upload Docs",
        href: "#",
    },
    {
        id: 4,
        title: "Preferred Vendors",
        href: "#",
    },
    {
        id: 5,
        title: "Tech Stack",
        href: "#",
    },
    {
        id: 6,
        title: "Targets",
        href: "#",
    },
    {
        id: 7,
        title: "Zee Sales Targets",
        href: "#",
    },
    {
        id: 8,
        title: "MAI Settings",
        href: "#",
    },
    {
        id: 9,
        title: "Pending Questions",
        href: "#",
        badge: 3
    }
]

export default function MobileSidebar({openMenu, setOpenMenu}: {openMenu: boolean; setOpenMenu: (open: boolean) => void}) {
    return (
        <>
        <div className="fixed z-10 bg-black h-[100vh] top-0">
            <div className={`bg-[#11455D] w-[350px] h-screen border-r border-gray-300 p-4 relative ${openMenu ? 'block' : 'hidden'}`}>
                <img className="mb-4" src={group.src} alt="" />
                <Button onClick={() => setOpenMenu(false)} className="absolute top-4 right-4 text-[#5DD2DD] cursor-pointer rounded-full border border-white/60 p-4">X</Button>
                <nav className="mt-10 text-[16px] flex flex-col font-[400] leading-[20px]">
                    <ul>
                        {
                            items.map((item) => (
                                <li className="mb-6" key={item.id}>
                                    <a href={item.href} className="text-[#5DD2DD] hover:text-gray-300">
                                        {item.title}
                                        {item.badge && <span className="ml-4 text-[12px] rounded-full border border-[#EAECF0] bg-[#F9FAFB] text-[#344054] px-2 py-1">{item.badge}</span>}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>

                    <Button className="text-start absolute bottom-4" variant="primary">Logout</Button>
                </nav>
            </div>
             </div>
        </>
    )
}
