import Header from './templates/header.js'
import Tabs from './templates/tabs.js'
import Gallery from './templates/gallery.js'
import './main.scss'

window.addEventListener('load', () => {
    let mountpoint = 
    new Header(document.querySelector('#header'), "felixpaulniemeyer")
    new Tabs(document.querySelector('#content'), {
        "gallery": new Gallery(), 
        "test": new Gallery()
    })
})