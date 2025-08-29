
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "./ui/label";
import progressCirlce from '../public/Progress-circle.png'
import cirlce from '../public/circle.png'
import trend from '../public/trend-up-01.png'
import avatars from '../public/Avatars.png'
import cirlce1 from '../public/circle1.png'
import cirlce2 from '../public/circle2.png'
import cirlce3 from '../public/circle3.png'
import company from '../public/company.png'
import ppl6 from '../public/ppl-6.png'
import ppl7 from '../public/ppl-7.png'
import ppl8 from '../public/ppl-8.png'

const stepsCompletedData = [
    {
        id: 1,
        title: "Profile Setup",
        completed: true
    },
    {
        id: 2,
        title: "Initial Training",
        completed: true
    },
    {
        id: 3,
        title: "Legal Documents",
        completed: true
    }
]

const stepsRemainingData = [
    {
        id: 1,
        title: "Financial Integration",
        completed: true
    },
    {
        id: 2,
        title: "Final Review",
        completed: true
    }
]

const FranchiseeStep = [
    {
        id: 1,
        title: "Stage 1 (initial Inquiry)",
        number: "02",
        img: cirlce1.src
    },
    {
        id: 2,
        title: "Stage 2 (Document Submission)",
        number: "07",
        img: cirlce2.src
    },
    {
        id: 3,
        title: "Stage 3 (Training)",
        number: "05",
        img: cirlce3.src
    }
]

const financialData = [
    {
        id: 1,
        title: "Target",
        amount: "$500,000"
    },
    {
        id: 2,
        title: "Current",
        amount: "$450,000"
    }
]

const leadsData = [
    {
        id: 1,
        name: "Wade Warren",
        img: ppl6.src
    },
    {
        id: 2,
        name: "Ava Wright",
        img: ppl7.src
    },
    {
        id: 3,
        name: "Cody Fisher",
        img: ppl8.src
    }
]

