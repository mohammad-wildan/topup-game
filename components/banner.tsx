import Image from "next/image";


export default function Banner() {
   return (
    <div className="w-full p-10">
        <div className="flex items-center justify-center gap-6">
            <img className="rotate-180 opacity-50 hover:opacity-100 transition-all duration-100" src="arrow2.png" alt="" />
       <img className="" src="banner.png" alt="" />
       <img className="opacity-50 hover:opacity-100 transition-all duration-100" src="arrow2.png" alt="" />
    </div>
        </div>
   ) 
   
} 