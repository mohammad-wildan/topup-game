export interface Game {
    id: number;
    gambar: string;
    publisher: string;
    name: string;
    item: string;
}

export const games: Game[] = [
    {
        id: 1,
        gambar:"ml.png",
        publisher:"Moonton",
        name: "Mobile legends: Bang Bang",
        item: "dm.png",
    },
    {
        id: 2,
        gambar:"ff.png",
        publisher:"Garena",
        name: "Free Fire",
         item: "dm.png",
    },
    {
        id: 3,
        gambar:"genshin.png",
        publisher:"miHoYo",
        name: "Genshin Impact",
        item: "gems.png",
    },
    {
        id: 4,
        gambar:"pubg.png",
        publisher:"Tencent",
        name: "PUBG",
         item: "uc.png",
    },
    {
        id: 5,
        gambar:"domino.png",
        publisher:"Poker City",
        name: "Higgs Domino",
         item: "chip.png",
    },
    {
        id: 6,
        gambar:"codm.png",
        publisher:"Garena",
        name: "Call of Duty Mobile",
         item: "cp.png",
    },
    {
        id: 7,
        gambar:"hago.png",
        publisher:"Hago id",
        name: "Hago",
         item: "dm.png",
    },
    {
        id: 8,
        gambar:"valorant.png",
        publisher:"Riot Game",
        name: "Valorant",
         item: "dm.png",
    },
]