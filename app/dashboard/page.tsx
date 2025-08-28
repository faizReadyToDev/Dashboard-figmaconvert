import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";
import DashboardContent from "@/components/DashboardContent";

export default async function Dashboard(){
    return (
        <div className="flex">
          <Sidebar/>
          <DashboardContent/>
        </div>
    )
}