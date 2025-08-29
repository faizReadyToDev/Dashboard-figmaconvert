
import { Input } from "@/components/ui/input"
import { Checkbox } from "./ui/checkbox";
import { Switch } from "@/components/ui/switch"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button";

const uploadsData = [
    {
        id: 1,
        size: "200 KB",
        img: "pdf-icon.png",
        name: "Tech requirements.pdf",
        type: "Legal",
        aiAppInclusion: true,
        dashboardInclusion: true,
        stageAccess: "All",
        textColor: "text-[#175CD3]",
        borderColor: "border-[#B2DDFF]",
        bgColor: "bg-[#EFF8FF]"
    },
    {
        id: 2,
        size: "720 KB",
        img: "pdf-icon.png",
        name: "Dashboard screenshot.jpg",
        type: "Vendors & Assets",
        aiAppInclusion: true,
        dashboardInclusion: true,
        stageAccess: "Onboarding",
        textColor: "text-[#067647]",
        borderColor: "border-[#ABEFC6]",
        bgColor: "bg-[#ECFDF3]"
    },
    {
        id: 3,
        size: "16 MB",
        img: "doc-icon.png",
        name: "Dashboard prototype recording.mp4",
        type: "Technology",
        aiAppInclusion: false,
        dashboardInclusion: true,
        stageAccess: "Franchisee",
        textColor: "text-[#B93815]",
        borderColor: "border-[#B2DDFF]",
        bgColor: "bg-[#FEF6EE]"
    },
    {
        id: 4,
        size: "4.2 MB",
        img: "doc-icon.png",
        name: "Financial Overview",
        type: "Financial",
        aiAppInclusion: true,
        dashboardInclusion: true,
        stageAccess: "Prospect",
        textColor: "text-[#C11574]",
        borderColor: "border-[#FCCEEE]",
        bgColor: "bg-[#FDF2FA]"
    },
    {
        id: 5,
        size: "400 KB",
        img: "doc-icon.png",
        name: "UX Design Guidelines.docx",
        type: "Legal",
        aiAppInclusion: true,
        dashboardInclusion: false,
        stageAccess: "Onboarding",
        textColor: "text-[#175CD3]",
        borderColor: "border-[#B2DDFF]",
        bgColor: "bg-[#EFF8FF]"
    },
    {
        id: 6,
        size: "12 MB",
        img: "pdf-icon.png",
        name: "Dashboard interaction.aep",
        type: "Legal",
        aiAppInclusion: true,
        dashboardInclusion: false,
        stageAccess: "Onboarding",
        textColor: "text-[#175CD3]",
        borderColor: "border-[#B2DDFF]",
        bgColor: "bg-[#EFF8FF]"
    },
    {
        id: 7,
        size: "18.6 MB",
        img: "pdf-icon.png",
        name: "Briefing call recording.mp3",
        type: "Financial",
        aiAppInclusion: false,
        dashboardInclusion: false,
        stageAccess: "Prospect",
        textColor: "text-[#C11574]",
        borderColor: "border-[#FCCEEE]",
        bgColor: "bg-[#FDF2FA]"
    }
]

export default function Uploads() {
    return (
        <>
            <div className="p-4">
                <div className="border border-[#EAECF0] flex flex-col p-4 rounded-t-lg">
                    <div className="flex justify-between ">
                        <div className="flex flex-col">
                            <span className="font-[600] text-[18px] text-[#101828] mb-2 leading-[28px]">My Uploads</span>
                            <span className="font-[600] text-[14px] text-[#475467] leading-[20px]">Documents that are uploaded by you.</span>
                        </div>
                        <div>
                            <img src="/icon-dotted.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 border-b border-r border-l border-[#EAECF0]">

                    <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                            <img src="search.png" alt="" />
                        </div>
                        <div className="">
                            <Input className="w-[292px] max-sm:w-[200px] max-sm:pl-10 pl-10 text-[#667085]" placeholder="Search here.." />
                        </div>
                    </div>

                    <Button variant="outline" className="border border-[#EAECF0] flex items-center p-2 rounded-lg gap-2">
                        <img src="filter.png" alt="" />
                        Filter
                    </Button>

                </div>
                <div className="max-xl:overflow-x-auto">

                    <div className="grid grid-cols-7 gap-4 bg-[#F9FAFB] p-4 border-b border-r border-l border-[#EAECF0] min-w-[1200px]">
                        <div className="col-span-2 flex items-center gap-2 whitespace-nowrap">
                            <Checkbox variant="square" className="border border-black" />
                            <span className="text-[12px] text-[#475467]">Document Name</span>
                        </div>
                        <div className="whitespace-nowrap"><span className="text-[12px] text-[#475467]">Document Type</span></div>
                        <div className="whitespace-nowrap"><span className="text-[12px] text-[#475467]">AI App Inclusion</span></div>
                        <div className="whitespace-nowrap"><span className="text-[12px] text-[#475467]">Dashboard Inclusion</span></div>
                        <div className="whitespace-nowrap"><span className="text-[12px] text-[#475467]">Stage Access</span></div>
                        <div></div>
                    </div>
                

                {
                    uploadsData.map((item, index) => (
                        <div key={index} className={`${item.id === 7 ? "rounded-b-lg" : ""} grid grid-cols-7 gap-4 p-4 border-b border-r border-l border-[#EAECF0] items-center min-w-[1200px]`}>
                            <div className="col-span-2 ">
                                <div className="flex items-center gap-2 whitespace-nowrap">
                                    <Checkbox variant="square" className="border border-black" />
                                    <img src={item.img} alt="" />
                                    <div className="flex flex-col">
                                        <span className="text-[14px] text-[#101828] font-[500] leading-[20px]">{item.name}</span>
                                        <span className="text-[14px] text-[#475467] font-[400] leading-[20px]"> {item.size}</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" whitespace-nowrap">
                                <span className={`text-[12px] border ${item.textColor} ${item.borderColor} ${item.bgColor} px-2 rounded-lg font-[500] leading-[18px]`}>{item.type}</span>
                            </div>
                            <Switch checked={item.aiAppInclusion} />
                            <Switch checked={item.dashboardInclusion} />
                            <div className=" whitespace-nowrap">
                                <Select>
                                    <SelectTrigger className="w-[150px]">
                                        <SelectValue placeholder={item.stageAccess} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Full">Full</SelectItem>
                                        <SelectItem value="Onboarding">Onboarding</SelectItem>
                                        <SelectItem value="Franchisee">Franchisee</SelectItem>
                                        <SelectItem value="Prospect">Prospect</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex gap-2  whitespace-nowrap">

                                <span className="text-[14px] leading-[20px] text-[#475467] font-[600]">Delete</span>
                                <span className="text-[14px] leading-[20px] text-[#279DD4] font-[600]">Edit</span>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
