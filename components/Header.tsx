import { Button } from "./ui/button"
import icon from './../public/Icon-dotted.png'
import vector from './../public/Vector.png'
import avatar from './../public/Avatar.png'


export default function Header({ setOpenMenu }: { setOpenMenu: (open: boolean) => void }) {
    return (
        <header>
            <nav className="flex p-4 justify-end max-xl:justify-between border border-[#EAECF0] h-[80px] items-center" >
                <div className="hidden max-xl:block">
                    <Button onClick={() => setOpenMenu(true)} variant="outline" className="p-4 rounded-lg">
                        <img className="" src={icon.src} alt="" />
                    </Button>
                </div>
                <ul className="flex gap-4 items-center">
                    <li>
                        <img src={vector.src} alt="" />
                    </li>
                    <li>
                        <img src={avatar.src} alt="" />
                    </li>
                </ul>
            </nav>
        </header>


    )
}