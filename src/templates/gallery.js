import {html, render} from 'lit-html'
import './gallery.scss'

const template = () => html`<div class="gallery"> this is the gallery! </div>`

class Gallery {
    constructor(mountpoint, imgList) {
    }
    setMountpointAndRender(mp) {
        this.mountpoint = mp
        this.render()
    }
    render() {
        render(template(), this.mountpoint)
    }
}
    
export default Gallery 