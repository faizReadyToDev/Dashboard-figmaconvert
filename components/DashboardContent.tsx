'use client'
import Link from "next/link"
import Main from "./Main"
import Uploads from "./Uploads"
import { Button } from "./ui/button"
import icon from './../public/Icon-dotted.png'
import vector from './../public/Vector.png'
import avatar from './../public/Avatar.png'
import Header from "./Header"
export default function DashboardContent({ setOpenMenu }: { setOpenMenu: (open: boolean) => void }) {


    return (<>
        <div className="bg-white w-full">
            <Header setOpenMenu={setOpenMenu} />
            <Main />
            <Uploads />
        </div>
    </>)
}