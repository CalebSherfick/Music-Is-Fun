export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    getTemplate() {
        return `
         <div class="col-md-2">
            <div class="card">
                <img class="card-img-top" src="${this.albumArt}" alt="Card image cap">
                <div class="card-body">
                    <h3 class="card-title">${this.title}</h3>
                    <h4 class="card-title">${this.artist}</h4>
                    <h4 class="card-title">${this.price}</h4>
                    <audio controls>
                    <source src="${this.preview}" type="audio/ogg">
                    <source src="${this.preview}" type="audio/mpeg">
                </div>
            </div>
        </div>
        `
    }
}