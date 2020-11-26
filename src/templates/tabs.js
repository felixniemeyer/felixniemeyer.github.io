import {html, render} from 'lit-html'
import './tabs.scss'

const template = (tabNames, selectTab) => html`<div class="tabs"> 
    ${tabNames.map(tabName => html`
        <span 
            class="tab-button"
            @click="${() => selectTab(tabName)}">${tabName}</span>
    `)}
    </div>
    <div class="tab-content">
    </div>
` 

class Tabs {
    constructor(mountpoint, tabs) {
        this.mountpoint = mountpoint
        this.tabs = tabs
        this.render() 
        this.selectTab(Object.keys(this.tabs)[0])
    }
    render() {
        let t = template(
            Object.keys(this.tabs),
            this.selectTab.bind(this)
        )
        render(t, this.mountpoint)
    }
    selectTab(tabName) {
        let mp = this.mountpoint.querySelector(".tab-content")
        this.tabs[tabName].setMountpointAndRender(mp)
    }
}
    
export default Tabs 