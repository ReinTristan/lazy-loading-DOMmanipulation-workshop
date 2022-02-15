class ImageLogs {
    loadedImages
    appendedImages 
    instance
    constructor() {
        if(this.instance) return this.instance
        this.appendedImages = 0
        this.loadedImages = 0
    }
    static getInstance() {
        return this.instance ? this.instance : this.instance = new ImageLogs()
    }
    printLog() {
        console.log(`⚪ Se han agregado ${this.appendedImages} imágenes`);
        console.log(`🟣 Se han cargado ${this.loadedImages} imágenes`);
        console.log("---------------------------------------");
    }
    plusAppended() {
        this.appendedImages++
    }
    plusLoaded() {
        this.loadedImages++
    }
}
export default ImageLogs