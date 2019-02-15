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
         <div class="col-md-3 pt-3">
            <div class="card">
                <img class="card-img-top" src="${this.albumArt}" alt="Card image cap">
            
                <div class="card-body text-center">
                    <h4 class="card-title">${this.title}</h4>
                    <h5 class="card-title ">${this.artist}</h5>
                    <h6 class="card-title song-album">${this.collection}</h6>
                    <audio controls>
                        <source src="${this.preview}" type="audio/ogg">
                        <source src="${this.preview}" type="audio/mpeg">
                    </audio>
                    <div class="d-flex flex-row justify-content-between">
                    <a href="#!" class="btn purchase-btn d-flex justify-content-center align-items-center">Purchase</a>
                    <h4 class="card-title">${this.price}</h4>
                    </div>                    
                </div>
            </div>
        </div>
        `
    }
}