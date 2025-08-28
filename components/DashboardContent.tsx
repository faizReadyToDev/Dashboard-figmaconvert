import Link from "next/link"
import Main from "./Main"
import Uploads from "./Uploads"
export default function DashboardContent() {


    return (<>
            <div className="bg-white w-full">
                <nav className="flex  justify-end border border-[#EAECF0] h-[80px]" >
                    <ul className="flex gap-4 items-center">
                        <li>
                            <img src="Vector.png" alt="" />
                        </li>
                        <li>
                            <img src="Avatar.png" alt="" />
                        </li>
                    </ul>
                </nav>

                <Main/>
                <Uploads/>
            </div>
    
    
    
    
    
    
    
    </>)
}