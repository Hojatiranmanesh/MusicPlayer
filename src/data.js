import { v4 as uuidv4 } from 'uuid';

function musicData (){
    return [
        {
            name: "Lost Memories",
            cover: "https://chillhop.com/wp-content/uploads/2023/07/6f0daa06bb93143d1b7660298eabe1d95b9eb983-1024x1024.jpg",
            artist: "Bastien Brison",
            audio: "https://stream.chillhop.com/mp3/65377",
            color:["#ececf6","#2c304b"],
            id: uuidv4(),
            active: true,
        },
        {
            name:"Dreams & Reality",
            cover:"https://i.scdn.co/image/ab67616d0000b27323a6292a21a468ba0b6aa054",
            artist: "Transient",
            audio: "https://stream.chillhop.com/mp3/69642",
            color:["#ef9072","#7d273c"],
            id: uuidv4(),
            active: true,
        },
        {
            name:"Green Dress",
            cover:"https://i.scdn.co/image/ab67616d0000b273a5f26fb7a962da31461cbb9e",
            artist: "Bao, Sunrize, Mauricesax",
            audio: "https://stream.chillhop.com/mp3/58357",
            color:["#b4f3de","#7b6c4f"],
            id: uuidv4(),
            active: true,
        },
        {
            name:"Let Go",
            cover:"https://i.scdn.co/image/ab67616d0000b273a67d1232961da17dfe500154",
            artist: "A D M B, Boukas",
            audio: "https://stream.chillhop.com/mp3/53592",
            color:["#2d231e","#e29532"],
            id: uuidv4(),
            active: true,
        },
        {
            name:"Sleep Walker",
            cover:"https://i.scdn.co/image/ab67616d0000b2734db7723ed7bc2627e58e0918",
            artist: "J.Folk",
            audio: "https://stream.chillhop.com/mp3/43902",
            color:["#ddf4c7","#4cbea3"],
            id: uuidv4(),
            active: true,
        }
    ]
}