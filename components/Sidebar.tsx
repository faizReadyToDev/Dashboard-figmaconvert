import { Button } from "./ui/button";

const items = [
    {
        id: 1,
        title: "Home",
        href: "#",
        icon: "home-icon.png"
    },
    {
        id: 2,
        title: "Stages & Checklist",
        href: "#",
        icon: "checklist-icon.png"
    },
    {
        id: 3,
        title: "Upload Docs",
        href: "#",
        icon: "upload-icon.png"
    },
    {
        id: 4,
        title: "Preferred Vendors",
        href: "#",
        icon: "vendors-icon.png"
    },
    {
        id: 5,
        title: "Tech Stack",
        href: "#",
        icon: "tech-icon.png"
    },
    {
        id: 6,
        title: "Targets",
        href: "#",
        icon: "targets-icon.png"
    },
    {
        id: 7,
        title: "Zee Sales Targets",
        href: "#",
        icon: "sales-icon.png"
    },
    {
        id: 8,
        title: "MAI Settings",
        href: "#",
        icon: "settings-icon.png"
    },
    {
        id: 9,
        title: "Pending Questions",
        href: "#",
        icon: "questions-icon.png",
        badge: 3
    }
]

export default function Sidebar() {
    return (
        <>
            <div className="bg-[#11455D] w-[250px] h-auto border-r border-gray-300 p-4 relative xl:block max-xl:hidden">
                <img className="mb-4" src="Group.png" alt="" />
                <nav className="mt-10 text-[16px] flex flex-col font-[400] leading-[20px]">
                    <ul>
                        {
                            items.map((item) => (
                                <li className="mb-6" key={item.id}>
                                    <a href={item.href} className="text-white/60 hover:text-[#5DD2DD] ">
                                        <img src={item.icon} alt="" className="inline-block mr-2" />
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
        </>
    )
}
