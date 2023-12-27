import react from 'react'
import { AcmeLogo } from "./Micro/AcmeLogo"
import NavigationOption from "./Micro/NavigationOption"
import DropdownOption from "./Micro/DropdownOption"
import { Option } from "./Dummy/Option"
import { ScrollToSection } from "../hooks/ScrollToSection"
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  
  return (
    <div className="h-20">
      <div className="flex items-center justify-between sm:justify-around px-4 my-auto h-full text-xl">
      <AcmeLogo/>
      <div className="items-center justify-center hidden sm:flex">
        <NavigationOption action={ScrollToSection} options={Option} />
      </div>
      <div className="items-center flex justify-center sm:hidden">
        <DropdownOption action={ScrollToSection}  options={Option}/>
      </div>
      </div>
    </div>
  )
}

export function NavbarDetail () {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <div className="h-20">
      <div className="flex items-center justify-start px-4 my-auto h-full">
        <TiArrowBack fontSize={'3em'} onClick={handleClick} className="cursor-pointer"/>
      </div>
    </div>
  )
}
