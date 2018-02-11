// Debug
let Debug = require('debug'), debug = Debug ? Debug('ndp:DatePicker') : () => {}
debug('Instantiate DatePicker')
;(window as any).debug = require('debug')

/** Generates date pickers */
class DatePicker extends HTMLElement {

    currentDate: number

    constructor( value: number ) {
        super()
        debug('Construct DatePicker')
        this.currentDate = value

        // Init
        this.render()
    }

    render () {
        debug('Render DatePicker')
    }

}

// Component
require('./nano-date-picker.scss')
window.customElements.define('nano-date-picker', DatePicker)