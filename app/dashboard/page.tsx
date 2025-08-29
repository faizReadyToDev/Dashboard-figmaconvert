'use client'
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";
import DashboardContent from "@/components/DashboardContent";
import MobileSidebar from "@/components/MobileSidebar";
import { useState } from "react";

export default function Dashboard(){
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <MobileSidebar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
            <div className="flex">
              <Sidebar/>
              <DashboardContent setOpenMenu={setOpenMenu}/>
            </div>
        </>
    )
}