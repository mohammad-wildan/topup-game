"use client";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";

type NavbarProps = {
    children: ReactNode;
}

export default function Navbar({children}: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="flex h-[85px] bg-[#3F327F] w-full justify-between">
                <img className="md:ml-20 ml-5 my-auto" src="Logo.png" alt="" />
                   {isOpen ? (
                    <button onClick={() => setIsOpen(false)} className="md:hidden
                    text-2xl font-bold text-white p-4"><img className="w-10 " src="hambuger.png" alt="" /></button>

                ):(
                    <button onClick={() => setIsOpen(true)} className="md:hidden
                    text-2xl font-bold text-white p-4"><img className="w-10  rounded-xl" src="hambuger.png" alt="" /></button>
                )}
                        {isOpen && (
                            <div className="fixed inset-0 bg-black/50 z-40"></div>
                        )}
                     <div className={"md:hidden z-50 fixed bg-[#3F327F] h-screen top-0"+(isOpen? " translate-x-0 right-0 " : " translate-x-full -right-200 ")+
                        "transition-all duration-300 space-y-5 p-5 shadow-2xl"}>
                            <div>
                            <Link href="#" onClick={() => setIsOpen(false)}>
                        <div className="flex items-center border-white w-full h-15 border-2 rounded-2xl px-5">
                            <h1 className="text-white">Back</h1>
                        </div>
                            </Link>
                            </div>
                    <div className="flex space-x-2 border-white w-full h-15 border-2 rounded-2xl px-5">
                    <h1 className="my-auto text-white text-[14px]">Beranda</h1>
                    <img className="my-auto" src="Frame.png" alt="" />
                    </div>
                    <div className="flex space-x-2  border-white w-full h-15 border-2 rounded-2xl px-5">
                    <h1 className="my-auto text-white text-[14px]">Promo</h1>
                    <img className="my-auto" src="Frame2.png" alt="" />
                    </div>
                    <div className="flex space-x-2  border-white w-full h-15 border-2 rounded-2xl px-5">
                    <h1 className="my-auto text-white text-[14px]">Layanan</h1>
                    <img className="my-auto" src="Frame3.png" alt="" />
                </div>  
                <div className="my-auto mr-20 w-[178px] h-[44px] rounded-[4px] grid grid-cols-2 bg-gradient-to-l from-[#FF0066] via-[#D41872] to-[#A445B2]">
                    <h1 className="my-auto ml-5 text-white">Masuk/Daftar</h1>
                    <img className="ml-10 my-auto" src="Frame4.png" alt="" />
                </div>
                </div>
                
                

                 <div className="md:flex hidden space-x-10">
                    <div className="flex space-x-2">
                    <h1 className="my-auto text-white text-[14px]">Beranda</h1>
                    <img className="my-auto w-full" src="Frame.png" alt="" />
                    </div>
                    <div className="flex space-x-2">
                    <h1 className="my-auto text-white text-[14px]">Promo</h1>
                    <img className="my-auto w-full" src="Frame2.png" alt="" />
                    </div>
                    <div className="flex space-x-2">
                    <h1 className="my-auto text-white text-[14px]">Layanan</h1>
                    <img className="my-auto w-full" src="Frame3.png" alt="" />
                </div>  
                <div className="my-auto mr-20 w-[178px] h-[44px] rounded-[4px] grid grid-cols-2  ml-15 bg-gradient-to-l from-[#FF0066] via-[#D41872] to-[#A445B2]">
                    <h1 className="my-auto ml-5 text-white">Masuk/Daftar</h1>
                    <img className="ml-10 my-auto" src="Frame4.png" alt="" />
                </div>
                </div>
            </div>
            {children}
            <div className="bg-[#3F327F] w-full md:px-30 px-10 space-y-20 py-10">
                <div className="grid md:grid-cols-4 grid-cols-2 gap-y-2">
                <div className="space-y-2">
                    <h1 className="text-white font-bold text-[18px] mb-8">Product</h1>
                    <p className="text-[14px] text-white">Landing Page</p>
                    <p className="text-[14px] text-white">Popup Builder</p>
                    <p className="text-[14px] text-white">Web-Design</p>
                    <p className="text-[14px] text-white">Content</p>
                    <p className="text-[14px] text-white">Intergrations</p>
                </div>
                <div className="space-y-2">
                    <h1 className="text-white font-bold text-[18px] mb-8">Uses Cases</h1>
                    <p className="text-[14px] text-white">Web-Designers</p>
                    <p className="text-[14px] text-white">Marketers</p>
                    <p className="text-[14px] text-white">Small Business</p>
                    <p className="text-[14px] text-white">Website Builder</p>
                </div>
                <div className="space-y-2">
                    <h1 className="text-white font-bold text-[18px] mb-8">Resources</h1>
                    <p className="text-[14px] text-white">Academy</p>
                    <p className="text-[14px] text-white">Blog</p>
                    <p className="text-[14px] text-white">Themes</p>
                    <p className="text-[14px] text-white">Hosting</p>
                    <p className="text-[14px] text-white">Developers</p>
                    <p className="text-[14px] text-white">Support</p>
                </div>

                <div>
                    <h1 className="text-white font-bold text-[18px]">Pembayaran</h1>
                    <img src="foto.png" alt="" />
                </div>
                </div>
                <div className=" justify-between flex">
                    <h1 className="font-light text-[12px] text-white">© 2022 All Rights Reserved</h1>
                    <div className="grid grid-cols-4 gap-3">
                        <img src="Vector.png" alt="" />
                        <img src="social.png" alt="" />
                        <img src="social-1.png" alt="" />
                        <img src="social-2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}