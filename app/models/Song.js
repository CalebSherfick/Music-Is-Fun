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
            <a onclick="app.controllers.itunesCtrl.playSong('${this.preview}')">
                <img class="card-img-top album-art" src="${this.albumArt}" alt="Card image cap">
                </a>
                <div class="card-body text-center">
                    <h3 class="card-title">${this.title}</h3>
                    <h5 class="card-title ">${this.artist}</h5>
                    <h6 class="card-title song-album">${this.collection}</h6>
                    
                    <div class="d-flex flex-row justify-content-between button-row">
                        <a href="#!" class="btn purchase-btn d-flex justify-content-center align-items-center">Buy  (Coming Soon)</a>
                        <h4 class="card-title">${this.price}</h4>
                    </div>                    
                </div>
            </div>
        </div>
        `
    }
}