export default function Main() {
    return (
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 p-4">
            <div className="border border-[#EAECF0] flex flex-col gap-4 p-4 rounded-lg ">
                <div className="flex flex-col justify-center items-center border-b border-[#EAECF0] pb-4">
                    <span className="mb-2 font-[600] text-[16px]">Account Process</span>
                    <img src={progressCirlce.src} alt="" />
                </div>
                <div className="flex flex-col gap-[16px] items-start border border-[#EAECF0] p-4 bg-[#F6F7FB] rounded-[8px]">
                    <span className="font-semibold text-[14px] ">Steps Completed</span>
                    {
                        stepsCompletedData.map((Item, index) => (
                            <div className="flex w-full justify-between items-center" key={Item.id}>
                                <div className="flex items-center gap-2">
                                    <img src={cirlce.src} alt="" />
                                    <Label htmlFor={Item.title} className="text-[#455468] text-[14px] leading-[24px] font-[500]">{Item.title}</Label>
                                </div>
                                <Checkbox variant="round" checked={Item.completed} className="rounded-full " id={Item.title} />
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-[16px] items-start border border-[#EAECF0] p-4 bg-[#F6F7FB] rounded-[8px]">
                    <span className="font-semibold text-[14px] ">Steps Remaining</span>
                    {
                        stepsRemainingData.map((item, index) => (
                            <div className="flex w-full justify-between items-center" key={item.id}>
                                <div className="flex items-center gap-2">
                                    <img src={cirlce.src} alt="" />
                                    <Label htmlFor={item.title} className="text-[#455468] text-[14px] leading-[24px] font-[500]">{item.title}</Label>
                                </div>
                                <Checkbox variant="round" checked={item.completed} className="rounded-full opacity-25" id={item.title} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <div className="border border-[#EAECF0] flex flex-col p-4 rounded-lg mb-4">
                    <span className="font-[600] mb-4">Total Franchisees Onboard</span>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-4 items-center">
                            <span className="text-[30px] font-[600]">14</span>
                            <span className="border-[1.5px] rounded-lg text-[#067647] border-[#067647] flex items-center px-2 gap-1">
                                <img src={trend.src} alt="" />
                                <span className="text-[14px] leading-[20px] font-[500]">7.4%</span>
                            </span>
                        </div>
                        <div>
                            <img src={avatars.src} alt="" />
                        </div>
                    </div>
                    <div className="h-[12px] w-full rounded-[4px] mb-4">
                        <div className="flex">
                            <div className="w-[25%] bg-[#1F7EAA] h-[12px] rounded-[4px]"></div>
                            <div className="w-[5%] bg-white h-[12px]"></div>
                            <div className="w-[15%] bg-[#2FBDFF] h-[12px] rounded-[4px]"></div>
                            <div className="w-[5%] bg-white h-[12px]"></div>
                            <div className="w-[55%] bg-[#97DEFF] h-[12px] rounded-[4px]"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-start p-4  rounded-[8px]">
                        {
                            FranchiseeStep.map((Item, index) => (
                                <div className="flex w-full justify-between items-center" key={Item.id}>
                                    <div className="flex items-center gap-2 ">
                                        <img className="mt-[0.5px]" src={Item.img} alt="" />
                                        <Label htmlFor={Item.title} className="text-[14px] leading-[20px] font-[500] text-[#475467]">{Item.title}</Label>
                                    </div>
                                    <span className="text-[18px] font-[600]">{Item.number}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="border border-[#EAECF0] flex flex-col p-4 rounded-lg">
                    <span className="font-[600] mb-4 text-[16px] leading-[24px]">Financial Wellbeing</span>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-4 items-center w-full justify-between border-b border-[#EAECF0] pb-4 mb-6">
                            <div className="flex flex-col items-start">
                                <span className="text-[30px] font-[600] text-[#101828] leading-[38px]">20</span>
                                <span className="text-[14px] text-[#475467] leading-[20px] font-[500]">Total Franchisees</span>
                            </div>
                            <span className="border-[1.5px] rounded-lg text-[#067647] border-[#067647] flex items-center px-2 gap-1">
                                <img src={trend.src} alt="" />
                                <span className="text-[14px] leading-[20px] font-[500]">2.1%</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        {
                            financialData.map((item, index) => (
                                <div key={item.id} className="flex flex-col items-center bg-[#F7FAFC] p-4 rounded-lg gap-2">
                                    <span className="text-[#455468] font-[600] text-[14px] leading-[24px]">{item.title}</span>
                                    <span className="text-[#1C222B] font-[600] text-[20px] leading-[38px]">{item.amount}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className="border border-[#EAECF0] flex flex-col p-4 rounded-lg mb-4">
                    <span className="font-[600] mb-4 leading-[24px] text-[16px]">Key Insights & Feedback</span>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-4 items-center w-full justify-between border-b border-[#EAECF0] pb-4 mb-6">
                            <div className="flex flex-col items-start">
                                <span className="text-[30px] font-[600] text-[#101828] leading-[38px]">10%</span>
                                <span className="text-[14px] text-[#475467] font-[500] leading-[20px]">Sales Growth</span>
                            </div>
                            <span className="flex flex-col items-center gap-2">
                                <img src={company.src} alt="" />
                                <span className="text-[12px] border-[1px] border-[#BAE9FF] rounded-lg text-[#279DD4] bg-[#D5F2FF80] px-2 leading-[20px] font-[500]">Top Performer</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[16px] items-start border border-[#EAECF0] p-4 bg-[#F6F7FB] rounded-[8px]">
                        <span className="font-[600] text-[14px] text-[#1C222B] leading-[24px]">Feedback</span>

                        <div className="flex w-full justify-between items-center">
                            <div className="flex items-start gap-2">
                                <img className="mt-1" src={cirlce.src} alt="" />
                                <Label className="text-[12px] text-[#455468] leading-[18px]" htmlFor="Financial Integration">Financial Franchisees are requesting more detailed training materials.</Label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-[#EAECF0] flex flex-col p-4 rounded-lg">
                    <span className="font-[600] mb-6 leading-[24px] text-[16px]">Prospect Leads</span>
                    {
                        leadsData.map((item, index) => (
                            <div key={item.id} className="bg-[#F6F7FB] flex justify-between text-[14px] items-center p-2 rounded-lg mb-4">
                                <div className="flex items-center gap-2">
                                    <img src={item.img} alt="" />
                                    <span className="text-[14px] text-[#475467] leading-[20px] font-[500]">{item.name}</span>
                                </div>
                                <span className="text-[#1C222BB2]/70 font-[500] text-[14px] leading-[20px]">Stage: <span className="text-[#475467]">Initial Inquiry</span></span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}