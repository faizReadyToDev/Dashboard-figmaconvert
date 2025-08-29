'use client'
import Link from "next/link"
import Main from "./Main"
import Uploads from "./Uploads"
import { Button } from "./ui/button"
export default function DashboardContent({ setOpenMenu }: { setOpenMenu: (open: boolean) => void }) {


    return (<>
        <div className="bg-white w-full">
            <nav className="flex p-4 justify-end max-xl:justify-between border border-[#EAECF0] h-[80px] items-center" >
                <div className="hidden max-xl:block">
                    <Button onClick={() => setOpenMenu(true)} variant="outline" className="p-4 rounded-lg">
                        <img className="" src="icon.png" alt="" />
                    </Button>
                </div>
                <ul className="flex gap-4 items-center">
                    <li>
                        <img src="Vector.png" alt="" />
                    </li>
                    <li>
                        <img src="Avatar.png" alt="" />
                    </li>
                </ul>
            </nav>
            <Main />
            <Uploads />
        </div>







    </>)
}