'use client'
import { Button } from "./ui/button";

export default function MobileSidebar({openMenu, setOpenMenu}: {openMenu: boolean; setOpenMenu: (open: boolean) => void}) {
    return (
        <>
        <div className="fixed z-10 bg-black h-screen top-0">
            <div className={`bg-[#11455D] w-[350px] h-screen border-r border-gray-300 p-4 relative ${openMenu ? 'block' : 'hidden'}`}>
                <img className="mb-4" src="Group.png" alt="" />
                <Button onClick={() => setOpenMenu(false)} className="absolute top-4 right-4 text-[#5DD2DD] cursor-pointer rounded-full border border-white/60 p-4">X</Button>
                <nav className="mt-10 text-[16px] flex flex-col font-[400] leading-[20px]">
                    <ul>
                        <li className="mb-6">
                            <a href="#" className="text-[#5DD2DD] hover:text-gray-300">Home</a>
                        </li>
                        <li className="mb-6">
                            <a href="#" className="text-white/60 hover:text-[#5DD2DD] ">Stages & Checklist</a>
                        </li>
                        <li className="mb-6">
                            <a href="#" className="text-white/60 hover:text-[#5DD2DD] ">Upload Docs</a>
                        </li>
                        <li className="mb-6">
                            <a href="#" className="text-white/60 hover:text-[#5DD2DD] ">Preferred Vendors</a>
                        </li>
                        <li className="mb-6">
                            <a href="#" className="text-white/60 hover:text-[#5DD2DD] ">Tech Stack</a>
                        </li>
                        <li className="mb-6">
                            <a href="#" className="text-white/60 hover:text-[#5DD2DD] ">Targets</a>
                        </li>
                        <li className="mb-6">
                            <a href="#" className="text-white/60 hover:text-[#5DD2DD] ">Zee Sales Targets</a>
                        </li>
                        <li className="mb-6">
                            <a href="#" className="text-white/60 hover:text-[#5DD2DD] ">MAI Settings</a>
                        </li>
                        <li className="mb-6">
                            <a href="#" className="text-white/60 hover:text-[#5DD2DD]">Pending Questions <span className="ml-4 text-[12px] rounded-full border border-[#EAECF0] bg-[#F9FAFB] text-[#344054] px-2 py-1">3</span></a>
                        </li>
                    </ul>

                    <Button className="text-start absolute bottom-4" variant="primary">Logout</Button>
                </nav>
            </div>
             </div>
        </>
    )
}
