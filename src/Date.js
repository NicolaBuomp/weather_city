const date = new Date()
const day = date.getDay()
const month = date.getMonth()
const weekDays = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato']
const currentMonth = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

export {date, day, month, weekDays, currentMonth, time}