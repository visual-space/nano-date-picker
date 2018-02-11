/** Generates date pickers */
class DatePicker extends HTMLElement {

    currentDate: number

    constructor( value: number ) {
        super()
        console.log('Construct DatePicker')
        this.currentDate = value
    }

}

// Component
require('./nano-date-picker.scss')
window.customElements.define('nano-date-picker', DatePicker)