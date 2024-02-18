function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}


let album1 = make_album("Eminem,", "Recovery");
let album2 = make_album("Imagine Dragon", "Evolve", 12);
let album3 = make_album("Skillet", "Awake");

console.log(album1);
console.log(album2);
console.log(album3);
