import {html, render} from 'lit-html'
import './header.scss'

const template = (text) => html`<h1 class="header"> ${text} </h1>`
class Header {
    constructor(mountpoint, text) {
        this.mountpoint = mountpoint
        this.text = text
        this.render() 
        this.interval = setInterval(this.carousel.bind(this), 300)
    }
    render() {
        render(template(this.text), this.mountpoint)
    }
    carousel() {
        this.text = this.text.slice(1) + this.text[0]
        this.render()
    }
}
    
export default Header