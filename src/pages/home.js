const html = require('choo/html')
const store = require('../store')

module.exports = (state, emit) => {
    return html`
<div>
    <h1>Deneme</h1>
    <a href="/logout">Çıkış</a>
</div>
  `
}