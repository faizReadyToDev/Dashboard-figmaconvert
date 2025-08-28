
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "./ui/label";

export default function Main() {
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            <div className="border border-[#EAECF0] flex flex-col gap-4 p-4 rounded-lg ">
                <div className="flex flex-col justify-center items-center border-b border-[#EAECF0] pb-4">
                    <span className="mb-4 font-[600]">Account Process</span>
                    <img src="Progress-circle.png" alt="" />
                </div>
                <div className="flex flex-col gap-[16px] items-start border border-[#EAECF0] p-4 bg-[#F6F7FB] rounded-[8px]">
                    <span className="font-semibold text-[14px] ">Steps Completed</span>

                    <div className="flex w-full justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="circle.png" alt="" />
                            <Label htmlFor="Profile Setup">Profile Setup</Label>
                        </div>
                        <Checkbox checked={true} className="rounded-full " id="Profile Setup" />
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="circle.png" alt="" />
                            <Label htmlFor="Initial Training">Initial Training</Label>
                        </div>
                        <Checkbox checked={true} className="rounded-full " id="Initial Training" />
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="circle.png" alt="" />
                            <Label htmlFor="Legal Documents">Legal Documents</Label>
                        </div>
                        <Checkbox checked={true} className="rounded-full " id="Legal Documents" />
                    </div>
                </div>
                <div className="flex flex-col gap-[16px] items-start border border-[#EAECF0] p-4 bg-[#F6F7FB] rounded-[8px]">
                    <span className="font-semibold text-[14px] ">Steps Remaining</span>

                    <div className="flex w-full justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="circle.png" alt="" />
                            <Label htmlFor="Financial Integration">Financial Integration</Label>
                        </div>
                        <Checkbox checked={true} className="rounded-full opacity-25" id="Financial Integration" />
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <div className="flex items-center gap-2">
                            <img src="circle.png" alt="" />
                            <Label htmlFor="Final Review">Final Review</Label>
                        </div>
                        <Checkbox checked={true} className="rounded-full opacity-25" id="Final Review" />
                    </div>
                </div>
            </div>
            <div>
                <div className="border border-[#EAECF0] flex flex-col p-4 rounded-lg mb-4">
                    <span className="font-[600] mb-2">Total Franchisees Onboard</span>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex gap-4 items-center">
                            <span className="text-[30px] font-[600]">14</span>
                            <span className="border-[1.5px] rounded-lg text-[#067647] border-[#067647] flex items-center px-2">
                                <img src="trend-up-01.png" alt="" />
                                <span>7.4%</span>
                            </span>
                        </div>
                        <div>
                            <img src="Avatars.png" alt="" />
                        </div>
                    </div>
                    <div className="h-[12px] w-full rounded-[4px]">
                        <div className="flex">
                            <div className="w-[25%] bg-[#1F7EAA] h-[12px] rounded-[4px]"></div>
                            <div className="w-[5%] bg-white h-[12px]"></div>
                            <div className="w-[15%] bg-[#2FBDFF] h-[12px] rounded-[4px]"></div>
                            <div className="w-[5%] bg-white h-[12px]"></div>
                            <div className="w-[55%] bg-[#97DEFF] h-[12px] rounded-[4px]"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[12px] items-start p-4  rounded-[8px]">

                        <div className="flex w-full justify-between items-center">
                            <div className="flex items-center gap-2">
                                <img src="circle1.png" alt="" />
                                <Label htmlFor="Profile Setup">Stage 1 (Initial Inquiry)</Label>
                            </div>
                            <span className="text-[18px] font-[600]">02</span>
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <div className="flex items-center gap-2">
                                <img src="circle2.png" alt="" />
                                <Label htmlFor="Initial Training">Stage 2 (Document Submission)</Label>
                            </div>
                            <span className="text-[18px] font-[600]">07</span>
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <div className="flex items-center gap-2">
                                <img src="circle3.png" alt="" />
                                <Label htmlFor="Legal Documents">Stage 3 (Training)</Label>
                            </div>
                            <span className="text-[18px] font-[600]">05</span>
                        </div>
                    </div>
                </div>
                <div className="border border-[#EAECF0] flex flex-col p-4 rounded-lg">
                    <span className="font-[600] mb-2">Financial Wellbeing</span>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-4 items-center w-full justify-between border-b border-[#EAECF0] pb-4 mb-4">
                            <div className="flex flex-col items-start">
                                <span className="text-[30px] font-[600]">20</span>
                                <span className="text-[14px] text-[#475467]">Total Franchisees</span>
                            </div>
                            <span className="border-[1.5px] rounded-lg text-[#067647] border-[#067647] flex items-center px-2">
                                <img src="trend-up-01.png" alt="" />
                                <span>2.1%</span>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <div className="flex flex-col items-center bg-[#F7FAFC] p-4 rounded-lg gap-2">
                            <span className="text-[#455468] font-[600] text-[14px]">Target</span>
                            <span className="text-[#1C222B] font-[600] text-[20px]">$500,000</span>
                        </div>
                        <div className="flex flex-col items-center bg-[#F7FAFC] p-4 rounded-lg gap-2">
                            <span className="text-[#455468] font-[600] text-[14px]">Current</span>
                            <span className="text-[#1C222B] font-[600] text-[20px]">$450,000</span>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <div className="border border-[#EAECF0] flex flex-col p-4 rounded-lg mb-4">
                    <span className="font-[600] mb-2">Key Insights & Feedback</span>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-4 items-center w-full justify-between border-b border-[#EAECF0] pb-4 mb-4">
                            <div className="flex flex-col items-start">
                                <span className="text-[30px] font-[600]">10%</span>
                                <span className="text-[14px] text-[#475467]">Sales Growth</span>
                            </div>
                            <span className="flex flex-col items-center gap-2">
                                <img src="company.png" alt="" />
                                <span className="text-[12px] border-[1px] border-[#BAE9FF] rounded-lg text-[#279DD4] bg-[#D5F2FF80] px-2">Top Performer</span>
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[16px] items-start border border-[#EAECF0] p-4 bg-[#F6F7FB] rounded-[8px]">
                        <span className="font-semibold text-[14px] ">Feedback</span>

                        <div className="flex w-full justify-between items-center">
                            <div className="flex items-start gap-2">
                                <img className="mt-1" src="circle.png" alt="" />
                                <Label className="text-[12px]" htmlFor="Financial Integration">Financial Franchisees are requesting more detailed training materials.</Label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border border-[#EAECF0] flex flex-col p-4 rounded-lg">
                    <span className="font-[600] mb-4">Prospect Leads</span>
                   
                    <div className="bg-[#F6F7FB] flex justify-between text-[14px] items-center p-2 rounded-lg mb-2">
                        <div className="flex items-center gap-2">
                            <img src="ppl-6.png" alt="" />
                            <span>Wade Warren</span>
                        </div>
                        <span className="text-[#1C222BB2]/70 font-[500]">Stage: <span className="text-[#475467]">Initial Inquiry</span></span>
                    </div>
                    <div className="bg-[#F6F7FB] flex justify-between text-[14px] items-center p-2 rounded-lg mb-2">
                        <div className="flex items-center gap-2">
                            <img src="ppl-7.png" alt="" />
                            <span>Ava Wright</span>
                        </div>
                        <span className="text-[#1C222BB2]/70 font-[500]">Stage: <span className="text-[#475467]">Initial Inquiry</span></span>
                    </div>
                    <div className="bg-[#F6F7FB] flex justify-between text-[14px] items-center p-2 rounded-lg mb-2">
                        <div className="flex items-center gap-2">
                            <img src="ppl-8.png" alt="" />
                            <span>Cody Fisher</span>
                        </div>
                        <span className="text-[#1C222BB2]/70 font-[500]">Stage: <span className="text-[#475467]">Initial Inquiry</span></span>
                    </div>
                </div>

            </div>
        </div>
    );
}