// Debug
let Debug = require('debug'), debug = Debug ? Debug('ndp:DatePicker') : () => {}
debug('Instantiate DatePicker')
;(window as any).debug = require('debug')

/** Generates date pickers */
class DatePicker extends HTMLElement {

    today: Date = new Date()
    currentDate: Date = new Date()
    prevBtn: HTMLElement
    nextBtn: HTMLElement

    constructor() {
        super()
        debug('Construct DatePicker')
    }

    connectedCallback() {
        debug('Connect DatePicker')
        this.render()
    }

    render () {
        // debug('Render DatePicker') // Verbose

        this.innerHTML = `
            <div class="actions">
                <div class="prev action">🡰</div>
                <div class="current date">${this.getCurrentDate()}</div>
                <div class="next action">🡲</div>
            </div>
            <div class="week header">
                ${this.renderHeader()}
            </div>
            <div class="month days">
                ${this.renderDaysOfMonth()}
            </div>
        `

        this.prevBtn = this.querySelector('.prev.action')
        this.nextBtn = this.querySelector('.next.action')

        this.prevBtn.addEventListener('click', () => this.setPrevMonth())
        this.nextBtn.addEventListener('click', () => this.setNextMonth())

    }

    /** Format date to yyyy/mm/dd */
    getCurrentDate(): string {
        let formatedDate: string = '',
            date = this.currentDate

        formatedDate += `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`

        // debug('Get current date', date) // Verbose
        return formatedDate
    }

    setPrevMonth() {
        let d = this.currentDate

        d.setMonth(d.getMonth() - 1)
        this.render()

        debug('Set previous month', this.getCurrentDate())
    }

    setNextMonth() {
        let date = this.currentDate

        date.setMonth(date.getMonth() + 1)
        this.render()

        debug('Set next month', this.getCurrentDate())
    }

    /** I18n ready */
    renderHeader(): string {
        // debug('Render header') // Verbose
        let header: string = '',
            dayNames: string[] = ['M', 'T', 'W', 'T', 'F', 'S', 'S'] // En
        
        dayNames.forEach( day => header += `<div class="day">${day}</div>` )
        
        return header
    }

    renderDaysOfMonth(): string {
        // debug('Render header') // Verbose
        let header: string = '',
            days: number[] = [],
            date = new Date(this.currentDate.getTime()),
            month: number = date.getMonth()

        // Reset clonde date to first day of month
        date.setDate(1)

        while (date.getMonth() === month) {
            days.push(date.getDate());
            date.setDate(date.getDate() + 1);
        }
        
        days.forEach( day => header += `<div class="day">${day}</div>` )
        console.log(days)
        
        return header
    }


}

// Component
require('./nano-date-picker.scss')
window.customElements.define('nano-date-picker', DatePicker)