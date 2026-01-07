export interface Game {
    id: number;
    gambar: string;
    publisher: string;
    name: string
}

export const games: Game[] = [
    {
        id: 1,
        gambar:"Rectangle 6.png",
        publisher:"Moonton",
        name: "Mobile legends: Bang Bang"
    },
    {
        id: 2,
        gambar:"Rectangle 7-5.png",
        publisher:"Garena",
        name: "Free Fire"
    },
    {
        id: 3,
        gambar:"Rectangle 5.png",
        publisher:"miHoYo",
        name: "Genshin Impact"
    },
    {
        id: 4,
        gambar:"Rectangle 7-4.png",
        publisher:"Tencent",
        name: "PUBG"
    },
    {
        id: 5,
        gambar:"Rectangle 7-3.png",
        publisher:"Poker City",
        name: "Higgs Domino"
    },
    {
        id: 6,
        gambar:"Rectangle 7-2.png",
        publisher:"Garena",
        name: "Call of Duty Mobile"
    },
    {
        id: 7,
        gambar:"Rectangle 7-1.png",
        publisher:"Hago id",
        name: "Hago"
    },
    {
        id: 8,
        gambar:"Rectangle 7.png",
        publisher:"Riot Game",
        name: "Valorant"
    },
]