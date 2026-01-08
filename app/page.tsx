
import Image from "next/image";
import { Geostar_Fill } from "next/font/google";
import {games} from "@/list/game";
import { pulsas } from "@/list/pulsa";
import Banner from "@/components/banner";

const geostar = Geostar_Fill({
  subsets: ["latin"],
  weight: "400",
});


export default function Home() {
  return (
    <div>
    <div className="bg-[#362B6C]">
        <Banner/>
      <div className="flex h-40">

  <div className="mx-auto flex space-x-10">
    
    <div className="flex items-center px-9 py-3 my-auto space-x-3 rounded-4xl
      border border-transparent hover:border-white
      opacity-50 hover:opacity-100 transition-all">
      <img src="Game.png" alt="" />
      <h1 className="mt-1 text-white">Game</h1>
    </div>

    <div className="flex items-center px-9 py-3 my-auto space-x-3 rounded-4xl
      border border-transparent hover:border-white
      opacity-50 hover:opacity-100 transition-all">
      <img src="Discount.png" alt="" />
      <h1 className="mt-1 text-white">Voucher</h1>
    </div>

    <div className="flex items-center px-9 py-3 my-auto space-x-3 rounded-4xl
      border border-transparent hover:border-white
      opacity-50 hover:opacity-100 transition-all">
      <img src="Category.png" alt="" />
      <h1 className="mt-1 text-white">Pulsa</h1>
    </div>

    <div className="flex items-center px-9 py-3 my-auto space-x-3 rounded-4xl
      border border-transparent hover:border-white
      opacity-50 hover:opacity-100 transition-all">
      <img src="Send.png" alt="" />
      <h1 className="mt-1 text-white">Paket Data</h1>
    </div>

    <div className="flex items-center px-9 py-3 my-auto space-x-3 rounded-4xl
      border border-transparent hover:border-white
      opacity-50 hover:opacity-100 transition-all">
      <img src="Star.png" alt="" />
      <h1 className="mt-1 text-white">Social Media</h1>
    </div>

  </div>
</div>

      

      </div>
      <div className="bg-[#362B6C] space-y-10">
      <div className="grid grid-cols-2 gap-100 text-center w-full">
  <h1 className={`${geostar.className} text-[36px] my-auto text-white`}>Game</h1>
  <h2 className={`${geostar.className} text-[18px] my-auto text-[#FAD306]`}>Selengkapnya</h2>
      </div>
      <div className="w-full flex justify-center">
      <div className="grid grid-cols-4 gap-x-3 gap-y-5 pb-30 ">
     {games.map((game) => (
        <div key={game.id}>
          <div className="relative group">
          <div className="relative group-hover:blur-sm transition-all duration-300">
          <img className="rounded-2xl shadow-2xl " src={game.gambar} alt="" />
          <div className="space-y-2 text-center absolute -bottom-1 backdrop-blur-sm w-[310px] h-[92px] rounded-b-2xl bg-black/20">
          <h1 className="text-[#CDCDCD] text-[14px] pt-4">{game.publisher}</h1>
          <h2 className="text-white text-[18px] font-bold">{game.name}</h2>
          <img className="absolute bottom-15 left-5" src={game.item} alt="" />
          </div>
          </div>
          <button className="group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 opacity-0 absolute left-19 top-30 text-white text-[16px] py-3 px-6
            bg-gradient-to-l from-[#FC00FF] via-[#7278ED] to-[#00DBDE] rounded-4xl">Top Up Sekarang</button>
          </div>
        </div>
      ))}
    </div>
      </div>
      </div>

      <div className="bg-[#362B6C] space-y-10">
        <div className="grid grid-cols-2 gap-100 text-center w-full">
  <h1 className={`${geostar.className} text-[36px] my-auto text-white`}>Pulsa</h1>
  <h2 className={`${geostar.className} text-[18px] my-auto text-[#FAD306]`}>Selengkapnya</h2>
      </div>
      <div className="w-full flex justify-center">
      <div className="gap-x-3 grid grid-cols-4 pb-10">
        {pulsas.map((pulsa) => (
          <div key={pulsa.id}>
            <div className="relative group">
            <div className="relative group-hover:blur-sm transition-all duration-300">
            <img className="rounded-2xl shadow-2xl" src={pulsa.gambar} alt="" />
            <div className="space-y-2 text-center absolute -bottom-1 backdrop-blur-sm w-[310px] h-[108px] rounded-b-2xl bg-black/20">
            <h1 className="text-white text-centertext-[18px] mt-10 font-bold">{pulsa.name}</h1>
            </div>
            <img className="absolute bottom-20 left-5 shadow-2xl" src={pulsa.logo} alt="" />
            </div>
            <button className="group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 opacity-0 absolute left-19 top-30 text-white text-[16px] py-3 px-8
            bg-gradient-to-l from-[#FC00FF] via-[#7278ED] to-[#00DBDE] rounded-4xl">Beli Sekarang</button>
            </div>
          </div>
        ))}
      </div>
      </div>
      </div>
      </div>
  );
}
 