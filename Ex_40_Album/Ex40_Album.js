function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Eminem,", "Recovery");
var album2 = make_album("Imagine Dragon", "Evolve", 12);
var album3 = make_album("Skillet", "Awake");
console.log(album1);
console.log(album2);
console.log(album3);
