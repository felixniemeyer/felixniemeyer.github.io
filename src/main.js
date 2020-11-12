import Header from './templates/header.js'
import './main.scss'

window.addEventListener('load', () => {
    let mountpoint = document.querySelector('#mountpoint')
    new Header(mountpoint, "felixpaulniemeyer")
})