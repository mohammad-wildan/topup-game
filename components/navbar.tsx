"use client";
import { ReactNode } from "react";
import Link from "next/link";

type NavbarProps = {
    children: ReactNode;
}

export default function Navbar({children}: NavbarProps) {
    return (
        <div>
            <div className="flex h-[85px] bg-[#3F327F] w-full justify-between">
                <img className="md:ml-20 ml-5 my-auto" src="Logo.png" alt="" />
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