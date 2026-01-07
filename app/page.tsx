import Image from "next/image";
import { Geostar_Fill } from "next/font/google";
import {games} from "@/list/game";


const geostar = Geostar_Fill({
  subsets: ["latin"],
  weight: "400",
});


export default function Home() {
  return (
    <div>
    <div className="bg-[#362B6C]">
    
       <div className="flex h-40">
        <div className="mx-auto flex space-x-10">
            <div className=" self-start flex items-center px-9 py-3 hover:border-1 hover:border-solid  border-hidden hover:border-white my-auto space-x-3 rounded-4xl
             opacity-50 hover:opacity-100 transition-all">
                <img className="" src="Game.png" alt="" />
                <h1 className="mt-1 text-white">Game</h1>
            </div>
            <div className=" self-start flex items-center px-9 py-3 hover:border-1 hover:border-solid  border-hidden hover:border-white my-auto space-x-3 rounded-4xl
             opacity-50 hover:opacity-100 transition-all">
                <img className="" src="Discount.png" alt="" />
                <h1 className="mt-1 text-white">Voucher</h1>
            </div>
            <div className=" self-start flex items-center px-9 py-3 hover:border-1 hover:border-solid  border-hidden hover:border-white my-auto space-x-3 rounded-4xl
             opacity-50 hover:opacity-100 transition-all">
                <img className="" src="Category.png" alt="" />
                <h1 className="mt-1 text-white">Pulsa</h1>
            </div>
            <div className=" self-start flex items-center px-9 py-3 hover:border-1 hover:border-solid  border-hidden border-white my-auto space-x-3 rounded-4xl
             opacity-50 hover:opacity-100 transition-all">
                <img className="" src="Send.png" alt="" />
                <h1 className="mt-1 text-white">Paket Data</h1>
            </div>
            <div className=" self-start flex items-center px-9 py-3 hover:border-1 hover:border-solid  border-hidden hover:border-white my-auto space-x-3 rounded-4xl
             opacity-50 hover:opacity-100 transition-all">
                <img className="" src="Star.png" alt="" />
                <h1 className="mt-1 text-white">Social Media</h1>
            </div>
        </div>
        </div>
      
      

      </div>
      <div className="bg-[#362B6C]">
      <div className="flex justify-between px-10">
  <h1 className={`${geostar.className} text-[36px] my-auto text-white`}>Game</h1>
  <h2 className={`${geostar.className} text-[18px] my-auto text-[#FAD306]`}>Selengkapnya</h2>
      </div>
      <div className="grid grid-cols-4 w-350 mx-auto">
     {games.map((game) => (
        <div key={game.id}>
          <div className="relative hover:blur-sm transition-all duration-300">
          <img className="" src={game.gambar} alt="" />
          <h1 className="absolute top-40 left-20 hidden">Top Up Sekarang</h1>
          <div className="text-center absolute bottom-15 left-1/2 -translate-x-1/2">
          <h1 className="text-[#CDCDCD] text-[14px] ">{game.publisher}</h1>
          <h2 className="text-white text-[18px] font-bold">{game.name}</h2>
          </div>
          </div>
        </div>
      ))}
    </div>
      </div>
      </div>
  );
}
 